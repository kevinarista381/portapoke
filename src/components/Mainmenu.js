import React from 'react'
import { CSSTransition } from 'react-transition-group';
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
import bgday from '../img/bgday.png'
import bgnight from '../img/bgnight.png'
import bgtwilight from '../img/bgtwilight.png'
import { useEffect, useState } from 'react';





export const bgContext = React.createContext(); 

const Mainmenu = (props) => {

const [img, setimg] = useState(0)

useEffect(() => {
  
getbg()

}, [])

const getbg= () =>{
 var hour = new Date().getHours()
 console.log(hour)
 if (hour > 18 || hour < 5) {
    setimg(2) 
    return
}
if (hour > 16) {
    setimg(1) 
    console.log(img)
    return
}
setimg(0)

}

    return(
<div>
{
       {
        '0' : <img src={bgday} className="titleimg"/>  ,
        '1' : <img src={bgtwilight} className="titleimg"/>,
        '2' : <img src={bgnight} className="titleimg"/>,
       }[img]

}
<div className="mainlogo"> 
               {/* SHOWING MAIN MENU */}
<img src={logo}/>
</div>

             


  <div className= "column centerize downtocenter">
<bgContext.Provider value={img}>
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
</bgContext.Provider>                 
                      
  </div>

</div>



    )

}

export default Mainmenu