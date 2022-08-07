import React from 'react'
import { useEffect,useState } from 'react'
import PokeItem from './PokeItem'
import axios from 'axios'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import {  useContext } from 'react';
import { bgContext } from '../App';



const PokemonList = (props)=> {
    
 const imgid = useContext(bgContext)
    const [pokes, setpokes] = useState([])
    const [nav, setnav] = useState({nextURL: '', prevURL: ''})
    const [page, setpage] = useState(0)
    const [fromtill, setfromtill] = useState({from: 0 , till: 0})
    
    useEffect(() => {
    loadinit()

}, [])

const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const getdexnum = (str) => {
    return str.split('pokemon/').pop().split('/')[0]
  }

    const present = (res) =>{
        const items = res.data.results
        setnav({nextURL: res.data.next, prevURL: res.data.previous})    
        items.forEach((item, i) => {
         pokes[i] = {name: cap(item.name), url : item.url}     
      });

      setfromtill({from: getdexnum(pokes[0].url) , till: getdexnum(pokes[pokes.length -1].url) })


    }
    

    const loadinit = async () =>{
       const res = await axios({method: 'get', url: 'https://pokeapi.co/api/v2/pokemon', headers: {"Access-Control-Allow-Origin": "*"} }) 
       present (res)
           
    }

    const loadnext = async () =>{
        const p = page +1
        const u = nav.nextURL  
        const res = await axios({method: 'get', url: u, headers: {"Access-Control-Allow-Origin": "*"} })
        present(res)
        setpage(p)
      
       
     }

     const loadprev = async () =>{
        const p = page -1
        const u = nav.prevURL 
        const res = await axios({method: 'get', url: u, headers: {"Access-Control-Allow-Origin": "*"} })
        present(res)
        setpage(p)
      
       
     }

  


    



  return (
    <div>
      {
       {
        '0' : <img src={bgday} className="titleimg"/>  ,
        '1' : <img src={bgtwilight} className="titleimg"/>,
        '2' : <img src={bgnight} className="titleimg"/>,
       }[imgid]

} 
        <div className='listtitle'>List of Pokemon</div>



    
<div className='listbg'>
   

        <div className= "cards col">
        <div className='showing'><h2>Showing No. {fromtill.from} - {fromtill.till}</h2></div>
        <div className="cardparent row">
        
                            
                {
                    pokes.map(
                        (poke, index) => <PokeItem name ={poke.name} url = {poke.url} dexnum = {getdexnum(poke.url)} key= {index}/>
                    )
                }

            </div>
        </div>
            
               
         
     

        <div>
            
            <button disabled={nav.prevURL === null} onClick={loadprev}>Previous</button>
        </div>

        <div>
            <button onClick={loadnext}>Next</button>
        </div>
    </div>


    </div>
  )
}

export default PokemonList