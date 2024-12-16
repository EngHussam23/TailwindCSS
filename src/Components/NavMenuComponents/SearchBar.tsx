import Search from "../../assets/Icons/Search";

const SearchBar = () => {
  return (
    <div className="flex items-center pr-2 gap-2 border overflow-hidden -border--Neutral-600 rounded-lg hover:-border--Neutral-100">
      <input
        type="search"
        title="search"
        placeholder="Search..."
        className="p-2 -bg--Primary-950 -placeholder--Neutral-600 rounded focus:outline-none focus:-text--Primary-50 text-sm"
      />
      <Search size={20} color="#4F5F6B" />
    </div>
  );
};

export default SearchBar;

/**
 * 
 * <div className="flex items-center pr-2 gap-2 border overflow-hidden -border--Neutral-600 rounded-lg hover:-border--Neutral-100">
          <input
            type="search"
            title="search"
            placeholder="Search..."
            className="p-2 -bg--Primary-950 -placeholder--Neutral-600 rounded focus:outline-none focus:-text--Primary-50 text-sm"
          />
          <Search size={20} color="#4F5F6B" />
        </div>
 * 
 */
