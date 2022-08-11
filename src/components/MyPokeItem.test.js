import { render, screen, fireEvent } from "@testing-library/react";
import MyPokeItem from "./MyPokeItem";





test('Diglett dont hop when hovered', async () => {

  render(
 <MyPokeItem dexnum = {50}/>
  );

  expect(await screen.getByTestId('mypokepic', { container: 'img' }).classList.contains('nojump')).toBe(true)

})


test('Dugtrio dont hop when hovered', async () => {

    render(

   <MyPokeItem dexnum = {51}/>

    );
  
    expect(await screen.getByTestId('mypokepic', { container: 'img' }).classList.contains('nojump')).toBe(true)
  
  })

