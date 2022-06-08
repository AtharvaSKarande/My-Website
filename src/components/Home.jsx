import img from "../favicon.svg";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <img className="home__photo" src={img}></img>
      <p className="home__name">Atharva Sunil Karande</p>
      <p className="home__desc">
        👋Hi! This is Atharva. A student of Indian Institute of Information
        Technology, Pune{" "}
        <a href="https://www.iiitp.ac.in" style={{ color: `#00ffff` }}>
          (IIITP)
        </a>{" "}
        currently studying in F.Y.B.Tech. I created this website to introduce
        myself to everyone. You can find the brief introduction regarding my
        education, projects, internships in this website. enjoy!👍
      </p>
    </div>
  );
};

export default Home;
