import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import './App.css';

import experiencesData from './data/experiences.json';
import skillsData from './data/skills.json';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Experience experiences={experiencesData.experiences} />
        <Skills skills={skillsData.skills} />
      </main>
    </div>
  );
}

export default App;
