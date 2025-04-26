import { InputProps } from "../../types/Input";

const Input = ({ name, ref, ...rest }: InputProps) => (
  <input name={name} ref={ref} {...rest} />
);

export default Input;
