import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Projects, Experience, Education, Contact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/50 to-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
