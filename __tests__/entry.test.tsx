import { render, screen } from '@testing-library/react';
import EntryPage from '../app/entry/[id]/page';

test('renders entry loading', () => {
  render(<EntryPage params={{ id: '1' }} />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
