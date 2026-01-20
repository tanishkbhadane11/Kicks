import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              KICKS<span className="text-accent">.</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Premium sneakers for every style. Your next pair is waiting.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Sneakers
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">New Arrivals</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Best Sellers</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">Contact Us</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Shipping</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Returns</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Careers</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">Press</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 KICKS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
