import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => {};
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded"
    >
      {children}
    </button>
  );
};

export default Button;
