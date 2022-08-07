import React, { useContext, useEffect, useState } from 'react'
import { myPokemonContext } from '../App'
import MyPokeItem from './MyPokeItem'

function MyPokemonList() {

  var storage = JSON.parse(localStorage.getItem("party")) 


const reset = () => {
    localStorage.clear()
}





  return (
 <div>
    <div>MyPokemonList </div>

    <div>You have caught {storage != null ? storage.length : null} Pokemon</div>
    <div>
    <table border="1">
    
                <tr>
                <th>Dex No.</th>
                <th>Name</th>
                    
                </tr>
                
                {
                   storage != null ?
                   storage.map(
                        (mypoke, index) => <MyPokeItem name ={mypoke.name} dexnum = {mypoke.dexnum} idx= {index} />
                    )

                    :
                    <tr>
                        <td colSpan = "2">You have no Pokemon caught.</td>
                    </tr>
                }
            
               
            </table>
    </div>

    <div><button onClick={() => reset()}>Release ALL</button></div>

    
</div>
  )
}

export default MyPokemonList