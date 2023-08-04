import { FC } from 'react';
import Router from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import FavoritesContextProvider from '@/context/FavoritesContext';
import NotesProvider from './context/NotesContext';
import theme from '@/theme';

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <FavoritesContextProvider>
      <NotesProvider>
        <Router />
      </NotesProvider>
    </FavoritesContextProvider>
  </ChakraProvider>
);

export default App;
