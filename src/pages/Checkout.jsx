import { useSelector } from "react-redux";

function Checkout() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (

    <div className="max-w-5xl mx-auto mt-10">

      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6">

        {cartItems.map((item) => (

          <div
            key={item.id}
            className="flex justify-between mb-4"
          >

            <span>
              {item.title} x {item.quantity}
            </span>

            <span>
              ₹ {item.price * item.quantity}
            </span>

          </div>

        ))}

        <hr className="my-4" />

        <h2 className="text-2xl font-bold">
          Grand Total : ₹ {totalPrice}
        </h2>

        <button
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded"
        >
          Place Order
        </button>

      </div>

    </div>

  );
}

export default Checkout;