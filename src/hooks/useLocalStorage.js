import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    const isCookieConsent = localStorage.getItem('cookieConsent');

    if (isCookieConsent || key === 'cookieConsent') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}