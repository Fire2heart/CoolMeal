import './App.css';
import Header from './Components/Header.tsx';
import Search from './Components/Search.tsx';
import SyncSlider from './Components/SyncSlider.tsx'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
      <SyncSlider />
      <SyncSlider />
    </div>
  );
}

export default App;