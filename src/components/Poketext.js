import React from 'react'

const Poketext = (props) => {
  return (
    <div className='gametext'>
    {
       {
        '0' : props.dexdata.is_legendary || props.dexdata.is_mythical ? `${props.name} appeared!`: `A wild ${props.name} appeared!`,
        '1' : `You threw a Pokeball!`,
        '2' : `Oh no! The Pokemon broke free!`,
        '3' : `Gotcha! ${props.name} was caught!`
       }[props.status]

}

        <p></p>

    </div>
  )
}

export default Poketext