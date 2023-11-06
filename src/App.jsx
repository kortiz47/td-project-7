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
import Loading from "./components/Loading.jsx";

//App Component
function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    let activeFetch = true;
    if (activeFetch) {
      if (pathname === '/') {
        fetchData('rain')
        setLoading(false)
      } else if (pathname === '/cats') {
        fetchData('cat')
        setLoading(false)
      } else if (pathname === '/dogs') {
        fetchData('dog')
        setLoading(false)
      } else if (pathname === '/birds') {
        fetchData('birds')
        setLoading(false)
      } else {
        fetchData(query)
        setLoading(false)
      }
    }
    return () => { activeFetch = false }

  }, [pathname, query])


  const fetchData = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => setData(response.data.photos.photo))
      .catch(error => console.log(error));
  }

  const handleChangeQuery = (query) => {
    setQuery(query);
  }

  return (
    <div className='container'>
      <Search changeQuery={handleChangeQuery} />
      <Nav />
      {(loading)
        ?
        <Loading />
        :
        <Routes>
          <Route path='/' element={<PhotoList photos={data} title="Rain Pics" />} />
          <Route path='cats' element={<PhotoList photos={data} title="Cat Pics" />} />
          <Route path='dogs' element={<PhotoList photos={data} title="Dog Pics" />} />
          <Route path='birds' element={<PhotoList photos={data} title="Bird Pics" />} />
          <Route path='search/:query' element={<PhotoList photos={data} title={`${query} Pics`} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      }
    </div>
  );
}


export default App;