import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <div className='menu-icon'>
        <MenuIcon />
      </div>
      <div className='navbar-logo'>
        WebDev
        <br />
        Health & Fitness
      </div>
      <div className='login-icon'>
        <LoginIcon />
      </div>
    </div>
  );
};

export default NavBar;
