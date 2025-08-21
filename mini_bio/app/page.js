import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="flex gap-10 max-w-5xl items-center bg-white shadow-lg rounded-2xl p-8">
        {}
        <div className="flex-shrink-0">
          <Image
            src="/images/me.jpeg"
            alt="Minha Foto"
            width={400}
            height={400}
            className="w-80 h-80 rounded-xl object-cover shadow-md"
          />
        </div>

        {}
        <div className="text-gray-900 max-w-lg">
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            NOEMI SOARES
          </h1>

          <p className="mb-4 leading-relaxed">
            Sou estudante do curso de Ciência da Computação da Universidade
            Católica de Pernambuco. Gosto de desenvolver novos projetos
            continuamente, para aplicar meus aprendizados de forma prática.
          </p>

          <p className="mb-4 leading-relaxed">
            Quando não estou programando, você pode me encontrar lendo diversos
            livros, jogando RPG de mesa e passando um tempo em família.
          </p>

          <p className="italic text-gray-600 text-center md:text-left">
            &quot;Trabalho duro é inútil para aqueles que não acreditam em si mesmos.&quot;
          </p>
        </div>
      </div>
    </main>
  );
}