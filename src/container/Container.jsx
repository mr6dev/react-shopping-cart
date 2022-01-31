import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WishLists from '../components/WishLists';
import ShoppingCart from './ShoppingCart';

const Container = (props) => {
  return (
    <Routes>
      <Route path='/' element={<ShoppingCart />} />
      <Route path='Favorites' element={<WishLists />} />
    </Routes>
  );
};

export default Container;
