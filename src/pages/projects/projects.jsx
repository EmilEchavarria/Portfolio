"use client";
import "./projects.css"; // Asegúrate de que este archivo CSS esté bien configurado
import Header from "../../components/layout/header/header";
import { MagicCard } from "../../components/ui/magic-card"; // Asegúrate de que la ruta sea correcta
import { Meteors } from "../../components/ui/meteors"; // Asegúrate de que la ruta sea correcta

import jtag from "../../assets/images/projects/jtag.png";
import autogleam from "../../assets/images/projects/autogleam.png";
import portfolio from "../../assets/images/projects/portfolio.png";


const projects = [
  { id: 1, title: "Auto Gleam", description: "An app for managing car wash services.", image: autogleam},
  { id: 2, title: "J Tag Events", description: "A web platform for event management.", image: jtag },
  { id: 3, title: "Portfolio", description: "An online store with modern UI. ewrw", image: portfolio },
  { id: 4, title: "Portfolio Website", description: "Personal portfolio showcasing my work.", image: jtag },
  { id: 5, title: "Task Manager", description: "A task management tool for productivity.", image: jtag },
  { id: 6, title: "Blog Platform", description: "A blogging platform with rich features.", image: jtag },
  { id: 7, title: "Chat App", description: "A real-time chat application.", image: jtag },
  { id: 8, title: "Crypto Dashboard", description: "A dashboard for crypto market insights.", image: jtag },
];
export function Projects() {
  return (
    <main>
      <Header />
      <section id="about-header" className="text-center my-8">
        <h1 className="gradient-text">Projects</h1>
      </section>
      <div className="projects-grid">
        {projects.map((project) => (
          <MagicCard key={project.id} className="project-magic-card">
            <div className="project-card">
              {/* Meteors como fondo de la tarjeta */}
              <div className="meteors-wrapper">
                <Meteors />
              </div>

              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <button className="project-button">See More</button>
                <button className="project-demo-button">Demo</button>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </main>
  );
}


export default Projects;
