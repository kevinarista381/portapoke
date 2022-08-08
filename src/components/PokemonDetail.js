import React from 'react'
import { useState, useEffect, useContext} from 'react'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Poketext from './Poketext'
import { bgContext} from '../App'

const PokemonDetail = () => {
  const {pokeid} = useParams()
  

  const [pokename, setpokename] = useState('')
  const [poketype, setpoketype] = useState([])
  const [pokeimg, setpokeimg] = useState('')
  const [gamestatus, setgamestatus] = useState(0)
  
  

  useEffect(() => {
    loaddata()
 

  }, [])

  const imgid = useContext(bgContext)



  const handleCapture = () =>{
  
    let rng = Math.floor(Math.random() * 2)
    console.log(rng)
    switch(rng){
      case 1 : {
        setgamestatus(3)
        if (localStorage.getItem("party") === null){
          localStorage.setItem("party", JSON.stringify([]))
        }
       var currparty = JSON.parse(localStorage.getItem("party"))
       var newparty = currparty.concat({name: pokename, dexnum : pokeid})
      console.log(newparty)
       localStorage.setItem("party", JSON.stringify(newparty))
      
      }
      break;
      case 0 : {
        setgamestatus(2) 
      }



    }
    


  }

  const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const loaddata = async () =>{
    const res = await axios({method: 'get', url: `https://pokeapi.co/api/v2/pokemon/${pokeid}`, headers: {"Access-Control-Allow-Origin": "*"} })
    const {name, types, sprites} = res.data 
    setpokename(cap(name))
    setpokeimg(sprites.front_default)
        types.forEach((type, i) => {
         poketype[i] = cap(type.type.name)  
      });
    console.log(res.data)

  }
  

  return (

    <div className='detailbg'>
          {
      {
       '0' : <img src={bgday} className="titleimg"/>  ,
       '1' : <img src={bgtwilight} className="titleimg"/>,
       '2' : <img src={bgnight} className="titleimg"/>,
      }[imgid]
      } 

 

    <div className='tabs'>
      <input type='radio' class='tabs-radio' name='tabs-detail' id='tab1' checked/>
      <label for='tab1' class='tabs-label'><h3>Pokedex</h3></label>

      <input type='radio' class='tabs-radio' name='tabs-detail' id='tab2'/>
      <label for='tab2' class='tabs-label'><h3>Battle</h3></label>
    </div>




    <div>#{pokeid} {pokename} </div>
    <div>Type: {poketype[0]} 
  
    {
      (poketype.length > 1) ?
      `/${poketype[1]}`
      :
      null
    } 
    </div>


{
       {
        '0' : <div className='battleday'></div>  ,
        '1' : <div className='battletwi'></div> ,
        '2' : <div className='battlenight'></div> ,
       }[imgid]
       } 

  <div className='pokesprite'> <img src={pokeimg}/></div>


    <div className='poketext'>
    <Poketext status= {gamestatus} name= {pokename}/>
    </div>

    <div>
      <button onClick={() =>handleCapture()}>Capture</button>
    </div>




    </div>

    
  )
}

export default PokemonDetail