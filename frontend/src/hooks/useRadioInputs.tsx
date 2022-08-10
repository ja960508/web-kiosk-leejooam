import { useState } from 'react';

interface initialValue {
  [key: string]: string;
}

const useRadioInputs = (inputNames: string[]) => {
  const initialValue: initialValue = {};
  inputNames.forEach((name) => (initialValue[name] = ''));

  const [values, setValues] = useState(initialValue);

  const getValue = (key: string) => {
    return values[key];
  };

  const changeRadioValue = (key: string, value: string) => () => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return { getValue, changeRadioValue };
};

export default useRadioInputs;
