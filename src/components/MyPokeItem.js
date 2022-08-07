import React from 'react'
import {Link} from 'react-router-dom'

const MyPokeItem = (props) => {


  

  const handledelete = () =>{
    var currparty = JSON.parse(localStorage.getItem("party"))
    currparty.splice(props.idx, 1);
    localStorage.setItem("party", JSON.stringify(currparty))
   window.location.reload(false);
    

  }

  return (
    <React.Fragment>
    <tr>
        <td>{props.dexnum}</td>
        <Link to={`/pokemondetail/${props.dexnum}`}>
        <td>
          <div> <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.dexnum}.png`}/></div>
          <div>{props.name}</div>
        </td>
        </Link>
        <td><button onClick={() => handledelete()}>Release Pokemon</button></td>
       
    </tr>
   </React.Fragment>
  )
}

export default MyPokeItem