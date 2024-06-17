import React from "react";
import expGreen from "../../assets/expGreen.svg";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";


function Experience() {

    const experienceData = [
      {
        id: 1,
        company: "Turing Blockchain.",
        jobtitle: "BlockChain Developer Intern",
        startYear: "Sep 2022 ",
        endYear: " Dec 2022",
        links:
          "https://drive.google.com/file/d/12zzFeHtZt5MtAoUQD_7UpAEtR8BQoHHu/view?usp=drive_link",
      },
      {
        id: 2,
        company: "Freelance",
        jobtitle: "Software Development",
        startYear: "MAY 2022 ",
        endYear: " DEC 2022",
        links:
          "https://drive.google.com/file/d/12zzFeHtZt5MtAoUQD_7UpAEtR8BQoHHu/view?usp=drive_link",
      },
      {
        id: 3,
        company: "Kenya Law",
        jobtitle: "InformationTechnology Support",
        startYear: "Jan 2023 ",
        endYear: " Aug 2023",
        links:
          "https://drive.google.com/file/d/12zzFeHtZt5MtAoUQD_7UpAEtR8BQoHHu/view?usp=drive_link",
      },
      
    ];

  return (
    <div className="experience" id="experience">
      <div className="experience-body">
        <div className="experience-image">
          <img src={expGreen} alt="expGreen" />
        </div>
        <div className="experience-description">
          <h1 className="experience-title">
            <span style={{ color: "#32CD30" }}>Work</span> Experience
          </h1>
          {experienceData.map((exp) => (
            <a
              href={exp.links}
              key={exp.id}
              className="experience-tag"
              
            >
              <ExperienceCard
                key={exp.id}
                id={exp.id}
                jobtitle={exp.jobtitle}
                company={exp.company}
                startYear={exp.startYear}
                endYear={exp.endYear}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
