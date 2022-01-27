import React from 'react';

const Modal = (props) => {
  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='row g-3'>
            <div className='modal-header'>
              <div className='col-4'>
                <img
                  className='img-fluid ms-5'
                  src={props.img}
                  alt=''
                  style={{ width: '50px' }}
                />
              </div>
              <div className='col-4'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  {props.name}
                </h5>
                <p className='text-secondary'>ABV {props.abv}</p>
              </div>
              <div className='col-2'></div>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
          </div>
          <div className='modal-body'>
            <h6>{props.tagline}</h6>

            <p>{props.description}</p>
            <h5 className='text-dark'>Price: {props.price} $</h5>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' className='btn btn-primary'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
