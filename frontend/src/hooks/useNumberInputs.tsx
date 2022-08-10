import { useState } from 'react';

interface initialValue {
  [key: string]: number;
}

const useNumberInputs = (inputNames: string[]) => {
  const initialValue: initialValue = {};
  inputNames.forEach((name) => (initialValue[name] = 1));

  const [values, setValues] = useState(initialValue);

  const getValue = (key: string) => {
    return values[key];
  };

  const increment = (key: string) => () => {
    setValues((prev) => ({ ...prev, [key]: prev[key] + 1 }));
  };

  const decrement = (key: string) => () => {
    const decrementedValue = values[key] - 1 <= 0 ? 1 : values[key] - 1;

    setValues((prev) => ({ ...prev, [key]: decrementedValue }));
  };

  return { getValue, increment, decrement };
};

export default useNumberInputs;
