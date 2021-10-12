import { useRouter } from "next/router";
import Layout from "../../Components/Layout/Layout";
import styles from "../../styles/Produk.module.css";

export default function DefaultPage(props) {
  const { dataProduk } = props;
  const router = useRouter();
  return (
    <div>
      <Layout pageTitle="Menu Page">
        {dataProduk.map((produk) => {
          return (
            <div className={styles.card} key={produk.id} onClick={() => router.push(`/menu/${produk.id}`)}>
              <img src={produk.image} alt="gambar-produk" width={100} height={100} />
              <p>{produk.title}</p>
            </div>
          );
        })}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  //memanggil API
  const response = await fetch("https://fakestoreapi.com/products");
  const dataProduk = await response.json();

  return {
    props: {
      dataProduk,
    },
  };
}
