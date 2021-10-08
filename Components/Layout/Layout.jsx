import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

// childrennya diimport dari props
