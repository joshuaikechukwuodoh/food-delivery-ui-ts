import { Restaurants } from "../../types/Restaurant";

interface CardProps {
  restaurant: Restaurants;
}

export default function Card({ restaurant }: CardProps) {
  return (
    <div>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-[120px] rounded-t-lg object-cover"
      />
      <div>
        <h3 className="text-charcoalSlate text-lg font-semibold">
          {restaurant.name}
        </h3>
        <p className="text-softGray text-sm">{restaurant.rating} ★</p>
        <p className="text-softGray text-sm">{restaurant.eta}</p>
      </div>
    </div>
  );
}
