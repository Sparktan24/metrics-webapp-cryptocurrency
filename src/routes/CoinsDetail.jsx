/* eslint-disable arrow-body-style */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import '../styles/coinsDetail.css';
import bitcoinLogo from '../styles/bitcoin-logo.png';

const CoinsDetail = () => {
  const { coinsList } = useSelector((store) => store.coins);
  const activeCoin = coinsList.filter((coin) => coin.display);
  const coin = activeCoin[0];

  if (!coin) {
    // If there is no active coin, redirect to the homepage
    return <Navigate to="/HomePage" />;
  }
  const handleFormatNumber = (num) => {
    return (parseFloat(num).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <div className="details-container">
      <table className="details-table">
        <tbody className="details-table-body">
          <tr>
            <td className="name-format">
              Name:
              &nbsp;
              <span className="details-coin-name">{coin.name}</span>
              <span className="to-right">{coin.symbol}</span>
            </td>
          </tr>
          <tr>
            <td>
              Current Price: &nbsp;$
              {handleFormatNumber(coin.priceUsd)}
              &nbsp;
              {handleFormatNumber(coin.changePercent24Hr)}
              % last 24Hrs
            </td>
          </tr>
          <tr>
            <td>
              Rank:
              &nbsp;
              {coin.rank}
            </td>
          </tr>
          <tr>
            <td>
              Market cap: &nbsp;$
              {handleFormatNumber(coin.marketCapUsd)}
            </td>
          </tr>
          <tr>
            <td>
              Actual Supply: &nbsp;$
              {handleFormatNumber(coin.supply)}
              {/* {(parseFloat(coin.supply).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
            </td>
          </tr>
          <tr>
            <td>
              Max supply: &nbsp;$
              {handleFormatNumber(coin.maxSupply)}
            </td>
          </tr>
          <tr>
            <td>
              Explorer: &nbsp;
              {coin.explorer}
            </td>
          </tr>
        </tbody>
      </table>
      <img src={bitcoinLogo} className="image-details" alt="bitcoin logo" />
    </div>
  );
};

export default CoinsDetail;
