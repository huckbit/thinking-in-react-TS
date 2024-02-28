/// <reference types="@testing-library/jest-dom" />
import { render } from "@testing-library/react";
import ProductTable from "./ProductTable";
import mock from "./ProductTable.mock";

const container = render(
  <ProductTable
    products={mock.products}
    category={mock.category}
    filterText={mock.filterText}
    inStockOnly={mock.inStockOnly}
  />,
);

test("matches snapshot", () => {
  const { asFragment } = container;
  expect(asFragment()).toMatchSnapshot();
});

test("renders the correct number of products when filter is checked", () => {
  render(
    <ProductTable
      products={mock.products}
      category={mock.category}
      filterText={mock.filterText}
      inStockOnly={mock.inStockOnly}
    />,
  );
  expect(container.getAllByRole("row").length).toBe(3);
});
