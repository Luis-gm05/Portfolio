import resume from './resume.json';
import Header from './components/Header';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Experience from './components/Experience';

function App() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-800 space-y-10">
      <Header basics={resume.basics} />
      <Summary summary={resume.basics.summary} />
      <Experience work={resume.work} />
      <Education education={resume.education} />
      <Skills skills={resume.skills} />
      <Certificates certificates={resume.certificates} />
      <Languages languages={resume.languages} />
      <Projects projects={resume.projects} />
    </div>
  );
}

export default App
