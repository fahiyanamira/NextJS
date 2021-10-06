import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h1>Ini Home</h1>
      <hr />
      <button>
        <Link href="/">
          <a>Home</a>
        </Link>
      </button>
      <button>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </button>
      <button>
        <Link href="/menu">
          <a>Menu</a>
        </Link>
      </button>
    </div>
  );
}
