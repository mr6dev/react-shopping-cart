import React from 'react';

const Layout = (props) => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href=' '>
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href=' '>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href=' '>
                    Features
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href=' '>
                    Pricing
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled' href=' '>
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{props.children}</main>
      <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 mt-4 border-top bg-light'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          >
            <i className='bi bi-bootstrap'></i>
          </a>
          <span className='text-muted'>© 2021 Company, Inc</span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href=' '>
              <i className='bi bi-twitter'></i>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href=' '>
              <i className='bi bi-instagram'></i>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href=' '>
              <i className='bi bi-facebook'></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
