import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { RMApi as Api } from './utils/api';

const RMApi = new Api();
const mockGetCharPage = (RMApi.getCharactersPage = jest.fn());

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

test('Test results of async requests', () => {
  expect(mockGetCharPage).toHaveBeenCalledTimes(1);
  mockGetCharPage.mockResolvedValueOnce({
    characterPage: [
      {
        id: 1,
        name: 'aa',
        gender: 'male',
        species: null,
        image: 'aa',
        episodesList: null,
        origin: null,
        location: null,
      },
    ],
    total: 1,
  });
  const { getByText } = render(<App />);
  waitFor(() => getByText('aa'));
});
