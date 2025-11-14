export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">About</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        I'm a second-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Bharati Vidyapeeth College of Engineering, Navi Mumbai. I'm building solid foundations in programming, data structures, machine learning, and problem-solving by working on academic and personal projects.
      </p>
    </section>
  );
}

export function Skills() {
  const skills = ['Python', 'SQL', 'C (DSA)', 'Machine Learning', 'Pandas', 'NumPy', 'Power BI', 'AWS Architecture', 'Cybersecurity Basics', 'Web Development'];
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <span key={s} className="px-3 py-2 rounded-lg bg-white shadow border text-sm text-gray-800">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  const items = [
    {
      title: 'Kerala Tourism Website (Govt. Collaboration Idea)',
      desc: 'Concept and development of a travel website tailored for Kerala tourism, focusing on UX, content strategy, and scalable architecture.'
    },
    {
      title: 'AI Portfolio',
      desc: 'Built an AI-powered personal portfolio showcasing projects, skills, and interactive components.'
    },
    {
      title: 'Webathon Participation',
      desc: 'Collaborated in a hackathon-style web event, shipping features rapidly and learning agile delivery.'
    }
  ];
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        {items.map((p) => (
          <div key={p.title} className="rounded-2xl border bg-white shadow p-5 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="mt-2 text-gray-700 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  const roles = [
    { org: 'IBM', role: 'Python + Machine Learning Intern' },
    { org: 'Deloitte', role: 'Data Analytics Intern' },
    { org: 'Microsoft (Power BI)', role: 'BI Intern' },
    { org: 'Deloitte', role: 'Cybersecurity Intern' },
  ];
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-6 grid gap-4">
        {roles.map((r) => (
          <div key={r.org + r.role} className="rounded-xl border bg-white p-4 shadow">
            <p className="font-semibold">{r.role}</p>
            <p className="text-sm text-gray-600">{r.org}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="mt-6 rounded-xl border bg-white p-5 shadow">
        <p className="font-semibold">B.Tech in Artificial Intelligence and Machine Learning</p>
        <p className="text-sm text-gray-600">Bharati Vidyapeeth College of Engineering, Navi Mumbai</p>
        <p className="mt-2 text-sm">CGPA (1st Year): 9.52</p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-4 text-gray-700">Want to collaborate or discuss opportunities? Reach out:</p>
      <div className="mt-4 grid gap-3">
        <a href="mailto:youremail@example.com" className="text-indigo-600 hover:underline">youremail@example.com</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">GitHub</a>
      </div>
    </section>
  );
}
