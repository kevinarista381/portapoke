import React, { useContext, useState } from 'react'
import MyPokeItem from './MyPokeItem'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import pctitle from '../img/pcbox.png'
import { bgContext } from '../App';
import { useNavigate } from 'react-router-dom';


function MyPokemonList() {

  var storage = JSON.parse(localStorage.getItem("party")) 
  const imgid = useContext(bgContext)
  const navi = useNavigate();



const reset = () => {
    localStorage.clear()
}

const handlehome = () =>{
  navi('/')
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
       <button title='Back to Home Page' className='home' onClick={handlehome}></button>
       </div>

        <div className='pctitle'>
             <img src={pctitle}/>
        </div>



      <div className='boxtop'>
        
        <h3>You have {storage != null ? storage.length  : ' 0 '} Pokemon in total. </h3>
      
      </div>
<div className='boxbg'>


        <div className= "boxcards col">

        <div className={`boxcardparent row ${storage != null ?  storage.length <= 4 ? 'boxdefault' : null : 'boxdefault'}`}>
        
          {            
              storage != null ?      
                
                storage.map(
                        (mypoke, index) => <MyPokeItem name ={mypoke.name} dexnum = {mypoke.dexnum} idx= {index} attempts= {mypoke.attempts} catchdate = {mypoke.catchdate} nature ={mypoke.nature}/>
                    )
                
                :
                <div></div>
          }

            </div>
        </div>

    </div>


   

    
{/* <button onClick={reset}>reset</button> */}
   

    
</div>
  )
}

export default MyPokemonList