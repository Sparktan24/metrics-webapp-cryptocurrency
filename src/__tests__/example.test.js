import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from '../routes/HomePage';
import CoinsDetail from '../routes/CoinsDetail';
import coinsReducer from '../redux/coins/coinsSlice';

const mockStore = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

describe('HomePage', () => {
  it('renders coins list correctly', () => {
    /* const coinsList = [
      { id: 1, rank: 1, name: 'Bitcoin', priceUsd: '50000' },
      { id: 2, rank: 2, name: 'Ethereum', priceUsd: '3000' },
    ];
    const store = mockStore({
      coins: { coinsList },
    }); */

    render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  /* it('orders coins by price correctly', () => {
    const coinsList = [
      { id: 1, rank: 1, name: 'Bitcoin', priceUsd: '50000' },
      { id: 2, rank: 2, name: 'Ethereum', priceUsd: '3000' },
    ];
    const store = mockStore({
      coins: { coinsList },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByText('Order by Price'));

    const coinElements = screen.getAllByTestId('coin-element');
    expect(coinElements[0]).toHaveTextContent('Ethereum');
    expect(coinElements[1]).toHaveTextContent('Bitcoin');
  });

  it('changes page correctly', () => {
    const coinsList = Array.from({ length: 15 }, (_, index) => ({
      id: index + 1,
      rank: index + 1,
      name: `Coin ${index + 1}`,
      priceUsd: '100',
    }));
    const store = mockStore({
      coins: { coinsList },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>
    );

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    expect(screen.getByText('Coin 11')).toBeInTheDocument();
    expect(screen.getByText('Coin 12')).toBeInTheDocument();
    expect(screen.getByText('Coin 13')).toBeInTheDocument();
    expect(screen.getByText('Coin 14')).toBeInTheDocument();
    expect(screen.getByText('Coin 15')).toBeInTheDocument();
  }); */
});

/* describe('CoinsDetail', () => {
  it('renders coin details correctly', () => {
    const coinsList = [
      { id: 1, rank: 1, name: 'Bitcoin', priceUsd: '50000' },
      { id: 2, rank: 2, name: 'Ethereum', priceUsd: '3000' },
    ];
    const store = mockStore({
      coins: { coinsList },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <CoinsDetail />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Name: Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Rank: 1')).toBeInTheDocument();
    expect(screen.getByText('Current Price: $50,000')).toBeInTheDocument();
    expect(screen.getByText('Market cap: $0.00')).toBeInTheDocument();
  });
}); */
