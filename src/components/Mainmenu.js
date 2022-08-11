import React from 'react'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import {  useContext, useEffect } from 'react';
import { bgContext, pageContext } from '../App';







const Mainmenu = (props) => {

const imgid = useContext(bgContext)
const pagectx = useContext(pageContext)

useEffect(() => {
  pagectx.pagesetter(0)
    
}, [])





    return(
<div>
{
       {
        '0' : <img src={bgday} className="titleimg"/>  ,
        '1' : <img src={bgtwilight} className="titleimg"/>,
        '2' : <img src={bgnight} className="titleimg"/>,
       }[imgid]

}
<div className="mainlogo"> 
               {/* SHOWING MAIN MENU */}
<img title='Created by Kevin Arista Chandra' src={logo}/>
</div>

             


  <div className= "column centerize downtocenter">

    <Link to='/pokemonlist' style={{ textDecoration: 'none' }}>               
     <div className="row menubuttons">
    <button title='Pokemon List' className="pokemonbtn" ></button>
     </div>
    </Link>


    <Link to='/mypokemon' style={{ textDecoration: 'none' }}>
     <div className="row menubuttons">
     <button title='Pokemon Storage aka My Pokemon List' className="pcbtn"></button>
     </div>
    </Link>   
         
                      
  </div>

</div>



    )

}

export default Mainmenu