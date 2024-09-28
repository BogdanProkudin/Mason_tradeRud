import DetailsItem from "./detaitlsItem";
import styles from "./styles.module.scss";
const Details = () => {
  const modulsList = [
    {
      moduleTitle: "Введение",
      descriptionTitle: "Основные понятия",
      description: {
        lessons: [{ lessonName: "Урок 1: Почему рынок падает или растет?" }],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "СТРУКТУРА РЫНКА",
      description: {
        lessons: [
          { lessonName: "Урок 2: Основные понятия: Структура, Тренд, Свинги" },
          { lessonName: "Урок 3: Слом структуры (BOS)" },
          { lessonName: "Урок 4: Ложный слом структуры (Fake BOS)" },
          { lessonName: "Урок 5: Типы структуры (Swing, Sub, Minor)" },
          { lessonName: "Урок 6: Таймфреймы и структура" },
          { lessonName: "Урок 7: Тренд и рендж" },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "ЛИКВИДНОСТЬ И ИМБАЛАНС",
      description: {
        lessons: [
          { lessonName: "Урок 8: Ликвидность в трейдинге и ее важность" },
          { lessonName: "Урок 9: Пулы ликвидности и их типы" },
          { lessonName: "Урок 10: Имбаланс и его важность" },
          {
            lessonName:
              "Урок 11: Комплексное использование ликвидности и имбаланса",
          },
          {
            lessonName:
              "Урок 12: Синхронизация ликвидности, имбаланса и структуры рынка",
          },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "ЗОНЫ ИНТЕРЕСА",
      description: {
        lessons: [
          { lessonName: "Урок 13: Зоны интереса: что это и зачем нужны?" },
          { lessonName: "Урок 14: Ордер блок" },
          { lessonName: "Урок 15: Тень свечи" },
          { lessonName: "Урок 16: Брейкер блок" },
          { lessonName: "Урок 17: Митигейшн блок" },
          { lessonName: "Урок 18: Имбаланс как зона интереса" },
          { lessonName: "Урок 19: Зоны интереса: подводим итоги" },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "РЕНДЖ (БОКОВИК)",
      description: {
        lessons: [
          {
            lessonName:
              "Урок 20: Рендж: Определение, Построение границ, Девиация",
          },
          {
            lessonName:
              "Урок 21: Как торговать в боковике: Варианты открытия сделок в рендже",
          },
          { lessonName: "Урок 22: Рендж: подводим итоги" },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "РАЗВОРОТНЫЕ ПАТТЕРНЫ",
      description: {
        lessons: [
          {
            lessonName:
              "Урок 23: Разворотные паттерны: что это и как использовать?",
          },
          { lessonName: "Урок 24: Паттерн «Двойная вершина  Двойное дно»" },
          { lessonName: "Урок 25: Паттерн «Stop Hunt»" },
          { lessonName: "Урок 26: Паттерн «Three Drives Pattern»" },
          { lessonName: "Урок 27: Паттерн «Three Tap Setup»" },
          { lessonName: "Урок 28: Паттерн «Turtle Soup»" },
          { lessonName: "Урок 29: Разворотные паттерны: подводим итоги" },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "ТОРГОВЫЕ СЕТАПЫ",
      description: {
        lessons: [
          {
            lessonName:
              "Урок 30: Составляющие торгового сетапа и принцип поиска сетапов",
          },
          {
            lessonName:
              "Урок 31: Алгоритм действий при поиске торговых сетапов",
          },
          {
            lessonName:
              "Урок 32: Примеры торговых сетапов на реальных графиках",
          },
          { lessonName: "Урок 33: Торговые сетапы: подводим итоги" },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "РИСК-МЕНЕДЖМЕНТ И УПРАВЛЕНИЕ СДЕЛКОЙ",
      description: {
        lessons: [
          {
            lessonName:
              "Урок 34: Важность Стоп-лосса и строгое управление рисками",
          },
          {
            lessonName:
              "Урок 35: Менеджмент Стоп-лосса и менеджмент Тейк-профита",
          },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "ОТБОР МОНЕТ ДЛЯ ТОРГОВЛИ",
      description: {
        lessons: [
          {
            lessonName:
              "Урок 36: Что торговать? Сколько инструментов выбрать? Фьючерсы или спот?",
          },
          {
            lessonName:
              "Урок 37: Критерии отбора монет и Скринеры для упрощения отбора",
          },
          {
            lessonName: "Урок 38: Торговые сессии и рыночная активность",
          },
          {
            lessonName:
              "Урок 39: Доминация Биткоина и корреляция с индексом S&P 500",
          },
          {
            lessonName: "Урок 40: Итоги: Алгоритм отбора монет для торговли",
          },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "ПСИХОЛОГИЯ В ТРЕЙДИНГЕ",
      description: {
        lessons: [
          {
            lessonName: "Методические материалы (15 страниц)",
          },
        ],
      },
    },
    {
      moduleTitle: "Модуль",
      descriptionTitle: "ДОПОЛНИТЕЛЬНЫЙ ПРАКТИЧЕСКИЙ МОДУЛЬ",
      description: {
        lessons: [
          {
            lessonName: "БЭКТЕСТ №1",
          },
          {
            lessonName: "БЭКТЕСТ №2",
          },
          {
            lessonName: "БЭКТЕСТ №3",
          },
          { lessonName: "БЭКТЕСТ №4" },
        ],
      },
    },
  ];
  return (
    <div className={styles.details_container}>
      <h1>Детальная программа курса</h1>
      <div className={styles.details_list}>
        {modulsList.map((item, index) => {
          return (
            <DetailsItem
              moduleTitle={item.moduleTitle}
              descriptionTitle={item.descriptionTitle}
              lessons={item.description.lessons}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Details;
