// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {currencyItem} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = currencyItem

  return (
    <li className="currency-item">
      <div className="logo-name-container">
        <img src={currencyLogoUrl} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="currency-value usd-value">{usdValue}</p>
        <p className="currency-value euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
