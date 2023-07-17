import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Nutrition from './pages/Nutrition';
import Foods from './pages/Foods';
import AddFoodItem from './pages/AddFoodItem';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nutrition' element={<Nutrition />} />
          <Route path='/nutrition/foods' element={<Foods />} />
          <Route path='nutrition/foods/add' element={<AddFoodItem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
