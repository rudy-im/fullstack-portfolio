import './Skill.css';

const Skill = ({title, skills, children}) => {
  const items = skills.split(';').map(item => item.trim()).filter(Boolean);

  return (
    <div className="skill">
	  {children && <div className="skill-icon">{children}</div>}
      {title && <h2>{title}</h2>}

      <div className="skills">
        {items.map((item, index) => (
          <div key={index} className="skills-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
