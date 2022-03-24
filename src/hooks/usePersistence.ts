import { useEffect, useState } from "react";

export function usePersistence(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    if (persistedValue) {
      return JSON.parse(persistedValue);
    }
    return defaultValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
