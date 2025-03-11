import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-left">
        <div className="resume-section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <div className="header-with-date">
              <div className="item-title">
                <h3>San Francisco State University</h3>
                <p className="subtitle">Web Design</p>
              </div>
              <div className="date">09.2001 - 06.2003</div>
            </div>
            <p className="description">
              I got my degree in web design and development, and later on, I have finished a course in photography and photoplay. Graphic design has become my motivation for the further career path.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="section-title">Employment</h2>
          <div className="job-item">
            <div className="header-with-date">
              <div className="item-title">
                <h3>International Design Services</h3>
                <p className="subtitle">Designer</p>
              </div>
              <div className="date">10.2003 - 03.2007</div>
            </div>
            <p className="description">
              This was an exciting experience for me as a beginner, and I appreciate the knowledge that I have received at this company. My main task was to design website projects for businesses.
            </p>
            <hr className="divider" />
          </div>

          <div className="job-item">
            <div className="header-with-date">
              <div className="item-title">
                <h3>ThemeREX Studio</h3>
                <p className="subtitle">Graphic Designer</p>
              </div>
              <div className="date">04.2007 - present</div>
            </div>
            <p className="description">
              As a graphic designer, I work to create various projects by using illustrations, photography and typography. We create layouts that are mostly used by magazines, websites and apps.
            </p>
          </div>
        </div>

        <div className="resume-section">
          <h2 className="section-title">Recognition</h2>
          <div className="award-item">
            <div className="header-with-date">
              <div className="item-title">
                <h3>Graphic Design Awards</h3>
                <p className="subtitle">Top Web Designer</p>
              </div>
              <div className="date">2012</div>
            </div>
            <p className="description">
              It was such an honor to take part in one of the most important designer conventions, and to receive this award was beyond my expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="resume-right">
        <div className="skills-section">
          <h2 className="section-title-right">Programming Skills</h2>
          
          <div className="skill-item">
            <div className="skill-label">WordPress</div>
            <div className="skill-bar-container">
              <div className="skill-bar wordpress" style={{width: '90%'}}>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-label">PHP</div>
            <div className="skill-bar-container">
              <div className="skill-bar php" style={{width: '80%'}}>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-label">HTML</div>
            <div className="skill-bar-container">
              <div className="skill-bar html" style={{width: '95%'}}>
                <span className="skill-percentage">95%</span>
              </div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-label">CSS</div>
            <div className="skill-bar-container">
              <div className="skill-bar css" style={{width: '85%'}}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>
          
          <div className="skill-item">
            <div className="skill-label">MySQL</div>
            <div className="skill-bar-container">
              <div className="skill-bar mysql" style={{width: '75%'}}>
                <span className="skill-percentage">75%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="designer-skills-section">
          <h2 className="section-title-right">Designer Skills</h2>
          <ul className="designer-skills-list">
            <li><span className="skill-dot adobe-illustrator"></span> Adobe Illustrator</li>
            <li><span className="skill-dot adobe-indesign"></span> Adobe InDesign</li>
            <li><span className="skill-dot corel-draw"></span> Corel Draw</li>
            <li><span className="skill-dot 3d-max"></span> 3D Max</li>
            <li><span className="skill-dot adobe-photoshop"></span> Adobe Photoshop</li>
          </ul>
          
          <div className="skills-chart">
            <div className="donut-chart"></div>
          </div>
        </div>

        <div className="language-skills-section">
          <h2 className="section-title-right">Language Skills</h2>
          
          <div className="language-item">
            <div className="language-name">English</div>
            <div className="language-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot half-filled"></span>
              <span className="dot empty"></span>
            </div>
          </div>
          
          <div className="language-item">
            <div className="language-name">French</div>
            <div className="language-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot empty"></span>
              <span className="dot empty"></span>
            </div>
          </div>
          
          <div className="language-item">
            <div className="language-name">Spanish</div>
            <div className="language-level">
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
              <span className="dot filled"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;