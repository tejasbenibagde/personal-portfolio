
import transition from "./pagetransition";
import Hero from "./components/pageComponents/home/Hero";
import MiniAbout from "./components/pageComponents/home/MiniAbout";
import MiniProjects from "./components/pageComponents/home/MiniProjects";
import MiniContact from "./components/pageComponents/home/MiniContact";


function Home() {

  return (
    <div className='home-page'>
      <div className='relative h-[110vh] w-[100vw]'>
        <Hero />
      </div>
      <MiniAbout />
      <MiniProjects />
      <div className='bg-[var(--black)]'>
        <MiniContact />
      </div>
    </div>
  )
}

export default transition(Home);