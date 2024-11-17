import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "skills/");

    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{skills.title}</h2>
        <div className="skills-list">
          <span className="skill-item">{skills.subTitle1}</span>
          <span className="skill-item">{skills.subTitle2}</span>
          <span className="skill-item">{skills.subTitle3}</span>
          <span className="skill-item">{skills.subTitle4}</span>
          <span className="skill-item">{skills.subTitle5}</span>
        </div>
      </div>
    </section>
  );
};
export default Skills;
