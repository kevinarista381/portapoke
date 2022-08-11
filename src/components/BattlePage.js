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
    const {pokeid, pokeimg, imgid, pokename, dexdata} = props
    const [iscatching, setiscatching] = useState(false)
    const [frames, setframes] = useState(1)
    const [showmodal, setshowmodal] = useState(false)
    const [attempts, setattempts] = useState(1)



    const savepokemon= () => {
      if (localStorage.getItem("party") === null){
        localStorage.setItem("party", JSON.stringify([]))
      }
     var currparty = JSON.parse(localStorage.getItem("party"))
     var newparty = currparty.concat({name: pokename, dexnum : pokeid, attempts: attempts, catchdate : getcapturedate(), nature: getnature()})
     localStorage.setItem("party", JSON.stringify(newparty))
    }

    const getnature = () =>{
      let rng = Math.floor(Math.random() * 25)
      switch(rng){
        case 0 : return 'Hardy'
        break;
        case 1 : return 'Lonely'
        break;
        case 2 : return 'Brave'
        break;
        case 3 : return 'Adamant'
        break;
        case 4 : return 'Naughty'
        break;
        case 5 : return 'Bold'
        break;
        case 6 : return 'Docile'
        break;
        case 7 : return 'Relaxed'
        break;
        case 8 : return 'Impish'
        break;
        case 9 : return 'Lax'
        break;
        case 10 : return 'Timid'
        break;
        case 11 : return 'Hasty'
        break;
        case 12 : return 'Serious'
        break;
        case 13 : return 'Jolly'
        break;
        case 14 : return 'Naive'
        break;
        case 15 : return 'Modest'
        break;
        case 16 : return 'Mild'
        break;
        case 17 : return 'Quiet'
        break;
        case 18 : return 'Bashful'
        break;
        case 19 : return 'Rash'
        break;
        case 20 : return 'Calm'
        break;
        case 21 : return 'Gentle'
        break;
        case 22 : return 'Sassy'
        break;
        case 23 : return 'Careful'
        break;
        case 24 : return 'Quirky'
        break;

      }

    }

    const getcapturedate = () =>{
    let today = new Date();
    let dd= String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yy = today.getFullYear();
    return {d:dd , m: mm , y: yy }
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
      setattempts(prevstate => prevstate +1)
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

  <div data-testid='battle-sprite' className='pokesprite'> 
  {
    iscatching ?
   
    frames === 1 ?
    <img data-testid= 'frame1' src={catch1}/>
    :
       frames === 2 ?
       <img data-testid= 'frame2' src={catch2}/>

       :
       frames === 3 ?
       <img data-testid= 'frame3' src={catch3}/>
       :
       <img data-testid= 'framecaught' src={catchcaught}/>

    :
    <img src={pokeimg}/>
  }
  </div>


    <div className='poketext'>
    <Poketext status= {gamestatus} name= {pokename} dexdata = {dexdata}/>
    
    </div>

    <div className='battle-control'>
      <button data-testid ='catchbtn' onClick={handleCapture} disabled= {gamestatus === 3 || iscatching} className='capturebtn'></button>
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