import { useTransform, useScroll } from "framer-motion";
import useDimension from "./useDimension";

function useParallax(value, container, initial = false) {
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: [`${initial ? 'start' : 'end'} end`, 'end start']
    });

    return useTransform(scrollYProgress, [0, 1], [0, height * value])
}

export default useParallax;