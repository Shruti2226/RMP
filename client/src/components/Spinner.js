import React from 'react';

function Spinner() {
  return (
    <div className="spinner-parent">
      <div className="spinner">
        <dotlottie-player
          src="https://lottie.host/2748d5f3-fe84-46ae-87ff-520c85d32303/95jpHMHQSF.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Spinner;
