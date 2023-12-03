// Принимает два значения, название поля в LS, и начальное значение.
// Так же рекомендуется передавать генерики, для корректных типов
import { useState, useEffect } from 'react';

const useStorage = <T>(
  storageName: string,
  initialState: T,
): [state: T, setState: (props: T) => void] => {
  // Создаем хук для динамического сохранения данных
  const [data, setData] = useState<T>(initialState);

  // Это своеобразный мидлвейр, для того чтобы сохранять данные в LS перед изменением useState
  const customSet = (props: T) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageName, JSON.stringify(props));
    }
    setData(props);
  };

  // Срабатывает только при загрузке, чтобы подгрузить сохраненные данные из LS
  useEffect(() => {
    // Проверка на существование windows, нужна для того чтого бы во время генерации SSR, не выдало ошибок localStorage is not defined
    if (typeof window === 'undefined') return;

    const lsData = localStorage.getItem(storageName);
    if (lsData === null) return;

    const parseData: T | null = JSON.parse(lsData);
    if (parseData) customSet(parseData);
  }, [customSet, storageName]);

  return [data, customSet];
};

export default useStorage;
