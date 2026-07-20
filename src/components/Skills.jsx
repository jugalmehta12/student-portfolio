const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 70 },
  { name: "Git & GitHub", level: 75 },
];

function Skills() {
  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <h3>{skill.name}</h3>
          <div className="skill-bar">
            <div
              className="skill-bar-fill"
              style={{ width: `${skill.level}%` }}
            />
          </div>
          <div className="skill-percentage">{skill.level}%</div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
