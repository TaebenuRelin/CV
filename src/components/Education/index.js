import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Education = () => {
  const [education, setEducation] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "education/");

    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          <div className="education-item">
            <h3>{education.title}</h3>
            <p>2019 - 2021</p>
            <p>{education.subTitle}</p>
          </div>
          <div className="education-item">
            <h3>{education.title1}</h3>
            <p>2022 - now</p>
            <p>{education.subTitle2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
