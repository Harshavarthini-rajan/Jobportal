import React, { useContext } from 'react'
import starIcon from '../assets/Star_icon.png'
import time from '../assets/opportunity_time.png'
import experience from '../assets/opportunity_bag.png'
import place from '../assets/opportunity_location.png'
import calender from '../assets/calender_card.png'
import { Joblist } from '../JobList'
import { Header } from '../Components-LandingPage/Header'
import twitter from '../assets/socials-x.png'
import linkedin from '../assets/socials-linkedin.png'
import facebook from '../assets/socials-facebook.png'
import './AppliedjobsOverview.css'
import { useParams } from 'react-router-dom'
import { JobContext } from './Jobcontext'
 
 
function AppliedJobsOverview() {
 
  const { id } = useParams()
  const { appliedJobs } = useContext(JobContext);
 
  const job = appliedJobs.find(job => job.id === id)
 
  const steps = [
    { label: 'Applied', sub: '2 days ago', status: 'completed' },
    { label: 'Assessment scheduled', sub: '1 day ago', status: 'completed' },
    { label: 'Expected date for next update', sub: 'Waiting for company response...', status: 'pending' },
  ];
 
  return (
   
    <div >
    <Header/>
   
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}} className='appliedjobsO-job-card'>
      <div >
      <div  className="myjobs-card-header">
        <div><h2 className="myjobs-job-title">Software Engineer</h2></div>
           
      </div>    
      <div style={{marginTop:"35px"}} className="myjobs-company-sub">
        <p className="myjobs-company-name"> Accenture<span className="Opportunities-divider">|</span><span className="star"><img src={starIcon} /></span> 3 <span className="Opportunities-divider">|</span><span>123</span></p>
      </div>      
      <div style={{marginTop:"20px"}} className="Opportunities-job-details">
        <p className='Opportunities-detail-line'><img src={time} className='card-icons' />2 years <span className="Opportunities-divider">|</span> <span>15k/Month </span><span className="Opportunities-divider">|</span> <img src={experience} className='card-icons' />2years of experience <span className="Opportunities-divider">|</span><img src={place} className='card-icons' /> Coimbatore </p>
      </div>      
      <div  style={{marginTop:"20px"}} className="Applied-job-tags">
        <span className="Opportunities-job-tag full-time">Full-Time</span>
        <span className="applied-application-status status-progress"> In Progress</span>
      </div>    
      </div>
       
      <div style={{display:"flex",flexDirection:"column",alignItems:"end", paddingRight:"50px"}}>
        <span className="menu-dots">⋮</span>
       <span style={{marginRight:"100px", padding:"15px",fontSize:"45px"}} className="Opportunities-job-logo-placeholder">{"Wipro".charAt(0).toUpperCase()}</span>
      </div>    
      </div>
         
     
     
     <hr className="Opportunities-separator" />
   
   
    <div className='AppliedJobs-overview-main'>
    <div className='opp-job-main'>
    <div className="opp-job-details-card">
                  {/* Job Highlights */}
                  <div className="opp-job-highlights">
                    <h3>Job Highlights</h3>
                    <ul>
                    <li>Experience with cloud platforms (AWS/GCP/Azure)</li>
                    <li>Strong knowledge of data structures and algorithms</li>
                    <li>Experience with high-traffic, distributed systems</li>  
                    </ul>    
                  </div>
                    <div className="opp-job-highlights">
                  <h3>Company Overview</h3>
                  <p>
                    "Apple is a global technology leader dedicated to bringing the best user experience to customers through innovative **hardware, software, and services** (iPhone, Mac, Watch, App Store, iCloud). </p>
                    <p>Apple India (**Apple IN**) is a rapidly expanding strategic pillar, focusing on **local manufacturing** (aligning with 'Make in India'), **R&D and engineering support** from its centers in Bangalore and Hyderabad, and  expanding **direct retail presence** to serve the fast-growing Indian consumer market.
                  </p>
     
                  <h3>Job Description</h3>
                  <p>
                    We are seeking a skilled Software Engineer to join our core services team. You will be responsible for designing and implementing high-performance, scalable, and secure backend services. This includes API development, database optimization, and ensuring the reliability of our critical systems. If you thrive in a fast-paced environment and have a passion for building robust infrastructure, we encourage you to apply.
                  </p>
     
                  <h3>Responsibilities</h3>
                  <ul>
                    <li> Candidates with 2 to 3 years of relevant experience preferred.  </li>
                    <li>Proven work experience (2+ years) as a UI/UX Designer or in a similar role.</li>
                    <li>Strong communication skills</li>
                  </ul>
     
                  <h3>Key Details:</h3>
                  <p><strong>Role:</strong> UI/UX Designer</p>
                  <p><strong>Industry Type:</strong> IT Services</p>
                  <p><strong>Department:</strong> IT</p>
                  <p><strong>Job Type:</strong>FullTime</p>
                  <p><strong>Location:</strong> Coimbatore</p>
 
                  <h3>Key Skills</h3>
                   <div className="opp-key-skills-container">
                 
                   <span >Ms Office</span>
                   <span >Ms Excel</span>
                   <span >Html</span>
                   <span >CSS</span>
                  </div>
    </div>
                  <div className="opp-job-highlights">
                 
                  </div>
                  <hr className="Opportunities-separator" />
     
                  <div className="opp-share-job">
                    <div>
                      <p>Share This job</p>
                      <div className='opp-socials'>
                        <div><img src={linkedin} className='opp-socials-icon' alt="linkedin" /></div>
                        <div><img src={facebook} className='opp-socials-icon' alt="facebook" /></div>
                        <div><img src={twitter} className='opp-socials-icon' alt="twitter" /></div>
                      </div>
                    </div>
                    <button className="opp-report-btn">Report this job</button>
                  </div>
    </div>
    </div>
   <div className="status-container">
      <div className="status-header">
        <span className="icon">💼</span>
        <h3>Application status</h3>
      </div>
     
      <div className="stepper-wrapper">
        {steps.map((step, index) => (
          <div key={index} className={`step-item ${step.status}`}>
            <div className="step-line-container">
              <div className="step-dot">
                <div className="inner-dot"></div>
              </div>
              {index !== steps.length - 1 && <div className="vertical-line"></div>}
            </div>
            <div className="step-content">
            <p className="step-label">{step.label}</p>
            <p className="step-subtext">{step.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
   
  );
};
export default AppliedJobsOverview