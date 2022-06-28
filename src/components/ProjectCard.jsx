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
      <div className="Proj_title">
        {props.Project.title}
        {props.Project.github && (
          <div className="Proj_git">
            <a href={props.Project.github} target="_blank">
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                height="34"
                width="34"
                fill="#000000"
                data-view-component="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
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
