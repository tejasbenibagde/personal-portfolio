import { motion as m } from 'framer-motion';

const transition = (OgComponent) => {
    return () => (
        <div>
            <OgComponent />
            <m.div
                className='slide-in z-[150]'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <m.div
                className='slide-out z-[150]'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    );
};

export default transition;
