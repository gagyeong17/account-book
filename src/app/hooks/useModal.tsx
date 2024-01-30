import { useState, useCallback } from "react";

interface ReturnType {
  isOpen: boolean;
  showModal: () => void;
  closeModal: () => void;
}

const useModal = (): ReturnType => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    showModal,
    closeModal,
  };
};

export default useModal;
