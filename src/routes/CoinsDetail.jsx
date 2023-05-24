/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import '../styles/coinsDetail.css';

const CoinsDetail = () => {
  const { coinsList } = useSelector((store) => store.coins);
  //  console.log(coinsList);
  const activeCoin = coinsList.filter((coin) => coin.display);
  //  console.log(coinsList);
  //  console.log(activeCoin[0]);
  //  console.log(activeCoin.id);
  //  console.log(typeof activeCoin[0].changePercent24Hr);
  if (!activeCoin[0]) {
    // If there is no active coin, redirect to the homepage
    return <Navigate to="/HomePage" />;
  }
  return (
    <div>
      <table className="details-table">
        <tbody className="details-table-body">
          <tr>
            <td>{activeCoin[0].name}</td>
          </tr>
          <tr>
            <td>
              Current Price: ${activeCoin[0].priceUsd}+
              {parseFloat(activeCoin[0].changePercent24Hr).toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>Rank: {activeCoin[0].rank}</td>
          </tr>
          <tr>
            <td>Market cap: ${activeCoin[0].marketCapUsd}</td>
          </tr>
          <tr>
            <td>Supply: ${activeCoin[0].supply}</td>
          </tr>
          <tr>
            <td>Max supply: ${activeCoin[0].maxSupply}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CoinsDetail;
