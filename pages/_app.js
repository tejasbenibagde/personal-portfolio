
import '@/styles/globals.css';
import '@/styles/Header.css';
import '@/styles/Home.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

//fonts
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });


//metadata
export const metadata = {
  title: 'Tejas Benibagde - Portfolio',
  description: 'This is a Professional portfolio of Tejas Benibagde who is a Full Stack Web Developer',
}

//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Smoothscroll from './Smoothscroll';


export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to the portfolio of Tejas Benibagde, a skilled Web Developer passionate about crafting engaging and responsive web experiences. Explore Tejas's projects, skills, and get in touch for collaboration opportunities."
        />
        <title>Tejas Benibagde</title>
      </Head>
      <div id='main-wrapper' className={inter.className}>
        <Smoothscroll>
          <Header />
          <AnimatePresence mode='wait'>
            <Component key={router.pathname} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </Smoothscroll>
      </div>
    </>
  )
}
