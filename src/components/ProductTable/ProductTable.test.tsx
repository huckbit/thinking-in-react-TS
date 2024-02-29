/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import ProductTable from './ProductTable';
import mock from './ProductTable.mock';

const container = render(<ProductTable {...mock} />);

test('matches snapshot', () => {
  const { asFragment } = container;
  expect(asFragment()).toMatchSnapshot();
});

test('renders the correct number of products when filter is checked', () => {
  render(<ProductTable {...mock} />);
  expect(container.getAllByRole('row').length).toBe(3);
});

test('renders the correct number of products when filter is empty', () => {
  render(<ProductTable {...mock} filterText='' />);
  expect(screen.getAllByRole('row').length).toBe(4); // Update the expected value based on your data
});

test('renders the correct number of products when inStockOnly is true', () => {
  render(<ProductTable {...mock} inStockOnly={true} />);
  expect(screen.getAllByRole('row').length).toBe(3); // Update the expected value based on your data
});
