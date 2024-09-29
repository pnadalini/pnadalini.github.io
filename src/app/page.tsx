import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Hero />
        <Experience />
      </div>
    </main>
  );
}
