import React from 'react';

function Experience({ experiences }) {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      {experiences.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title} at {job.company}</h3>
          <p className="job-duration">{job.startDate} - {job.endDate} ({job.duration})</p>
          <p className="job-location">{job.location}</p>
          <p className="job-description">{job.description}</p>
          <div className="job-skills">
            <strong>Skills:</strong> {job.skills.join(', ')}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
