import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Head from "next/head";

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Belajar" />
      </Head>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}

// childrennya diimport dari props
