import { render, screen } from '@testing-library/react';
import BreathPage from '../app/exercises/breath/page';

test('renders breathing heading', () => {
  render(<BreathPage />);
  expect(screen.getByText('Box Breathing')).toBeInTheDocument();
});
