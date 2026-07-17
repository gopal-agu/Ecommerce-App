import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-96">

      <ShoppingCart
        size={80}
        className="text-gray-400"
      />

      <h2 className="text-2xl font-bold mt-4">
        Your Cart is Empty
      </h2>

      <p className="text-gray-500 mt-2">
        Add some products to your cart.
      </p>

    </div>
  );
}

export default EmptyCart;