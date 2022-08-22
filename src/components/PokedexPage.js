import React from 'react'

const PokedexPage = (props) => {

    const {dexdata, pokename, poketype, pokeimg, namearr, genusarr, statarr, abilityarr} = props
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

  <div className={abilityarr.length == 3 ? 'ability-widest': abilityarr.length > 1 ? 'ability-wide' : 'ability-parent'}>
    <h2>Ability: </h2>
    <h3>{abilityarr[0]}
    {
        
    (abilityarr.length > 1) ?
    
    
    ` / ${abilityarr[1]} `
    
      
    :
   null

    }

{
           (abilityarr.length == 2) ?

          <i> &#40;Hidden Ability&#41;</i>
           :
           null
        
         

}

    {
           (abilityarr.length == 3) ?

          <a> / <i>{abilityarr[2]} &#40;Hidden Ability&#41;</i></a>
           :
           null
        
         

    }
  </h3>
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