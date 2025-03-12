import "./About.css";
import Header from '../../components/layout/header/Header';
import photo from "../../assets/images/description/photo.png";

export function About() {
  return (
    <main className="about-container">
      <Header />

      {/* Título principal */}
      <section id="about-header" className="text-center my-8">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
      </section>

      {/* Descripción personal */}
      <section id="description-container" className="flex flex-col md:flex-row items-center md:justify-between py-12 px-4">
        <div className="profile-section flex flex-col items-center md:items-start">
          <img src={photo} alt="Emil Echavarria" id="profile-photo" className="w-32 h-32 rounded-full border-4 border-gray-700" />
          <div id="description" className="text-center md:text-left mt-4">
            <h1 className="text-3xl font-semibold text-white">I&apos;m Emil Echavarria</h1>
            <h2 className="text-xl text-gray-400">Software Developer</h2>
            <p className="text-lg text-gray-300 mt-4">
              💻 I am a software developer passionate about creating digital solutions 
              that enhance the user experience. I focus on developing projects that
              are not only functional but also intuitive and easy to use. My approach
              is centered around continuous learning and embracing challenges. I am
              always looking for new opportunities to apply my skills and collaborate in innovative teams.🚀
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Stack tecnológico */}
      <section id="tech-stack-section" className="py-12 px-4 bg-gray-800">
        <div id="my-stack-description" className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white">MY TECH STACK</h1>
          <h2 className="text-xl text-gray-400">Technologies I work with</h2>
        </div>
        <div id="tech-stack" className="flex justify-center">
          <ul className="list-none space-y-3 text-lg text-gray-300">
            <li>• .NET Framework</li>
            <li>• JavaScript / TypeScript</li>
            <li>• React / Angular</li>
            <li>• Node.js</li>
            <li>• SQL & NoSQL Databases</li>
            <li>• Version Control (Git)</li>
          </ul>
        </div>
      </section>

      {/* Sección de Educación */}
      <section id="education-section" className="py-12 px-4">
        <div id="education-description" className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white">My Education</h1>
          <h2 className="text-xl text-gray-400">Academic Background</h2>
        </div>
        <div id="education-list" className="text-center">
          <ul className="list-none space-y-3 text-lg text-gray-300">
            <li>
              <strong>Bachelors Degree in Software Engineering</strong>
              <p>ITLA (Instituto Tecnológico de Las Américas) | Expected Graduation: 2025</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Sección de Certificados */}
      <section id="certificates-section" className="py-12 px-4 bg-gray-800">
        <div id="certificates-description" className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white">My Certificates</h1>
          <h2 className="text-xl text-gray-400">Certifications that Highlight My Skills</h2>
        </div>
        <div id="certificates-list" className="text-center">
          <ul className="list-none space-y-3 text-lg text-gray-300">
            <li>
              <strong>Programming with JavaScript - FreeCodeCamp</strong>
              <p>Completed in 2024</p>
            </li>
            <li>
              <strong>React Developer Certification - Codecademy</strong>
              <p>Completed in 2023</p>
            </li>
            <li>
              <strong>Intro to JavaScript - Codecademy</strong>
              <p>Completed in 2023</p>
            </li>
          </ul>
        </div>
      </section>

    </main>
  );
}

export default About;
