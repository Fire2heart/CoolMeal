import './App.css';
import Header from './Components/Header.tsx';
import Footer from './Components/Footer';
import ProductCart from './Components/ProductCart';
import Search from './Components/Search.tsx';
import SyncSlider from './Components/SyncSlider.tsx'
import Menu from './Components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      {/* <SyncSlider />
      <SyncSlider />
      <ProductCart />
      <ProductCart />
      <ProductCart /> */}
      <Menu />
      <Footer />
    </div>
  );
}

export default App;