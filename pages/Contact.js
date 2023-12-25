import React from 'react'
import transition from './pagetransition'
import Image from 'next/image'
import profile from '@/public/images/profile.jpg'
import Form from './components/pageComponents/contact/Form'

const Contact = () => {

  return (
    <div className='bg-[var(--black)] px-[10vw] w-[100vw] h-full pt-[15vh] xl:pt-[20vh]'>
      <div className='relative overflow-x-hidden md:flex md:justify-between md:py-[5vh]'>
        <div className='md:flex md:flex-col-reverse'>
          <div className='my-[3vh] flex justify-end items-center md:justify-start md:translate-y-[5vh]'>
            <svg className='rotate-90 md:rotate-[0] h-[5vw] w-[5vw] md:h-[3vw] md:w-[3vw] lg:w-[2vw] lg:h-[2vw]' viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="#fffbee" />
            </svg>
          </div>
          <div>
            <span className="flex items-center gap-[4vw] md:gap-[2vw] lg:gap-[1vw]">
              <div className='relative w-[12vw] h-[12vw] md:h-[6vw] md:w-[6vw] lg:h-[4vw] lg:w-[4vw] rounded-full overflow-hidden'>
                <Image
                  fill={true}
                  alt={"image"}
                  src={profile}
                  style={{objectFit: 'cover'}}
                  sizes="(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 33vw"
                />
              </div>
              <h2 className="text-[var(--white)] text-[10vw] md:text-[6vw] font-[400] leading-[11vw] tracking-[-0.2vw] md:leading-[6vw] lg:text-[4vw] lg:leading-[4.2vw]">Let's start a</h2>
            </span>
            <h2 className="text-[var(--white)] text-[10vw] md:text-[6vw] font-[400] leading-[11vw] tracking-[-0.2vw] md:leading-[6vw] lg:text-[4vw] lg:leading-[4.2vw]">project together</h2>
          </div>
        </div>


        <div className='mt-[10vh] md:mt-[0]'>
          <div className='flex flex-col gap-[1vh] lg:gap-[0.5vh]'>
            <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[1.5vw] lg:text-[1vw] md:leading-[1.5vw] xl:text-[0.8vw] 2xl:text-[0.7vw]'>CONTACT DETAILS</h1>
            <p className='text-[var(--white)] text-[4vw] md:text-[2vw] lg:text-[1.4vw] md:leading-[2vw] xl:text-[1.2vw] 2xl:text-[1vw]'>tejas.benibagde@gmail.com</p>
            <p className='text-[var(--white)] text-[4vw] md:text-[2vw] lg:text-[1.4vw] md:leading-[2vw] xl:text-[1.2vw] 2xl:text-[1vw]'>+91 82 61 09 27 99</p>
          </div>
        </div>

      </div>
      <Form />
    </div>
  )
}

export default transition(Contact)