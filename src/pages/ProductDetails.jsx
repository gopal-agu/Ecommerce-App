import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {

  const { id } = useParams();

  const { products } = useSelector(
    (state) => state.products
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-2xl">
        Product Not Found
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-lg"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-500 mt-4">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-6">
            ₹ {product.price}
          </h2>

          <p className="mt-4">
            Rating : ⭐ {product.rating}
          </p>

          <p className="mt-2">
            Brand : {product.brand}
          </p>

          <p className="mt-2">
            Category : {product.category}
          </p>

          <p className="mt-2">
            Stock : {product.stock}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;