import AllInternships from "../../data/Internship_data";
import InternshipCard from "../components/InternshipCard";
import "../css/Internships.css";

const Internships = () => {
  AllInternships.sort((a, b) => {
    if (a.id < b.id) return 1;
    return -1;
  });
  return (
    <>
      <div className="Intern_Title">Intenships</div>
      <div className="InternCard_deck">
        {AllInternships.map((item, index) => {
          return <InternshipCard Internship={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Internships;
