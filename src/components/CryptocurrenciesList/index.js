// Write your JS code here

import CryptoCurrencyItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrencyList = props => {
  const {cryptoCurrencyList} = props
  console.log(cryptoCurrencyList)
  return (
    <div className="crypto-currencies-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="crypto-currency-img"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="Cryptocurrency Tracker"
      />
      <div className="list-header">
        <p>Coin Type</p>
        <div className="usd-and-euro-values-container">
          <p className="list-coin-value-heading">USD</p>
          <p className="list-coin-value-heading">EURO</p>
        </div>
      </div>

      {cryptoCurrencyList.map(eachItem => (
        <CryptoCurrencyItem currencyItem={eachItem} key={eachItem.id} />
      ))}
    </div>
  )
}

export default CryptocurrencyList
