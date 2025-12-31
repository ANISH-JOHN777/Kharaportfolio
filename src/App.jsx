import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Impact from './components/Impact';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Competencies />
        <Experience />
        <Impact />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

export default App;
