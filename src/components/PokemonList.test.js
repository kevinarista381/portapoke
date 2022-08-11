import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import PokemonList from "./PokemonList";
import {pageContext} from "../App"



const placehold= jest.fn()

test('both previous buttons are disabled upon initial rendering', async () => {
let page = 0

  render(
<pageContext.Provider value={{page: page, pagesetter: placehold}}>
<BrowserRouter>
 <PokemonList/>
</BrowserRouter>
</pageContext.Provider>
  
  );

  expect(await screen.getByTestId('prevbtn-top', { container: 'button' })).toBeDisabled()
  expect(await screen.getByTestId('prevbtn-bot', { container: 'button' })).toBeDisabled()
//screen.debug()
})



test('both next buttons are disabled upon hitting page tat contains Pokemon number 898 (last Pokemon)', async () => {
  let page = Math.floor(898/21) //21 pokemon per page

  render(
<pageContext.Provider value={{page: page, pagesetter: placehold}}>
<BrowserRouter>
 <PokemonList/>
</BrowserRouter>
</pageContext.Provider>
  
  );

  expect(await screen.getByTestId('nextbtn-top', { container: 'button' })).toBeDisabled()
  expect(await screen.getByTestId('nextbtn-bot', { container: 'button' })).toBeDisabled()
//screen.debug()
})


