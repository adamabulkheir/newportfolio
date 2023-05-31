import React, {useState} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedSection, setSelectedSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };
  return (
    <div className='App'>
      <Header />
      <Navbar
        selectedSection={selectedSection}
        onNavigationClick={handleNavigationClick}
      />
      {selectedSection === 'About Me' && <AboutMe />}
      {selectedSection === 'Portfolio' && <Portfolio />}
      {selectedSection === 'Contact' && <Contact />}
      <Footer />
    </div>
  );
}

// function Navbar(){}

export default App;
