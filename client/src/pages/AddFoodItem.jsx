import NavBarFoodAddItem from '../components/NavBarFoodAddItem';

const AddFoodItem = () => {
  return (
    <>
      <NavBarFoodAddItem />
      <div className='add-food-item-container'>
        <h3>Salted Caramel Protein Shake</h3>
      </div>
      <div className='add-food-item-total'>
        <div className='add-food-item-total-left'>
          <h4>Calories</h4>
          <h4>Protein</h4>
          <h4>Carbs</h4>
          <h4>Fat</h4>
        </div>
        <div className='add-food-item-total-right'>
          <h4>157</h4>
          <h4>20g</h4>
          <h4>16.1g</h4>
          <h4>1.4g</h4>
        </div>
      </div>
    </>
  );
};
export default AddFoodItem;
