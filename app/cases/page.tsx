import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, TrendingUp, Clock, Users, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function CasesPage() {
  const cases = [
    {
      id: "ecommerce-moda-atendimento",
      sector: "E-commerce de Moda",
      title: "E-commerce de Moda Reduz Tempo de Atendimento em 55%",
      metric: "-55% Tempo de Atendimento",
      description: "Implementação de chatbot inteligente que revolucionou o atendimento ao cliente",
      icon: Clock,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "clinica-agendamentos",
      sector: "Clínica Médica",
      title: "Clínica Automatiza Agendamentos e Aumenta Satisfação em 40%",
      metric: "+40% Satisfação do Cliente",
      description: "Sistema de agendamento inteligente com confirmações automáticas",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "imobiliaria-leads",
      sector: "Imobiliária",
      title: "Imobiliária Triplica Qualificação de Leads com IA",
      metric: "+200% Leads Qualificados",
      description: "Automação completa do processo de captação e qualificação de interessados",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: "consultoria-processos",
      sector: "Consultoria Empresarial",
      title: "Consultoria Reduz 90% dos Erros em Processos Administrativos",
      metric: "-90% Erros Operacionais",
      description: "RPA implementado em processos financeiros e administrativos",
      icon: BarChart3,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              O sucesso dos nossos clientes é a nossa <span className="text-accent">melhor propaganda</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Veja como ajudamos empresas de diversos setores a otimizar processos, reduzir custos e acelerar o
              crescimento com soluções de IA sob medida.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((case_item) => {
              const IconComponent = case_item.icon
              return (
                <Card
                  key={case_item.id}
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="pt-0">
                    <div className="flex items-start justify-between mb-6">
                      <Badge variant="outline" className="text-sm">
                        {case_item.sector}
                      </Badge>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${case_item.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-4 leading-tight">{case_item.title}</h3>

                    <div className="bg-accent/10 rounded-lg p-4 mb-6">
                      <div className="text-2xl font-bold text-accent mb-1">{case_item.metric}</div>
                      <p className="text-sm text-gray-600">Resultado Principal</p>
                    </div>

                    <p className="text-gray-600 mb-6">{case_item.description}</p>

                    <Link href={`/cases/${case_item.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Veja o case completo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sua empresa pode ser nosso próximo caso de sucesso</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma conversa gratuita e descubra como podemos transformar sua operação com IA.
          </p>
          <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
              Agende seu Diagnóstico Estratégico
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">PluginCo</span>
              </div>
              <p className="text-gray-300">Inteligência Artificial que gera resultado real.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    IA Conversacional
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Automação Inteligente
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Crescimento com IA
                  </Link>
                </li>
                <li>
                  <Link href="/servicos" className="hover:text-white">
                    Inteligência Organizacional
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/sobre" className="hover:text-white">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="/cases" className="hover:text-white">
                    Cases de Sucesso
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="hover:text-white">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>contato@pluginco.com.br</li>
                <li>(11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 PluginCo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}