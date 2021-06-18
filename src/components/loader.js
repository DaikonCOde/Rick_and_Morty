import React from 'react';

import '../style/loader.css';

const Loader = () => {
  
  const loader = {
    display: 'flex',
    background: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
    zIndex: '2'
  }

  return (
    <React.Fragment>
      <section style={loader}>
        <div className="loader loader-2">
          <svg className="loader-star" version="1.1">
                <polygon points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 " fill="#18ffff" />
            </svg>
          <div className="loader-circles"></div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Loader;