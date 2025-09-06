import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

test('renders home heading', () => {
  render(<HomePage />);
  expect(screen.getByText('Stoic Journal')).toBeInTheDocument();
});
