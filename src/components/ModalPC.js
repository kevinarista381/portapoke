import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const modalroot = document.getElementById('modal-root');

const ModalPC = (props) => {

const [isreleasing, setisreleasing] = useState(false)
const [releasecommited, setreleasecommited] = useState(false)

const nav = useNavigate();

const handleclose = () =>{
    props.setshowmodal(false)
}
const releasesequence = () =>{
    setisreleasing(true)


}
const commitrelease = () =>{

    props.handlerelease()
    setreleasecommited(true)
    setisreleasing(false)

}

const handleclosefinal = () =>{
    handleclose()
    window.location.reload(false);
}

const handlepokedex = () => {
    const destination = `/pokemondetail/${props.dexnum}`
    nav(destination)

}

const enummonth = (m) =>{
    switch(m){
        case '01' : return 'January'
        break;
        case '02' : return 'February'
        break;
        case '03' : return 'March'
        break;
        case '04' : return 'April'
        break;
        case '05' : return 'May'
        break;
        case '06' : return 'June'
        break;
        case '07' : return 'July'
        break;
        case '08' : return 'August'
        break;
        case '09' : return 'September'
        break;
        case '10' : return 'October'
        break;
        case '11' : return 'November'
        break;
        case '12' : return 'December'
        break;
    }
}


  return ReactDOM.createPortal(
<React.Fragment>

    <div className='modal'>
    <div className='modal-content'>

  { 
  
releasecommited ?

<React.Fragment> 
<div className='modal-pc'>
        <h2 className='releasetxt-final'> {props.pokename} was released. Bye-bye, {props.pokename}!</h2>
      
        
    </div>
      
<div></div>

    <div className='modal-control'>
        <button title='Close this message' className='modal-close close-final' onClick={handleclosefinal}></button>
    </div>
    </React.Fragment>


:

  isreleasing?
  <React.Fragment>
    <div className='modal-pc'>
            <h2 className='releasetxt'> Are you sure you want to release {props.pokename} into the wild?</h2>
            <h2 className='releasetxt redtxt'>A released Pokemon will be deleted from the PC Box and cannot be restored.</h2>
            
        </div>
       
        <div className='modal-img'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.dexnum}.png`}/>

       
        </div>
 
           
    
 
        <div className='modal-control release-control'>
            <button title='Release / Delete this Pokemon from PC Box' className='modal-pc-release' onClick={commitrelease}></button>
            <button title='Close this message' className='modal-close' onClick={handleclose}></button>
        </div>
        </React.Fragment>

  :   
    <React.Fragment>
    <div  className='modal-pc-text'>
            <h2> {props.pokename}</h2>
            
        </div>
       
        <div className='modal-img-pc'>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.dexnum}.png`}/>
        <h3>Nature: {props.nature}
        <br/>Ability: <a> {props.ability}</a>
        <br/>Caught on: <a> {`${props.catchdate.d} ${enummonth(props.catchdate.m)} ${props.catchdate.y}`} </a> 
        <br/> Capture attempts: <a> {props.attempts}</a></h3>
       
        </div>
 
           
    
 
        <div className='modal-control-pc'>
            <button title= {`View ${props.pokename}'s Pokedex entry`} className='modal-pc-pokedex' onClick={handlepokedex}></button>
            <button title='Release / Delete this Pokemon from PC Box' className='modal-pc-release' onClick={releasesequence}></button>
            <button title='Close this message' className='modal-close' onClick={handleclose}></button>
        </div>
        </React.Fragment>
  }

    </div>


    </div>


    
</React.Fragment>, modalroot
  )
}

export default ModalPC