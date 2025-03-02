import Header from '../../components/layout/header/Header';
import "./Home.css"; // Asegúrate de que este archivo CSS esté correctamente configurado
import photo from "../../assets/images/description/photo.png";

export function Home() {
  return (
    <main>
      <Header />

      <section id="description-container">
        <img src={photo} alt="Home" id="porfile" />
        <div id="description">
        <h1>I&apos;m Emil Echavarria</h1>
        <h2>Software Developer</h2>
        </div>
      </section>

      <p>
      💻 I am a software developer passionate about creating digital solutions 
      that enhance the user experience. I focus on developing projects that
      are not only functional but also intuitive and easy to use. My approach
      is centered around continuous learning and embracing challenges. I am
      always looking for new opportunities to apply my skills and collaborate in innovative teams.🚀
</p>


    </main>
  );
}

export default Home;
