import Title from "./components/title/Title";
import GithubSvg from "./components/svgIcon/GithubSvg";
import LinkdinSvg from "./components/svgIcon/LinkdinSvg";
import PhoneSvg from "./components/svgIcon/PhoneSvg";
import EmailSvg from "./components/svgIcon/EmailSvg";
function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <Title title="About Me" />
          <div className="about_me">
            <p>
              Hi!, I'm Vikram Gupta a web developer , I have more than 4 years
              of experience in building modern web applications. I am currently
              working on MERN stack and I also use PHP(Laravel) and mysql, I
              keep learning and improving every day because technology never
              stops.
            </p>
          </div>
          <div className="social_link">
            <a
              href="https://github.com/myselfvikramgupta"
              className="social_btn"
            >
              <GithubSvg />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/myselfvikramgupta/"
              className="social_btn"
            >
              <LinkdinSvg />
              <span>Linkdin</span>
            </a>
            <a href="mailto:myselfvikramgupta@gmail.com" className="social_btn">
              <EmailSvg />
              <span>Email</span>
            </a>
            <a href="tel:8210335170" className="social_btn">
              <PhoneSvg />
              <span>Phone</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
