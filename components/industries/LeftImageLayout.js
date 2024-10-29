import React from 'react';

const LeftImageLayout = ({ data, consult }) => (
  <section className={`services-area ptb-100 ${!consult ? 'bg-light' : ''}`}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 services-image">
          <img src={data.image} alt={data.title} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h2>{data.main_heading}</h2>
          <h5 className="text-muted">{data.subheading}</h5>
          <p>{data.content}</p>

        </div>
        {
          data.how_we_help &&
          <div className='row col-lg-12 p-4'>
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

          </div>
        }
      </div>
    </div>
  </section>
);

export default LeftImageLayout;
