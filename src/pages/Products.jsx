import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/productSlice";
import { fetchCategories } from "../features/categorySlice";

import ProductCard from "../comman/ProductCard";
import SearchBar from "../comman/SearchBar";
import CategoryList from "../comman/CategoryList";
import Loader from "../comman/Loader";

function Products() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Category Buttons */}
      <CategoryList />

      {/* Search Bar */}
      <div className="flex justify-end mb-6">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2 className="text-center text-xl font-semibold col-span-full">
            No Products Found
          </h2>
        )}

      </div>

    </div>
  );
}

export default Products;