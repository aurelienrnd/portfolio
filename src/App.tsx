import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/layout/Header.tsx';
import HomePage from './components/pages/homePage/HomePage.tsx';
import Project from './components/pages/projects/Project.tsx';
import Error from './components/pages/error/Error.tsx';
import Footer from './components/layout/Footer.tsx';
import ScrollToAnchor from './components/utility/ScrollToAnchor.tsx';
import React from 'react';

/** Routage de l'application
 * @returns {JSX.Element} - Le composant App qui contient le routage de l'application.
 * @component ScrollToAnchor - Permet la navigation vers une ancre située sur une autre page.
 * @component Header - Composant d'en-tête de l'application.
 * @component HomePage - Page d'accueil de l'application.
 * @component Project - Page des projets de l'application.
 * @component Error - Page d'erreur affichée pour les routes non définies.
 * @component Footer - Composant de pied de page de l'application.
 * @component Router et Route - Composants de routage de l'application.
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
