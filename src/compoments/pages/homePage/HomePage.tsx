import Banner from './sections/Banner.tsx';
import About from './sections/About.tsx';
import Skill from './sections/Skilles.tsx';

function HomePage() {
  return (
    <main className="px-10 mt-6 w-full flex flex-col items-center">
      <Banner />
      <About />
      <Skill />
    </main>
  );
}

export default HomePage;
