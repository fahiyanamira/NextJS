import Layout from "../Components/Layout/Layout";
import styles from "../styles/Blog.module.css";

export default function Blog(props) {
  const { dataBlog } = props;
  return (
    <div>
      <Layout pageTitle="Blog Page">
        {dataBlog.map((blog) => {
          return (
            <div key={blog.id} className={styles.card}>
              <h5>{blog.title}</h5>
              <p>{blog.body}</p>
            </div>
          );
        })}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataBlog = await response.json();
  return {
    props: {
      dataBlog,
    },
  };
}
