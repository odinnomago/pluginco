"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink"

export function CtaMidArticleButton() {
  const whatsappLink = useWhatsAppLink(
    "Olá! Gostaria de falar com um especialista."
  )

  return (
    <Button
      size="lg"
      className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
      onClick={() => window.open(whatsappLink, "_blank")}
    >
      Fale com um especialista
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  )
}
