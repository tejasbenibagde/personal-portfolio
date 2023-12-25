'use client'

import { motion as m } from 'framer-motion';
import Link from "next/link";
export default function NavSlider() {

    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Work",
            href: "/Work",
        },
        {
            title: "About",
            href: "/About",
        },
        {
            title: "Contact",
            href: "/Contact",
        },
    ];

    const menuSlide = {
        initial: { x: "calc(100% + 100px)" },
        enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
        exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
    }


    return (
        <m.div
            variants={menuSlide}
            initial='initial'
            animate='enter'
            exit='exit'
            className="slider-menu fixed top-0 z-[110] right-0 bg-[var(--black)] px-[5vw] py-[15vh] lg:py-[12.5vh]
            flex flex-col justify-between"
        >
            <div>
                <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.7vw]'>LOCATION</h1>
                <div className='h-[1px] w-full bg-[var(--white)] opacity-[0.5] my-[1vh]' />
                <div className='px-5'>
                    {
                        navItems.map((data, index) => {
                            const { title, href } = data;
                            return (
                                <Link key={index} href={href}>
                                    <p className="text-[var(--white)] text-[13.5vw] md:text-[7vw] lg:text-[5vw] xl:text-[3vw] 2xl:[2vw]">{title}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-[1.7vh]'>
                <div className='h-[1px] w-full bg-[var(--white)] opacity-[0.5]' />
                <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[1.5vw] lg:text-[1vw] xl:text-[0.8vw] 2xl:text-[0.7vw]'>SOCIALS</h1>
                <div className='flex gap-[3vw]'>
                    <a href="https://www.linkedin.com/in/tejas-benibagde-457700220/" className='text-[var(--white)] text-[4.2vw] md:text-[3.7vw] lg:text-[2vw] xl:text-[1.4vw] 2xl:text-[1.2vw]'>LinkedIn</a>
                    <a href='https://github.com/tejasbenibagde' className='text-[var(--white)] text-[4.2vw] md:text-[3.7vw] lg:text-[2vw] xl:text-[1.4vw] 2xl:text-[1.2vw]'>Github</a>
                </div>
            </div>
        </m.div>
    )
}
