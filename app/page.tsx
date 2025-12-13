import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E2A3C7] text-gray-900">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hábitos Que Transformam
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Um método simples e prático para transformar sua rotina, aumentar
          foco, disciplina e resultados em apenas 30 dias.
        </p>
        <a
          href="https://pay.kiwify.com.br/AgAigQX?afid=3dcXLjI4"
          target="_blank"
          className="inline-block bg-[#60435F] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
        >
          Quero transformar minha rotina
        </a>
      </section>

      {/* Benefícios */}
      <section className="bg-[#ce94b5] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">
            O que você vai aprender
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Criar hábitos duradouros
              </h3>
              <p className="text-gray-600">
                Aprenda como o cérebro funciona e como criar hábitos que
                realmente permanecem.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Aumentar foco e disciplina
              </h3>
              <p className="text-gray-600">
                Técnicas simples para manter constância mesmo sem motivação.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h3 className="font-semibold text-xl mb-3">
                Transformar sua rotina
              </h3>
              <p className="text-gray-600">
                Um plano prático de 30 dias para aplicar no dia a dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Para quem é este e-book?</h2>
          <p className="text-gray-600 text-lg">
            Para quem se sente improdutivo, começa e para projetos, quer mais
            disciplina, organização e resultados reais na vida pessoal e
            profissional.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        id="comprar"
        className="bg-[#60435F] text-white py-20 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">
          Comece sua transformação hoje
        </h2>
        <p className="text-gray-300 mb-8">
          Acesso imediato ao e-book + atualizações futuras.
        </p>
        <a
          href="https://pay.kiwify.com.br/AgAigQX?afid=3dcXLjI4"
          target="_blank"
          className="inline-block bg-white text-black px-10 py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
        >
          Comprar agora
        </a>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Hábitos Que Transformam. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
