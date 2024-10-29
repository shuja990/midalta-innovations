import React from 'react';

const FullWidthLayout = ({ data }) => (
  <section className="full-width-layout ptb-100 text-black" >
    <div className="container text-center">
      <h2 className="text-uppercase">{data.main_heading}</h2>
      <p className="lead">{data.subheading}</p>
      <p>{data.content}</p>
      {data.how_we_help && <div className='row col-lg-12 p-4'>
        <div className='col-lg-6'>
          <h4>How We Help:</h4>
          <ul>
            {data.how_we_help.map((help, index) => (
              <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="feature-box">
                  <i className='bx bxs-badge-check'></i>
                  {help}
                </div>
              </div>))}
          </ul>
        </div>
        <div className='col-lg-6'>
          <h4>Insights:</h4>
          <ul>
            {data.insights.map((insight, index) => (
              <div className="col-sm-12 col-lg-12 col-md-12">
                <div className="feature-box">
                  <i className='bx bxs-badge-check'></i>
                  {insight}
                </div>
              </div>))}
          </ul>
        </div>
      </div>}
      {
        data.image && <div className="w-100 d-flex justify-content-center mt-4">
          <img src={data.image} alt={data.main_heading} className="img-fluid rounded" />
        </div>
      }
    </div>
  </section>
);

export default FullWidthLayout;
