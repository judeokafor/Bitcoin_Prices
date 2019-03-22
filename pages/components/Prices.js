import React, { Component } from 'react'

export class Prices extends Component {
    state = {
        currency : 'USD'
    }
  render() {
      let list = '';
      if (this.state.currency === 'USD' ){
        list = <li className = "list-group-item">
                    Bitcoin Rate for {this.props.bpi.USD.description} : 
                    <span className = "badge badge-primary p-2 mx-1"> {this.props.bpi.USD.code}</span>
                    <strong className = "mx-2">{this.props.bpi.USD.rate}</strong>
                </li>
      }
      else if (this.state.currency === 'GBP' ){
        list = <li className = "list-group-item">
                    Bitcoin Rate for {this.props.bpi.GBP.description} : 
                    <span className = "badge badge-primary p-2 mx-1"> {this.props.bpi.GBP.code}</span>
                    <strong className = "mx-2">{this.props.bpi.GBP.rate}</strong>
                </li>
      }
      else if (this.state.currency === 'EUR' ){
        list = <li className = "list-group-item">
                    Bitcoin Rate for {this.props.bpi.EUR.description} : 
                    <span className = "badge badge-primary p-2 mx-1"> {this.props.bpi.EUR.code}</span>
                    <strong className = "mx-2">{this.props.bpi.EUR.rate}</strong>
                </li>
    }
    return (
      <div>
        <ul className = "list-group">
            {list}
        </ul>
        <br/>
        <select className = "form-control" onChange = {
            (e) => (this.setState({currency: e.target.value}))
            }>
            <option value="USD">
                USD
            </option>
            <option value="GBP">
                GBP
            </option>
            <option value="EUR">
                EUR
            </option>
        </select>
      </div>
    )
  }
}

export default Prices
