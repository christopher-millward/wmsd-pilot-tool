import { useEffect } from 'react';

const usePreventTouch = () => {
  useEffect(() => {

    const getAngle = (event) => {
        console.log(deltaX)
        const { deltaX, deltaY } = event;
        if (deltaX === 0 && deltaY === 0) {
          return 0;
        } else {
          return Math.atan2(Math.abs(deltaY), Math.abs(deltaX)) * (180 / Math.PI);
        }
      };

    const handleTouch = (event) => {
      // Prevent scrolling behavior for touch events only on vertical scroll
      const angle = getAngle(event);
      const isVerticalScroll = angle > 45 && angle < 135;
      console.log(angle)
      if (isVerticalScroll && (event.target.matches('.tlx-option, .pain-slider'))) {
        event.preventDefault();
      }
    };

    const sliders = document.querySelectorAll('.tlx-option, .pain-slider');
    sliders.forEach(slider => {
      slider.addEventListener('wheel', handleTouch);
      slider.addEventListener('touchstart', handleTouch);
      slider.addEventListener('touchmove', handleTouch);
    });

    // Clean up event listeners on component unmount
    return () => {
      sliders.forEach(slider => {
        slider.removeEventListener('wheel', handleTouch);
        slider.removeEventListener('touchstart', handleTouch);
        slider.removeEventListener('touchmove', handleTouch);
      });
    };
  }, []);
};

export default usePreventTouch;
