import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './compoments/layout/Header.tsx';
import HomePage from './compoments/pages/homePage/HomePage.tsx';
import Project from './compoments/pages/projects/Project.tsx';
import Error from './compoments/pages/error/Error.tsx';
import Footer from './compoments/layout/Footer.tsx';

function App() {
  return (
    <Router>
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
