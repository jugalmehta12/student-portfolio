import SkillsComponent from "../components/Skills";

function Skills() {
  const skillList = [
    { name: "React & JavaScript", level: 75 },
    { name: "Node.js & Express", level: 70 },
    { name: "MongoDB & SQL", level: 72 },
    { name: "Python & Java", level: 72 },
    { name: "Git, Docker & Linux", level: 72 },
    { name: "Cybersecurity Tools", level: 65 },
  ];

  return (
    <div className="page-section">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">Technologies I work with</p>
      <SkillsComponent skillList={skillList} />
    </div>
  );
}

export default Skills;
