import { render, screen } from '@testing-library/react';
import SettingsPage from '../app/settings/page';

test('renders settings heading', () => {
  render(<SettingsPage />);
  expect(screen.getByText('Settings')).toBeInTheDocument();
});
