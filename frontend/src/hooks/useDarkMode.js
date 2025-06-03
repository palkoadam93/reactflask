// src/hooks/useDarkMode.js
import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return [darkMode, () => setDarkMode(prev => !prev)];
}
