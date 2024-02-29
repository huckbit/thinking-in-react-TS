import { Props as SearchBarProps } from './SearchBar';

const mock: SearchBarProps = {
  inStockOnly: false,
  filterText: '',
  onFilterTextChange: jest.fn(),
  onInStockOnlyChange: jest.fn(),
};

export default mock;
