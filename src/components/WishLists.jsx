import React from 'react';
import FavoritesContex from '../context/favoritesContex';

const WishLists = (props) => {
  return (
    <FavoritesContex.Consumer>
      {(favContext) => (
        <div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Favorites</th>
              </tr>
            </thead>
            <tbody>
              {favContext.map((item, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </FavoritesContex.Consumer>
  );
};

export default WishLists;
