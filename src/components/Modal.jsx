import React from 'react';

const Modal = (props) => {
  return (
    <div
      class='modal fade'
      id='exampleModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <img
              className='img-fluid'
              src={props.img}
              alt=''
              style={{ width: '40px' }}
            />
            <h5 class='modal-title' id='exampleModalLabel'>
              {props.name}
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body'>
            <h6>{props.tagline}</h6>
            <p>ABV {props.avb}</p>
            <p>{props.description}</p>
            <h5>{props.price}</h5>
          </div>
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' class='btn btn-primary'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
