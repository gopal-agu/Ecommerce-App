import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Product added to cart");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl duration-300">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-52 object-contain"
      />

      <h2 className="text-lg font-bold mt-3">
        {product.title}
      </h2>

      <p className="text-gray-600 mt-2">
        ₹ {product.price}
      </p>

      <div className="flex justify-between mt-4">

        <Link
          to={`/product/${product.id}`}
          className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
        >
          View
        </Link>

        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-3 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
        >
          <ShoppingCart size={18} />

          Add
        </button>

      </div>

    </div>
  );
}

export default ProductCard;