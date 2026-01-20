export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Air jordan 1 offwhite (Chicago)",
    brand: "Nike",
    price: 1130,
    image: "https://images.unsplash.com/photo-1695748966450-3abe5c25b481?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Basketball",
    featured: true,
  },
  {
    id: "2",
    name: "Air Jordan 1 Retro High OG",
    brand: "Adidas",
    price: 590,
    image: "https://images.unsplash.com/photo-1641919868936-bc8702cb887e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Running",
    featured: true,
  },
  {
    id: "3",
    name: "Air Force 1 Low",
    brand: "Nike",
    price: 170,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
    category: "Basketball",
    featured: true,
  },
  {
    id: "4",
    name: "Yeezy 350 V2",
    brand: "Adidas",
    price: 230,
    image: "https://images.unsplash.com/photo-1552066344-2464c1135c32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lifestyle",
    featured: true,
  },
  {
    id: "5",
    name: "Classic Leather",
    brand: "Reebok",
    price: 80,
    image: "https://images.unsplash.com/photo-1648210882746-fd5e312d3532?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Lifestyle",
  },
  {
    id: "6",
    name: "Air Force 1",
    brand: "Nike",
    price: 110,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    category: "Lifestyle",
  },
  {
    id: "7",
    name: "Stan Smith",
    brand: "Adidas",
    price: 95,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=600&fit=crop",
    category: "Lifestyle",
  },
  {
    id: "8",
    name: "Gel-Kayano 29",
    brand: "Asics",
    price: 160,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    category: "Running",
  },
  {
    id: "9",
    name: "NB 550",
    brand: "New Balance",
    price: 130,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&h=600&fit=crop",
    category: "Lifestyle",
  },
  {
    id: "10",
    name: "Dunk Low",
    brand: "Nike",
    price: 120,
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&h=600&fit=crop",
    category: "Skateboarding",
  },
  {
    id: "11",
    name: "RS-X",
    brand: "Puma",
    price: 110,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&h=600&fit=crop",
    category: "Lifestyle",
  },
  {
    id: "12",
    name: "Vapormax Plus",
    brand: "Nike",
    price: 200,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&h=600&fit=crop",
    category: "Running",
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery)
  );
};
