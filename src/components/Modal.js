import React from 'react'
import ReactDOM from 'react-dom'
import { Link, useNavigate } from 'react-router-dom';


const modalroot = document.getElementById('modal-root');

const Modal = (props) => {

const nav = useNavigate();

const handleclose = () =>{
    props.setshowmodal(false)
}

const handlePC = () => {
    nav('/mypokemon')

}

  return ReactDOM.createPortal(
<React.Fragment>

    <div className='modal'>

    <div className='modal-content'>
        <div className='modal-text'>
            <h2>The captured {props.pokename} was transferred to the PC Box!</h2>
            
        </div>

        <div className='modal-img'>
        <img src= {props.pokeimg}/>
        </div>
 
        <div className='modal-control'>
            <button className='modal-pcbox' onClick={handlePC}></button>
            <button className='modal-close' onClick={handleclose}></button>
        </div>

    </div>
    </div>


    
</React.Fragment>, modalroot
  )
}

export default Modal