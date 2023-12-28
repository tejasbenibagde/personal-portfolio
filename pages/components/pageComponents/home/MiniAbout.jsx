'use client'

import Rounded from "../../buttons/roundedButton/Rounded";
import { useInView, motion as m } from "framer-motion";
import { useRef } from "react";
import useParallax from "@/pages/customHooks/useparallax";
import Link from "next/link";
import Magnet from "../../magnet/Magnet";


export default function MiniAbout() {

    const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i) => ({
            y: "0%",
            transition: { duration: 0.5, delay: 0.01 * i }
        }),
        closed: {
            y: "100%",
            transition: { duration: 0.5 }
        }
    }

    const opacity = {
        initial: {
            opacity: 0,
            y: '-0.7vh'
        },
        open: {
            opacity: 1,
            transition: { duration: 0.5 },
            y: '0vh'
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.5 },
            y: '0.7vh'
        }
    }
    const minidata = {
        maindata: "Hello I'm Tejas, a passionate web developer based in India, I specialize in crafting engaging and responsive web experiences. Let's build something amazing together!",
        subdata: 'Passionate web developer offering expertise in creating engaging and efficient digital experiences. Elevate your online presence with my skills!'
    }
    const description = useRef(null);
    const isInView = useInView(description);

    let y = useParallax(-0.07, description);

    return (
        <div ref={description} className="relative px-[5vw] md:px-[10vw] w-[100vw] pt-[13.5vh]">
            <div className="flex flex-col md:flex-row gap-[7vh] md:gap-[10vw] flex-wrap">
                <div className="text-[6vw] md:text-[3vw] lg:text-[2.7vw] xl:text-[2.4vw] 2xl:text-[2vw] flex flex-wrap md:w-[45vw]">
                    {
                        minidata.maindata.split(" ").map((word, index) => {
                            return (
                                <div key={index} className="mr-[3px] overflow-hidden">
                                    <m.h1
                                        variants={slideUp} custom={index} initial='initial' animate={isInView ? "open" : "closed"} key={index}
                                    >
                                        {word}
                                    </m.h1>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-[65vw] md:w-[25vw]">
                    <m.p variants={opacity} animate={isInView ? "open" : "closed"} className="text-[4.7vw] md:text-[2.7vw] lg:text-[2vw] xl:text-[1.6vw] 2xl:text-[1.4vw] font-[400]">{minidata.subdata}</m.p>
                </div>
            </div>
            <m.div style={{ y: y }} className="flex justify-end px-[5vw] md:mt-[5vh] lg:mt-[0]">
                <Link href={'/About'}>
                    <Magnet>
                        <Rounded bg={'var(--black)'} cursor={true} >
                            <p className="text-[var(--white)] text-[4vw] md:text-[2vw] font-[500] lg:text-[1.7vw] xl:text-[1.4vw] 2xl:text-[1.2vw]">
                                About Me
                            </p>
                        </Rounded>
                    </Magnet>
                </Link>
            </m.div>
        </div>
    )
}
