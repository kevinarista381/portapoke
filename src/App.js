import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';
import Mainmenu from './components/Mainmenu';


export const bgContext = React.createContext(); 


function App() {

  const [imgid, setimgid] = useState(0)
  
  useEffect(() => {
  
    getbg()
    
    }, [])
    
    const getbg= () =>{
     var hour = new Date().getHours()
     console.log(hour)
     if (hour > 18 || hour < 5) {
        setimgid(2) 
        return
    }
    if (hour > 16) {
        setimgid(1) 
        return
    }
    setimgid(0)
    
    }

    
 


  return (
<BrowserRouter>
<div className="App">
 

<bgContext.Provider value={imgid}>
  <Routes>
  <Route path="/" element = {<Mainmenu/>}/> 
  <Route path="/pokemonlist" element = {<PokemonList />}/> 
   <Route path="/pokemondetail/:pokeid" element = {<PokemonDetail/>}/>
   <Route path="/mypokemon" element = {<MyPokemonList />}/> 
  </Routes>
</bgContext.Provider>

    </div>


 </BrowserRouter>

  );
}

export default App;
