import './App.css';
import Header from './components/Header'
import Filter from './components/Filter'
import Cardlist from './components/Cardlist';
import { useState } from 'react/cjs/react.development';

function App() {

  const [title, setTitle] = useState('Hello World')

  return (
    <div className="App">
      <Header title={title}/>
      <Filter />
      <Cardlist />
      <div className="back"></div>
    </div>
  );
}

export default App;
