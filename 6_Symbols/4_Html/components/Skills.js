import React from 'react';

function Skills({ skills }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} className="skill-category">
          <h3>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
          <ul>
            {skillList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
