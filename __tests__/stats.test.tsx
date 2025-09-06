import { render, screen } from '@testing-library/react';
import StatsPage from '../app/stats/page';

test('renders stats heading', () => {
  render(<StatsPage />);
  expect(screen.getByText('Stats')).toBeInTheDocument();
});
