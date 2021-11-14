import './App.css';
import Header from './components/Header'
import Filter from './components/Filter'
import Cardlist from './components/Cardlist';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cardlist />
      <div className="back"></div>
    </div>
  );
}

export default App;
