import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const NavBarFood = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    console.log('goBack');
  };

  const addFood = () => {
    // console.log(window.location.pathname);
    const currentPath = window.location.pathname;

    if (currentPath === '/nutrition') {
      navigate('./foods');
    } else if (currentPath === '/nutrition/foods') {
      navigate('./add');
    }
  };

  return (
    <div className='navbar-container'>
      <button className='menu-icon' onClick={goBack}>
        <ArrowBackIcon />
      </button>
      <div className='navbar-logo'>
        WebDev
        <br />
        Health & Fitness
      </div>
      <button className='login-icon' onClick={addFood}>
        <AddCircleOutlineIcon />
      </button>
    </div>
  );
};

export default NavBarFood;
