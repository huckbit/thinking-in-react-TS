import type { Product } from "../ProductRow/ProductRow";

interface Products {
  products: Product[];
}
const mock: Products = {
  products: [
    { category: "Fruits", price: "£1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "£1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "£2", stocked: false, name: "Passionfruit" },
  ],
};

export default mock;
