import Link from "next/link";
import Image from "next/image";

import styles from "/styles/Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/pokebola.png"
            width="50"
            height="50"
            alt="Pokeball"
          />
        </Link>
        <Link href="/">
          <h1>PokeNext</h1>
        </Link>
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
