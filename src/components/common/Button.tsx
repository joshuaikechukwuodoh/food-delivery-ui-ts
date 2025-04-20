import { ButtonProps } from "../../types/Button";

export const Button = ({ className, ...rest }: ButtonProps) => (
  <button className={className} {...rest} />
);
