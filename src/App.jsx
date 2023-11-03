//Dependency Imports
import React from "react";
import { useEffect, useState } from "react";
import apiKey from "./config.js"
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import './index.css'

//Component Imports
import PhotoList from "./components/PhotoList.jsx";
import Search from './components/Search';
import Nav from './components/Nav';

//App Component

function App() {
  const [query, setQuery] = useState('cars')
  const fetchData = (query) => {
    setQuery(query);
  }
  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  }, [query]);

  return (
    <div className='container'>
      <Search />
      <Nav />
      <Routes>
        <Route path='/' />
        <Route path='/cats' element={<PhotoList />} />
        <Route path='/dogs' element={<PhotoList />} />
        <Route path='/computers' element={<PhotoList />} />
        <Route path='/search/:query' element={<PhotoList />} />
      </Routes>
    </div>
  );

}

export default App
