import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Image
          src="/images/me.jpeg"
          alt="Minha Foto"
          width={400}
          height={400}
          className={styles.img}
        />

        <div className={styles.text}>
          <h1>
            <b>NOEMI SOARES</b>
          </h1>
          <p>
            Sou estudante do curso de Ciência da Computação da Universidade
            Católica de Pernambuco (UNICAP). Gosto de desenvolver novos projetos
            continuamente, para aplicar meus aprendizados de forma prática.
          </p>
          <p>
            Quando não estou programando, você pode me encontrar lendo diversos
            livros, jogando RPG de mesa e passando um tempo em família.
          </p>
          <p>
            <i>
              &quot;Trabalho duro é inútil para aqueles que não acreditam em si
              mesmos.&quot;
            </i>
          </p>
        </div>
      </div>
    </main>
  );
}