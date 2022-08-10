import React from 'react'
import { useEffect,useState, useContext } from 'react'
import PokeItem from './PokeItem'
import axios from 'axios'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import pokelist from'../img/pokelist.png'
import { bgContext, pageContext } from '../App';
import { useNavigate } from 'react-router-dom';



const PokemonList = (props)=> {
    
    const imgid = useContext(bgContext)
    const [pokes, setpokes] = useState([])
    const [nav, setnav] = useState({nextURL: '', prevURL: ''})
    const [fromtill, setfromtill] = useState({from: 0 , till: 0})
    const navi = useNavigate();
    const pagectx = useContext(pageContext)
    
    useEffect(() => {
    loadinit()

}, [pagectx.page])

const cap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const handlehome = () =>{
  navi('/')
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
      const pg = pagectx.page*21
       const res = await axios({method: 'get', url: `https://pokeapi.co/api/v2/pokemon?offset=${pg}&limit=21`, headers: {"Access-Control-Allow-Origin": "*"} }) 
       present (res)
           
    }

    const loadnext = async () =>{
      if (nav.nextURL === null || pagectx.page >= 43) return
      pagectx.pagesetter(prevstate => prevstate +1)     
     }

     const loadprev = async () =>{
      if (nav.prevURL === null && pagectx.page <= 0) return
      pagectx.pagesetter(prevstate => Math.abs(prevstate - 1))      
       
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
       
       <div className='homebtn'>  
       <button className='home' onClick={handlehome}></button>
       </div>

        <div className='listtitle'>
            <img src={pokelist}/>
        </div>



    
<div className='listbg'>
   

        <div className= "cards col">
        <div className='navlisttop'>
          
            <button className='prevbtn' disabled={nav.prevURL === null} onClick={loadprev}/>
          
            <div className='showing'><h2>Showing No. {fromtill.from} - {fromtill.till >= 898 ? 898: fromtill.till}</h2></div>

        
            <button className='nextbtn' disabled={nav.nextURL === null  || pagectx.page == 43} onClick={loadnext}/>
         
        </div>
        <div className="cardparent row">
        
                            
                {
                    pokes.map(
                        (poke, index) => {

                         return getdexnum(poke.url) <= 898?
                          <PokeItem name ={poke.name} url = {poke.url} dexnum = {getdexnum(poke.url)} key= {index}/>
                          :
                          null

                         
                        } 

                    )
                }

            </div>
        </div>
            
               
         
     

        <div className='navlistbot'>
            
            <button className='prevbtn' disabled={nav.prevURL === null} onClick={loadprev}/>
            <div className='showing'><h2>Showing No. {fromtill.from} - {fromtill.till >= 898 ? 898: fromtill.till}</h2></div>
            <button className='nextbtn' disabled={nav.nextURL === null  || pagectx.page == 43} onClick={loadnext}/>
            
        </div>

       
    </div>


    </div>
  )
}

export default PokemonList