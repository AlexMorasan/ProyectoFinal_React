
import { useEffect } from 'react';
import {getProducts} from './firebase';
import NavBar from './components/NavBar';

function App() {

  useEffect(()=>{
    getProducts();
  },[])
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
