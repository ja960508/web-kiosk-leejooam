import { useState } from 'react';

interface useTextInputsProps<T> {
  initialValue: T;
}

function useTextInputs<T>({ initialValue }: useTextInputsProps<T>) {
  const [data, setData] = useState<T>(initialValue);

  const handleChange =
    (key: keyof T) =>
    ({ target }: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      setData({
        ...data,
        [key]: target.value,
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
