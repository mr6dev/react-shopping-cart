import React from 'react';

const WishLists = (props) => {
  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Favorites</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishLists;
