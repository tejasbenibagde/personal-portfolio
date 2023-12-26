import Magnet from "../magnet/Magnet"

function Footer() {

    return (
        <div className='bg-[var(--black)] flex flex-col md:flex-row-reverse px-[5vw] py-[5vh] gap-[3vh] md:justify-between'>
            <div className='flex flex-col gap-[1.7vh]'>
                <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[1.6vw] lg:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.7vw]'>SOCIALS</h1>
                <div className='flex gap-[3vw]'>
                    <Magnet>
                        <a href="https://www.linkedin.com/in/tejas-benibagde-457700220/" className='text-[var(--white)] text-[4.2vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.4vw] 2xl:text-[1vw]'>LinkedIn</a>
                    </Magnet>
                    <Magnet>
                        <a href="https://github.com/tejasbenibagde" className='text-[var(--white)] text-[4.2vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.4vw] 2xl:text-[1vw]'>Github</a>
                    </Magnet>
                </div>
            </div>
            <div className='block md:hidden h-[1px] w-full bg-[var(--white)] opacity-[0.5]' />
            <div className='flex items-center justify-between md:gap-[3vw]'>
                <div className='flex flex-col gap-[1.7vh]'>
                    <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[1.6vw] lg:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.7vw]'>VERSION</h1>
                    <div className='flex gap-[3vw]'>
                        <p className='text-[var(--white)] text-[4.2vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.4vw] 2xl:text-[1vw]'>v-0.0.1 @2023</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[1.7vh]'>
                    <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[1.6vw] lg:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.7vw]'>LOCATION</h1>
                    <div className='flex gap-[3vw]'>
                        <p className='text-[var(--white)] text-[4.2vw] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.4vw] 2xl:text-[1vw]'>Bharat ~ India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer