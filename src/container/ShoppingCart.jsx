import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards';

class ShoppingCart extends Component {
  render() {
    return (
      <Layout>
        <ToastContainer />
        <Cards />
      </Layout>
    );
  }
}

export default ShoppingCart;
