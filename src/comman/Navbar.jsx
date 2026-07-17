import { ShoppingCart, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold bg-amber-50 text-gray-800 px-3 py-2 rounded-lg"
        >
          <Store size={28} />
          E-Commerce
        </Link>

        <div className="flex items-center gap-6 bg-amber-50 text-gray-800 px-4 py-2 rounded-lg">

          <Link to="/">Home</Link>

          <Link to="/products">Products</Link>

          <Link
            to="/cart"
            className="flex items-center gap-2"
          >
            <ShoppingCart size={22} />

            <span className="bg-white text-blue-600 px-2 rounded-full">
              {totalItems}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;