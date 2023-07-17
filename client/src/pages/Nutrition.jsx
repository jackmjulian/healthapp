import Footer from '../components/Footer';
import NavBarFood from '../components/NavBarFood';

const Nutrition = () => {
  return (
    <>
      <NavBarFood />
      <div className='nutrition-header-container'>
        <h3>Calories Remaining</h3>
        <ul className='nutriton-header-list'>
          <li>
            2,000
            <br />
            Goal
          </li>
          -
          <li>
            1,000
            <br />
            Food
          </li>
          +
          <li>
            800
            <br />
            Burnt
          </li>
          =
          <li>
            1800
            <br />
            Remaining
          </li>
        </ul>
      </div>
      <div className='meals-container'>
        <table className='nutrition-table'>
          <thead>
            <tr>
              <th>Breakfast</th>
              <th className='rightColumn'>300</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eggs</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td>Toast</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td className='addFood'>ADD FOOD</td>
              <td className='rightColumn'>...</td>
            </tr>
          </tbody>
        </table>
        <table className='nutrition-table'>
          <thead>
            <tr>
              <th>Lunch</th>
              <th className='rightColumn'>300</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eggs</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td>Toast</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td className='addFood'>ADD FOOD</td>
              <td className='rightColumn'>...</td>
            </tr>
          </tbody>
        </table>
        <table className='nutrition-table'>
          <thead>
            <tr>
              <th>Dinner</th>
              <th className='rightColumn'>300</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eggs</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td>Toast</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td className='addFood'>ADD FOOD</td>
              <td className='rightColumn'>...</td>
            </tr>
          </tbody>
        </table>
        <table className='nutrition-table'>
          <thead>
            <tr>
              <th>Snacks</th>
              <th className='rightColumn'>300</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Eggs</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td>Toast</td>
              <td className='rightColumn'>100</td>
            </tr>
            <tr>
              <td className='addFood'>ADD FOOD</td>
              <td className='rightColumn'>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};
export default Nutrition;
