import { useMediaQuery } from "@uidotdev/usehooks";
import styles from "./styles.module.scss";
type DetailsItemProps = {
  moduleTitle: string;
  descriptionTitle: string;
  lessons: { lessonName: string }[] | undefined;
  index: number;
};
const DetailsItem = ({
  moduleTitle,
  descriptionTitle,
  lessons,
  index,
}: DetailsItemProps) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 781px)");
  return (
    <div className={styles.details_items}>
      <div className={styles.details_items_container}>
        {!isSmallDevice && (
          <p className={styles.details_items_title}>
            {moduleTitle}
            {index !== 0 && (
              <h4
                style={{
                  padding: "0.3rem",
                  paddingRight: "0",
                  margin: "0px",
                  lineHeight: "1px",
                }}
              >
                {index}
              </h4>
            )}
          </p>
        )}
        <div className={styles.details_items_desc_container}>
          <div className={styles.circle_container}>
            {isSmallDevice && (
              <p className={styles.details_items_title_small_screen}>
                {moduleTitle}
                {index !== 0 && (
                  <h4
                    style={{
                      padding: "0.3rem",
                      paddingRight: "0px",
                      margin: "0px",
                      lineHeight: "1px",
                    }}
                  >
                    {index}
                  </h4>
                )}
              </p>
            )}

            <div
              style={{ top: isSmallDevice ? "" : "45px" }}
              className={styles.details_circle}
            ></div>
          </div>
          <p className={styles.details_items_desc_title}>{descriptionTitle}</p>

          <ul>
            {lessons?.map((lesson) => {
              return <li>{lesson.lessonName} </li>;
            })}
          </ul>
        </div>
      </div>

      <div className={styles.details_line}></div>
    </div>
  );
};

export default DetailsItem;
