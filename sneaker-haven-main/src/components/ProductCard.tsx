import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="product-card group">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-foreground text-background text-sm font-medium px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
