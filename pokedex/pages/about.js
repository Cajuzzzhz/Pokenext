import styles from "/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptate quibusdam voluptatem quidem
        voluptatibus quos voluptatum quas nesciunt. Quisquam, quae. Quisquam
        voluptates, quod, quia, voluptate quibusdam voluptatem quidem
        voluptatibus quos voluptatum quas nesciunt. Quisquam, quae.
      </p>
      <Image src="/images/mudkip.png" width="350" height="450" alt="mudkip" />
    </div>
  );
}
