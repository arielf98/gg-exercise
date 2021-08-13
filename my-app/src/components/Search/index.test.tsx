import {render, screen} from '@testing-library/react';
import Search from '.';

test('component rendered', async () => {
  render(<Search />);

  const searchBar = screen.getByLabelText(/cari/i);
  expect(searchBar).toBeInTheDocument();

})
