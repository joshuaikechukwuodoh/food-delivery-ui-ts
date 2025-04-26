import { InputHTMLAttributes, RefObject } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  ref?: RefObject<HTMLInputElement | null>;
}
