function Skills({ skillList }) {
  return (
    <div className="skills-grid">
      {skillList.map((skill) => (
        <div className="skill-card" key={skill.name}>
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
