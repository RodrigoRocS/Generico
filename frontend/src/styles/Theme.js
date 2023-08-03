import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: '#0052cc',
    // },
    // secondary: {
    //   main: '#edf2ff',
    // },
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
    // primary: {
    //   main: '#0052cc',
    // },
    // secondary: {
    //   main: '#edf2ff',
    // },
  },
  typography: {
    h1: {
      fontSize: '2.8rem',
      fontWeight: 400,
    },
  },
});

export { lightTheme, darkTheme };
