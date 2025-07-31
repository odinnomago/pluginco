"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function HeroSection() {

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Pare de adivinhar. Comece a otimizar com{" "}
            <span className="text-accent">Inteligência Artificial</span>.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A PluginCo analisa suas operações e implementa as soluções de IA
            certas para automatizar tarefas, aumentar suas vendas e encantar
            seus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar um diagnóstico estratégico.')}`} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg"
              >
                Agende sua Análise de Oportunidades com IA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Receba um roadmap de automação personalizado e gratuito.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
    </section>
  )
}
