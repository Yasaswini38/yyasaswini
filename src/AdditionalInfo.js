import React, { useState } from 'react';
import './AdditionalInfo.css';
import HtmlImage from './img/html.png';
import CssImage from './img/css.png';
import PythonImage from './img/python.png';
import PowerBIImage from './img/powerbi.png';
import FigmaImage from './img/figma.png';
import CanvaImage from './img/canva.png';
import FlaskImage from './img/flask.png';
import MysqlImage from './img/mysql.png';
import webfibm from './img/ibmwbf.png';
import powerbiws from './img/powerbiws.png';

import awscld from './img/awsclod.png';
import awsml from './img/awsml.png';
import gai from './img/gai.png';
import pds from './img/pds.png';
import eds from './img/eds.png';
import ai from './img/ai.png';

import gcc from './img/gcc.png';
import tcs from './img/tcs.png';
import sml from './img/sml.png';
import diet from './img/diet.png';
import inter from './img/in.png';
import rbps from './img/rbps.jpg';

function AdditionalInfo() {
  const [activeTab, setActiveTab] = useState('Education');
  const [showModal, setShowModal] = useState(false);
  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);

  const educationData = [
    {
      institution: "Dhanekula Institute of Engineering and Technology ",
      major: "Computer Science and Engineering (AI & ML)",
      gpa: "8.8",
      graduationYear: "2021-2025",
      image: diet 
    },
    {
      institution: "Narayana Junior College",
      major: "Intermediate-MPC",
      gpa: "9.6",
      graduationYear: "2019-2021",
      image: inter 
    },
    {
      institution: "Ravindra Bharathi High School",
      major: "Secondary",
      gpa: "9.7",
      graduationYear: "2018-2019",
      image: rbps
    }
  ];
  

  const skillData = [
    { name: "HTML", image: HtmlImage },
    { name: "CSS", image: CssImage },
    { name: "Python", image: PythonImage },
    { name: "Power BI", image: PowerBIImage },
    { name: "Figma", image: FigmaImage },
    { name: "Canva", image: CanvaImage },
    { name: "Flask", image: FlaskImage },
    { name: "MySQL", image: MysqlImage }
  ];

  const certificateData = [
    {
      title: "Supervised Machine Learning-Stanford",
      image: sml,
      link: "https://www.coursera.org/account/accomplishments/certificate/OZNL8B85KPFO"
    },
    {
      title: "PowerBi Workshop - Be10x",
      image: powerbiws,
      link: "https://verify.be10x.ai/certificate/4d173e82-3861-47b4-ab33-09d1da812849106275"
    },
    {
      title: "Web Development Foundations - IBM",
      image: webfibm,
      link: "https://www.credly.com/badges/144baa77-3fff-4197-907a-257d89fb35bc/public_url"
    },

    {
      title: "Cloud Foundations - AWS Academy ",
      image: awscld,
      link: "https://www.credly.com/badges/1a4a2c3e-ca77-4a50-be1a-29b52406d7ca/public_url"
    },
    {
      title: "Machine Learning Foundations - AWS Academy ",
      image: awsml,
      link: "https://www.credly.com/badges/1961b60d-3294-468c-ae69-7e511eefcf75/public_url"
    },
    {
      title: "Generative AI Fundamentals - GOOGLE",
      image: gai,
      link: "https://www.cloudskillsboost.google/public_profiles/70da7e52-ed79-4d00-b910-585c03d5c9b2/badges/5423777?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      title: " Python Data Structures - Michigan Uni ",
      image: pds,
      link: "https://www.coursera.org/account/accomplishments/certificate/E3ZV7T46GP6L"
    },
    {
      title: "GSwE Data Science - IBM",
      image: eds,
      link: "https://www.credly.com/badges/e311eed0-8937-483c-8302-a6a22042a53f/print"
    },
    {
      title: "GSwE grade AI - IBM",
      image: ai,
      link: "https://www.credly.com/badges/d682ad7a-762f-410f-a5f6-3ca9fd28b00a/print"
    },
    
    {
      title: "Cloud Computing Fundamentals-Google",
      image: gcc,
      link: "https://www.cloudskillsboost.google/public_profiles/70da7e52-ed79-4d00-b910-585c03d5c9b2/badges/3384397"
    },
    {
      title: "Career Edge Young Professional-TCS iON",
      image: tcs,
      link: "https://drive.google.com/file/d/1B1tWbwQDmFY8_ovrG7K1ToHRbLLzyxBr/view?usp=sharing"
    },
    
  ];

  const openModal = (index) => {
    setCurrentEducationIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goToPrevious = () => {
    setCurrentEducationIndex((prevIndex) => 
      prevIndex === 0 ? educationData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentEducationIndex((prevIndex) => 
      prevIndex === educationData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const content = {
    Education: (
      <div className="education-images-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item" onClick={() => openModal(index)}>
            <img src={edu.image} alt={edu.institution} className="education-image" />
          </div>
        ))}
      </div>
    ),
    Skills: (
      <div className="skills-container">
        {skillData.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    ),
    Certifications: (
      <div className="certifications-container">
        {certificateData.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              onClick={() => window.open(cert.link, "_blank")}
              className="certificate-image"
            />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    )
  };
  return (
    <div className="info-tabs">
      <nav className="tabs">
        {Object.keys(content).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="tab-content">
        {content[activeTab]}
      </div>

      {showModal && (
  <div className="modal">
    <div className="modal-content">
      <button className="close" onClick={closeModal}>&times;</button>
      <h3>{educationData[currentEducationIndex].institution}</h3>
      <p><strong>Major:</strong> {educationData[currentEducationIndex].major}</p>
      <p><strong>GPA:</strong> {educationData[currentEducationIndex].gpa}</p>
      <p><strong>Graduation Year:</strong> {educationData[currentEducationIndex].graduationYear}</p>
      <div className="modal-navigation">
        <button onClick={goToPrevious}>&lt; Previous</button>
        <button onClick={goToNext}>Next &gt;</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default AdditionalInfo;