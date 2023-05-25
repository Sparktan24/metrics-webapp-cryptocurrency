import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCoin, sortByPrice, sortByRank } from '../redux/coins/coinsSlice';

const HomePage = () => {
  const { coinsList } = useSelector((store) => store.coins);
  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coinsList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(coinsList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const orderCoins = (order) => {
    if (order === 'rank') {
      dispatch(sortByRank());
    } else if (order === 'priceUsd') {
      dispatch(sortByPrice());
    }
  };

  return (
    <div className="home-page-wrapper">
      <main>
        <ul className="grid-container">
          {currentItems.map((coin) => (
            <li key={coin.id} className="li-home-page">
              <NavLink
                to="/CoinsDetail"
                onClick={() => dispatch(filterCoin(coin.id))}
              >
                Rank:
                {coin.rank}
                <br />
                <span className="home-coin-name">
                  {coin.name}
                </span>
                <br />
                Price:
                $
                {parseFloat(coin.priceUsd).toFixed(2)}
                usd
              </NavLink>
            </li>
          ))}
        </ul>
      </main>
      <footer className="footer">
        <div className="page-buttons-container">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className="btn-page"
              type="button"
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="order-buttons-container">
          <button
            className="btn"
            type="button"
            onClick={() => orderCoins('priceUsd')}
          >
            Order by Price
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => orderCoins('rank')}
          >
            Order by Rank
          </button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
