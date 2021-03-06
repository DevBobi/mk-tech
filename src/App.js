import './App.css';
import AddLayout from './components/AddLayout';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Stats from './components/Stats';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Services/>
      <Stats/>
      <AddLayout/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
