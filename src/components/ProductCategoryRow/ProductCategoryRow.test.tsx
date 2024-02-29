/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';
import ProductCategoryRow from './ProductCategoryRow';

test('it matches the snapshot', () => {
  const { asFragment } = render(<ProductCategoryRow category='test' />);
  expect(asFragment()).toMatchSnapshot();
});
