import React from 'react'
import { useContext } from 'react'
import { bgContext } from '../App'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import psyduck from '../img/psyduck.png'
import { useNavigate } from 'react-router-dom';



const Error= () => {

    const imgid = useContext(bgContext)
    const navi = useNavigate();



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

      <div className='errorbg'>
        <img src={psyduck}/>
        <h2>Oops! Looks like the content you're looking for is not found.</h2>

        
      </div>
      <div className='homebtn errorhome'>  
       <button className='home' onClick={handlehome}></button>
       </div>


      


    </div>
  )
}

export default Error