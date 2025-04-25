import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  icon?: IconType;
  Size?: number;
}
