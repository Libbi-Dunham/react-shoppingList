import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('tests the behavior', () => {
  render(<App />);
  const addButton = screen.getByRole('button', { name: /Save/i });
  userEvent.click(addButton);
  expect(addButton).toBeInTheDocument();
  const editButton = screen.getByLabelText('Edit hello');
  userEvent.click(editButton);
  const deleteButton = screen.getByLabelText('Delete hello');
  userEvent.click(deleteButton);
  expect(screen.queryByText('hello')).toBeNull();
});
