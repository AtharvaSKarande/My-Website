import Educations from "../../data/Education_data";
import EduCard from "../components/EduCard";
import "../css/Education.css";

const Education = () => {
  Educations.sort((a, b) => {
    if (a.id < b.id) return 1;
    return -1;
  });
  return (
    <>
      <div className="Edu_Title">Education</div>
      <div className="EduCard_deck">
        {Educations.map((item, index) => {
          return <EduCard Education={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Education;
