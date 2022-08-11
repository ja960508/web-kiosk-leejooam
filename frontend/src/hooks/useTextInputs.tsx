import { useState } from 'react';

interface useTextInputsProps<T> {
  initialValue: T;
}

function useTextInputs<T>({ initialValue }: useTextInputsProps<T>) {
  const [data, setData] = useState<T>(initialValue);

  const handleChange =
    (key: keyof T, regex = /[\s]/, maxValue?: number) =>
    ({ target }: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      let value = target.value.replace(regex, '');

      if (maxValue && Number(value) >= maxValue) {
        value = String(maxValue);
      }

      setData({
        ...data,
        [key]: value,
      });
    };

  const resetInput = (key: keyof T) => {
    setData({
      ...data,
      [key]: '',
    });
  };

  return { data, handleChange, resetInput };
}

export default useTextInputs;
