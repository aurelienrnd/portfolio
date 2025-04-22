import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    // If a hash exists in the URL, store it in "lastHash" without the '#' symbol
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    // We check if an element with the "lastHash" ID exists
    if (lastHash.current && document.getElementById(lastHash.current)) {
      // We add a timer to wait for the DOM to be fully loaded
      setTimeout(() => {
        // We scroll to the element with the "lastHash" ID
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
