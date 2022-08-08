import React from 'react'
import { useState, useEffect } from 'react'

const PokedexPage = (props) => {

    const {dexdata, pokename, poketype, pokeimg, namearr, genusarr, statarr} = props
    const dexformat = (s , width, char) => {
        
        if (s === undefined) return
        return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width)
    }
 


    


  return (
   <React.Fragment>
<div className='name-parent'>
<div className='name-first-line'>
<div><h2>#{dexformat(dexdata.id , 3, '0')} {pokename} </h2> </div>
<div><h3>{namearr[0]}</h3></div>

</div>


<div className='name-second-line'>
<div>{genusarr[7]} </div>
<div><i>{namearr[1]}</i></div>

</div>
</div>


<div className='dexbg'/>
<div className='dexsprite'>
    <img src={pokeimg}/>
</div>

<div>

    
<div className='type-parent'>    
<h2>Type: </h2><div className={`firsttype ${poketype[0]}`}/>
  
  {
    (poketype.length > 1) ?
    
    <div className={`secondtype ${poketype[1]}`}/>
    
    :
    null
  } 
  </div>
  

<div className='stats-parent'>
<div className='stats-table'>

    <table border ='1'>
        <tr>
            <td colSpan="6"> <h3>Base Stats: </h3></td>
        </tr>
        <tr>
       
                <th>HP</th>
                <th>Attack</th>
                <th>Defense</th>
                <th>Special Attack</th>
                <th>Special Defense</th>
                <th>Speed</th>
           
        </tr>
        <tr>
            
            {
                statarr.map( stat => <td><b>{stat}</b></td>)
            }
        </tr>
    </table>
    </div>
</div>





</div>



   </React.Fragment>
  )
}

export default PokedexPage