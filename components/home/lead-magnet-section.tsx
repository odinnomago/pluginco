"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function LeadMagnetSection() {
  const handleGuideSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    console.log("Lead magnet form submitted:", data)
    // Aqui você pode adicionar a lógica para enviar o lead e liberar o download do guia
    alert(
      "Obrigado! Em breve você receberá o guia no seu e-mail. (Verifique o console para ver os dados)"
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left">
            <Image
              src="/lead-magnet-ebook.svg"
              alt="Capa do E-book: O ROI da IA para PMEs"
              width={300}
              height={400}
              className="mx-auto lg:mx-0 shadow-2xl rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Pronto para entender o potencial da IA no seu negócio?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Baixe nosso guia gratuito "O ROI da Inteligência Artificial: Um
              Guia Prático para PMEs" e descubra como calcular o retorno do
              investimento em automação.
            </p>
            <form onSubmit={handleGuideSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Seu nome completo"
                className="h-12"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Seu melhor email"
                className="h-12"
                required
              />
              <Button
                type="submit"
                className="w-full h-12 bg-accent hover:bg-accent/90 text-white text-lg"
              >
                Baixar Guia Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
