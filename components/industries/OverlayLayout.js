import React from 'react';

const OverlayLayout = ({ data }) => (
  <div className="overlay-layout position-relative">
    <img src={data.image} alt={data.main_heading} className="img-fluid w-100" />
    <div className="overlay-content text-white position-absolute p-5">
      <h2>{data.main_heading}</h2>
      <h5 className="text-muted">{data.subheading}</h5>
      <p>{data.content}</p>
    </div>
  </div>
);

export default OverlayLayout;
