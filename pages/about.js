import React, { Component } from 'react';
import Layout from './components/Layout';
export class about extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>About the Bitz World </h1>
          <p>Application to view bitcoin prices with live and present value</p>
        </div>
      </Layout>
    )
  }
}

export default about
