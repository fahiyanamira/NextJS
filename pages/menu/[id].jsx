import Layout from "../../Components/Layout/Layout";
import styles from "../../styles/Detail.module.css";

export default function MenuDetail(props) {
  // const router = useRouter();
  // const { pid } = router.query;
  const { produk } = props;
  return (
    <Layout pageTitle="Item Detail">
      <div className={styles.card}>
        <img src={produk.image} width={100} height={100} alt="Boneka beruang" />
        <p>
          <strong>{produk.title}</strong>
        </p>
        <p>${produk.price}</p>
        <p>{produk.description}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  //function ini akan generate list produk
  //akan return path list produk-produk dengan memanggil API:
  const response = await fetch("https://fakestoreapi.com/products");
  const dataProduk = await response.json();
  //gunakan data produk untuk mendapatkan list id nya dengan mapping:
  //nantinya paths akan berisi value id produk dari API
  const paths = dataProduk.map((produk) => {
    return {
      params: {
        id: `${produk.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

//fungsi untuk menanmpilkan data dari masing" data produknya:
export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const produk = await response.json();
  return {
    props: {
      produk,
    },
  };
}
