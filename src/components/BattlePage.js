import React from 'react'
import { useState } from 'react'
import Poketext from './Poketext'


const BattlePage = (props) => {

    const [gamestatus, setgamestatus] = useState(0)
    const {pokeid, pokeimg, imgid, pokename} = props

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
  return (
    <React.Fragment>
        {
       {
        '0' : <div className='battleday'></div>  ,
        '1' : <div className='battletwi'></div> ,
        '2' : <div className='battlenight'></div> ,
       }[imgid]
       } 

  <div className='pokesprite'> 
    <img src={pokeimg}/>
  </div>


    <div className='poketext'>
    <Poketext status= {gamestatus} name= {pokename}/>
    </div>

    <div>
      <button onClick={handleCapture}>Capture</button>
    </div>
  </React.Fragment>
  )
}

export default BattlePage