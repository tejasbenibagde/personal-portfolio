import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion as m, useAnimation } from 'framer-motion';

import useParallax from '@/pages/customHooks/useParallax';

//image
import profile from '@/public/images/profile.jpg';


function Hero() {
    const slider = useRef(null);
    const container = useRef(null);

    let y = useParallax(-0.2, container);
    let y2 = useParallax(0.1, container);

    const sliderControls = useAnimation();

    useEffect(() => {
        sliderControls.start({
            x: '-300%',
            transition: {
                duration: 100,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'mirror',
            },
        });
    }, [sliderControls]);


    return (
        <div className='hero-section' ref={container}>
            <div className='hero-image'>
                <m.div style={{ y: y2 }} className='w-full h-full top-0 left-0'>
                    <Image src={profile} alt='profile' fill={true} style={{ objectFit: 'cover' }} className='profile-image' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
                </m.div>
            </div>
            <m.div style={{ y: y }} className='absolute top-[50vh] md:top-[75vh] lg:top-[70vh] left-0'>
                <m.div ref={slider} className='flex relative whitespace-nowrap' animate={sliderControls}>
                    <p className='text-[35vw] md:text-[20vw] lg:text-[16vw] xl:text-[14vw] 2xl:text-[12vw] text-[var(--white)]'>
                        Tejas Benibagde -
                    </p>
                    <p className='absolute translate-x-[100%] text-[35vw] md:text-[20vw] lg:text-[16vw] xl:text-[14vw] 2xl:text-[12vw] text-[var(--white)]'>
                        Tejas Benibagde -
                    </p>
                    <p className='absolute translate-x-[200%] text-[35vw] md:text-[20vw] lg:text-[16vw] xl:text-[14vw] 2xl:text-[12vw] text-[var(--white)]'>
                        Tejas Benibagde -
                    </p>
                    <p className='absolute translate-x-[300%] text-[35vw] md:text-[20vw] lg:text-[16vw] xl:text-[14vw] 2xl:text-[12vw] text-[var(--white)]'>
                        Tejas Benibagde -
                    </p>
                </m.div>
            </m.div>
            <m.div style={{ y: y }} className='absolute w-[90vw] top-[87vh] md:top-[50vh] flex px-[5vw] md:justify-end'>
                <div>
                    <svg
                        className='w-[6vw] md:h-[2vw] h-[6vw] mb-[2vh] md:w-[2vw] lg:w-[1vw] lg:h-[1vw] xl:h-[0.7vw] xl:w-[0.7vw]'
                        width='9'
                        height='9'
                        viewBox='0 0 9 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z' fill='var(--white)' />
                    </svg>
                    <h2 className='text-[var(--white)] text-[5.5vw] md:text-[4vw] lg:text-[2.5vw] xl:text-[2.2vw] 2xl:text-[2vw]'>Full stack <br />web developer</h2>
                </div>
            </m.div>
        </div>
    );
}

export default Hero;
