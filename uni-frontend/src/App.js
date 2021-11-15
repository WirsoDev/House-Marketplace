import './App.css';
import Header from './components/Header'
import Filter from './components/Filter'
import Cardlist from './components/Cardlist';
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';
import Cardloading from './components/Cardloading'

function App() {

  const [title, setTitle] = useState('Hello World')
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {
    fetch("http://localhost:3000/all")
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          setProperties(result);
          setIsLoading(true)
        },
        (error) => {
          //setIsLoaded(true);
          console.log(error);
        }
      )
      console.log(properties)
  }, [])


  const titlehandler = (e) => {
    console.log(e.target.className)
    if (e.target.className === "modal") {
      setTitle('Hello World')
      return
    }
    setTitle('Add New Propertie')
    console.log(properties.properties)
  }

  return (
    <div className="App">
      <Header title={title} />
      <Filter titlehandler={titlehandler} />
      {isLoading?<Cardlist data={properties.properties}/>: <Cardloading/> }
      <div className="back"></div>
    </div>
  );
}

export default App;
