import React from 'react'
import {Link} from 'react-router-dom'

const PokeItem = (props) => {

  const dexformat = (s , width, char) => {

      return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width)
  }
  
  return (



    
    

     <div className= "col item4" key={props.index}>
       <div className="row-sm-6 pokename">
       <Link to={`/pokemondetail/${props.dexnum}`} style={{ textDecoration: 'none' }}>   
      <h3>#{dexformat(props.dexnum, 3, 0)}</h3>
      <h2>{props.name}</h2>
      </Link>
       </div>
        <div className= "row-sm-6">
        <Link to={`/pokemondetail/${props.dexnum}`} style={{ textDecoration: 'none' }}>   
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.dexnum}.png`}/>
        </Link>
       </div>
     

      </div>
            
  
   



  )
}

export default PokeItem