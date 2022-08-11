import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import PokemonDetail from "./PokemonDetail";



test('Pokemon battle sprite is rendered when Battle tab is clicked', async () => {

  render(

<BrowserRouter>
 <PokemonDetail/>
</BrowserRouter>
 
  );

  const battletab = await screen.getByTestId('battle-tab' , { container: 'input' })
  fireEvent.click(battletab)
  expect(await screen.getByTestId('battle-sprite' , { container: 'div' })).toBeInTheDocument()
})



