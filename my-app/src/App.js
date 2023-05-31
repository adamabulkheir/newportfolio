import React, {useState} from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import AboutMe from './components/aboutme';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
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
