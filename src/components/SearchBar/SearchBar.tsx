export interface Props {
  inStockOnly: boolean;
  filterText: string;
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}

function SearchBar({ inStockOnly, filterText, onFilterTextChange, onInStockOnlyChange }: Props) {
  return (
    <form>
      <input type='text' value={filterText} onChange={(event) => onFilterTextChange(event.target.value)} placeholder='Search...' />
      <label>
        <input type='checkbox' value={inStockOnly ? 'true' : 'false'} onChange={(event) => onInStockOnlyChange(event.target.checked)} />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
