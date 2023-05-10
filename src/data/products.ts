export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export const products: Product[] = [
  {
    description: "Required to rout networks",
    id: 1,
    name: "Cisco Router",
    price: 987,
  },
  {
    description: "Required to for network security",
    id: 2,
    name: "Palo Alto Firewall",
    price: 1265,
  },
  {
    description: "Required to distribute network internally",
    id: 3,
    name: "Cisco Switches",
    price: 432,
  },
  {
    description: "Required for individual uses",
    id: 4,
    name: "HP Laptops",
    price: 743,
  },
];
