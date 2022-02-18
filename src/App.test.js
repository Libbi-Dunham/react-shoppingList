import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('tests the behavior', () => {
  render(<App />);
  const addInput = screen.getByRole('textbox');
  userEvent.type(addInput, 'dog');
  expect(addInput).toBeInTheDocument();
  const addButton = screen.getByRole('button', { name: /Save/i });
  userEvent.click(addButton);
  expect(addButton).toBeInTheDocument();
  const dogItem = screen.queryByText('dog');
  expect(dogItem).toBeInTheDocument();

  const editButton = screen.getByLabelText('Edit hello');
  userEvent.click(editButton);
  const input = screen.getByLabelText(/Editinput/i);
  const changes = screen.getByLabelText('Changes');
  userEvent.type(input, 'hello');
  screen.debug();
  userEvent.click(changes);
  expect(screen.queryByText('hellohello')).toBeInTheDocument();
  expect(screen.queryByText('changed')).not.toBeInTheDocument();

  const deleteButton = screen.getByLabelText('Delete hellohello');
  userEvent.click(deleteButton);
  expect(screen.queryByText('hellohello')).toBeNull();
});

test('tests for the list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(1);
});
