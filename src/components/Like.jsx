import React from 'react';

const Like = (props) => {
  let classes = 'bi fs-5 ps-5 bi-star';
  if (props.liked) classes += '-fill';

  return (
    <i
      className={classes}
      onClick={props.onLike}
      style={{ cursor: 'pointer' }}
    ></i>
  );
};

export default Like;
