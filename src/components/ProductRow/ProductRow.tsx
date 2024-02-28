export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function ProductRow({ product }: { product: Product }) {
  const { stocked, name, price } = product;
  const productName = stocked ? name : <span style={{ color: "red" }}>{name}</span>;
  return (
    <tr>
      <td>{productName}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
