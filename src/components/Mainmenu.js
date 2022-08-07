import React from 'react'
import { CSSTransition } from 'react-transition-group';
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import {  useContext } from 'react';
import { bgContext } from '../App';







const Mainmenu = (props) => {

const imgid = useContext(bgContext)




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
<img src={logo}/>
</div>

             


  <div className= "column centerize downtocenter">

    <Link to='/pokemonlist' style={{ textDecoration: 'none' }}>               
     <div className="row menubuttons">
    <button className="pokemonbtn" ></button>
     </div>
    </Link>


    <Link to='/mypokemon' style={{ textDecoration: 'none' }}>
     <div className="row menubuttons">
     <button className="pcbtn"></button>
     </div>
    </Link>   
         
                      
  </div>

</div>



    )

}

export default Mainmenu