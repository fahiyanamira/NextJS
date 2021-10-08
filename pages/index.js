import Layout from "../Components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Layout>
        <h1 className={styles["title-home"]}>Ini Home</h1>
      </Layout>
    </div>
  );
}
