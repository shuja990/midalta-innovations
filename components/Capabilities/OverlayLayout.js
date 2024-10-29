const OverlayLayout = ({ data }) => (
    <section
      className="services-area ptb-100"
      style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover' }}
    >
      <div className="container">
        <div className="overlay-content">
          <h2>{data.title}</h2>
          <p><strong>How We Help:</strong> {data.howWeHelp}</p>
          <p><strong>Consultant Insight:</strong> {data.insight}</p>
        </div>
      </div>
    </section>
  );

  export default OverlayLayout;