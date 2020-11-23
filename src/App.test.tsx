import React from 'react';
import { render, getQueriesForElement } from '@testing-library/react';
import { App } from './App';
import ReactDOM from 'react-dom';

describe('Test DOM elements', () => {
  test('Enhanced demo test', () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Rick&Morty App/i);
    const column1 = getByText(/№/i);
    const column2 = getByText(/Photo/i);
    const column3 = getByText(/Name/i);
    const column4 = getByText(/Species/i);
    expect(h1).toBeInTheDocument();
    expect(column1).toBeInTheDocument();
    expect(column2).toBeInTheDocument();
    expect(column3).toBeInTheDocument();
    expect(column4).toBeInTheDocument();
  });

  describe('Tests with core js features', () => {
    const root = document.createElement('div');
    ReactDOM.render(<App />, root);
    it('renders H1 tag 2.0', () => {
      expect(root.querySelector('h1')?.textContent).toBe('Rick&Morty App');
    });
    it('renders table tag', () => {
      expect(root.querySelector('table')).toBeTruthy();
    });
    it('renders thead tag', () => {
      expect(root.querySelector('thead')?.classList).toContain(
        'ant-table-thead'
      );
    });
    it('renders tbody tag', () => {
      expect(root.querySelector('tbody')).toBeTruthy();
    });
  });
});
