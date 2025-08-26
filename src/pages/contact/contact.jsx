import "./contact.css";
import Header from '../../components/layout/header/header';
import Swal from 'sweetalert2';

export function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          background: '#1f2937',
          color: '#e5e7eb',
          iconColor: '#3b82f6',
          confirmButtonColor: '#10b981',
          customClass: {
            popup: 'rounded-xl',
            confirmButton: 'text-white text-lg font-semibold'
          },
          // Mejora responsive para SweetAlert
          width: '90%',
          heightAuto: true
        });

      } else {
        throw new Error("Error en la respuesta");
      }
    } 
    catch (error) {
      console.error(error);

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
        },
        // Mejora responsive para SweetAlert
        width: '90%',
        heightAuto: true
      });
    }
  };

  return (
    <main className="min-h-screen text-white ">
      <Header />
      
        <section className="w-full min-h-screen flex items-center justify-center mb-12 px-4 sm:px-6">
        <div className="form-container">
          <h1 className="gradient-text">Contact Me</h1>
          <p className="text-center mb-6 sm:mb-8">Feel free to reach out to me using the form below</p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="label">First Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your First Name" 
                  required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="label">Last Name</label>
                <input 
                  type="text" 
                  id="lastname" 
                  name="lastname" 
                  placeholder="Your Last Name" 
                  required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="label">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="label">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="label">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-vertical"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 font-semibold"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;