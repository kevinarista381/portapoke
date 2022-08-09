import React from 'react'
import { useState, useEffect, useContext} from 'react'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import detailtitle from '../img/pokedetail.png'
import { bgContext} from '../App'
import BattlePage from './BattlePage'
import PokedexPage from './PokedexPage'
import { useNavigate } from 'react-router-dom';

const PokemonDetail = () => {
  const {pokeid} = useParams()
  

  const [pokename, setpokename] = useState('')
  const [poketype, setpoketype] = useState([])
  const [pokeimg, setpokeimg] = useState('')
  const [pageid, setpageid] = useState(0)
  const [dexdata, setdexdata] = useState({})
  const [namearr, setnamearr] = useState([])
  const [genusarr, setgenusarr] = useState([])
  const [statarr, setstatarr] = useState([])
  const navi = useNavigate();


  
  

  useEffect(() => {
    loaddata()
    window.scrollTo({ top: 0, behavior: 'smooth' });
 

  }, [])

  const imgid = useContext(bgContext)



  const handlepoke = () =>{
    navi('/pokemonlist')
  }
 

  const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

  const loaddata = async () =>{
    const res = await axios({method: 'get', url: `https://pokeapi.co/api/v2/pokemon/${pokeid}`, headers: {"Access-Control-Allow-Origin": "*"} })
    const dexres = await axios({method: 'get', url: `${res.data.species.url}`, headers: {"Access-Control-Allow-Origin": "*"} })
    const {name, types, sprites, stats} = res.data 

    
    setdexdata(dexres.data)
    setpokename(cap(name))
    setpokeimg(sprites.front_default)

        types.forEach((type, i) => {
         poketype[i] = cap(type.type.name)  
      });

        stats.forEach((stat, i) => {
         statarr[i] = stat.base_stat  
      });
        
      

const x= dexres.data.names

      x.forEach((n, i) => {
        namearr[i] = n.name  
     });

const y= dexres.data.genera

      y.forEach((g, i) => {
        genusarr[i] = g.genus  
     });

      

      console.log(dexres.data)

   

  }
  

  return (
  <div>
     <div className='backpokemonbtn'>  
       <button className='backpoke' onClick={handlepoke}></button>
       </div>

        <div className='detailtitle'>
            <img src={detailtitle}/>
        </div>

    <div className='detailbg'>
          {
      {
       '0' : <img src={bgday} className="titleimg"/>  ,
       '1' : <img src={bgtwilight} className="titleimg"/>,
       '2' : <img src={bgnight} className="titleimg"/>,
      }[imgid]
      } 

      

 

    <div className='tabs'>
      <input type='radio' class='tabs-radio tabs-default' name='tabs-detail' id='tab1' onClick={() =>setpageid(0)} checked= {pageid === 0}  />
      <label for='tab1' class='tabs-label'><h3>Pokedex</h3></label>

      <input type='radio' class='tabs-radio' name='tabs-detail' onClick={() =>setpageid(1)} id='tab2'/>
      <label for='tab2' class='tabs-label'><h3>Battle</h3></label>
    </div>

{
      {
       '0' : <PokedexPage pokename= {pokename} poketype= {poketype} pokeimg = {pokeimg} dexdata = {dexdata} namearr={namearr} genusarr={genusarr} statarr= {statarr}/> ,
       '1' : <BattlePage pokeid={pokeid} imgid ={imgid} pokeimg = {pokeimg} pokename = {pokename} dexdata = {dexdata} />,
      }[pageid]
} 


  




    </div>

   </div> 
  )
}

export default PokemonDetail