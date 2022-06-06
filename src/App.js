import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Stats from './components/Stats';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Services/>
      <Stats/>
    </div>
  );
}

export default App;
