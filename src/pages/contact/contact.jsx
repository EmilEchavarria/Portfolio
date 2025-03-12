import "./Contact.css"; // Asegúrate de que este archivo CSS esté correctamente configurado
import Header from '../../components/layout/header/Header';

export function Contact() {
  return (
    <main className="text-white">
      <Header />
      
      <section className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
        <p className="text-center text-lg mb-8">Feel free to reach out to me using the form below</p>

        <form 
          action="https://formspree.io/f/mayzrkdy" 
          method="POST" 
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Full Name" 
                required 
                className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email Address" 
                required 
                className="w-full px-4 py-2 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>
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
