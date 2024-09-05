import styles from "./page.module.css";

import { Section } from "./components/section";
import { Hero } from "./components/sections";
import { Menu } from "./components/sections";
import { Salsa } from "./components/sections"
import { Drinks } from "./components/sections";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <Section>
          <Hero />
        </Section>
        <Section>
          <Menu />
        </Section>
        <Section>
          <Salsa/>
        </Section>
        <Section>
          <Drinks/>
        </Section>
      </div>
    </main>
  );
}
