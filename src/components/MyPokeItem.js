import React from 'react'
import ModalPC from './ModalPC'
import { useState } from 'react'

const MyPokeItem = (props) => {


  const [showmodal, setshowmodal] = useState(false)



const handlesummary = () => {
  setshowmodal(true)

}
  

  const handlerelease = () =>{
    var currparty = JSON.parse(localStorage.getItem("party"))
    currparty.splice(props.idx, 1);
    localStorage.setItem("party", JSON.stringify(currparty))
 
    

  }

  return (
    <React.Fragment>

     <div className= "col itembox" key={props.index}>
       <div className="row-sm-6 pokename-card">
      
      <h3 onClick={handlesummary}>{props.name}</h3>

       </div>
        <div className= "row-sm-6">
        <img onClick={handlesummary} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.dexnum}.png`}/>
  
    
       </div>
     

      </div>

      {
  showmodal?
    <ModalPC pokename = {props.name} dexnum = {props.dexnum}  setshowmodal = {setshowmodal} handlerelease= {handlerelease}/>

    :
    null
   }
  
   </React.Fragment>
  )
}

export default MyPokeItem