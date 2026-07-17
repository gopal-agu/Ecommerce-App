import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryProducts,
  fetchProducts,
} from "../features/productSlice";

function CategoryList() {
  const dispatch = useDispatch();

  const { categories } = useSelector(
    (state) => state.category
  );

  return (
    <div className="flex flex-wrap gap-3 mb-6">

      <button
        onClick={() => dispatch(fetchProducts())}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            dispatch(fetchCategoryProducts(category))
          }
          className="bg-gray-200 hover:bg-blue-600 hover:text-white px-4 py-2 rounded"
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryList;