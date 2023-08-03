import { AppBar, Toolbar, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" underline="none" color="inherit">
            Minhas redes:
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
