import { useRouter } from "next/router";
import { useEffect } from "react";

export default function CustomErrorPage() {
  //redirect ke home pake useRouter()
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">MAAP YE HALAMAN NYA GAADA :(</h1>
    </div>
  );
}
