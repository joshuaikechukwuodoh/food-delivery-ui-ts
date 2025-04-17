import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick, className }: ButtonProps) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);
