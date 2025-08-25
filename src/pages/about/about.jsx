import "./about.css";

import Header from "../../components/layout/header/header";
import photo from "../../assets/images/description/photo.png";
//import { IconCloud } from "../../components/ui/icon-cloud";

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
import vs from "../../assets/images/about/vs.png";
import vsc from "../../assets/images/about/vsc.png";
import powerbi from "../../assets/images/about/powerbi.png";
import docker from "../../assets/images/about/docker.png";
import nodejs from "../../assets/images/about/nodejs.png";








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
        id="about-description-container"
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
      
      {/* Frontend */}
      <div className="mt-8">
        <h3 className="text-2xl text-white mb-4">Frontend</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {[{ img: js, name: "JavaScript" }, { img: ts, name: "TypeScript" }, { img: react, name: "React" },
            { img: angular, name: "Angular" }, { img: html, name: "HTML" }, { img: css, name: "CSS" },
            { img: figma, name: "Figma" },
            { img: figma, name: "Next JS" },
            { img: figma, name: "Astro" }
          
          ].map((tech, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:scale-105 transition-transform">
              <img src={tech.img} alt={tech.name} className="w-10 h-10" />
              <span className="text-white text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Backend */}
      <div className="mt-12">
        <h3 className="text-2xl text-white mb-4">Backend</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {[
            { img: csharp, name: ".NET Framework" }, { img: mysql, name: "MySQL" }, { img: sqlserver, name: "SQL Server" },{ img: nodejs, name: "Node JS" }, {img: nodejs, name: "Express JS"} ].map((tech, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:scale-105 transition-transform">
              <img src={tech.img} alt={tech.name} className="w-10 h-10" />
              <span className="text-white text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>w 
      
   {/* Developer Tools */}
<div className="mt-12">
  <h3 className="text-2xl text-white mb-4">Developer Tools</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
    {[
      { img: git, name: "Git" },
      { img: github, name: "GitHub" },
      { img: vs, name: "Visual Studio" },
      { img: vsc, name: "VS Code" },
      { img: docker, name: "Docker" },
      { img: powerbi, name: "Power BI" },
        { img: docker, name: "Railway" },
      { img: docker, name: "Vercel" }
    ].map((tech, index) => (
      <div 
        key={index} 
        className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 hover:scale-105 transition-transform"
      >
        <img src={tech.img} alt={tech.name} className="w-10 h-10" />
        <span className="text-white text-lg font-medium">{tech.name}</span>
      </div>
    ))}
  </div>
</div>

    </section>

          {/* Nube de Iconos - Centrada 
          <div className="icon-cloud ">
            <IconCloud
              images={[js,ts,react,angular,html,css,git,github,figma,mysql,csharp,]}
            />
          </div>*/}

  

    </main>
  );
}

export default About;
