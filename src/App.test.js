import { render, screen } from '@testing-library/react';
import App from './App';

test('show Welcome text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Velkommen til Gp Solutions Store/i);
  expect(linkElement).toBeInTheDocument();
});
