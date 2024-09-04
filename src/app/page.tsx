import styles from "./page.module.css";
import Image from "next/image";
import tacoImg from "../../public/images/taco1.png";
import chileImg from "../../public/images/chiles.png";
import drinkImg from "../../public/images/bebida.png";
import beansImg from "../../public/images/beans.jpg";
import salsaImg from "../../public/images/salsa.jpg";
import cocaImg from "../../public/images/coca.png";
import jamaicaImg from "../../public/images/jamaica.jpg";
import lechuguilla from "../../public/images/el grullense.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.section}>
          <div className={styles.comment}>13 guisador a escoger</div>
          <div className={styles.comment}>Los mejores tacos de colima</div>
          <div className={styles.comment}>Taco que no cierra no es taco</div>
          <div className={styles.comment}>
            Amo esos tacos no puedo comer solo uno
          </div>
          <div className={styles.comment}> Y lo mejor... las salsas uff!</div>
          <Image src={tacoImg} alt="Taco image" width={100} height={100} />
        </div>
        <div className={styles.section}>
          <div className={styles.commentw}>Verduras frescas del día</div>
          <div className={styles.commentw}>
            Las tortillas del día. Riquísimas!
          </div>
          <div className={styles.commentw}>Con unas bebidas bien frías</div>
          <div className="guisados-text">
            <div className="guisados">
              <h1>13 Guisados</h1>
            </div>
            <div className="text2">
              <h2>Guisados cocinados al día con la mejor calidad.</h2>
            </div>
          </div>
          <div className={styles.productContainer}>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={beansImg} alt="guisado" width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={beansImg} alt="guisado" width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={beansImg} alt="guisado" width={200} height={200}/>
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
          </div>
          <Image src={chileImg} alt="Chile" width={100} height={100} />
        </div>
        <div className={styles.section}>
          <h1>5 Salsas</h1>
          <h3>Lo que se hace bien, se siente y se disfruta</h3>
          <div className={styles.productContainer}>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={salsaImg} alt="salsa" width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={salsaImg} alt="salsa" width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={salsaImg} alt="salsa" width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
          </div>
        </div>
        <Image src={drinkImg} alt="bebida" width={200} height={200} />
        <div className={styles.section}>
          <h1>Bebidas</h1>
          <h3>Agua fresca bien helada y refresco para acompañar</h3>
          <div className={styles.productContainer}>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={jamaicaImg} alt="jamaica" width={200} height={200}/>
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={cocaImg} alt="cocacola" width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
            <div className={styles.descriptionandImg}>
              <div className={styles.productImage}>
                <Image src={lechuguilla} alt="lechuguilla"width={200} height={200} />
              </div>
              <div className={styles.productText}>
                <h3>Photo description</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
