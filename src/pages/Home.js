import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import StoreList from '../components/StoreList';
import '../styles/home.css';

const Home = () => {
  return (
  <>
    <NavBar/>
    <Banner/>
    <Filter/>
    <StoreList/>
  </>
  );
}

export default Home;