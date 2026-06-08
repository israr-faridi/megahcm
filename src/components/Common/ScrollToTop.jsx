import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the window to jump instantly back to coordinates (0,0) when changing routes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Overrides 'smooth' ONLY during page-to-page navigation routing changes
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;