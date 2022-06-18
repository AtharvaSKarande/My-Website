import { useEffect } from "react";
import EduBg from "/Edu_bg.webp";
import Educations from "../../data/Education_data";
import EduCard from "../components/EduCard";
import "../css/Education.css";

const Education = () => {
  useEffect(() => {
    //document.body.background = EduBg;
  }, []);
  Educations.sort((a, b) => {
    if (a.id < b.id) return 1;
    return -1;
  });
  return (
    <div className="EduCard_deck">
      {Educations.map((item, index) => {
        return <EduCard Education={item} key={item.id} />;
      })}
    </div>
  );
};

export default Education;
