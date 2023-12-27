import { motion as m } from 'framer-motion';
import { useRef, useState } from 'react';

const Magnet = ({ children }) => {

    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y })
    }

    const mouseLeave = (e) => {
        setPosition({ x: 0, y: 0 })
    }


    const { x, y } = position;

    return (
        <m.div
            ref={ref}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            animate={{ x, y }}
            className="flex box-border items-center justify-center relative"
        >
            {children}
        </m.div>
    )
}

export default Magnet;