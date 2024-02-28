import React from "react";
import ProductRow, { Product } from "../ProductRow";
import ProductCategoryRow, { ProductCategoryRowProps } from "../ProductCategoryRow";

export interface Props {
  products: Product[];
  category?: ProductCategoryRowProps;
  filterText: string;
  inStockOnly?: boolean;
}

function ProductTable({ products, filterText, inStockOnly }: Props) {
  const rows: React.ReactNode[] = [];

  let lastCategory: String | null = null;

  products.forEach((product: Product, index: number) => {
    const { category } = product;
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={`category-${index}`} />);
    }
    rows.push(<ProductRow product={product} key={`product-${index}`} />);
    lastCategory = category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
