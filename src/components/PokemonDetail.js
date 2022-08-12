import React from 'react'
import { useState, useEffect, useContext} from 'react'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import detailtitle from '../img/pokedetail.png'
import { bgContext, pageContext} from '../App'
import BattlePage from './BattlePage'
import PokedexPage from './PokedexPage'


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
  const [abilityarr, setabilityarr] = useState([])
  const navi = useNavigate();
  const pagectx = useContext(pageContext)


  
  

  useEffect(() => {
    loaddata()
    window.scrollTo({ top: 0, behavior: 'smooth' });
 

  }, [])

  const imgid = useContext(bgContext)



  const handlepoke = () =>{
    let pvalue = Math.floor(pokeid / 21) 
    if (pokeid % 21 === 0) pvalue -=1
    pagectx.pagesetter(pvalue)
    navi('/pokemonlist')
  }
 

  const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  

  const loaddata = async () =>{
    const res = await axios({method: 'get', url: `https://pokeapi.co/api/v2/pokemon/${pokeid}`, headers: {"Access-Control-Allow-Origin": "*"} })
    .catch(
      (err) =>{
        navi('/error')
      }
     ) 
    const dexres = await axios({method: 'get', url: `${res.data.species.url}`, headers: {"Access-Control-Allow-Origin": "*"} })
    .catch(
      (err) =>{
        navi('/error')
      }
     ) 
     
    const {name, types, sprites, stats, abilities} = res.data 

    
    setdexdata(dexres.data)
    setpokename(cap(name))
    setpokeimg(sprites.front_default)

        types.forEach((type, i) => {
         poketype[i] = cap(type.type.name)  
      });

        stats.forEach((stat, i) => {
         statarr[i] = stat.base_stat  
      });

      abilities.forEach((abil, i) => {
        abilityarr[i] = cap(abil.ability.name)  
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

      
console.log(abilities)

   

  }
  

  return (
  <div>
     <div className='backpokemonbtn'>  
       <button title='Go to Pokemon List' className='backpoke' onClick={handlepoke}></button>
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
      <input type='radio' className='tabs-radio tabs-default' name='tabs-detail' id='tab1' onClick={() =>setpageid(0)} defaultChecked  />
      <label htmlFor='tab1' className='tabs-label'><h3>Pokedex</h3></label>

      <input type='radio' data-testid='battle-tab' className='tabs-radio' name='tabs-detail' onClick={() =>setpageid(1)} id='tab2'/>
      <label htmlFor='tab2' className='tabs-label'><h3>Battle</h3></label>
    </div>

{
      {
       '0' : <PokedexPage pokename= {pokename} 
       poketype= {poketype} 
       pokeimg = {pokeimg} 
       dexdata = {dexdata} 
       namearr={namearr} 
       genusarr={genusarr} 
       statarr= {statarr} 
       abilityarr ={abilityarr}/> ,
       '1' : <BattlePage pokeid={pokeid} imgid ={imgid} pokeimg = {pokeimg} pokename = {pokename} dexdata = {dexdata} abilityarr ={abilityarr} />,
      }[pageid]
} 


  




    </div>

   </div> 
  )
}

export default PokemonDetail