import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    black: {
      100: '#232524',
      200: '#000408',
    },
    red: {
      100: '#ff6871',
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'black.200',
        color: '#fff',
      },
    },
  },
});

export default theme;
