import { ButtonProps } from "../../types/Button";

export const Button = ({
  className,
  children,
  icon: Icon,
  Size,
  ...rest
}: ButtonProps) => (
  <button className={className} {...rest}>
    {Icon && <Icon size={Size} />}
    {children}
  </button>
);
