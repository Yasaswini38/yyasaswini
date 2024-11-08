import React, { useState } from 'react';
import './ContentTabs.css';
import aiml from './img/aimlintern.png';
import pyin from './img/pyin.png';
import wordpress from './img/wordpress.png';
import stk from './img/stk.png';
import rhd from './img/rhd.png';
import urldef from './img/urldef.png';

function ContentTabs() {
  const [activeTab, setActiveTab] = useState('Experience');

  // Content for tabs with images
  const content = {
    Experience: [
      {
        title: "AI/ML Intern",
        company: "Ultraceuticals",
        duration: "Dec 2023 - April 2024",
        description: "Designed a website and applied Amazon SageMaker for drug repurposing analysis.",
        image: aiml
      },
      {
        title: "WordPress Intern",
        company: "WhiteStone Technologies",
        duration: "July 2023 - Oct 2023",
        description: "WordPress websites like Indian Dental Centre and Digital Doctor India, used tools like Yoast and SEMrush",
        image: wordpress
      },
      {
        title: "Deep Learning Intern",
        company: "Dronacharya TechHub",
        duration: "July 2023 - Oct 2023",
        description: "Analyzed real-time video stream data to validate reliability in detecting activities during night operations, enhancing security.",
        image: aiml
      }
    ],
    Projects: [
      {
        title: "Stock Proce Prediction",
        description: "As the team lead, I developed a web-based application for predicting stock prices using machine learning models, utilizing real-time data and delivering an intuitive user interface..",
        link: "https://github.com/Yasaswini38/StockPricePrediction",
        image:stk
      },
      {
        title: "Replacing Human Patrolling Using Drones",
        description: "Designed a deep learning model for real-time activity detection from drone video feeds.",
        link: "https://github.com/yasaswini38/Replacing-human-patrolling-using-drones",
        image:rhd
      },
      {
        title: "URL Defend",
        description: "As the project lead, I developed a phishing detection API using multiple machine learning models to classify URLs, enhancing web security through effective classification techniques.",
        link: "https://github.com/yasaswini38/Replacing-human-patrolling-using-drones",
        image:urldef
      }
    ],
    Internships: [
      {
        title: "AI/ML Intern",
        company: "Blackbucks Group",
        duration: "May 2024 -  2024",
        description: "Developed Human Stress level Detection using FlaskDeveloped a Human Stress Level Detection system using Flask, enhancing my skills in machine learning, Python, and deep learning fundamentals.",
        image: aiml
      },
      {
        title: "ML Intern",
        company: "Codegnan IT Solutions",
        duration: "May 2023 - July 2023",
        description: "I gained hands-on experience in EDA, feature extraction, and web development with Flask & Streamlit. Developed a Stock Price Prediction web app, using Machine Learning and yfinance for real-time data. This experience deepened my passion for leveraging technology to create impactful solutions.",
        image: aiml
      },
      {
        title: "Python Intern",
        company: "Skilligence - Be Future Relevant",
        duration: "April 2023 - May 2023",
        description: "Worked on Python programming and created a CLI-based Hangman game.",
        image: pyin
      }
    ]
  };

  return (
    <div className="content-tabs">
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
        {activeTab === 'Experience' && (
          <div className="experience-cards">
            {content.Experience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-image">
                  <img src={exp.image} alt={exp.title} />
                </div>
                <div className="experience-text">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.duration}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Projects' && (
          <div className="project-cards">
            {content.Projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Internships' && (
          <div className="internship-cards">
            {content.Internships.map((internship, index) => (
              <div key={index} className="internship-card">
                <div className="internship-image">
                  <img src={internship.image} alt={internship.title} />
                </div>
                <div className="internship-text">
                  <h3>{internship.title}</h3>
                  <h4>{internship.company}</h4>
                  <p>{internship.duration}</p>
                  <p>{internship.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentTabs;
