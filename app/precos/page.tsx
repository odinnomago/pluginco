import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Preços e Modelos de Trabalho | PluginCo",
  description: "Modelos de trabalho flexíveis para projetos de Inteligência Artificial. Encontre o plano ideal para sua empresa, desde projetos pontuais até consultoria contínua.",
};

export default function PrecosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Planos Flexíveis para o Seu Sucesso
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Encontre o modelo de trabalho ideal para a sua necessidade. Transparência e foco em resultados, do início ao fim.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Plano 1: Projeto Pontual */}
            <Card className="p-8 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Projeto Pontual</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">Sob Demanda</p>
                <p className="text-gray-600 mb-6">Ideal para resolver um problema específico com uma solução de IA clara e definida.</p>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Escopo e preço fixos</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Entrega rápida de valor</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Ex: Chatbot para qualificação de leads</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Ex: Automação de um processo financeiro</li>
                </ul>
              </CardContent>
              <div className="mt-auto">
                <Link href="/contato">
                  <Button className="w-full bg-primary/90 hover:bg-primary text-white">Solicitar Orçamento</Button>
                </Link>
              </div>
            </Card>

            {/* Plano 2: Consultoria Contínua */}
            <Card className="p-8 flex flex-col border-2 border-accent shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Consultoria Contínua</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">Assinatura Mensal</p>
                <p className="text-gray-600 mb-6">Para empresas que buscam uma parceria estratégica para otimização contínua.</p>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Horas mensais de desenvolvimento e consultoria</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Acompanhamento de resultados (ROI)</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Suporte prioritário</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Roadmap de automação evolutivo</li>
                </ul>
              </CardContent>
              <div className="mt-auto">
                <Link href="/contato">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white">Agendar Conversa</Button>
                </Link>
              </div>
            </Card>

            {/* Plano 3: Diagnóstico e Roadmap */}
            <Card className="p-8 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Diagnóstico e Roadmap</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">Taxa Única</p>
                <p className="text-gray-600 mb-6">Mapeamento completo das oportunidades de IA no seu negócio, com um plano de ação claro.</p>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Mapeamento de processos e gargalos</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Plano de implementação com ROI estimado</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />Ideal para quem não sabe por onde começar</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-accent mr-2" />O valor pode ser abatido em um projeto futuro</li>
                </ul>
              </CardContent>
              <div className="mt-auto">
                <Link href="/contato">
                  <Button className="w-full bg-primary/90 hover:bg-primary text-white">Saber Mais</Button>
                </Link>
              </div>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
