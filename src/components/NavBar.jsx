import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCoins } from '../redux/coins/coinsSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <nav>
      <div>
        <NavLink to="/HomePage" onClick={() => dispatch(resetCoins())}>
          Back
        </NavLink>
        <NavLink to="/CoinsDetail">CoinDetails</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
