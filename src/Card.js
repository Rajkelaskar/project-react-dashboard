const Card = ({ icon, icon1, title, value, number }) => {
  return (
    <div className="Cards">
      <div className="d-flex justify-content-between align-items-center">
        <div className="icon-box">
          {icon}
        </div>

        <div className="back-green">
          <span>{icon1}</span> {number}
        </div>
      </div>

      <div className="mt-4">
        <h6 className="text-uppercase text-muted T-font">
          {title}
        </h6>

        <h2 className="T-value">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default Card;