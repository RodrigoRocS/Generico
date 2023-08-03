import PropTypes from 'prop-types';
import { IconButton, Link } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Header = ({ isDarkMode, onThemeToggle }) => {

  return (
    <header>
      <Link href="/" underline='none'>Home</Link>
      <IconButton onClick={onThemeToggle}>
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </header>
  );
};

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default Header;
