import React from "react";
import styles from "./hero.module.scss";

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <section className={`flex ${styles.hero}`}>
      <div className="flex flex-column items-center justify-center">
        <h1>
          Deliver scalable and reliable code,{" "}
          <span className="highlight">improve UX with great</span> attention to detail
        </h1>
        <p>Hello I&apos;m Pietro, a Senior Software Engineer.</p>
        <button>See my work</button>
      </div>
    </section>
  );
};

export default Hero;
