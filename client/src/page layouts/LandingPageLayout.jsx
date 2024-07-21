import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const transition = { duration: 0.5, ease: 'easeInOut' };

const LandingPageLayout = ({ children }) => {
  const location = useLocation();

  const backgroundStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <div style={backgroundStyle}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ scale:0}}
          animate={{ scale:1, x:0}}
          exit={{ x: '-100vw'}}
          transition={transition}
          style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandingPageLayout;
