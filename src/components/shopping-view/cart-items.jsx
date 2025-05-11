import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function CartItem({ cartItem }) {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={cartItem?.image}
        alt={cartItem?.title}
        className="size-20 rounded object-cover"
      />
      <div className="flex-1">
        <h3 className="font-extrabold">{cartItem?.title}</h3>
        <div className="flex items-center gap-3 mt-1">
          <Button variant="outline" size="icon" className="size-8 rounded-full">
            <Minus className="size-4" />
            <span className="sr-only">Decrease</span>
          </Button>
          <span>{cartItem?.quantity}</span>
          <Button variant="outline" size="icon" className="size-8 rounded-full">
            <Plus className="size-4" />
            <span className="sr-only">Increase</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
