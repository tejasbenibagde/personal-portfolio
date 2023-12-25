import Rounded from "../../buttons/roundedButton/Rounded";
import React from "react";
function Form() {

    const formContent = [
        {
            count: '01',
            question: "What's your name ?",
            placeholder: "John Doe *",
            type: 'text'
        },
        {
            count: '02',
            question: "What's your email ?",
            placeholder: "john@doe.com *",
            type: 'email'
        },
        {
            count: '03',
            question: "What's the name of your organization ?",
            placeholder: "John & Doe",
            type: 'text'
        }
    ];

    return (
        <>
            <form className='py-[5vh] bg-[var(--black)]'>
                {
                    formContent.map((data, index) => {
                        const { count, question, placeholder, type } = data;
                        const uniqueKey = `formItem_${index}`;

                        return (
                            <React.Fragment key={uniqueKey}>
                                <div className="w-full h-[1px] bg-[var(--white)] opacity-[0.5] my-[3vh]" />
                                <div className='flex gap-[2vw] lg:gap-[5vw]'>
                                    <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[0.8vw] w-5'>{count}</h1>
                                    <div className='flex flex-col gap-[3vh]'>
                                        <h1 className='text-[var(--white)] text-[4vw] md:text-[3vw]'>{question}</h1>
                                        <input type={type} required={true} placeholder={placeholder} className='bg-[var(--black)] text-[3vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] outline-none text-[var(--white)] w-full' />
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                <div className="w-full h-[1px] bg-[var(--white)] opacity-[0.5] my-[3vh]" />
                <div className='flex gap-[2vw] lg:gap-[5vw]'>
                    <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[0.8vw] w-5'>05</h1>
                    <div className='flex flex-col gap-[3vh]'>
                        <h1 className='text-[var(--white)] text-[4vw] md:text-[3vw]'>Your message</h1>
                        <textarea type='text' rows={2} cols={10} required={true} placeholder='Hello Tejas, can you help me with ... *' className='bg-[var(--black)] text-[3vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] outline-none text-[var(--white)] w-[calc(80vw)] max-w-[80vw] h-auto' />
                    </div>
                </div>
                <div className="bg-red relative flex items-center justify-center mt-[10vh]">
                    <div className="z-[1] w-full flex justify-end items-center px-[5vw] lg:px-[10vw] h-[30vw]">
                        <Rounded cursor={true}>
                            <button type='submit' className='text-[var(--black)] text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw] '>Send it!</button>
                        </Rounded>
                    </div>
                    <div className="z-[0] absolute w-full h-[1px] bg-[var(--white)] opacity-[0.5]" />
                </div>
            </form>
        </>
    )
}

export default Form