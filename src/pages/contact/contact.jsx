import "./contact.css";
import Header from '../../components/layout/header/header';
import Swal from 'sweetalert2';

export function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita la redirección

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xvgalezo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();

        Swal.fire({
          title: 'Mensaje enviado',
          text: 'Gracias por contactarme. Te responderé pronto.',
          icon: 'success',
          background: '#1f2937', // gris oscuro
          color: '#e5e7eb',       // texto gris claro
          iconColor: '#3b82f6',   // azul para el icono
          confirmButtonColor: '#10b981', // verde para el botón
          customClass: {
            popup: 'rounded-xl',
            confirmButton: 'text-white text-lg font-semibold'
          }
        });

      } else {
        throw new Error("Error en la respuesta");
      }
    } 
    catch (error) {
  console.error(error); // ← esto elimina el warning de ESLint

  Swal.fire({
    title: 'Error',
    text: 'Algo salió mal. Por favor intenta de nuevo.',
    icon: 'error',
    background: '#1f2937',
    color: '#fca5a5',
    confirmButtonColor: '#ef4444',
    customClass: {
      popup: 'rounded-xl',
      confirmButton: 'text-white text-lg font-semibold'
    }
  });
}

  };

  return (
    <main className="text-white">
      <Header />
      
      <section className="max-w-3xl mx-auto py-12 px-6 form-container">
        <h1 className="gradient-text">Contact Me</h1>
        <p className="text-center text-lg mb-8">Feel free to reach out to me using the form below</p>

        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-semibold label">First Name</label>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Your First Name" 
        required 
        className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="lastname" className="block text-sm font-semibold label">Last Name</label>
      <input 
        type="text" 
        id="lastname" 
        name="lastname" 
        placeholder="Your Last Name" 
        required 
        className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-semibold label">Your Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        placeholder="Your Email Address" 
        required 
        className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-semibold label">Phone</label>
      <input 
        type="tel" 
        id="phone" 
        name="phone" 
        placeholder="Your Phone Number" 
        className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-semibold label">Your Message</label>
    <textarea
      id="message"
      name="message"
      rows="5"
      placeholder="Write your message here..."
      required
      className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  <div className="text-center">
    <button
      type="submit"
      className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send Message
    </button>
  </div>
</form>

      </section>
    </main>
  );
}

export default Contact;
