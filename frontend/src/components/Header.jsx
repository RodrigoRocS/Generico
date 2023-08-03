import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useContext } from 'react';
import GeneralContext from '../contexts/GeneralContext';

const Header = () => {

  const { isDarkMode, handleThemeToggle } = useContext(GeneralContext)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" underline="none" color="inherit">
            Home
          </Link>
        </Typography>
        <IconButton color="inherit" onClick={handleThemeToggle}>
          {isDarkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
