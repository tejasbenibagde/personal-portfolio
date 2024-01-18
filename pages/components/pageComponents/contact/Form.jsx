import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Rounded from "../../buttons/roundedButton/Rounded";
import Magnet from "../../magnet/Magnet";
import Loader from "../../animations/contactloader/Loader";


function Form() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });


    const [loader, setLoader] = useState(false);

    const formContent = [
        {
            count: '01',
            value: userData.name,
            autoComplete: 'name',
            name: 'name',
            question: "What's your name ?",
            placeholder: "John Doe *",
            type: 'text'
        },
        {
            count: '02',
            value: userData.email,
            autoComplete: 'email',
            name: 'email',
            question: "What's your email ?",
            placeholder: "john@doe.com *",
            type: 'email'
        },
        {
            count: '03',
            value: userData.company,
            name: 'company',
            question: "What's the name of your organization ?",
            placeholder: "John & Doe",
            type: 'text'
        }
    ];

    let name, value;

    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    }


    const submitData = async (event) => {

        event.preventDefault();
        setLoader(true);

        const { name, email, company, message } = userData;

        if (name && email && company && message) {
            const res = await fetch(
                'https://portfolio-a6190-default-rtdb.firebaseio.com/userData.json',
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, email, company, message
                    })
                }
            );
            if (res.ok) {
                setLoader(false)
                toast("Message sent Successfully!");
                setUserData({
                    name: "",
                    email: "",
                    company: "",
                    message: ""
                })
            } else {
                setLoader(false)
                toast.error('Something Went Wrong!!!');
            }
        }
        else {
            setLoader(false)
            toast.warn('Fill in all the fields!!');
        }
    };

    return (
        <>
            <ToastContainer position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
            <form method="POST" className='py-[5vh] bg-[var(--black)]'>
                {
                    formContent.map((data, index) => {
                        const { count, value, autoComplete, name, question, placeholder, type } = data;
                        const uniqueKey = `formItem_${index}`;

                        return (
                            <React.Fragment key={uniqueKey}>
                                <div className="w-full h-[1px] bg-[var(--white)] opacity-[0.5] my-[3vh]" />
                                <div className='flex gap-[2vw] lg:gap-[5vw]'>
                                    <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[0.8vw] w-5'>{count}</h1>
                                    <div className='flex flex-col gap-[3vh]'>
                                        <h1 className='text-[var(--white)] text-[4vw] md:text-[3vw]'>{question}</h1>
                                        <input type={type} name={name} required={true} placeholder={placeholder} value={value} onChange={postUserData} autoComplete={autoComplete ? autoComplete : 'off'} className='bg-[var(--black)] text-[3vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] outline-none text-[var(--white)] w-full' />
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
                <div className="w-full h-[1px] bg-[var(--white)] opacity-[0.5] my-[3vh]" />
                <div className='flex gap-[2vw] lg:gap-[5vw]'>
                    <h1 className='text-[var(--white)] opacity-[0.5] font-[400] text-[3vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] 2xl:text-[0.8vw] w-5'>04</h1>
                    <div className='flex flex-col gap-[3vh]'>
                        <h1 className='text-[var(--white)] text-[4vw] md:text-[3vw]'>Your message</h1>
                        <textarea type='text' rows={2} cols={10} name="message" required={true} value={userData.message} onChange={postUserData} autoComplete="off" placeholder='Hello Tejas, can you help me with ... *' className='bg-[var(--black)] text-[3vw] md:text-[2vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] outline-none text-[var(--white)] w-[calc(80vw)] max-w-[80vw] h-auto' />
                    </div>
                </div>
                <div className="bg-red relative flex items-center justify-center mt-[10vh]">
                    <div className="z-[1] w-full flex justify-end items-center px-[5vw] lg:px-[10vw] h-[30vw]">
                        <Magnet>
                            <Rounded
                                cursor={true}>
                                {
                                    loader ?
                                        (
                                            <Loader />
                                        ) :
                                        (
                                            <button type='submit' onClick={submitData} className='text-[var(--black)] w-full h-full text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw] '>
                                                Send it!
                                            </button>
                                        )
                                }
                            </Rounded>
                        </Magnet>
                    </div>
                    <div className="z-[0] absolute w-full h-[1px] bg-[var(--white)] opacity-[0.5]" />
                </div>
            </form>
        </>
    )
}

export default Form