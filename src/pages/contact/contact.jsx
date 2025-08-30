import "./contact.css";
import Header from '../../components/layout/header/header';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation();

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
          title: t('contact.alerts.success.title'),
          text: t('contact.alerts.success.text'),
          icon: 'success',
          background: '#1f2937',
          color: '#e5e7eb',
          iconColor: '#3b82f6',
          confirmButtonColor: '#10b981',
          confirmButtonText: t('contact.alerts.confirmButton'),
          customClass: {
            popup: 'rounded-xl',
            confirmButton: 'text-white text-lg font-semibold'
          },
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
        title: t('contact.alerts.error.title'),
        text: t('contact.alerts.error.text'),
        icon: 'error',
        background: '#1f2937',
        color: '#fca5a5',
        confirmButtonColor: '#ef4444',
        confirmButtonText: t('contact.alerts.confirmButton'),
        customClass: {
          popup: 'rounded-xl',
          confirmButton: 'text-white text-lg font-semibold'
        },
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
          <h1 className="gradient-text">{t('contact.title')}</h1>
          <p className="text-center mb-6 sm:mb-8">{t('contact.subtitle')}</p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="label">{t('contact.form.firstName')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder={t('contact.form.firstNamePlaceholder')} 
                  required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="lastname" className="label">{t('contact.form.lastName')}</label>
                <input 
                  type="text" 
                  id="lastname" 
                  name="lastname" 
                  placeholder={t('contact.form.lastNamePlaceholder')} 
                  required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="label">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder={t('contact.form.emailPlaceholder')} 
                  required 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="label">{t('contact.form.phone')}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder={t('contact.form.phonePlaceholder')} 
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="label">{t('contact.form.message')}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t('contact.form.messagePlaceholder')}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent text-white border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-vertical"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 font-semibold"
              >
                {t('contact.form.submitButton')}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;