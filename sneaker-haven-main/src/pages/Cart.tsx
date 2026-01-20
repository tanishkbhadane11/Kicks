import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeFromCart, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-12 min-h-screen">
        <div className="section-container">
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-card rounded-lg p-4 border border-border"
              >
                <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.brand}
                  </p>
                  <h3 className="font-semibold truncate">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    Qty: {item.quantity}
                  </p>
                  <p className="font-bold mt-1">
                    ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-muted-foreground hover:text-destructive transition-colors self-start"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice}</span>
                </div>
              </div>
              <button className="btn-accent w-full mb-3">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="btn-outline w-full text-muted-foreground"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
