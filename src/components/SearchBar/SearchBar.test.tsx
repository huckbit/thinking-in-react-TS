/// <reference types="@testing-library/jest-dom" />
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import mock from './SearchBar.mock';

const mockOnFilterTextChange = jest.fn();
const mockOnInStockOnlyChange = jest.fn();

test('renders SearchBar component', () => {
  const container = render(<SearchBar {...mock} />);
  expect(container).toMatchSnapshot();
  expect(mockOnFilterTextChange).not.toHaveBeenCalled();
});

test('calls onFilterTextChange when filter text changes', () => {
  const { getByRole } = render(<SearchBar {...mock} onFilterTextChange={mockOnFilterTextChange} />);

  const inputElement = getByRole('textbox');

  fireEvent.change(inputElement, { target: { value: 'apple' } });

  expect(mockOnFilterTextChange).toHaveBeenCalledWith('apple');
});

test('calls onInStockOnlyChange when in stock only checkbox changes', () => {
  const { getByRole } = render(<SearchBar {...mock} onInStockOnlyChange={mockOnInStockOnlyChange} />);
  const checkboxElement = getByRole('checkbox', { name: /only show products in stock/i });

  fireEvent.click(checkboxElement);

  expect(mockOnInStockOnlyChange).toHaveBeenCalledWith(true);
});
test('calls onInStockOnlyChange when in stock only checkbox changes', () => {
  const { getByRole } = render(<SearchBar {...mock} inStockOnly={true} onInStockOnlyChange={mockOnInStockOnlyChange} />);

  const checkboxElement = getByRole('checkbox', { name: /only show products in stock/i });

  fireEvent.click(checkboxElement);

  expect(mockOnInStockOnlyChange).toHaveBeenCalledWith(true);
});
