import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const transition = { duration: 0.25, ease: 'easeInOut' };

const DefaultPageLayout = ({ children }) => {
  const location = useLocation();

  const backgroundStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <div style={backgroundStyle}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.pathname}
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
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

export default DefaultPageLayout;
