import React from 'react'
import ModalPC from './ModalPC'
import { useState } from 'react'

const MyPokeItem = (props) => {


  const [showmodal, setshowmodal] = useState(false)
  const {idx, dexnum, name, attempts, catchdate, nature} = props



const handlesummary = () => {
  setshowmodal(true)

}
  

  const handlerelease = () =>{
    var currparty = JSON.parse(localStorage.getItem("party"))
    currparty.splice(idx, 1);
    localStorage.setItem("party", JSON.stringify(currparty))
 
    

  }

  return (
    <React.Fragment>

     <div className= "col itembox">
       <div className="row-sm-6 pokename-card">
      
      <h3 onClick={handlesummary}>{name}</h3>

       </div>
        <div className= "row-sm-6">
        <img data-testid='mypokeitem' title={`Click to view ${name}'s summary`} className={dexnum == 50 || dexnum == 51 ? 'nojump' : null} onClick={handlesummary} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dexnum}.png`}/>
  
    
       </div>
     

      </div>

      {
  showmodal?
    <ModalPC pokename = {name} dexnum = {dexnum} attempts = {attempts} nature = {nature} catchdate = {catchdate}   setshowmodal = {setshowmodal} handlerelease= {handlerelease}/>

    :
    null
   }
  
   </React.Fragment>
  )
}

export default MyPokeItem