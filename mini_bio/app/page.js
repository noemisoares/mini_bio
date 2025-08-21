import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      {}
      <div className="flex items-center justify-center gap-12 max-w-5xl bg-white shadow-lg rounded-2xl p-10">
        {}
        <div className="flex-shrink-0">
          <Image
            src="/images/me.jpeg"
            alt="Minha Foto"
            width={350}
            height={350}
            className="rounded-xl object-cover shadow-md"
          />
        </div>

        {}
        <div className="max-w-md text-gray-900">
          <h1 className="text-4xl font-bold mb-6">NOEMI SOARES</h1>

          <p className="mb-4 leading-relaxed">
            Sou estudante do curso de Ciência da Computação da Universidade
            Católica de Pernambuco. Gosto de desenvolver novos projetos
            continuamente, para aplicar meus aprendizados de forma prática.
          </p>

          <p className="mb-4 leading-relaxed">
            Quando não estou programando, você pode me encontrar lendo diversos
            livros, jogando RPG de mesa e passando um tempo em família.
          </p>

          <p className="italic text-gray-600">
            &quot;Trabalho duro é inútil para aqueles que não acreditam em si
            mesmos.&quot;
          </p>
        </div>
      </div>
    </main>
  );
}
