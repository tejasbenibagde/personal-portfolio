import React from "react";
import Image from "next/image";
import profile from '@/public/images/profile.jpg';

import { useRef, useEffect, useState } from "react";
import { motion as m, useScroll, useTransform } from 'framer-motion';

function Services() {

    const useDimension = () => {
        const [dimension, setDimension] = useState({ width: 0, height: 0 });

        const updateDimension = () => {
            const { innerWidth, innerHeight } = window;
            setDimension({ width: innerWidth, height: innerHeight });
        }

        useEffect(() => {
            updateDimension();

            window.addEventListener('resize', updateDimension);

            return () => { window.removeEventListener('resize', updateDimension) };
        }, [])
        return dimension;
    }

    function useParallax(value, container, initial = false) {
        const { height } = useDimension();
        const { scrollYProgress } = useScroll({
            target: container,
            offset: [`${initial ? 'start' : 'end'} end`, 'end start']
        });

        return useTransform(scrollYProgress, [0, 1], [0, height * value])
    }



    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [120, 60])

    let y = useParallax(0.1, container, true);


    const services = [
        {
            count: "01",
            title: "Front-End Development",
            desc: "I specialize in creating captivating and user-centric front-end web experiences. With a focus on design and the latest technologies, I transform ideas into responsive websites that make a lasting impact."
        },
        {
            count: "02",
            title: "Back-End Development",
            desc: "I excel in architecting efficient back-end systems, ensuring web applications run smoothly and securely. From database design to server-side scripting, I empower your digital projects."
        },
        {
            count: "03",
            title: "The Full Package",
            desc: "As a full-stack web developer, I offer comprehensive solutions. From intuitive user interfaces to advanced functionality, I deliver seamless results that meet your unique needs."
        },
    ]


    return (
        <>
            <div ref={container} className="lg:flex lg:justify-between">
                <m.div style={{ y: y }} className='flex flex-col gap-[4vh] md:px-[5vw] lg:w-[35vw] lg:gap-[2vw]'>
                    <div className='relative h-[10vw] w-[10vw] md:h-[2.5vw] md:w-[2.5vw] flex items-center justify-center rotate-[-90deg] lg:absolute lg:translate-x-[-4vw]'>
                        <m.svg style={{ rotate }} className='absolute w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw] lg:h-[1.7vw] lg:w-[1.7vw]' viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#272829" />
                        </m.svg>
                    </div>
                    <m.div style={{ y: y }}>
                        <h1 className='text-[4vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] text-[var(--black)]'>I enjoy working with imaginative layouts and web components, constantly creating and experimenting. I thrive on challenges and love trying new things.</h1>
                        <h1 className="text-[var(--black)] text-[4vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] opacity-[0.5]">Always Exploring ...</h1>
                    </m.div>
                </m.div>
                <div className='relative mt-[5vh] h-[80vh] lg:h-[65vw] w-full lg:w-[55vw] lg:mt-0'>
                    <Image
                        src={profile}
                        alt='profile'
                        style={{ objectFit: 'cover', layout: 'fill' }}
                        className='brightness-[0.95]'
                    />
                </div>
            </div>

            <div className='relative mt-[5vh] md:mt-[10vh] lg:mt-[15vh] xl:mt-[20vh]'>
                <h1 className='text-[10vw] tracking-[-0.5vw] md:text-[4vw] md:tracking-[-1.5px]'>I can help you with...</h1>
                <div className="z-[0] mt-[5vh] w-full h-[1px] bg-[var(--black)] opacity-[0.5]" />

                <div className='flex flex-col md:flex-row gap-[5vh] md:gap-[5vw] mt-[5vh]'>
                    {services.map((data, index) => {
                        const { count, title, desc } = data;
                        return (
                            <React.Fragment key={index}>
                                <div>
                                    <div>
                                        <h1 className='text-[10vw] md:text-[2vw] lg:text-[1.2vw] xl:teext-[1vw] text-[var(--black)] opacity-[0.5] md:mb-[2.5vh]'>
                                            {count}
                                        </h1>
                                        <h1 className='text-[7vw] md:text-[2.5vw] xl:text-[2vw] lg:text-[2.5vw]'>{title}</h1>
                                    </div>
                                    <p className='text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] mt-[1.7vh] xl:text-[1vw]'>{desc}</p>
                                </div>
                                {index < 2 && (
                                    <div className={`z-[0] w-full h-[1px] bg-[var(--black)] opacity-[0.5] md:hidden`} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Services