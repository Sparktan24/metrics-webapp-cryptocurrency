import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  filterCoin,
  updateByValue,
  updateByRank,
  sortCoins,
} from '../redux/coins/coinsSlice';

const HomePage = () => {
  const { coinsList } = useSelector((store) => store.coins);
  const dispatch = useDispatch();
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = coinsList.slice(indexOfFirstItem, indexOfLastItem);
  //  console.log(coins); //  ADD ONCLICK TARGET TO SHOW ONLY THAT INFO
  const totalPages = Math.ceil(coinsList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const orderCoins = (order) => {
    if (order === 'rank') {
      dispatch(sortCoins());
    } else if (order === 'priceUsd') {
      dispatch(updateByRank());
    }
  };

  const orderByValue = () => {
    const sortedCoins = coinsList
      .slice()
      .sort((a, b) => b.priceUsd - a.priceUsd);
    dispatch(updateByValue(sortedCoins));
  };

  const orderByRank = () => {
    const sortedCoins = coinsList.slice().sort((a, b) => b.rank - a.rank);
    dispatch(updateByRank(sortedCoins));
    //  console.log(sortedCoins);
  };

  return (
    <div>
      <ul>
        {currentItems.map((coin) => (
          <li key={coin.id}>
            <NavLink
              to="/CoinsDetail"
              onClick={() => dispatch(filterCoin(coin.id))}
            >
              Name: {coin.name} ID: {coin.id}
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            type="button"
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <button type="button" onClick={() => orderCoins('priceUsd')}>
          Order by Price
        </button>
        <button type="button" onClick={() => orderCoins('rank')}>
          Order by Rank
        </button>
      </div>
    </div>
  );
};

export default HomePage;
