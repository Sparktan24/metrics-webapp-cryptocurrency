import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterCoin } from '../redux/coins/coinsSlice';

const HomePage = () => {
  const { coinsList } = useSelector((store) => store.coins);
  const dispatch = useDispatch();
  //  console.log(coins); //  ADD ONCLICK TARGET TO SHOW ONLY THAT INFO
  return (
    <div>
      <ul>
        {coinsList?.map((coin) => (
          <li key={coin.id}>
            <NavLink
              to="/CoinsDetail"
              onClick={() => dispatch(filterCoin(coin.id))}
            >
              Name:
              {coin.name}
              ID:
              {coin.id}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
