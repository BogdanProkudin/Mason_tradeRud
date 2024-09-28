import { useMediaQuery } from "@uidotdev/usehooks";
import styles from "./styles.module.scss";
type ModuleItemProps = {
  mainTitle: string;
  description: string;
};
const ModuleItem = ({ mainTitle, description }: ModuleItemProps) => {
  const isLargeDevice = useMediaQuery("only screen and (max-width : 1300px)");
  const isMediumDevice = useMediaQuery("only screen and (max-width : 1100px)");
  const isSmallDevice = useMediaQuery("only screen and (max-width : 990px)");
  return (
    <div className={styles.modules_item_container}>
      <span
        style={{
          fontSize:
            mainTitle === "6 домашних заданий" &&
            isLargeDevice &&
            !isMediumDevice
              ? "22px"
              : mainTitle === "6 домашних заданий" && isMediumDevice
              ? "19px"
              : "",
        }}
      >
        {mainTitle}
      </span>
      <hr />
      <p
        style={{
          fontSize:
            description === "Проверяются индивидуально" &&
            isLargeDevice &&
            !isMediumDevice
              ? "16px"
              : "",
        }}
      >
        {description}
      </p>
    </div>
  );
};
export default ModuleItem;
