import MiniContact from "./components/pageComponents/home/MiniContact";
import MiniProjects from "./components/pageComponents/home/MiniProjects";
import transition from "./pagetransition";

function Work() {
    return (
        <div className='pt-[15vh] w-[100vw]'>
            <div className="w-full px-[5vw]">
                <h1 className='text-[11vw] md:text-[6vw] tracking-[-0.2vw]' >Creating next <br className="md:hidden" /> level <br className="hidden md:block" /> digital <br className="md:hidden" />  products </h1>
            </div>
            <div>

            </div>
            <MiniProjects />
            <MiniContact />
        </div>
    )
}

export default transition(Work);