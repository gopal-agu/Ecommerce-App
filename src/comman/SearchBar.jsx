import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-96">
      <Search
        className="absolute left-3 top-3 text-gray-500"
        size={20}
      />

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;