import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <Image
          src="/images/me.jpeg"
          alt="Minha Foto"
          width={500}
          height={500}
          className="img"
        />

        <div className="text">
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

      <style jsx>{`
        .page {
          min-height: 100vh;
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          color: rgb(3, 22, 61);
          background: #f3f4f6;
        }

        .container {
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 1200px;
        }

        .img {
          width: 500px;
          height: 500px;
          border-radius: 12px;
          object-fit: cover;
        }

        .text h1 {
          margin: 0 0 20px 0;
          font-size: 2rem;
        }

        .text p {
          margin-bottom: 15px;
          line-height: 1.5;
        }

        /* Responsivo opcional: empilha no mobile */
        @media (max-width: 700px) {
          .container {
            flex-direction: column;
            text-align: center;
          }
          .img {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
    </main>
  );
}
