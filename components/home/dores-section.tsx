"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, TrendingDown, MessageCircleX, BarChart3 } from "lucide-react"

export function DoresSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Sua empresa parece estar trabalhando mais, mas rendendo menos?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                Processos Manuais Lentos
              </h3>
              <p className="text-gray-600">
                Tarefas repetitivas consomem o tempo da sua equipe?
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                Leads Perdidos
              </h3>
              <p className="text-gray-600">
                Sua equipe de vendas não consegue contatar todas as
                oportunidades?
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircleX className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                Atendimento Demorado
              </h3>
              <p className="text-gray-600">
                Seus clientes esperam muito por respostas simples?
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                Decisões no Escuro
              </h3>
              <p className="text-gray-600">
                Falta de dados claros para guiar sua estratégia?
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
