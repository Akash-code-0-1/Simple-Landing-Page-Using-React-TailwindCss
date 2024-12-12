import './index.css';
import Navbar from './components/Navbar';
import HeaderSection from './components/HeaderSection';
import Products from './components/CasualProducts';
import FooterSection from './components/FooterSection';
function App() {
  return (
    <div className="App bg-white">
      <Navbar/>
      <HeaderSection/>
      <Products/>
      <FooterSection/>
    </div>
  );
}

export default App;
