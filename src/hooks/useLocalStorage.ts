import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  handleSuccess?: () => void
): [T, (value: T) => void] {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    setValue(item ? JSON.parse(item) : defaultValue);

    function handler(e: StorageEvent) {
      if (e.key !== key) return;

      const lsi = localStorage.getItem(key);
      setValue(JSON.parse(lsi ?? ''));
    }

    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener('storage', handler);
    };
  }, []);

  const setValueWrap = (value: T) => {
    try {
      setValue(value);

      localStorage.setItem(key, JSON.stringify(value));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new StorageEvent('storage', { key }));
      }

      handleSuccess && handleSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  return [value, setValueWrap];
}

// export function useLocalStorage<T>(
//   key: string,
//   defaultValue: T
// ): {
//   values: T;
//   setValues: Dispatch<SetStateAction<T>>;
// } {
//   //   const [values, setValues] = useState<T | undefined>(defaultValue);
//   const [values, setValues] = useState<T>(defaultValue);
//   //   const [values, setValues] = useState<T>(() => {
//   //     const x: T | undefined = defaultValue;
//   //     const item = localStorage.getItem(key);

//   //     if (!item) {

//   //     }

//   //     return x;
//   //   });

//   useEffect(() => {
//     const item = localStorage.getItem(key);
//     console.log(item, 'oitem');

//     if (!item) {
//       console.log('123');
//       localStorage.setItem(key, JSON.stringify(values));
//     }

//     localStorage.setItem(key, JSON.stringify(values));
//   }, [values]);

//   return { values, setValues };
// }
