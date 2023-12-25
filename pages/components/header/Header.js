'use client'

//dependencies
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion as m, useAnimation } from 'framer-motion';

import Link from 'next/link';

//components
import NavSlider from './NavSlider';

export default function Header() {


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


    const header = useRef(null);

    const [isActive, setActive] = useState(false);

    const buttonControls = useAnimation();
    const closebuttonControls = useAnimation();

    const pathname = usePathname();

    useEffect(() => {
        if (isActive) setActive(false);
    }, [pathname])


    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition >= 0 && scrollPosition <= window.innerHeight / 3) {
            buttonControls.start({ scale: 0 });
        } else {
            buttonControls.start({ scale: 1 });
        }
    };

    useEffect(() => {

        buttonControls.start({ scale: 0 });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive, buttonControls, closebuttonControls]);



    return (
        <>
            <div ref={header} className="header">
                <div className="logo">
                    <h1 className="header-item" style={{ color: (pathname === '/' || pathname === '/Contact') ? '#fffbee' : '#272829' }}><Link href={'/'}>@ Code by Tejas</Link></h1>
                </div>
                <div className="navigation">
                    <h1 className="header-item md:hidden" style={{ color: (pathname === '/' || pathname === '/Contact') ? '#fffbee' : '#272829' }} onClick={() => setActive(!isActive)}>
                        Menu
                    </h1>
                    <div className='hidden gap-[3vw] md:flex'>
                        {
                            navItems.map((data, index) => {
                                const { title, href } = data;
                                return index !== 0 ? (
                                    <Link key={index} href={href} className="header-item" style={{ color: (pathname === '/' || pathname === '/Contact') ? '#fffbee' : '#272829' }}>
                                        {title}
                                    </Link>
                                ) : null;
                            })
                        }
                    </div>
                </div>
            </div>
            <m.div
                ref={buttonControls}
                initial={{ scale: isActive ? 0 : 1 }}
                animate={buttonControls}
                className="headerButtonContainer"
            >
                <div onClick={() => setActive(!isActive)} className="headerButton">
                    <div className="burger burger-closed">
                        <div
                            className="burger-bar"
                        />
                        <div
                            className="burger-bar"
                        />
                    </div>
                </div>
            </m.div>
            <m.div
                ref={closebuttonControls}
                initial={{ scale: isActive ? 1 : 0 }}
                animate={{ scale: isActive ? 1 : 0 }}
                exit={{ scale: 0 }}
                className="headerButtonContainer"
            >
                <div onClick={() => setActive(!isActive)} className="headerButton">
                    <div className="burger">
                        <div
                            style={{ translateY: '0', rotate: '45deg' }}
                            className="burger-bar"
                        />
                        <div
                            style={{ translateY: '0', rotate: '-45deg' }}
                            className="burger-bar"
                        />
                    </div>
                </div>
            </m.div>

            <AnimatePresence mode="wait">
                {isActive && <NavSlider ball={isActive} />}
            </AnimatePresence>

        </>
    )
}