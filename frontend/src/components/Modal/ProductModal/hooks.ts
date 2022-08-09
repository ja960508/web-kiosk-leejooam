import { useState } from 'react';

interface useinputsProps<T> {
  initialValue: T;
}

function useInputs<T>({ initialValue }: useinputsProps<T>) {
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

export default useInputs;

export function useOptionContainer() {
  const [isChoiceOptionOpen, setIsChoiceOptionOpen] = useState(false);
  const [isQuantityOptionOpen, setIsQuantityOptionOpen] = useState(false);

  const openChoiceOption = () => {
    setIsChoiceOptionOpen(true);
    setIsQuantityOptionOpen(false);
  };

  const openQuantityOption = () => {
    setIsChoiceOptionOpen(false);
    setIsQuantityOptionOpen(true);
  };

  const closeOptionContainer = () => {
    setIsChoiceOptionOpen(false);
    setIsQuantityOptionOpen(false);
  };

  return {
    isChoiceOptionOpen,
    isQuantityOptionOpen,
    openChoiceOption,
    openQuantityOption,
    closeOptionContainer,
  };
}
