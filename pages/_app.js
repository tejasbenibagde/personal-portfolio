import '@/styles/globals.css';
import '@/styles/Header.css';
import '@/styles/Home.css';

import { AnimatePresence } from 'framer-motion';

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

export default function App({ Component, pageProps, router }) {
  return (
    <div id='main-wrapper' className={inter.className}>
      <Header />
      <AnimatePresence mode='wait'>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  )
}
