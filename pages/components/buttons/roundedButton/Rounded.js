'use client'

import { motion as m } from 'framer-motion';
import { useState } from 'react';

export default function Rounded({ children, bg, cursor }) {
  const [isHover, setHover] = useState(false);
  const [isInitial, setInitial] = useState(true);
  return (
    <m.div
      style={{ backgroundColor: bg, cursor: cursor ? 'pointer' : 'default' }}
      onHoverStart={() => { setHover(true); setInitial(false) }}
      onHoverEnd={() => { setHover(false); setInitial(true) }}
      className="relative overflow-hidden w-[40vw] h-[40vw] md:h-[20vw] md:w-[20vw] lg:h-[16vw] lg:w-[16vw] xl:h-[12vw] xl:w-[12vw] rounded-full bg-[var(--pink)] flex items-center justify-center"
    >
      {children}
      <m.div
        initial={{ y: isInitial ? '100%' : '-100%' }}
        animate={{ y: isHover ? '0%' : (isInitial ? '100%' : '-100%') }}
        transition={{ duration: 0.2}}
        className="w-full h-full bg-[var(--purple)] opacity-[0.2] absolute pointer-events-none rounded-full"
      />
    </m.div>



  )
}
