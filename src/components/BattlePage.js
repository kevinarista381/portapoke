import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import Poketext from './Poketext'
import catch1 from '../img/catch-frame1.png'
import catch2 from '../img/catch-frame2.png'
import catch3 from '../img/catch-frame3.png'
import catchcaught from '../img/catch-framecaught.png'


const BattlePage = (props) => {

    const [gamestatus, setgamestatus] = useState(0)
    const {pokeid, pokeimg, imgid, pokename} = props
    const [iscatching, setiscatching] = useState(false)
    const [frames, setframes] = useState(1)
    const [showmodal, setshowmodal] = useState(false)



    const savepokemon= () => {
      if (localStorage.getItem("party") === null){
        localStorage.setItem("party", JSON.stringify([]))
      }
     var currparty = JSON.parse(localStorage.getItem("party"))
     var newparty = currparty.concat({name: pokename, dexnum : pokeid})
    console.log(newparty)
     localStorage.setItem("party", JSON.stringify(newparty))
    }


    const animatecatch= () =>{

      setiscatching(true)
     
      setTimeout(() => {
        setframes(2)
      }, 300);

      setTimeout(() => {
        setframes(3)
      }, 400);
      

    }


    const animatebroke= () =>{

     
      setTimeout(() => {
        setframes(2)
      }, 300);

      setTimeout(() => {
        setframes(1)
      }, 400);

    


    }

    const animatecaught= () =>{
      setframes(4)
    }

    const handleCapture = async () =>{
      setgamestatus(1)
      await animatecatch()
      let rng = Math.floor(Math.random() * 2)


      setTimeout(async () => {

        
   
        switch(rng){
          case 1 : {
            setgamestatus(3)
            animatecaught()
            savepokemon()
            setTimeout(() => {
             setshowmodal(true)
            }, 1000);
            
          
          }
          break;
          case 0 : {
            
            await animatebroke()
            setTimeout(() => {
              setiscatching(false)
              setgamestatus(2) 
            }, 600);
           
          
          }   
    
        }
      }, 1200);
      

      
    
  
       
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
  {
    iscatching ?
   
    frames === 1 ?
    <img src={catch1}/>
    :
       frames === 2 ?
       <img src={catch2}/>

       :
       frames === 3 ?
       <img src={catch3}/>
       :
       <img src={catchcaught}/>

   

    :
    <img src={pokeimg}/>
  }
  </div>


    <div className='poketext'>
    <Poketext status= {gamestatus} name= {pokename}/>
    
    </div>

    <div className='battle-control'>
      <button onClick={handleCapture} disabled= {gamestatus === 3 || iscatching} className='capturebtn'></button>
    </div>

{
  showmodal?
    <Modal pokename = {pokename} setshowmodal = {setshowmodal} pokeimg = {pokeimg}/>
    :
    null
}
   
  </React.Fragment>
  )
}

export default BattlePage