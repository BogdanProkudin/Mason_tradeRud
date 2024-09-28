import HeaderContent from "./headerContent";
import styles from "./styles.module.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

const Header = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 490px)");

  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        {!isSmallDevice ? (
          <h1>Курс Mason_trade</h1>
        ) : (
          <div className={styles.header_small_screen_container}>
            <h1>Курс Mason_trade</h1>
          </div>
        )}
      </div>
      <HeaderContent />
    </div>
  );
};

export default Header;
