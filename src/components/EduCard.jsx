import "../css/EduCard.css";

const EduCard = (props) => {
  return (
    <div className="EduCard_back">
      <div className="EduCard_header">{props.Education.header}</div>
      <div className="EduCard_body">
        <h5>{props.Education.std}</h5>
        <p>{"From : " + props.Education.from}</p>
        <p>{"Institution type : " + props.Education.institute_type}</p>
      </div>
      <div className="EduCard_footer">
        {"Duration : " +
          props.Education.duration +
          " (" +
          props.Education.years +
          ")"}
      </div>
    </div>
  );
};

export default EduCard;
