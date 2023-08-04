import { FC } from 'react';
import Router from '@/router';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);

export default App;
