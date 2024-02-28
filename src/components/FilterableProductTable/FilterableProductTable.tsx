import { useState } from "react";
import ProductTable, { ProductTableProps } from "../ProductTable";
import type { Product } from "../ProductRow";

import SearchBar from "../SearchBar";

function FilterableProductTable({ products }: { products: Product[] }) {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onInStockOnlyChange={setInStockOnly}
        onFilterTextChange={setFilterText}
      />
      <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default FilterableProductTable;
