import Banner from './sections/Banner.tsx';
import About from './sections/About.tsx';
import Skill from './sections/Skilles.tsx';

function HomePage() {
  return (
    <main className="px-2 mt-6 max-w-[1024px] w-full flex flex-col items-center border-1 border-indigo-500">
      <Banner />
      <About />
      <Skill />
    </main>
  );
}

export default HomePage;
