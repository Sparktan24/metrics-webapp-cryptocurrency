import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getCoins } from './redux/coins/coinsSlice';
import HomePage from './routes/HomePage';
import CoinsDetail from './routes/CoinsDetail';
import NavBar from './components/NavBar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="HomePage" element={<HomePage />} />
        <Route path="CoinsDetail" element={<CoinsDetail />} />
        <Route path="/" element={<Navigate to="/HomePage" />} />
      </Routes>
    </>
  );
}

export default App;
