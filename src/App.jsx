//Styling
import "./index.css"

//Dependency Imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import apiKey from "./config.js"
import axios from "axios";


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
        <Route path='/' element={<PhotoList photos={data} title="Rainbow Pics"/>}/>
        <Route path='/cats' element={<PhotoList photos={data} title="Cat Pics"/>} />
        <Route path='/dogs' element={<PhotoList photos={data} title="Dog Pics" />} />
        <Route path='/computers' element={<PhotoList photos={data} title="Computer Pics" />} />
        <Route path='/search/:query' element={<PhotoList />} />
      </Routes>
    </div>
  );

}

export default App