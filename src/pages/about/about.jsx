import "./about.css";

import Header from "../../components/layout/header/header";
import photo from "../../assets/images/description/photo.png";
import { IconCloud } from "../../components/ui/icon-cloud";
import { Marquee } from "../../components/ui/marquee"; // Asegúrate de que la ruta sea correcta

//ICON CLOUD IMAGES

import js from "../../assets/images/about/js.png";
import mysql from "../../assets/images/about/mysql.png";
import html from "../../assets/images/about/html.png";
import css from "../../assets/images/about/css.png";
import ts from "../../assets/images/about/typescript.png";
import angular from "../../assets/images/about/angular.png";
import react from "../../assets/images/about/react.png";
import csharp from "../../assets/images/about/csharp.png";
import github from "../../assets/images/about/github.png";
import git from "../../assets/images/about/git.png";
import figma from "../../assets/images/about/figma.png";
import sqlserver from "../../assets/images/about/sqlserver.png";

//CERTIFICATES IMAGES
import intofront from "../../assets/images/certificates/intofront.png";
import angularitla from "../../assets/images/certificates/angularitla.png";
import cssdepth from "../../assets/images/certificates/cssdepth.png";
import javascript from "../../assets/images/certificates/intofront.png";
import versioncontrol from "../../assets/images/certificates/versioncontrol.png";


export function About() {
  return (
    <main className="about-container">
      <Header />

      {/* Título principal */}
      <section id="about-header" className="text-center my-8">
        <h1 className="gradient-text">About Me</h1>
      </section>

      {/* Descripción personal */}
      <section
        id="description-container"
        className="flex flex-col md:flex-row items-center md:items-center justify-center py-12 px-4"
      >
        <div className="text-container md:w-1/2 text-left">
          <h1 className="text-3xl font-semibold text-white">Emil Echavarria</h1>
          <h2 className="text-xl text-gray-400">Software Developer</h2>

          <p className="text-gray-300 mt-4 opacity-0 transform translate-y-4 animate-slideUp">
            💻 I’m <span className="text-blue-500">Emil Echavarria</span>, 19
            years old, and a{" "}
            <span className="text-blue-500">junior software developer</span>.
            While my focus spans various areas of programming, my true passion
            lies in front-end development, where I enjoy creating interactive
            and visually engaging experiences.
          </p>
          <p className="text-gray-300 mt-4 opacity-0 transform translate-y-4 animate-slideUp delay-200">
            <span className="text-blue-500">
              I love exploring new technologies
            </span>{" "}
            and constantly learning, which allows me to enhance my skills and
            approach projects with a more holistic perspective on the software
            development process.
          </p>
          <p className="text-gray-300 mt-4 opacity-0 transform translate-y-4 animate-slideUp delay-400">
            I’m always looking for{" "}
            <span className="text-blue-500">new challenges</span> that allow me
            to grow professionally, collaborate on projects that have a positive
            impact on technology, and stay at the forefront of trends shaping
            the future of development. 🚀
          </p>
        </div>
        <div className="image">
          <img
            src={photo}
            alt="Emil Echavarria"
            id="profile-photo"
            className="border-4 border-gray-700"
          />
        </div>
      </section>

      {/* Sección de Stack tecnológico */}

      <section id="tech-stack-section" className="py-12 px-4 text-center">
        <h1 className="text-3xl font-semibold text-white">MY TECH STACK</h1>
        <h2 className="text-xl text-gray-400 mb-6">Technologies I work with</h2>

        {/* Contenedor de tres columnas */}
        <div className="flex justify-between items-center gap-6 mt-8">
          {/* Frontend - Alineado a la izquierda */}
          <div className="w-1/3 text-left">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">
              Frontend
            </h3>
            <ul className="list-none space-y-3 text-lg text-gray-300">
              <li className="flex items-center gap-3">
                <img src={js} alt="" className="w-8 h-8" /> JavaScript
              </li>
              <li className="flex items-center gap-3">
                <img src={ts} alt="" className="w-8 h-8" /> TypeScript
              </li>
              <li className="flex items-center gap-3">
                <img src={react} alt="" className="w-8 h-8" /> React
              </li>
              <li className="flex items-center gap-3">
                <img src={angular} alt="" className="w-8 h-8" /> Angular
              </li>
              <li className="flex items-center gap-3">
                <img src={html} alt="" className="w-8 h-8" /> HTML
              </li>
              <li className="flex items-center gap-3">
                <img src={css} alt="" className="w-8 h-8" /> CSS
              </li>
              <li className="flex items-center gap-3">
                <img src={figma} alt="" className="w-8 h-8" /> UI/UX con
                Figma
              </li>
            </ul>
          </div>

          {/* Nube de Iconos - Centrada */}
          <div className="w-1/3 flex justify-center">
            <IconCloud
              images={[js,ts,react,angular,html,css,git,github,figma,mysql,csharp,]}
            />
          </div>

          {/* Backend - Alineado a la izquierda */}
          <div className="w-1/3 text-left ml-20 mb-20">
            <h3 className="text-2xl font-semibold text-green-400 mb-3">
              Backend
            </h3>
            <ul className="list-none space-y-3 text-lg text-gray-300">
              <li className="flex items-center gap-3">
                <img src={csharp} alt="" className="w-8 h-8" />
                <span>.NET Framework / C#</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={mysql} alt="" className="w-8 h-8" />
                <span>MySQL</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={sqlserver} alt="" className="w-8 h-8" />
                <span>SQL Server</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={git} alt="" className="w-8 h-8" />
                <span>Git</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={github} alt="" className="w-8 h-8" />
                <span>GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education-section" className="py-12 px-4 text-center">
  <h1 className="text-3xl font-semibold text-white">My Education</h1>
  <h2 className="text-xl text-white">Academic Background</h2>
  <ol className="relative border-s border-gray-400 dark:border-gray-700">  

  <li className="mb-10 ms-4 mt-20">
    <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
    <time className="mb-1 text-sm font-normal leading-none text-white">Graduation: 2026</time>
    <h3 className="text-lg font-semibold text-white">Software Development Technologist, ITLA (Instituto Tecnológico de las Américas)</h3>
    <p className="mb-4 text-base font-normal text-white">
        Comprehensive training in all stages of software development, with a strong practical approach to technical tasks. Proficient in applying modern knowledge, techniques, skills, and tools of the discipline for technological engineering activities. ([itla.edu.do](https://itla.edu.do/tecnologia-en-desarrollo-de-software/?utm_source=chatgpt.com))
    </p>
</li>

<li className="mb-10 ms-4">
    <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
    <time className="mb-1 text-sm font-normal leading-none text-white">Completion: 2026</time>
    <h3 className="text-lg font-semibold text-white">Meta Front-End Developer Professional Certificate</h3>
    <p className="text-base font-normal text-white">
        Comprehensive training in front-end development, covering HTML, CSS, JavaScript, React.js, and responsive design. Developed practical skills through hands-on projects, culminating in a capstone project that showcases proficiency in building dynamic and responsive web applications.
    </p>
</li>

<li className="ms-4">
    <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
    <time className="mb-1 text-sm font-normal leading-none text-white">2022 - 2024</time>
    <h3 className="text-lg font-semibold text-white">Extracurricular English Course at UASD ( Universidad Autónoma de Santo Domingo)</h3>
    <p className="text-base font-normal text-white">
        An extracurricular English course offered by the Universidad Autónoma de Santo Domingo (UASD), designed to improve English language skills, including listening comprehension, reading, writing, and speaking. The course lasts for 2 years, structured in progressive levels, with the goal of providing an advanced command of the language for application in various professional and academic contexts.
    </p>
</li>

  </ol>
</section>




    {/* Sección de Certificados */}
    <section id="certificates-section" className="py-12 px-4 text-center">
  <h1 className="text-3xl font-semibold text-white">My Certificates</h1>
  <h2 className="text-xl text-gray-400">
    Certifications that Highlight My Skills
  </h2>
  <div id="certificates-list" className="mt-6">
    <ul className="list-none space-y-3 text-lg text-gray-300">
      <li>
        <strong>Introduction to Front-End Development - Meta</strong>
        <p>Completed in 2024</p>
      </li>
      <li>
        <strong>CSS in Depth - Meta</strong>
        <p>Completed in 2024</p>
      </li>
      <li>
        <strong>Programming with JavaScript - Meta</strong>
        <p>Completed in 2024</p>
      </li>
      <li>
        <strong>Version Control with Git - Meta</strong>
        <p>Completed in 2024</p>
      </li>
      <li>
        <strong>Front-End Development with Angular - ITLA</strong>
        <p>Completed in 2024</p>
      </li>
    </ul>
  </div>
</section>



    {/* marquee */}
<section id="marquee-container">
  <h2>Certificates</h2>
  <Marquee
    className="custom-marquee"
    reverse={false}
    pauseOnHover={false}
    style={{ "--duration": "20s" }}>
    <div className="card">
      <img
        src={intofront}
        alt="Introduction to Front-End Development"
        className="card-img"
      />
      <div className="card-content">
        <h3>
          Introduction to Front-End Development
        </h3>
      </div>
    </div>

    <div className="card">
      <img src={cssdepth} alt="CSS in Depth" className="card-img" />
      <div className="card-content">
        <h3>HTML and CSS in depth
        </h3>
      </div>
    </div>

    <div className="card">
      <img
        src={javascript}
        alt="JavaScript Essentials"
        className="card-img"
      />
      <div className="card-content">
        <h3>Programming with Java Script</h3>
      </div>
    </div>

    <div className="card">
      <img src={versioncontrol} alt="Version Control with Git" className="card-img" />
      <div className="card-content">
        <h3>Version Control</h3>
      </div>
    </div>

    <div className="card">
      <img src={angularitla} alt="Angular ITLA" className="card-img" />
      <div className="card-content">
        <h3>Front-End Development with Angular</h3>
      </div>
    </div>
  </Marquee>
</section>


<section id="button-container" style={{ marginBottom: "100px" }}>
  <button
    id="btn-projects"
    className="professional-button mb-10"
    onClick={() => (window.location.href = "/projects")}
  >
    See All Certificates
  </button>
</section>


    </main>
  );
}

export default About;
