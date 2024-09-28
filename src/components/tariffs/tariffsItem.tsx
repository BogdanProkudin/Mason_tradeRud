import styles from "./styles.module.scss";
type TariffsItemProps = {
  tariffName: string;
  tariffPrice1: string;
  tariffPrice2: string;
  tariffDescription: string;
};
const TariffsItem = ({
  tariffDescription,
  tariffName,
  tariffPrice1,
  tariffPrice2,
}: TariffsItemProps) => {
  return (
    <div className={styles.tariffs_item_container}>
      <p>
        <mark>{tariffName}</mark>
      </p>
      <div className={styles.tariffs_item_price_container}>
        <p className={styles.tariffs_item_price}>{tariffPrice1}</p>
        <p className={styles.tariffs_item_price}>{tariffPrice2}</p>
      </div>
      <p className={styles.tariffs_item_description}>{tariffDescription}</p>
      <a href="https://t.me/Mason_tradeRud">
        <button>Записаться</button>
      </a>
    </div>
  );
};

export default TariffsItem;
