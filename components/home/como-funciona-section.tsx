"use client"

export function ComoFuncionaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nosso Processo: Simples, Transparente e Focado em Resultados
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Descobrir e Diagnosticar
            </h3>
            <p className="text-gray-600">
              Mapeamos seus processos, identificamos gargalos e criamos um
              roadmap de otimização com ROI claro.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Construir e Implementar
            </h3>
            <p className="text-gray-600">
              Configuramos e integramos as ferramentas de IA de forma ágil,
              com entregas rápidas de valor.
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Otimizar e Escalar
            </h3>
            <p className="text-gray-600">
              Analisamos a performance continuamente e oferecemos suporte para
              garantir a evolução da sua operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
