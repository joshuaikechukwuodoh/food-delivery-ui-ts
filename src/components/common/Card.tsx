import { CardProps } from "../../types/Card";

export default function Card({
  Image,
  Text,
  Title,
  ImageText,
  Icon,
  Size,
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
        {Icon && <Icon size={Size} />}
        <div className="p-4 flex-col flex gap-2">
          <h3 className="font-bold text-2xl">{Title}</h3>
          <p>{Text}</p>
        </div>
        {/* {Button && <button {...Button}>{Button.children}</button>} */}
      </div>
    </>
  );
}
