import React from 'react';

// Component to display a Spline scene
const SplineScene = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <iframe
        src="https://my.spline.design/cubic-2a17c7c478663d7b3eba59fcf35b2897/"
        frameBorder="0"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
        title="Spline 3D Scene"
      ></iframe>
    </div>
  );
};

export default SplineScene;
