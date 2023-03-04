import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning four components, <Header/>, <Navigation/>, <Project/>, <Footer/> from it.
function App() {
  const [currentPage, setCurrentPage] = useState("About");
  console.log(currentPage)
  return(
    <body>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <div>
          {currentPage ==="About" && <About/>}
          {currentPage ==="Portfolio" && <Portfolio/>}
          {currentPage ==="Resume" && <Resume/>}
          {currentPage ==="Contact" && <Contact/>}
        </div>
        <Footer/>
    </body>
  
  ) 
}

export default App;
