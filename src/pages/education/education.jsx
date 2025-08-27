import "./education.css";
import Header from '../../components/layout/header/header';
import { Marquee } from "../../components/ui/marquee";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

//CERTIFICATES IMAGES
import intofront from "../../assets/images/certificates/intofront.png";
import angularitla from "../../assets/images/certificates/angularitla.png";
import cssdepth from "../../assets/images/certificates/cssdepth.png";
import javascript from "../../assets/images/certificates/intofront.png";
import versioncontrol from "../../assets/images/certificates/versioncontrol.png";
import reactmeta from "../../assets/images/certificates/reactmeta.png";
import csharpbasicitla from "../../assets/images/certificates/csharpbasicitla.png";

export function Education() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }, []);

    return (
      <main className="min-h-screen">
        <Header/>
        
        {/* Hero Section */}
        <section className="text-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Education
            </h1>
            <h2 
              className="text-xl sm:text-2xl text-gray-300 font-light"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Academic Background & Professional Development
            </h2>
          </div>
        </section>

        {/* Education Timeline - Professional Design */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Main Timeline Line */}
              <div 
                className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"
                data-aos="fade-down"
                data-aos-duration="1200"
              ></div>
              
              <div className="space-y-12">
                {/* Education Item 1 */}
                <div 
                  className="relative group"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Timeline Dot */}
                    <div 
                      className="flex-shrink-0 relative"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10"
                      data-aos="fade-left"
                      data-aos-delay="400"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
                              Graduation: 2026
                            </span>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-green-400 font-medium">In Progress</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            Software Development Technologist
                          </h3>
                          <p className="text-blue-400 font-semibold mb-4">
                            ITLA (Instituto Tecnológico de las Américas)
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Comprehensive training in all stages of software development, with a strong practical approach to technical tasks. Proficient in applying modern knowledge, techniques, skills, and tools of the discipline for technological engineering activities.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div 
                  className="relative group"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Timeline Dot */}
                    <div 
                      className="flex-shrink-0 relative"
                      data-aos="zoom-in"
                      data-aos-delay="600"
                    >
                      <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
                      data-aos="fade-right"
                      data-aos-delay="700"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-400/10 rounded-full border border-purple-400/20">
                              Completion: 2026
                            </span>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              <span className="text-xs text-yellow-400 font-medium">In Progress</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            Meta Front-End Developer Professional Certificate
                          </h3>
                          <p className="text-purple-400 font-semibold mb-4">
                            Meta (Facebook)
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        Comprehensive training in front-end development, covering HTML, CSS, JavaScript, React.js, and responsive design. Developed practical skills through hands-on projects, culminating in a capstone project that showcases proficiency in building dynamic and responsive web applications.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education Item 3 */}
                <div 
                  className="relative group"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    {/* Timeline Dot */}
                    <div 
                      className="flex-shrink-0 relative"
                      data-aos="zoom-in"
                      data-aos-delay="900"
                    >
                      <div className="w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div 
                      className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/10"
                      data-aos="fade-left"
                      data-aos-delay="1000"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 text-xs font-semibold text-pink-400 bg-pink-400/10 rounded-full border border-pink-400/20">
                              2022 - 2024
                            </span>
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-green-400 font-medium">Completed</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            Extracurricular English Course
                          </h3>
                          <p className="text-pink-400 font-semibold mb-4">
                            UASD (Universidad Autónoma de Santo Domingo)
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        An extracurricular English course designed to improve English language skills, including listening comprehension, reading, writing, and speaking. Structured in progressive levels over 2 years, providing advanced command of the language for professional and academic contexts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Certifications - Enhanced Design */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl font-bold text-white mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Professional Certifications
              </h2>
              <p 
                className="text-xl text-gray-400 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Industry-recognized certifications that validate my technical expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { 
                  title: "Introduction to Front-End Development", 
                  provider: "Meta", 
                  year: "2024", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                    </svg>
                  ), 
                  color: "from-blue-500 to-cyan-500" 
                },
                { 
                  title: "CSS in Depth", 
                  provider: "Meta", 
                  year: "2024", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6l6-2V5z" />
                    </svg>
                  ), 
                  color: "from-purple-500 to-pink-500" 
                },
                { 
                  title: "Programming with JavaScript", 
                  provider: "Meta", 
                  year: "2024", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ), 
                  color: "from-yellow-500 to-orange-500" 
                },
                { 
                  title: "Version Control with Git", 
                  provider: "Meta", 
                  year: "2024", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ), 
                  color: "from-green-500 to-teal-500" 
                },
                { 
                  title: "Front-End Development with Angular", 
                  provider: "ITLA", 
                  year: "2024", 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 15 10-15-10-5zM12 4.26L19.72 7 12 19.74 4.28 7 12 4.26z"/>
                      <path d="m12 2 10 5-10 15L2 7 12 2zm0 2.26L4.28 7 12 19.74 19.72 7 12 4.26z"/>
                    </svg>
                  ), 
                  color: "from-red-500 to-pink-500" 
                },
                { 
                  title: "Backend Development with C# .Net", 
                  provider: "ITLA", 
                  year: "2025", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  ), 
                  color: "from-indigo-500 to-purple-500" 
                },
                { 
                  title: "Front-End Development with React", 
                  provider: "Meta", 
                  year: "2025", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ), 
                  color: "from-cyan-500 to-blue-500" 
                },
                { 
                  title: "UX/UI Design", 
                  provider: "ITLA", 
                  year: "2025", 
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  ), 
                  color: "from-pink-500 to-rose-500" 
                }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon and Provider */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center shadow-lg text-white`}>
                        {cert.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                        {cert.provider}
                      </span>
                    </div>
                    
                    {/* Certificate Title */}
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-gray-100 transition-colors">
                      {cert.title}
                    </h3>
                    
                    {/* Completion Year */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        Completed in {cert.year}
                      </span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Marquee */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="text-center mb-8">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              data-aos="fade-up"
            >
              Certificate Gallery
            </h2>
            <p 
              className="text-xl text-gray-400"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Visual showcase of my achievements
            </p>
          </div>
          
          <div className="relative">
            <div data-aos="fade-in" data-aos-delay="200">
              <Marquee
                className="py-4"
                reverse={false}
                pauseOnHover={true}
                style={{ "--duration": "25s" }}
              >
              {[
                { img: intofront, title: "Introduction to Front-End Development" },
                { img: cssdepth, title: "HTML and CSS in Depth" },
                { img: javascript, title: "Programming with JavaScript" },
                { img: versioncontrol, title: "Version Control" },
                { img: angularitla, title: "Front-End Development with Angular" },
                { img: reactmeta, title: "Front-End Development with React" },
                { img: csharpbasicitla, title: "Backend Development with C# .Net" }
              ].map((cert, index) => (
                <div 
                  key={index}
                  className="mx-4 flex-shrink-0 w-80 h-64 rounded-2xl border border-gray-700 hover:border-gray-600 overflow-hidden group transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-full">
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-sm leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
              </Marquee>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <button
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out border-2 border-gray-600 rounded-2xl hover:border-white hover:shadow-2xl hover:shadow-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              onClick={() => (window.location.href = "/projects")}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View All Certificates</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </section>
      </main>
    );
}

export default Education;