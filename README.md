# Photo Gallery

Aplicativo simples para demonstrar a busca e renderização de uma lista de imagens utilizando `React Native`;

-  [Picsum Photos](https://picsum.photos/)
-  FlatList
-  Image
-  Fetch API
-  TypeScript

## TODO - Possíveis melhorias

-  Use a `PixelRatioAPI` para detectar a densidade de pixels do dispositivo (por exemplo 3,) e buscar imagens de resolução mais alta, se necessário. Devemos também garantir que nossos Imagearquivos estejam alinhados com os pixels, caso contrário as bordas podem parecer borradas ou ter pequenas linhas entre elas.
-  Persista a lista buscada de imagens nas inicializações de aplicativos com AsyncStorage .
-  Use `react-navigation` para adicionar uma tela de "detalhes" que aparece ao tocar em uma foto - a listAPI que estamos usando já retorna alguns metadados de fotos que você pode exibir.
-  Lide com erros com mais elegância. Tente novamente as solicitações com falha algumas vezes e também mostre um componente de erro separado se a primeira página de fotos for carregada, mas a subsequente falhar.
-  Considere uma abordagem mais sofisticada para busca de dados para evitar interações um tanto complexas entre useEffecte useCallback. Isso só ficará mais complexo à medida que nosso aplicativo crescer. Idealmente, poderíamos agrupar nossas chamadas de API com o recurso Suspense do React , por exemplo, usando https://resthooks.io/ .
