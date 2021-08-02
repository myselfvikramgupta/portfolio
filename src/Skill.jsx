import Title from './components/title/Title';
import TechProficiency from './components/techProficiency/TechProficiency';
import techProficiency from './data/techProficiency'
function Skill() {
  return (
    <>
      <section className="skill" id="skill">
        <div className="container">
        <Title title="Tech Proficiency" />
          <div className="tech_proficiency">
          {
            techProficiency.map((tech)=><TechProficiency language={tech.language} logo={tech.logo} />)
          }
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
