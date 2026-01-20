import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { products, searchProducts } from "@/data/products";

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    return searchProducts(searchQuery);
  }, [searchQuery]);

  return (
    <div className="pt-24 pb-12">
      <div className="section-container">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Browse our full collection of premium sneakers
          </p>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name or brand..."
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
        </p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No products found for "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-accent hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
