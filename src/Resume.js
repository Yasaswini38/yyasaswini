// src/Resume.js
import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="profile-photo">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>

        <div className="resume-section education">
          <h2>Education</h2>
          <p>Van Lang University - Interior Design</p>
          <p>ColorME SG - Illustrator and Photoshop Skill</p>
          <p>FPT Arena Multimedia - Graphic Design</p>
        </div>

        <div className="resume-section experience">
          <h2>Experience</h2>
          <p>Freelance Artist - Graphic Designer, Illustrator</p>
          <p>JBL Vietnam - Graphic Designer</p>
          <p>ColorME SG - Multimedia Designer</p>
        </div>

        <div className="resume-section software">
          <h2>Software</h2>
          <p>Adobe Photoshop, Illustrator, After Effects, InDesign</p>
          <p>Autodesk Maya, Substance 3D Painter, Procreate</p>
        </div>

        <div className="resume-section language">
          <h2>Language</h2>
          <p>Vietnamese (Native), English (Intermediate)</p>
        </div>

        <div className="resume-section contact">
          <h2>Contact</h2>
          <p>Phone: (+84) 938 413 088</p>
          <p>Email: tiebang05@gmail.com</p>
          <p>Facebook: facebook.com/tieubangg05</p>
          <p>Behance: behance.net/tieubangg05</p>
          
        </div>

        <div className="resume-section hobbies">
          <h2>Hobbies</h2>
          <p>Music, Cooking, Photography, Film</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
