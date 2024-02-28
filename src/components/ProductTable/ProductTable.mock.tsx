import type { Props as ProductTableProps } from "./ProductTable";

const mock: ProductTableProps = {
  products: [
    { category: "Fruits", price: "£1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "£1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "£2", stocked: false, name: "Passionfruit" },
  ],
  category: { category: "Fruits" },
  filterText: "apple",
  inStockOnly: true,
};

export default mock;
