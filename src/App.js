import React from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokemonDetail from './components/PokemonDetail';
import MyPokemonList from './components/MyPokemonList';
import Mainmenu from './components/Mainmenu';




function App() {

 


  return (
<BrowserRouter>
<div className="App">
 


  <Routes>
  <Route path="/" element = {<Mainmenu/>}/> 
  <Route path="/pokemonlist" element = {<PokemonList/>}/> 
   <Route path="/pokemondetail/:pokeid" element = {<PokemonDetail/>}/>
   <Route path="/mypokemon" element = {<MyPokemonList/>}/> 
  </Routes>

    </div>


 </BrowserRouter>

  );
}

export default App;
