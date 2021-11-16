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
    // on load get all properties from server
    getAllproperties()
  }, [])


  const getAllproperties = ()=>{
    // on call get all properties from server
    fetch("http://localhost:3000/all")
      .then(res => res.json())
      .then(
        (result) => {
          setProperties(result);
          setIsLoading(true)
        },
        (error) => {
          console.log(error);
        }
      )
  }


  const titlehandler = (e) => {
    if (e.target.className === "modal") {
      setTitle('Hello World')
      return
    }
    setTitle('Add New Propertie')
    console.log(properties.properties)
  }


  const filterHandler = (id) => {
    if(id === 'all'){
      getAllproperties()
      return
    }
    if(id === '1'){
      // little hack to filter on the server
      id = ''
    }
    fetch('http://localhost:3000/byroom', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "qnt":id
      })
    }).then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setProperties(result)
        },
        (error) => {
          console.log(error);
        }
      )
  }


  return (
    <div className="App">
      <Header title={title} />
      <Filter titlehandler={titlehandler} filterHandler={filterHandler} />
      {isLoading ? <Cardlist data={properties.properties} /> : <Cardloading />}
      <div className="back"></div>
    </div>
  );
}

export default App;
