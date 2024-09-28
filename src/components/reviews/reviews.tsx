import styles from "./styles.module.scss";
const Reviews = () => {
  return (
    <div className={styles.reviews_container}>
      <div className={styles.reviews_items_container}>
        <img src="//fs.gcfiles.net/fileservice/file/thumbnail/h/4ca39a8c41f727e9880080a9c1743050.png/s/s1200x/a/757045/sc/2" />
        <div className={styles.reviews_items_text_container}>
          <h1>Отзывы наших учеников</h1>
          <p>
            Мы в ответе за качество нашей образовательной программы. Поэтому,
            после каждого потока, мы просим наших студентов оставить отзыв о
            пройденном обучении. И вот, что они говорят о нас…
          </p>
          <a href="https://t.me/+Zak2ahlR_mUzMDYy">
            <button>Читать отзывы в Telegram</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
