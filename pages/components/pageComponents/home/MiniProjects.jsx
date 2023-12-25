'use client'

import Image from "next/image";

import weather from '@/public/images/projects/WeatherCaster.PNG';
import geo from '@/public/images/projects/GeoDataCentral.PNG';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";


function MiniProjects() {

    const project = [
        {
            src: weather,
            title: 'Weather Caster',
            attribute: 'Design & Development',
            date: '2023',
            color: '#272829'
        },
        {
            src: geo,
            title: 'GeoDataCentral',
            attribute: 'Design & Development',
            date: '2023',
            color: '#61677A'
        }
    ];


    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const height = useTransform(scrollYProgress, [0, 0.9], [150, 0])



    return (
        <>
            <div className="relative w-[100vw] px-[5vw] mt-[5vh] flex flex-col flex-wrap md:flex-row md:justify-between items-center">
                {
                    project.map((project, index ) => {
                        const { color, src, title, date, attribute } = project;
                        return (
                            <div key={index} className="w-[100%] md:w-[42.5vw]">
                                <div style={{ backgroundColor: color }} className="w-[100%] md:h-[40vw] md:w-[42.5vw] h-[90vw] px-[5vw] flex items-center justify-center ">
                                    <Image
                                        src={src}
                                        alt="weather"
                                        className="w-full"
                                        style={{objectFit: 'cover'}}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                    />
                                </div>
                                <h2 className="text-[8vw] md:text-[4vw] font-[500] my-3">{title}</h2>
                                <div className="hbar" />
                                <div className="flex justify-between mt-3 mb-[10vh]">
                                    <p className="text-[4vw] md:text-[2vw] font-[400]">{attribute}</p>
                                    <p className="text-[4vw] md:text-[2vw] font-[400]">{date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <motion.div ref={container} style={{height}} className="relative w-full z-[10]">
                <div className="h-[140%] w-[120%] translate-x-[-10%] rounded-b-[80%] bg-[var(--white)]" />
            </motion.div>
        </>
    )
}

export default MiniProjects