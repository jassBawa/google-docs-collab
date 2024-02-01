import React from "react";

interface ModalProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  header,
  body,
  footer,
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black opacity-50 absolute inset-0"></div>
      <div className="bg-white rounded-lg relative w-11/12 md:max-w-md mx-auto">
        <header className="border-b p-4 text-lg font-semibold">{header}</header>
        <main className="p-4">{body}</main>
        <footer className="border-t p-4">{footer}</footer>
        <button className="absolute right-0 top-0 m-4" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
