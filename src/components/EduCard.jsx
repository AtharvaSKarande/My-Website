import "../css/EduCard.css";

const EduCard = (props) => {
  return (
    <div className="EduCard_back">
      <div className="EduCard_header">{props.Education.header}</div>
      <div className="EduCard_body">
        <h5>{props.Education.std}</h5>
        <p>
          {"From (" +
            props.Education.institute_type +
            ") : " +
            props.Education.from}
          <br />

          {"Duration : " +
            props.Education.duration +
            " (" +
            props.Education.years +
            ")"}
        </p>
      </div>
      <div className="EduCard_footer">
        {"Location : " + props.Education.location}
      </div>
    </div>
  );
};

export default EduCard;
