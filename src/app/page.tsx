import styles from "./page.module.css";
import Image from "next/image";
import tacoImg from "../../public/images/taco1.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hello</h1>
      <Image src={tacoImg} alt="Taco image" />
    </main>
  );
}
