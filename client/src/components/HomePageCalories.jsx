import FlagIcon from '@mui/icons-material/Flag';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const HomePageCalories = () => {
  return (
    <div className='daily-calories-container'>
      <h2>Daily Calories</h2>
      <div className='calories-container'>
        <div className='calories-container-left'>
          <h2>
            2,000 <br />
            Remaining
          </h2>
        </div>
        <div className='calories-container-right'>
          <div>
            <FlagIcon style={{ color: 'purple' }} /> Goal: 2,000
          </div>
          <div>
            <RestaurantIcon style={{ color: 'blue' }} /> Consumed: 1, 200
          </div>
          <div>
            <LocalFireDepartmentIcon style={{ color: 'orange' }} /> Burnt: 850
          </div>
        </div>
      </div>
      <p>Remaining = Goal - Food</p>
    </div>
  );
};
export default HomePageCalories;
