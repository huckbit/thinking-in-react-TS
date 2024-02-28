/// <reference types="@testing-library/jest-dom" />
import { render } from "@testing-library/react";
import FilterableProductTable from "./FilterableProductTable";
import mock from "./FilterableProductTable.mock";

test("matches snapshot", () => {
  const { asFragment } = render(<FilterableProductTable products={mock.products} />);
  expect(asFragment()).toMatchSnapshot();
});
