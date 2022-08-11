import { render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import MyPokeItem from "./MyPokeItem";



test('Diglett dont hop when hovered', async () => {


  render(
<BrowserRouter>
 <MyPokeItem dexnum = {50}/>
</BrowserRouter> 
  );

  expect(await screen.getByTestId('mypokeitem', { container: 'img' }).classList.contains('nojump')).toBe(true)

})


test('Dugtrio dont hop when hovered', async () => {

    render(
  <BrowserRouter>
   <MyPokeItem dexnum = {51}/>
  </BrowserRouter>
    );
  
    expect(await screen.getByTestId('mypokeitem', { container: 'img' }).classList.contains('nojump')).toBe(true)
  
  })

