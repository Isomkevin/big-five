import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const clearItem = (keyToRemove) => {
    localStorage.removeItem(keyToRemove);
  };

  return [value, setValue, clearLocalStorage, clearItem];
}
