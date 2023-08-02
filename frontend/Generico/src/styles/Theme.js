import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
  typography: {
    h1: {
      fontSize: '2.8rem',
      fontWeight: 400,
    }
  }
});

export default theme;