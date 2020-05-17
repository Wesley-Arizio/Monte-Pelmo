import React from 'react';

import './index.css'

import Header from './Components/Header/index';
import SectioFlavor from './Components/Section-flavor/index';
import SectionInf from './Components/Section-info/index';
import SectionGallery from './Components/Section-gallery/index';
import SectionContact from './Components/Section-contact/index';
import Footer from './Components/Footer/index'


function App() {
  return (
    <>
      <Header />
      <SectioFlavor />
      <SectionInf />
      <SectionGallery />
      <SectionContact />
      <Footer />
    </>
  
  );
}

export default App;
