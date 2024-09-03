import styles from "./page.module.css";
import Image from "next/image";
import tacoImg from "../../public/images/taco1.png";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="first-section">

      </div>
      <div className="second-section">

      </div>
      <div className="third-section">

      </div>
      <div className="fourth-section">
        
      </div>
      <Image src={tacoImg} alt="Taco image" />
    </main>
  );
}
