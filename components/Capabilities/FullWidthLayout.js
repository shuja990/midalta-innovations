const FullWidthLayout = ({ data }) => (
  <section className="full-width-services ptb-100 text-white">
    <div className="container">
      <h2 className="text-center text-black">{data.title}</h2>
      <p className="text-center">{data.howWeHelp}</p>
      <p className="text-center">{data.insight}</p>
      <div className="w-100 d-flex justify-content-center">
        <div className="image">
          <img src={data.image} alt={data.title} className="image" />
        </div>
      </div>
    </div>
  </section>
);


export default FullWidthLayout;