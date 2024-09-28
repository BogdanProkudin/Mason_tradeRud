import styles from "./styles.module.scss";
import TariffsItem from "./tariffsItem";
const Tariffs = () => {
  const tariffsList = [
    {
      tariffName: "СТАНДАРТ",
      tariffPrice1: "$75/месяц",
      tariffPrice2: "$245/4 месяца",
      tariffDescription:
        "Все уроки курса + записи онлайн конференций (для самостоятельного изучения)",
    },
    {
      tariffName: "МАКСИМУМ",
      tariffPrice1: "$100/месяц",
      tariffPrice2: "$345/4 месяца",
      tariffDescription:
        "Все уроки курса + присутствие на онлайн-конференциях + домашние задания + доступ к приватному комьюнити + почти ежедневная аналитика",
    },
    {
      tariffName: "ЛЕГКОЕ ОБУЧЕНИЕ",
      tariffPrice1: "$45/месяц",
      tariffPrice2: "$150/4 месяца",
      tariffDescription:
        "Вы добавляетесь в группу где скидываются онлайн уроки, полезные термины из крипты, иногда создаем совместные конференции",
    },
  ];
  return (
    <div className={styles.tariffs_container}>
      <h1>Тарифы</h1>
      <span>
        Вы можете выбрать для себя наиболее комфортный вариант обучения, в
        зависимости от вашего уровня подготовки.
      </span>
      <div className={styles.tariffs_items}>
        {tariffsList.map((tariff) => {
          return (
            <TariffsItem
              tariffName={tariff.tariffName}
              tariffPrice1={tariff.tariffPrice1}
              tariffPrice2={tariff.tariffPrice2}
              tariffDescription={tariff.tariffDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tariffs;
