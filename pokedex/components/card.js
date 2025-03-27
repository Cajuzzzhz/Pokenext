import Image from "next/image";
import Link from "next/link";

import styles from "/styles/Card.module.css";
export default function Card({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className={styles.cardLink}>
      <div className={`${styles.card} ${styles.hoverEffect}`}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          width={200}
          height={200}
          alt={pokemon.name}
        />
        <h3 className={styles.title}>{pokemon.name}</h3>
        <div className={styles.id}>#{pokemon.id}</div>
      </div>
    </Link>
  );
}
