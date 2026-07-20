export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
  category: string;

  stock: number;

  featured: boolean;

  badge?: "New" | "Best Seller" | "Sale";
};

export const products: Product[] = [
  {
    id: "zawiya-tshirt",
    name: "Official Zawiya T-Shirt",
    price: 70,
    image: "/images/store/tshirt.jpg",
    description:
      "Official Zawiyatu Shabaab Nasrullah T-Shirt representing our identity and community.",
    sizes: ["S", "M", "L", "XL"],
    category: "T-Shirts",

    stock: 25,
    featured: true,
    badge: "Best Seller",
  },

  {
    id: "maulid-tshirt",
    name: "Maulid Nabiyyi 2026 T-Shirt",
    price: 70,
    image: "/images/store/tshirt.jpg",
    description:
      "Special Maulid Nabiyyi commemorative collection.",
    sizes: ["S", "M", "L", "XL"],
    category: "T-Shirts",

    stock: 15,
    featured: true,
    badge: "New",
  },

  {
    id: "zawiya-cap",
    name: "Zawiya Cap",
    price: 50,
    image: "/images/store/cap.jpg",
    description:
      "Official Zawiya branded cap.",
    sizes: ["Free Size"],
    category: "Caps",

    stock: 0,
    featured: false,
  },
];