"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink"

export function LeadMagnetBlogButton() {
  const whatsappLink = useWhatsAppLink(
    "Olá! Gostaria de agendar um diagnóstico."
  )

  return (
    <Button
      size="sm"
      className="w-full bg-accent hover:bg-accent/90 text-white"
      onClick={() => window.open(whatsappLink, "_blank")}
    >
      Agende seu Diagnóstico
      <ArrowRight className="ml-2 w-3 h-3" />
    </Button>
  )
}
