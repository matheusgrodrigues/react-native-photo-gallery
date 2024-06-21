import { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, FlatList, Image, View } from "react-native";

const BASE_URL = `https://picsum.photos/v2`;

interface PhotoSchema {
   download_url: string;
   author: string;
   height: number;
   width: number;
   url: string;
   id: string;
}

const getPhotos = async (page = 1): Promise<PhotoSchema[]> => {
   const response = await fetch(`${BASE_URL}/list?page=${page}`);
   const result = await response.json();

   return result;
};

interface formatPhotoUriProps {
   height: number;
   width: number;
   id: string;
}

const formatPhotoUri: ({ height, width, id }: formatPhotoUriProps) => string = ({ height, width, id }) =>
   `https://picsum.photos/id/${id}/${Math.floor(width)}/${Math.floor(height)}`;

interface PhotoGridProps {
   onEndReached: (info: { distanceFromEnd: number }) => void;
   numColumns: number;
   photos: PhotoSchema[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ onEndReached, numColumns, photos }) => {
   const { width } = Dimensions.get("window");

   const size = width / numColumns;

   return (
      <FlatList
         onEndReached={onEndReached}
         keyExtractor={(item) => item.id}
         numColumns={numColumns}
         renderItem={({ item }) => (
            <Image
               source={{
                  height: size,
                  width: size,
                  uri: formatPhotoUri({
                     height: size,
                     width: size,
                     id: item.id,
                  }),
               }}
            />
         )}
         data={photos}
      />
   );
};

export default function Index() {
   const [loading, setLoading] = useState(false);
   const [photos, setPhotos] = useState<PhotoSchema[]>([]);

   useEffect(() => {
      const loadPhotos = async () => {
         setLoading(true);

         const result = await getPhotos();

         setLoading(false);

         if (result.length > 0) {
            setPhotos(result);
         }
      };

      loadPhotos();
   }, []);

   return (
      <View
         style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
         }}
      >
         {loading ? (
            <ActivityIndicator animating />
         ) : (
            <PhotoGrid onEndReached={() => getPhotos()} numColumns={3} photos={photos} />
         )}
      </View>
   );
}
