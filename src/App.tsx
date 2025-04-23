import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './compoments/layout/Header.tsx';
import HomePage from './compoments/pages/homePage/HomePage.tsx';
import Project from './compoments/pages/projects/Project.tsx';
import Error from './compoments/pages/error/Error.tsx';
import Footer from './compoments/layout/Footer.tsx';
import ScrollToAnchor from './compoments/utility/ScrollToAnchor.tsx';
import React from 'react';

/** Routage de l'aplication
 * @returns {JSX.Element} - Le composant App qui contient le routage de l'application
 * @component ScrollToAnchor - Permet la navigation depuis une page vers une ancre situé dans une autre page
 * @component Header - Le composant d'en-tête de l'application
 * @component HomePage - La page d'accueil de l'application
 * @component Project - La page de projet de l'application
 * @component Error - La page d'erreur de l'application
 * @component Footer - Le composant de pied de page de l'application
 * @component Router et route - Composants de routage de l'application
 */
function App(): React.JSX.Element {
  return (
    <Router>
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="project/" element={<Project />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
