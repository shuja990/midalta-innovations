import Link from 'next/link';
import React from 'react';

const LeftImageLayout = ({ data, consult }) => (
  <section className={`services-area ptb-100 ${!consult ? 'bg-f4e9da' : ''}`}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 services-image">
          <img src={data.image} alt={data.title} className="img-fluid rounded" />
        </div>
        <div className="col-lg-6 col-md-12">
          <h2>{data.main_heading}</h2>
          <h5 className="text-muted">{data.subheading}</h5>
          <p>{data.content}</p>
          {
            data?.perspectives &&
            <>
              <div className='d-flex justify-content-between flex-wrap'>
                <div>
                  <h5 className='m-0'>Our Perspective</h5>
                  <ul>
                    {data?.perspectives?.map((perspective, index) => (
                      <li key={index}>
                        {perspective?.split(':')[0]}
                      </li>))}
                  </ul>
                </div>
                <div>
                  <h5 className='m-0'>Our Approach</h5>
                  <ul>
                    {data?.approach?.map((approach, index) => (
                      <li key={index}>
                        {approach?.split(':')[0]}
                      </li>))}

                  </ul>
                </div>
              </div>
              <button className="default-btn">
                <i className="bx bx-right-arrow-alt"></i>
                <Link href={`/sectors/${encodeURI(data?.main_heading)}`}>Learn More</Link> <span></span>
              </button>
            </>
          }
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
