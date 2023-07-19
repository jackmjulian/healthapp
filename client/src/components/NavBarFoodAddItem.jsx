import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router-dom';

const NavBarFood = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    console.log('goBack');
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
      <div className='login-icon'>
        <DoneIcon />
      </div>
    </div>
  );
};

export default NavBarFood;
