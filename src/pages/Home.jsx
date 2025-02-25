import logo from "../favicon.svg";
import profilePic from "/profilePic.png";
import "../css/Home.css";

const Home = () => {
  return (
    <div>
      <img className="home__photo" src={profilePic} />
      <p className="home__name">Atharva Sunil Karande</p>
      <p className="home__desc">
        👋Hi! This is Atharva. A student of Indian Institute of Information
        Technology, Pune{" "}
        <a href="https://www.iiitp.ac.in" target="_blank">
          (IIITP)
        </a>{" "}
        currently studying in F.Y.B.Tech. I created this website to introduce
        myself to everyone. You can find the brief introduction regarding my
        education, projects, internships in this website. enjoy!👍
      </p>
      <div className="home__social_deck">
        <div className="home_social">
          <a href="https://github.com/AtharvaSKarande" target="_blank">
            <svg
              height="40"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="40"
              fill="#ffffff"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
        <div className="home_social">
          <a
            href="https://www.linkedin.com/in/atharva-karande-aa39a31aa"
            target="_blank"
          >
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 455 455"
              fill="#ffffff"
              space="preserve"
            >
              <g>
                <path
                  fillRule="evenodd"
                  d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
                />
                <path
                  fillRule="evenodd"
                  d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
		 M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
		c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
		c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
		c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
		z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
