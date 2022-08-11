import { render, screen, fireEvent } from "@testing-library/react";
import BattlePage from "./BattlePage";






test('Catch button is disabled after being clicked', async () => {

  render(
 <BattlePage pokeid={0} imgid ={0} pokeimg = {''} pokename = {''} dexdata = {{}}/>
  );
  const catchbtn = await screen.getByTestId('catchbtn', { container: 'button' })
  fireEvent.click(catchbtn)
 expect(await screen.getByTestId('catchbtn', { container: 'button' })).toBeDisabled()



})


