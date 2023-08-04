import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    black: {
      100: '#232524',
      200: '#212423',
      300: '#000408',
    },
    gray: {
      100: '#a2a2a2',
      200: '#D9D9D9',
    },
    red: {
      100: '#ff6871',
    },
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'black.300',
        color: '#fff',
      },
    },
  },
});

export default theme;
