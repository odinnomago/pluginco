import { HeroSection } from "@/components/home/hero-section"
import { DoresSection } from "@/components/home/dores-section"
import { SolucaoSection } from "@/components/home/solucao-section"
import { PilaresSection } from "@/components/home/pilares-section"
import { ComoFuncionaSection } from "@/components/home/como-funciona-section"
import { ProvaSocialSection } from "@/components/home/prova-social-section"
import { LeadMagnetSection } from "@/components/home/lead-magnet-section"
import { CtaFinalSection } from "@/components/home/cta-final-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "PluginCo | Inteligência Artificial para Otimizar seu Negócio",
  description: "A PluginCo implementa soluções de IA para automatizar tarefas, aumentar suas vendas e encantar seus clientes. Agende um diagnóstico estratégico.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <DoresSection />
      <SolucaoSection />
      <PilaresSection />
      <ComoFuncionaSection />
      <ProvaSocialSection />
      <LeadMagnetSection />
      <CtaFinalSection />
    </div>
  )
}

