import React from 'react';
import '../style/not-found.css'
const NotFound = () => {
    return (
        <div className='cover-container d-flex justify-content-center'>
        <main role="main" className="inner cover align-self-center">
        <h1 className="cover-heading">404 Error</h1>
        <p className="lead">Page not found</p>
      </main>
      </div>
    )
};

export default NotFound;