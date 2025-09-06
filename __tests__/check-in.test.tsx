import { render, screen } from '@testing-library/react';
import CheckInPage from '../app/check-in/page';

test('renders check-in heading', () => {
  render(<CheckInPage />);
  expect(screen.getByText('Check In')).toBeInTheDocument();
});
