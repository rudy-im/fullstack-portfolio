import './Skill.css';

const Skill = ({title, skills, children}) => {
  const items = skills.split(';').map(item => item.trim()).filter(Boolean);

  return (
    <div className="skill">
	  {children && <div className="skill-icon">{children}</div>}
      {title && <div className="skill-title">{title}</div>}


      {items.map((item, index) => (
        <div key={index} className="skills-item">
          {item}
        </div>
      ))}

    </div>
  );
};

export default Skill;
