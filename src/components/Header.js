import React from 'react';
import Navigation from './Navigation'
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Header({currentPage, setCurrentPage}) {
  const text = 'Pikachu Text';
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by "Babel" into widely supported ES5 syntax.
  return (<header>Header {text}
    <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </header>);
}

export default Header;
