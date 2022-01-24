import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import Cards from '../components/Cards';
import Modal from '../components/Modal';

class ShoppingCart extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <ToastContainer />
        <Cards />
        {/* <Modal /> */}
      </Layout>
    );
  }
}

export default ShoppingCart;
