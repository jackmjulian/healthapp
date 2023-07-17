import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

const NavBarFood = () => {
  return (
    <div className='navbar-container'>
      <div className='menu-icon'>
        <ArrowBackIcon />
      </div>
      <div className='navbar-logo'>
        WebDev
        <br />
        Health & Fitness
      </div>
      <div className='login-icon'>
        <DoneIcon />
      </div>
    </div>
  );
};

export default NavBarFood;
