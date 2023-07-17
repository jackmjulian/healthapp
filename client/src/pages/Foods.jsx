import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NavBarFood from '../components/NavBarFood';

const Foods = () => {
  return (
    <>
      <NavBarFood />
      <div className='food-container'>
        <div className='search-container'>
          <SearchIcon />
          <input
            className='search-bar'
            type='search'
            placeholder='Search Foods...'
          ></input>
        </div>
        <ul className='food-list'>
          <li>Salted Caramel Protein Shake</li>
          <li className='food-list-right'>
            <AddCircleOutlineIcon className='addIcon' />
          </li>
        </ul>
        <ul className='food-list'>
          <li>Grenade Oreo Bar</li>
          <li className='food-list-right'>
            <AddCircleOutlineIcon className='addIcon' />
          </li>
        </ul>
        <ul className='food-list'>
          <li>Grenade Oreo Bar</li>
          <li className='food-list-right'>
            <AddCircleOutlineIcon className='addIcon' />
          </li>
        </ul>
        <ul className='food-list'>
          <li>Grenade Oreo Bar</li>
          <li className='food-list-right'>
            <AddCircleOutlineIcon className='addIcon' />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Foods;
