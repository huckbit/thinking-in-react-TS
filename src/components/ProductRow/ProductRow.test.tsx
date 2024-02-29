/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import ProductRow from './ProductRow';
import mock from './ProductRow.mock';

test('it matches the snapshot', () => {
  const { asFragment } = render(
    <table>
      <tbody>
        <ProductRow product={mock} />
      </tbody>
    </table>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders product name and price', () => {
  render(
    <table>
      <tbody>
        <ProductRow product={mock} />
      </tbody>
    </table>,
  );

  expect(screen.getByText(mock.name)).toBeInTheDocument();
  expect(screen.getByText(mock.price)).toBeInTheDocument();
});

test('renders product name in red if not stocked', () => {
  render(
    <table>
      <tbody>
        <ProductRow product={{ ...mock, stocked: false }} />
      </tbody>
    </table>,
  );

  expect(screen.getByText(mock.name)).toHaveStyle({ color: 'red' });
});
