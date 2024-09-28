import ModuleItem from "./moduleItem";
import styles from "./styles.module.scss";
const Modules = () => {
  const moduleItemList = [
    { mainTitle: "10 модулей", description: "Пошаговое изучение" },
    { mainTitle: "40 видео-уроков", description: "По всем темам курса" },
    { mainTitle: "240+ страниц", description: "Методических материалов" },
    { mainTitle: "13 стримов", description: "Онлайн-конференции" },
    {
      mainTitle: "6 домашних заданий",
      description: "Проверяются индивидуально",
    },
    { mainTitle: "4 бэктеста", description: "Онлайн-практика" },
  ];
  return (
    <div className={styles.modules_container}>
      {moduleItemList.map((moduleItem) => {
        return (
          <ModuleItem
            mainTitle={moduleItem.mainTitle}
            description={moduleItem.description}
          />
        );
      })}
    </div>
  );
};
export default Modules;
