import transition from './pagetransition'

import MiniContact from './components/pageComponents/home/MiniContact';
import AboutHero from './components/pageComponents/about/AboutHero';
import Services from './components/pageComponents/about/Services';
import Curve from './components/pageComponents/about/Curve';

const About = () => {

  return (
    <>
      <div className='pt-[20vh] px-[5vw] w-full mb-[10vh]'>
        <AboutHero />
        <Services />
      </div>
      <Curve />
      <MiniContact />
    </>

  )
}

export default transition(About)