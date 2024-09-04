import styles from "./page.module.css";

import Image from "next/image";
import tacoImg from "../../public/images/taco1.png";
import chileImg from "../../public/images/chiles.png";
import drinkImg from "../../public/images/bebida.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className="section">
          <div className="comment">13 guisador a escoger</div>
          <div className="comment">Los mejores tacos de colima</div>
          <div className="comment">Taco que no cierra no es taco</div>
          <div className="comment">Amo esos tacos no puedo comer solo uno</div>
          <div className="comment"> Y lo mejor... las salsas uff!</div>
          <Image src={tacoImg} alt="Taco image" />
        </div>
        <div className="section">
          <div className="commentw">Verduras frescas del día</div>
          <div className="commentw">Las tortillas del día. Riquísimas!</div>
          <div className="commentw">Con unas bebidas bien frías</div>
          <div className="guisados-text">
            <div className="guisados">13 Guisados</div>
            <div className="text2">
              Guisados cocinados al día con la mejor calidad.
            </div>
          </div>
          <div className="guisados-photos">
            <div className="meat-image">
              <h3>here put a picture</h3>
            </div>
            <div className="meat-image">
              <h3>here put a picture</h3>
            </div>
            <div className="meat-image">
              <h3>here put a picture</h3>
            </div>
          </div>
          <Image src={chileImg} alt="Chile" />
        </div>
        <div className="section">
          <h1>5 Salsas</h1>
          <h3>Lo que se hace bien, se siente y se disfruta</h3>
          <div className="salsa-images">
            <div className="salsa">
              <h4>name and picture</h4>
            </div>
            <div className="salsa">
              <h4>name and picture</h4>
            </div>
            <div className="salsa">
              <h4>name and picture</h4>
            </div>
          </div>
        </div>
        <Image src={drinkImg} alt="bebida" />
        <div className="section">
          <h1>Bebidas</h1>
          <h3>Agua fresca bien helada y refresco para acompañar</h3>
        </div>
      </div>
    </main>
  );
}
