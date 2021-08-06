import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    const result = await fetch(url);
    const response = await result.json();
    setJobs(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
      </section>
    );
  }
  const { company, title, dates, duties } = jobs[index];
  const renderDuties = duties.map((duty, index) => {
    return (
      <div className="job-desc">
        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
        <p>{duty}</p>
      </div>
    );
  });
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="job-center">
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
        </article>
        {renderDuties}
      </div>
    </section>
  );
}

export default App;
