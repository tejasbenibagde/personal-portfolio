import { useRef } from "react";
import {motion, useScroll, useTransform} from 'framer-motion';



const Curve = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
    const height = useTransform(scrollYProgress, [0, 0.9], [150, 0])

    return (
        <motion.div ref={container} style={{ height }} className="relative w-full z-[10] flex">
            <div className="absolute h-[140%] w-[120%] translate-x-[-10%] rounded-b-[80%] bg-[var(--white)]" />
        </motion.div>
    )
}

export default Curve;