import Layout from "../Components/Layout/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <Image src="/boneka-beruang.jpg" width={300} height={300} alt="Boneka beruang" />
        <h1 className={styles["title-home"]}>Ini Home</h1>
      </Layout>
    </div>
  );
}
