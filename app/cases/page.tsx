import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cases de Sucesso | PluginCo",
  description: "Veja como a PluginCo ajudou empresas a alcançarem resultados incríveis com Inteligência Artificial. Cases de sucesso em diversos setores.",
};

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Resultados Reais, Clientes Satisfeitos
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Veja na prática como nossas soluções de Inteligência Artificial transformaram os negócios de empresas como a sua.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <p className="text-accent font-semibold mb-2">E-commerce de Moda</p>
                <h2 className="text-3xl font-bold text-primary mb-4">Redução de 55% no Tempo de Atendimento</h2>
                <p className="text-gray-600 mb-6">
                  Uma grande varejista de moda enfrentava longos tempos de espera no atendimento ao cliente, resultando em baixa satisfação e perda de vendas. A equipe estava sobrecarregada com perguntas repetitivas sobre status de pedidos, trocas e devoluções.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <p><span className="font-bold">O Desafio:</span> Atender milhares de clientes de forma rápida e eficiente, 24/7, sem aumentar a equipe.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <p><span className="font-bold">A Solução:</span> Implementação de um chatbot com IA Generativa no WhatsApp e no site, treinado para responder às principais dúvidas dos clientes e escalar para um atendente humano apenas quando necessário.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <p><span className="font-bold">Resultados:</span> Redução de 55% no tempo médio de atendimento, aumento de 25% na satisfação do cliente e recuperação de 15% em carrinhos abandonados através de contato proativo do chatbot.</p>
                  </div>
                </div>
                <Link href="/contato">
                  <Button className="bg-accent hover:bg-accent/90 text-white">
                    Quero um resultado parecido
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="bg-gray-100">
                <Image
                  src="/case-study-ecommerce.svg"
                  alt="Case de Sucesso E-commerce"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Adicione mais seções de cases aqui */}

    </div>
  )
}
