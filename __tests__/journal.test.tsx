import { render, screen } from '@testing-library/react';
import JournalPage from '../app/journal/page';

test('renders journal heading', () => {
  render(<JournalPage />);
  expect(screen.getByText('Journal')).toBeInTheDocument();
});
