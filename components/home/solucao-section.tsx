"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"

export function SolucaoSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              PluginCo: Inteligência Artificial que sua empresa realmente usa.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nós não apenas vendemos tecnologia, nós construímos soluções.
              Nosso método foca em entender seus desafios de negócio para
              depois conectar as ferramentas de IA mais eficientes, garantindo
              um impacto real na sua operação e no seu faturamento.
            </p>
            <div className="flex items-center space-x-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-gray-700">Foco em ROI tangível</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-gray-700">Implementação ágil</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <CheckCircle className="w-6 h-6 text-accent" />
              <span className="text-gray-700">Suporte contínuo</span>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Equipe PluginCo em reunião estratégica"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
