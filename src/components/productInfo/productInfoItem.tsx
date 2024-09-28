import { ReactNode } from "react";
import styles from "./styles.module.scss";
type ProductInfoItemProps = {
  productInfoTitle: string;
  description: ReactNode;
};
const ProductInfoItem = ({
  productInfoTitle,
  description,
}: ProductInfoItemProps) => {
  return (
    <div className={styles.product_info_item_container}>
      <mark>{productInfoTitle}</mark>
      <p>{description}</p>
    </div>
  );
};
export default ProductInfoItem;
