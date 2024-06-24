import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Doctor from './Pages/Doctor/Doctor';
import MapHour from './Pages/MapAndHoraire/MapHour';
import Form from './Pages/Form/Form';
import Footer from './Pages/Footer/Footer';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const loadTranslation = async () => {
      if (i18n.language === 'en') {
        const translationEN = await import('./locales/en/translation.json');
        i18n.addResourceBundle('en', 'translation', translationEN.default);
      }
    };

    loadTranslation();
  }, [i18n.language]);

  console.log(`%cMade it with ❤️ By Younes`, 'font-size:20px; color:red');
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Doctor />
      <MapHour />
      <Form />
      <Footer />
    </>
  );
}

export default App;
