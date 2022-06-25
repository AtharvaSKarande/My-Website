import "../css/ProjectCard.css";

const COLOR = ["#6fff7c", " #7afcff", " #ff7eb9", "#feff9c"];
const ROTATIONS = ["-4deg", "-2deg", "0deg", "2deg", "4deg"];

const ProjectCard = (props) => {
  const getColor = () => {
    return COLOR[Math.floor(Math.random() * 1000) % COLOR.length];
  };
  const getRotation = () => {
    return ROTATIONS[Math.floor(Math.random() * 1000) % ROTATIONS.length];
  };
  return (
    <div
      className="ProjectCard_back"
      style={{
        backgroundColor: getColor(),
        transform: `rotate(${getRotation()})`,
      }}
    >
      <div className="Proj_title">{props.Project.title}</div>
      <hr style={{ margin: `0.5rem` }} />
      <div className="Proj_motive">🎯 Motive : {props.Project.motive}</div>
      <div className="Proj_desc">📜 Description : {props.Project.desc}</div>
      <hr style={{ margin: `0.5rem` }} />
      <div className="Proj_tools">
        {props.Project.tools.map((item, index) => {
          return (
            <div className="Proj_one_tool" key={index}>
              {item}
            </div>
          );
        })}
        <div
          style={{
            fontSize: `18px`,
            margin: `-4px 2px 0px 2px`,
          }}
        >
          |
        </div>
        {props.Project.languages.map((item, index) => {
          return (
            <div className="Proj_one_lang" key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
