import { render, screen } from "@testing-library/react";

import {BrowserRouter} from 'react-router-dom'
import Error from "./Error";



test('renders the error text and home button correctly', () => {
  render(
<BrowserRouter>
  <Error />
  </BrowserRouter>
  
  );
  expect(screen.getByText(/Oops! Looks like the content you're looking for is not found./i)).toBeInTheDocument();
 expect(screen.getByTestId('homebutton', { container: 'button' })).toBeInTheDocument();
//screen.debug()
})


