import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    h1: {
      fontSize: '2.8rem',
      fontWeight: 400,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: {
      fontSize: '2.8rem',
      fontWeight: 400,
    },
  },
});

export { lightTheme, darkTheme };
