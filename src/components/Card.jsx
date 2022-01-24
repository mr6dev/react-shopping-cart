import React from 'react';

const Card = (props) => {
  return (
    <div className='col-lg-4 my-3'>
      <div
        className='card text-center bg-light p-3  shadow rounded'
        style={{ width: '300px', height: '100%' }}
      >
        <div className='card-body'>
          <i
            class='bi bi-plus-square fs-5 mb-3 pe-5'
            type='button'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          ></i>
          <i className='bi bi-star-fill fs-5 ps-5' type='button'></i>
          <h5 className='card-title text-secondary'>{props.title}</h5>
          <img
            src={props.img}
            className='card-img-top img-fluid'
            alt='...'
            style={{ width: '60px' }}
          />
          <p className='card-text mt-5'>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
