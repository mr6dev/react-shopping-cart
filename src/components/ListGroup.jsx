import React from 'react';

const ListGroup = (props) => {
  const { items, id, name, selectedItem, onItemSelect } = props;
  return (
    <ul className='nav nav-pills'>
      {items.map((item) => (
        <li key={item} className='nav-item' onClick={() => onItemSelect(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

{
  /* //{item === selectedItem ? 'nav-link active' : 'nav-link'} */
}
{
  /* key={item[id]} */
}
