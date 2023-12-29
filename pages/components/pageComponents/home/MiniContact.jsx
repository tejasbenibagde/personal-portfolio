'use client'

import { useRef } from "react";
import Image from "next/image";
import profile from '@/public/images/profile.jpg';
import Rounded from "../../buttons/roundedButton/Rounded";
import SemiRound from "../../buttons/semiroundedButtons/SemiRound";
import Link from "next/link";

import { motion as m, useScroll, useTransform } from 'framer-motion';
import Magnet from "../../magnet/Magnet";

function MiniContact() {

    const handleEmailClick = () => {
        const gmailAddress = 'tejas.benibagde@gmail.com';
        const subject = "Let's Connect";
        const body = 'Hi Tejas,\n\nI came across your portfolio and would like to get in touch.';
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(gmailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailComposeUrl, '_blank');
    };

    const handlePhoneClick = () => {
        const phoneNumber = '+918261092799';
        const telUrl = `tel:${phoneNumber}`;

        window.open(telUrl, '_blank');
    };

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    return (
        <div style={{ y: y }} ref={container} className='bg-[var(--black)] py-[5vh] md:pb-[7vw]'>
            <div className='px-[5vw] md:px-[10vw] xl:px-[15vw] w-full'>
                <div className='relative'>
                    <span className="flex items-center gap-[1vw] md:mt-[10vh] xl:mt-[17vh]">
                        <div className='relative w-[12vw] h-[12vw] md:w-[7vw] md:h-[7vw] xl:w-[5vw] xl:h-[5vw] rounded-full overflow-hidden'>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={profile}
                                style={{ objectFit: 'cover' }}
                                priority={false}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h2 className="text-[var(--white)] text-[10.5vw] md:text-[5vw] xl:text-[5.8vw] lg:leading-[5.8vw]">Let's work</h2>
                    </span>
                    <h2 className="text-[var(--white)] text-[10.5vw] md:text-[5vw] xl:text-[5.8vw] lg:leading-[5.8vw]">together</h2>
                    <div className=" relative flex items-center justify-center">
                        <div className="z-[1] w-full flex justify-end items-center px-[5vw] xl:px-[0] h-[30vw] lg:h-[15vw] xl:h-[12vw] 2xl:h-[10vw]">
                            <div className="md:translate-x-[-5vw]">
                                <Link href={'/Contact'}>
                                    <Magnet>
                                        <Rounded cursor={true}>
                                            <p className="text-[var(--black)] text-[4vw] md:text-[2vw] lg:text-[1.2vw]">Get in touch</p>
                                        </Rounded>
                                    </Magnet>
                                </Link>
                            </div>
                            <div className="translate-y-[-25vw] md:translate-y-[-20vw] lg:translate-y-[-15vw] xl:translate-y-[-12vw]">
                                <m.svg style={{ rotate, scale: 2 }} className="w-[3vw] md:h-[2vw] h-[3vw] md:w-[2vw] lg:w-[1vw] lg:h-[1vw] xl:h-[0.7vw] xl:w-[0.7vw]" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="var(--white)" />
                                </m.svg>
                            </div>
                        </div>
                        <div className="z-[0] absolute w-full h-[1px] bg-[var(--white)] opacity-[0.5]" />
                    </div>
                    <div className="mt-[10vw] md:mt-[5vh] xl:mt-0 flex flex-col gap-[5vw] lg:gap-[3vw] md:flex-row ">
                        <SemiRound
                            onClick={handleEmailClick}
                            classes={'cursor-pointer w-full md:w-auto px-[4vw] lg:px-[3vw] xl:px-[2.6vw] flex items-center justify-center border-[1px] border-[#fffbee76] rounded-[10vw] py-[5vw] md:py-[3vw] xl:py-[1.7vw] 2xl:py-[1.4vw] lg:py-[2vw]'}>
                            <p className="cursor-pointer text-[var(--white)] text-[4.2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.2vw]">tejas.benibagde@gmail.com</p>
                        </SemiRound>
                        <SemiRound
                            onClick={handlePhoneClick}
                            classes={'cursor-pointer w-full md:w-auto px-[4vw] lg:px-[3vw] xl:px-[2.6vw] flex items-center justify-center border-[1px] border-[#fffbee76] rounded-[10vw] py-[5vw] md:py-[3vw] xl:py-[1.7vw] 2xl:py-[1.4vw] lg:py-[2vw]'}>
                            <p className="cursor-pointer text-[var(--white)] text-[4.2vw] md:text-[2vw] lg:text-[1.7vw] xl:text-[1.2vw]" >+91 82 61 09 27 99</p>
                        </SemiRound>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniContact