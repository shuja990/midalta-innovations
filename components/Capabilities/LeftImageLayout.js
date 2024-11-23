const LeftImageLayout = ({ data, consult }) => (
  <section className={`services-area ptb-100 ${!consult && "bg-f4e9da"}`}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 services-image">
          <div className="image">
            <img src={data.image} alt={data.title} className="image" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="">
            <h2>{data.title}</h2>
            <p><strong>Our Approach: </strong> {data.howWeHelp}</p>
            <p><strong>Our Perspective: </strong> {data.insight}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LeftImageLayout