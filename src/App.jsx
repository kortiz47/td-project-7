//Dependency Imports
import { useState, useEffect } from "react";
import apiKey from "./config.js"
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import './index.css'

//Component Imports
import PhotoList from "./components/PhotoList.jsx";
import Search from './components/Search.jsx';
import Nav from './components/Nav.jsx';

//App Component

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('rainbows');
  useEffect(()=>fetchData(query), [query]);

  const fetchData = (query) =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => setData(response.data.photos.photo))
    .catch(error => console.log(error));
  }
  
  return (
    <div className='container'>
      <Search />
      <Nav />
      <Routes>
        <Route path='/' element={<PhotoList />}/>
        <Route path='/cats' element={<PhotoList />} />
        <Route path='/dogs' element={<PhotoList />} />
        <Route path='/computers' element={<PhotoList />} />
        <Route path='/search/:query' element={<PhotoList />} />
      </Routes>
    </div>
  );

}

export default App