import { useSelector } from 'react-redux';

const HomePage = () => {
  const { coinsList } = useSelector((store) => store.coins);
  //  console.log(coinsList.data);
  const coins = coinsList.data;
  //  console.log(coins);
  return (
    <div>
      <ul>
        {coins?.map((coin) => (
          <li key={coin.id}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
