import { useState } from 'react';

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
