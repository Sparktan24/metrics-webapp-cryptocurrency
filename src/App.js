import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCoins } from './redux/coins/coinsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);
  return (
    <div>
      Hello
    </div>
  );
}

export default App;
