// page Resumes
import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";
import Spinner from "../components/Spinner";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  const [certificationsExperience, setCertificationsExperience] = useState([]); 

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
      setCertificationsExperience(response.data.certificationsExperience); 
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>CV - Portfolio de Sara Bellaf</title>
        <meta
          name="description"
          content="Page CV du Portfolio de Sara Bellaf"
        />
      </Helmet>

      <Suspense fallback={<Spinner />}>
      {/* compétences */}
        <div className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Mes compétences" />
            <div className="mi-skills">
              <div className="row mt-30-reverse">
                {skills.map((skill) => (
                  <TrackVisibility
                    once
                    className="col-lg-6 mt-30"
                    key={skill.title}
                  >
                    <Progress title={skill.title} percentage={skill.value} />
                  </TrackVisibility>
                ))}
              </div>
            </div>
          </div>
        </div>


      {/* résumé */}
        <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
          <div className="container">
            <Sectiontitle title="Résumé" />

            {/* formations */}
            <Smalltitle title="Formations" icon="book" />
            <div className="mi-resume-wrapper">
              {educationExperience.map((educatonExp) => (
                <Resume key={educatonExp.id} resumeData={educatonExp} />
              ))}
            </div>

            <div className="mt-30"></div>

            {/* Certificats */}
            <Smalltitle title="Certifications" icon="book" />
            <div className="mi-resume-wrapper">
              {certificationsExperience.map((certifExp) => (
                <Resume key={certifExp.id} resumeData={certifExp} />
              ))}
            </div>

            <div className="mt-30"></div>

            {/* expériences pro */}
            <Smalltitle title="Expériences professionnelles" icon="briefcase" />
            <div className="mi-resume-wrapper">
              {workingExperience.map((workingExp) => (
                <Resume key={workingExp.id} resumeData={workingExp} />
              ))}
            </div>

            
          </div>
        </div>
      </Suspense>

    </Layout>
  );
}

export default Resumes;
