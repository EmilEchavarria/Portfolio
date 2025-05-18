import "./education.css"; // Asegúrate de que este archivo CSS esté correctamente configurado
import Header from '../../components/layout/header/header';
import { Marquee } from "../../components/ui/marquee"; // Asegúrate de que la ruta sea correcta

//CERTIFICATES IMAGES
import intofront from "../../assets/images/certificates/intofront.png";
import angularitla from "../../assets/images/certificates/angularitla.png";
import cssdepth from "../../assets/images/certificates/cssdepth.png";
import javascript from "../../assets/images/certificates/intofront.png";
import versioncontrol from "../../assets/images/certificates/versioncontrol.png";
import reactmeta from "../../assets/images/certificates/reactmeta.png";
import csharpbasicitla from "../../assets/images/certificates/csharpbasicitla.png";



export function Education() {
    return (
      <main>
      <Header/>
      <section id="about-header" className="text-center my-8">
        <h1 className="gradient-text">Education</h1>
        <h2 className="text-xl text-white">Academic Background</h2>

      </section>
      <section id="education-section" className="py-12 px-4 text-center">

  <ol className="relative border-s border-gray-400 dark:border-gray-700">  

  <li className="mb-10 ms-4 mt-20">
    <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900"></div>
    <time className="mb-1 text-sm font-normal leading-none text-white">Graduation: 2026</time>
    <h3 className="text-lg font-semibold text-white">Software Development Technologist, ITLA (Instituto Tecnológico de las Américas)</h3>
    <p className="mb-4 text-base font-normal text-white">
        Comprehensive training in all stages of software development, with a strong practical approach to technical tasks. Proficient in applying modern knowledge, techniques, skills, and tools of the discipline for technological engineering activities.
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


<section id="certificates-section" className="py-12 w-full bg-gray-800">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-semibold text-white">
      Professional Certifications
    </h1>
    <h2 className="text-xl text-gray-400 mt-2">
      Certifications that Highlight My Skills
    </h2>
  </div>
  <div id="certificates-list" className="mt-8 w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        Introduction to Front-End Development - Meta
      </h3>
      <p className="text-gray-400">Completed in 2024</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        CSS in Depth - Meta
      </h3>
      <p className="text-gray-400">Completed in 2024</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        Programming with JavaScript - Meta
      </h3>
      <p className="text-gray-400">Completed in 2024</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        Version Control with Git - Meta
      </h3>
      <p className="text-gray-400">Completed in 2024</p>
    </div>
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        Front-End Development with Angular - ITLA
      </h3>
      <p className="text-gray-400">Completed in 2024</p>
    </div>

    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        Backend Development with C# .Net - ITLA
      </h3>
      <p className="text-gray-400">Completed in 2025</p>
    </div>

     <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl text-white font-medium mb-2">
        Front-End Development with React - Meta
      </h3>
      <p className="text-gray-400">Completed in 2025</p>
    </div>
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

     <div className="card">
      <img src={reactmeta} alt="React Meta" className="card-img" />
      <div className="card-content">
        <h3>Front-End Development with React</h3>
      </div>
    </div>

     <div className="card">
      <img src={csharpbasicitla} alt="C# Basic ITLA" className="card-img" />
      <div className="card-content">
        <h3>Backend Development with C# .Net</h3>
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


    </main>);
  }
  
  export default Education;
  