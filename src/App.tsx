import { FC } from 'react';
import Router from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import FavoritesContextProvider from '@/context/Favorites';
import theme from '@/theme';

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <FavoritesContextProvider>
      <Router />
    </FavoritesContextProvider>
  </ChakraProvider>
);

export default App;
