"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Cog, TrendingUp, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"

export function PilaresSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Como nós otimizamos o seu negócio
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-primary text-center">
                IA Conversacional
              </h3>
              <p className="text-gray-600 text-center">
                Chatbots e Voicebots que resolvem, vendem e encantam 24/7.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-primary text-center">
                Automação Inteligente
              </h3>
              <p className="text-gray-600 text-center">
                Automatize tarefas de back-office, do financeiro ao RH, e
                liberte sua equipe.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-primary text-center">
                Crescimento Guiado por IA
              </h3>
              <p className="text-gray-600 text-center">
                Captação e nutrição automática de leads. Potencialize seu CRM
                e suas vendas.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-primary text-center">
                Inteligência Organizacional
              </h3>
              <p className="text-gray-600 text-center">
                Transforme seus dados em dashboards interativos e insights
                preditivos.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/servicos"
            className="text-accent hover:text-accent/80 font-semibold inline-flex items-center"
          >
            Veja todos os nossos serviços em detalhe
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
