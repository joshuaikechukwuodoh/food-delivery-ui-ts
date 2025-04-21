import { ComponentType, HTMLAttributes } from "react";
// import { ButtonProps } from "./Button";
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  Image?: string;
  ImageText?: string;
  Title?: string;
  Text?: string;
  Size?: number;
  // Button?: ButtonProps;
  Icon?: ComponentType<{ size?: number; className?: string }>; //icon prop
}
