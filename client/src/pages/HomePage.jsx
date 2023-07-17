import Footer from '../components/Footer';
import HomePageCalories from '../components/HomePageCalories';
import HomePageMacros from '../components/HomePageMacros';
import NavBar from '../components/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomePageCalories />
      <HomePageMacros />
      <Footer />
    </div>
  );
};
export default HomePage;
