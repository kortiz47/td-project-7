//import apiKey from "./config.js"
import './index.css'
import { Routes, Route } from 'react-router-dom'

//Component Imports
import PhotoList from "./components/PhotoList.jsx";
import Search from './components/Search';
import Nav from './components/Nav';

function App() {

  return (
    <div className='container'>
      <Search />
      <Nav />
      <Routes>
        <Route path='/' />
        <Route path='/cats' element={<PhotoList />} />
        <Route path='/dogs'element={<PhotoList />} />
        <Route path='/computers' element={<PhotoList />} />
        <Route path='/search/:query' element={<PhotoList />} />
      </Routes>
    </div>
  );
    
}

export default App
