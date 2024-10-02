// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    cryptocurrencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const fetchedCurrency = await response.json()

    const upDatedCryptoCurrency = fetchedCurrency.map(eachCryptoCurrency => ({
      id: eachCryptoCurrency.id,
      currencyLogoUrl: eachCryptoCurrency.currency_logo,
      currencyName: eachCryptoCurrency.currency_name,
      usdValue: eachCryptoCurrency.usd_value,
      euroValue: eachCryptoCurrency.euro_value,
    }))

    this.setState({
      cryptocurrencyList: upDatedCryptoCurrency,
      isLoading: false,
    })
  }

  renderCryptoCurrency = () => {
    const {cryptocurrencyList} = this.state
    return (
      <div className="crypto-list">
        <CryptocurrencyList cryptoCurrencyList={cryptocurrencyList} />
      </div>
    )
  }

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="container">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrency()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
