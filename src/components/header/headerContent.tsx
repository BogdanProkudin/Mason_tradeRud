import styles from "./styles.module.scss";
const HeaderContent = () => {
  return (
    <div className={styles.header_content_container}>
      <ul className={styles.header_content_ul}>
        <li>
          <div></div>
          Детальное изучение концепции Smart Money и Price Action.
        </li>
        <li>
          <div></div>
          Основное направление – внутридневная торговля на криптовалютном рынке.
          Цель – быстрые сделки и быстрая прибыль. При этом, концепция Smart
          Money одинаково эффективно работает на всех рынках и позволяет
          торговать не только интрадей, но и открывать средне- и долгосрочные
          сделки.
        </li>
        <li>
          <div></div>
          Длительность курса – 4 недели.
        </li>
        <li>
          <div></div>
          Группа с общением и торговлей{" "}
          <a href=" https://t.me/Mason_tradeRud">https://t.me/Mason_tradeRud</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderContent;
