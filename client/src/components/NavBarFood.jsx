import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
        <AddCircleOutlineIcon />
      </div>
    </div>
  );
};

export default NavBarFood;
