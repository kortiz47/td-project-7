//Styling
import "./index.css"

//Dependency Imports
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"
import apiKey from "./config.js"
import axios from "axios";


//Component Imports
import PhotoList from "./components/PhotoList.jsx";
import Search from './components/Search.jsx';
import Nav from './components/Nav.jsx';
import NotFound from "./components/NotFound.jsx";

//App Component
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const {pathname} = useLocation();
  
  useEffect(()=>{
    if(pathname === '/'){
      fetchData()
    }else if(pathname === '/cats'){
      fetchData('cat')
    }else if(pathname === '/dogs'){
      fetchData('dog')
    }else if(pathname === '/birds'){
      fetchData('bird')
    }else{
      fetchData(query)
    }
  }, [pathname, query])


  const fetchData = (query = 'rain') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => setData(response.data.photos.photo))
      .catch(error => console.log(error));
  }

  const handleChangeQuery = (query) =>{
    setQuery(query);
  }

  return (
    <div className='container'>
      <Search changeQuery={handleChangeQuery}/>
      <Nav />
      <Routes>
        <Route path='/' element={<PhotoList photos={data} title="Rain Pics" />} />
        <Route path='cats'  element={<PhotoList photos={data} title="Cat Pics" />} />
        <Route path='dogs'  element={<PhotoList photos={data} title="Dog Pics" />} />
        <Route path='birds'  element={<PhotoList photos={data} title="Bird Pics" />} />
        <Route path='search/:query' element={<PhotoList photos={data} title={`${query} Pics`} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;