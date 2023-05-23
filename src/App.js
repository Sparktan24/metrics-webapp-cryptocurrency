import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { getCoins } from './redux/coins/coinsSlice';
import HomePage from './routes/HomePage';
import CoinsDetail from './routes/CoinsDetail';
import NavBar from './components/NavBar';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  /*  useEffect(() => {
    if (window.performance && performance.navigation.type === 1) {
      // Page was refreshed
      navigate('/HomePage');
    }
  }, [navigate]); */

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
