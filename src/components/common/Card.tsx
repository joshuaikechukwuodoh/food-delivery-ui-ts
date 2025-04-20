import { CardProps } from "../../types/Card";

export default function Card({
  Button,
  Image,
  Text,
  Title,
  ImageText,
  ...rest
}: CardProps) {
  return (
    <>
      <div {...rest}>
        {Image && (
          <img
            src={Image}
            alt={ImageText || "Card image"}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4 flex-col flex gap-2">
          <h3>{Title}</h3>
          <p>{Text}</p>
        </div>
        <button {...Button} />
      </div>
    </>
  );
}
