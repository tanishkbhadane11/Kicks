import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* ============================================
   BACKGROUND ANIMATION COMPONENT
   ============================================ */

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shoeTypes = ['sneaker', 'boot', 'sandal', 'heel', 'loafer'] as const;
    type ShoeType = typeof shoeTypes[number];

    interface FloatingShoe {
      x: number;
      y: number;
      rotation: number;
      rotationSpeed: number;
      speedY: number;
      scale: number;
      type: ShoeType;
      opacity: number;
    }

    const shoes: FloatingShoe[] = [];

    for (let i = 0; i < 15; i++) {
      shoes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        speedY: 0.3 + Math.random() * 0.7,
        scale: 0.4 + Math.random() * 0.5,
        type: shoeTypes[Math.floor(Math.random() * shoeTypes.length)],
        opacity: 0.08 + Math.random() * 0.12,
      });
    }

    const drawSneaker = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.moveTo(-30, 5);
      ctx.quadraticCurveTo(-32, -5, -25, -12);
      ctx.lineTo(0, -15);
      ctx.quadraticCurveTo(20, -15, 30, -8);
      ctx.quadraticCurveTo(38, 0, 35, 8);
      ctx.lineTo(-25, 8);
      ctx.quadraticCurveTo(-32, 8, -30, 5);
      ctx.closePath();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-28, 8);
      ctx.lineTo(35, 8);
      ctx.lineTo(38, 12);
      ctx.lineTo(-30, 12);
      ctx.closePath();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-5, -12);
      ctx.lineTo(-5, 0);
      ctx.moveTo(5, -12);
      ctx.lineTo(5, 0);
      ctx.moveTo(15, -10);
      ctx.lineTo(15, 0);
      ctx.stroke();
    };

    const drawBoot = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.moveTo(-20, -25);
      ctx.lineTo(-25, -25);
      ctx.lineTo(-28, 8);
      ctx.lineTo(30, 8);
      ctx.quadraticCurveTo(35, 0, 30, -5);
      ctx.lineTo(5, -10);
      ctx.lineTo(5, -25);
      ctx.lineTo(-20, -25);
      ctx.closePath();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-30, 8);
      ctx.lineTo(32, 8);
      ctx.lineTo(35, 14);
      ctx.lineTo(-32, 14);
      ctx.closePath();
      ctx.stroke();
    };

    const drawSandal = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.ellipse(0, 5, 28, 10, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-15, -5);
      ctx.quadraticCurveTo(0, -20, 15, -5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.quadraticCurveTo(0, -10, 10, 0);
      ctx.stroke();
    };

    const drawHeel = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.moveTo(-25, -5);
      ctx.quadraticCurveTo(-20, -15, 0, -15);
      ctx.quadraticCurveTo(25, -15, 30, -5);
      ctx.lineTo(30, 0);
      ctx.lineTo(-15, 0);
      ctx.lineTo(-20, 20);
      ctx.lineTo(-25, 20);
      ctx.lineTo(-22, 0);
      ctx.lineTo(-28, 0);
      ctx.quadraticCurveTo(-30, -5, -25, -5);
      ctx.closePath();
      ctx.stroke();
    };

    const drawLoafer = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.moveTo(-30, 0);
      ctx.quadraticCurveTo(-25, -12, 0, -12);
      ctx.quadraticCurveTo(28, -12, 32, 0);
      ctx.quadraticCurveTo(35, 8, 30, 10);
      ctx.lineTo(-25, 10);
      ctx.quadraticCurveTo(-32, 10, -30, 0);
      ctx.closePath();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(0, -2, 8, 4, 0, 0, Math.PI * 2);
      ctx.stroke();
    };

    const drawShoe = (shoe: FloatingShoe) => {
      ctx.save();
      ctx.translate(shoe.x, shoe.y);
      ctx.rotate(shoe.rotation);
      ctx.scale(shoe.scale, shoe.scale);
      
      ctx.strokeStyle = `rgba(255, 255, 255, ${shoe.opacity})`;
      ctx.lineWidth = 1.5;
      
      switch (shoe.type) {
        case 'sneaker':
          drawSneaker(ctx);
          break;
        case 'boot':
          drawBoot(ctx);
          break;
        case 'sandal':
          drawSandal(ctx);
          break;
        case 'heel':
          drawHeel(ctx);
          break;
        case 'loafer':
          drawLoafer(ctx);
          break;
      }
      
      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      shoes.forEach((shoe) => {
        drawShoe(shoe);
        
        shoe.y += shoe.speedY;
        shoe.rotation += shoe.rotationSpeed;
        
        if (shoe.y > canvas.height + 60) {
          shoe.y = -60;
          shoe.x = Math.random() * canvas.width;
          shoe.type = shoeTypes[Math.floor(Math.random() * shoeTypes.length)];
        }
      });

      requestAnimationFrame(animate);
    };

    ctx.fillStyle = 'rgb(13, 13, 13)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = 'rgb(13, 13, 13)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ============================================
   HERO SECTION COMPONENT
   ============================================ */

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className={`section-container w-full relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-2xl">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <p className="text-accent font-semibold text-sm tracking-wider">NEW COLLECTION 2026</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Step into
            <br />
            <span className="text-gradient">your style</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Discover premium sneakers from the world's top brands. 
            Elevate your game with every step.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#featured" className="btn-primary inline-flex items-center gap-2 shadow-2xl shadow-accent/20 hover:shadow-accent/40 hover:scale-105 transition-all group">
              Shop Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn-outline backdrop-blur-sm hover:scale-105 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

/* ============================================
   FEATURED PRODUCTS SECTION
   ============================================ */

const FeaturedSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (-rect.top + window.innerHeight * 0.3) / (rect.height * 0.5))
      );

      setScrollY(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: 'Air Jordan 1',
      price: '$180',
      category: 'Basketball',
      image: '/shoes/shoe1.jpg',
    },
    {
      name: 'Nike Dunk Low',
      price: '$120',
      category: 'Lifestyle',
      image: '/shoes/shoe2.jpg',
    },
    {
      name: 'Adidas Ultraboost',
      price: '$200',
      category: 'Running',
      image: '/shoes/shoe3.jpg',
    },
    {
      name: 'New Balance 550',
      price: '$130',
      category: 'Retro',
      image: '/shoes/shoe4.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen py-24 relative" id="featured">
      <div className="section-container">
        <div
          className="mb-16 transition-all duration-500"
          style={{
            opacity: Math.min(1, scrollY * 3),
            transform: `translateY(${Math.max(0, (1 - scrollY) * 80)}px)`,
          }}
        >
          <h3 className="text-5xl md:text-6xl font-black mb-4">
            Featured Drops
          </h3>
          <p className="text-xl text-muted-foreground">
            Curated selection of this season's hottest releases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                opacity: Math.min(1, Math.max(0, scrollY * 4 - index * 0.3)),
                transform: `translateY(${Math.max(
                  0,
                  (1 - scrollY) * 150 - index * 30
                )}px)`,
              }}
            >
              <div className="aspect-square bg-secondary flex items-center justify-center relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-accent mb-2">
                  {product.category}
                </p>
                <h4 className="text-xl font-bold mb-2">
                  {product.name}
                </h4>
                <p className="text-2xl font-black">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ============================================
   BANNER SECTION COMPONENT
   ============================================ */

const BannerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={bannerRef} className="py-32 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20" />
      
      <div className={`section-container text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <h3 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          WINTER: STAND OUT,<br />
          <span className="text-accent">STAND APART</span>
        </h3>
        <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience the perfect blend of style and comfort with our exclusive winter collection
        </p>
        <a href="#featured" className="btn-accent inline-flex items-center gap-2 text-lg px-10 py-4 shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:scale-110 transition-all">
          Shop Winter Collection
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

/* ============================================
   FOOTER SECTION COMPONENT
   ============================================ */

const FooterSection = () => {
  return (
    <footer className="bg-card border-t border-border relative" id="footer">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-4">KICKS.</h3>
            <p className="text-muted-foreground mb-4">
              Premium sneakers for every style. Your next pair is waiting.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="#featured" className="text-muted-foreground hover:text-accent transition-colors">
                  All Sneakers
                </a>
              </li>
              <li>
                <a href="#featured" className="text-muted-foreground hover:text-accent transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#featured" className="text-muted-foreground hover:text-accent transition-colors">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help</h4>
            <ul className="space-y-3">
              <li>
                <a href="#footer" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#footer" className="text-muted-foreground hover:text-accent transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#footer" className="text-muted-foreground hover:text-accent transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#footer" className="text-muted-foreground hover:text-accent transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#footer" className="text-muted-foreground hover:text-accent transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 KICKS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* ============================================
   MAIN APP COMPONENT
   ============================================ */

export default function App() {
  return (
    <div className="pt-16 relative overflow-hidden min-h-screen">
      <BackgroundAnimation />
      
      <div className="relative z-10">
        <HeroSection />
        <FeaturedSection />
        <BannerSection />
      </div>
      
      <FooterSection />
    </div>
  );
}