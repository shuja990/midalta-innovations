const RightImageLayout = ({ data, consult }) => (
  <section className={`services-area ptb-100 ${consult && "bg-light"}`}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="">
            <h2>{data.title}</h2>
            <p><strong>How We Help:</strong> {data.howWeHelp}</p>
            <p><strong>Consultant Insight:</strong> {data.insight}</p>
          </div>
        </div>
        <div className="col-lg-6 services-image">
          <div className="image">
            <img src={data.image} alt={data.title} />
          </div>
        </div>
      </div>
    </div>
  </section>
);


export default RightImageLayout;