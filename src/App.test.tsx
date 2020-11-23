import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

test('Test DOM elements', () => {
  const { getByText } = render(<App />);

  getByText(/Rick&Morty App/i);
  getByText(/CLICK ME/i);
});

test('Test user interactions', () => {
  const { getByText } = render(<App />);

  userEvent.click(getByText(/CLICK ME/i));
  getByText('Surprise');
});
