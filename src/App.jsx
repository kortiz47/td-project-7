import apiKey from "./config.js"
import './index.css'

//Component Imports
import PhotoList from "./components/PhotoList.jsx";

function App() {

  return (
    <>
      <PhotoList />
      <h1>{apiKey}</h1>
    </>
    
    
  );
    
}

export default App
