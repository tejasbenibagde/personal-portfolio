import Device from "../../animations/deviceloader/Device";
import Rounded from "../../buttons/roundedButton/Rounded";


function AboutHero() {



    return (
        <>
            <div className="md:px-[5vw] xl:mt-[5vh]">
                <h1 className='text-[11vw] leading-[11vw] md:leading-[7vw] md:text-[7.5vw] lg:text-[6vw] lg:leading-[6vw] tracking-[-0.2vw]'>Weaving Code -<br /> One Line at a<br className="md:hidden" /> Time </h1>
            </div>

            <div className="bg-red relative flex items-center justify-center md:px-[5vw] lg:px-[10vw]">
                <div className="z-[1] w-full flex justify-end items-center px-[5vw] h-[30vw] md:h-[25vw]">
                    <Rounded bg={'var(--black)'} >
                        <Device />
                    </Rounded>
                    <div className="translate-y-[-25vw]">
                    </div>
                </div>
                <div className="z-[0] absolute w-full h-[1px] bg-[var(--black)] opacity-[0.5]" />
            </div>
        </>
    )
}

export default AboutHero