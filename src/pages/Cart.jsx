import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cartSlice";

import { useState } from "react";
import { toast } from "react-toastify";
import ConfirmModal from "../comman/ConfirmModel";
import EmptyCart from "../comman/EmptyCart";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    setSelectedId(id);
    setShow(true);
  };

  const confirmRemove = () => {
    dispatch(removeFromCart(selectedId));
    toast.success("Product Removed");
    setShow(false);
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto mt-8 p-5">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (

        <div
          key={item.id}
          className="flex justify-between items-center bg-white shadow rounded-lg p-5 mb-5"
        >

          <div className="flex gap-5">

            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-28 h-28 object-contain"
            />

            <div>

              <h2 className="text-xl font-bold">
                {item.title}
              </h2>

              <p>₹ {item.price}</p>

              <p>
                Total : ₹ {item.price * item.quantity}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-yellow-500 px-3 py-1 rounded text-white"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-green-600 px-3 py-1 rounded text-white"
            >
              +
            </button>

            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-600 px-4 py-1 rounded text-white"
            >
              Remove
            </button>

          </div>

        </div>

      ))}

      <div className="bg-gray-100 p-6 rounded-lg mt-8">

        <h2 className="text-2xl font-bold">
          Total : ₹ {totalPrice}
        </h2>

        <div className="flex gap-4 mt-5">

          <button
            onClick={() => {
              dispatch(clearCart());
              toast.success("Cart Cleared");
            }}
            className="bg-red-600 text-white px-5 py-2 rounded"
          >
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Checkout
          </Link>

        </div>

      </div>

      <ConfirmModal
        show={show}
        handleClose={() => setShow(false)}
        handleConfirm={confirmRemove}
      />

    </div>
  );
}

export default Cart;