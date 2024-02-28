export interface Props {
  category: string;
}

function ProductCategoryRow({ category }: Props) {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  )
}
export default ProductCategoryRow