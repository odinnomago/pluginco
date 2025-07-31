"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function CtaFinalSection() {

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Chega de perder tempo e dinheiro. Vamos construir o futuro da sua
          empresa.
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Descubra em 30 minutos como a IA pode gerar ROI para você. Agende uma conversa e receba seu roadmap de automação personalizado.
          </p>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar um diagnóstico estratégico.')}`} target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-semibold"
          >
              Receba seu Roadmap de Automação
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
        </a>
      </div>
    </section>
  )
}
