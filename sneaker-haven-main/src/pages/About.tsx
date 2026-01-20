import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="section-container">
        {/* Hero */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We're all about the
            <br />
            <span className="text-gradient">perfect kick.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            KICKS was born from a simple idea: everyone deserves access to premium sneakers 
            without the hassle. We partner directly with the world's best brands to bring 
            you authentic footwear at fair prices.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">100% Authentic</h3>
            <p className="text-muted-foreground">
              Every sneaker is verified authentic. We work directly with brands 
              and authorized retailers only.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Truck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
            <p className="text-muted-foreground">
              Free express shipping on all orders. Get your kicks delivered 
              within 3-5 business days.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Easy Returns</h3>
            <p className="text-muted-foreground">
              Not the right fit? Return within 30 days for a full refund. 
              No questions asked.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, KICKS started as a small online store run by two 
                sneaker enthusiasts from their garage. What began as a passion project 
                quickly grew into something bigger.
              </p>
              <p>
                Today, we serve thousands of customers worldwide, but our mission 
                remains the same: make premium sneakers accessible to everyone, 
                regardless of where they are.
              </p>
              <p>
                We believe that the right pair of sneakers can change your day, 
                boost your confidence, and express who you are. That's why we 
                carefully curate our collection to bring you only the best.
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl aspect-square flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&h=600&fit=crop"
              alt="Sneaker collection"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card rounded-2xl p-12 border border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to find your next pair?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Browse our collection and discover your perfect match.
          </p>
          <Link to="/shop" className="btn-accent inline-flex items-center gap-2">
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
