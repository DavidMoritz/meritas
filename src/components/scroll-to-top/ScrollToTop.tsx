import { useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
