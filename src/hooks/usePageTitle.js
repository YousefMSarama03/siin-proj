import { useEffect } from 'react';

/**
 * Custom hook to manage page titles dynamically
 * @param {string} title - The title to set for the current page
 * @param {string} suffix - Optional suffix to append to the title (default: " | SIIN")
 */
const usePageTitle = (title, suffix = " | SIIN") => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title + suffix;
    
    // Cleanup function to restore previous title when component unmounts
    return () => {
      document.title = previousTitle;
    };
  }, [title, suffix]);
};

export default usePageTitle;
