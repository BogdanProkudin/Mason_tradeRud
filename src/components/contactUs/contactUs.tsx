import styles from "./styles.module.scss";
const ContactUs = () => {
  return (
    <div className={styles.contactUs_container}>
      <div className={styles.contactUs_items_container}>
        <img src="//fs.gcfiles.net/fileservice/file/thumbnail/h/7d5c7c278bf07229b20bb324c78acf79.png/s/s1200x/a/757045/sc/199" />
        <div className={styles.contactUs_item_texts_container}>
          <h1>Запись на обучение</h1>
          <p>
            Для записи на обучение, просто напишите нам в Telegram фразу
            <span> “Готов обучаться” </span>
          </p>
          <span>
            Наш Telegram:
            <a href="https://t.me/Mason_tradeRud"> @Mason_trade_n1</a>
          </span>
          <a href="https://t.me/Mason_tradeRud">
            <button>Написать нам в Telegram</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
