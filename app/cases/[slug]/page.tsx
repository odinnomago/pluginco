import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, Quote, CheckCircle, TrendingUp, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data - in a real app, this would come from a CMS or database
const cases = {
  "ecommerce-moda-atendimento": {
    client: "ModaStyle E-commerce",
    sector: "E-commerce de Moda",
    challenge: "Alto volume de consultas repetitivas sobrecarregando equipe de atendimento",
    solution: "Chatbot inteligente integrado ao WhatsApp e site com IA conversacional",
    results: [
      { metric: "-55%", description: "Tempo de Atendimento", icon: Clock },
      { metric: "+73%", description: "Satisfação do Cliente", icon: Users },
      { metric: "24/7", description: "Disponibilidade", icon: TrendingUp },
    ],
    detailedChallenge:
      "A ModaStyle, um e-commerce de moda feminina com mais de 50 mil clientes ativos, enfrentava um gargalo crítico no atendimento ao cliente. A equipe de 3 atendentes recebia mais de 200 consultas diárias, principalmente sobre disponibilidade de produtos, prazos de entrega e trocas. O tempo médio de resposta era de 4 horas, gerando insatisfação e perda de vendas.",
    detailedSolution:
      "Implementamos um chatbot inteligente usando Botpress integrado ao WhatsApp Business API e ao site da empresa. O bot foi treinado com mais de 1.000 perguntas frequentes e integrado ao sistema de estoque em tempo real. Criamos fluxos automatizados para consulta de pedidos, agendamento de trocas e qualificação de leads para a equipe de vendas.",
    detailedResults:
      "Em 30 dias após a implementação, o tempo médio de atendimento caiu de 4 horas para 1h45min. O chatbot resolve 78% das consultas automaticamente, liberando a equipe para focar em casos complexos e vendas consultivas. A satisfação do cliente, medida por NPS, aumentou de 6.2 para 8.7.",
    testimonial: {
      text: "O chatbot da PluginCo transformou completamente nossa operação. Agora conseguimos atender nossos clientes 24/7 com a mesma qualidade, e nossa equipe pode focar no que realmente importa: vender e encantar.",
      author: "Marina Santos",
      position: "Diretora de E-commerce",
      company: "ModaStyle",
    },
  },
}

export async function generateStaticParams() {
  return [{ slug: "ecommerce-moda-atendimento" }]
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function CaseDetailPage({ params }: PageProps) {
  const { slug } = await params
  const caseData = cases[slug as keyof typeof cases]

  if (!caseData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">PluginCo</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/servicos" className="text-gray-600 hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="/sobre" className="text-gray-600 hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link href="/cases" className="text-primary font-semibold">
                Cases
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/contato" className="text-gray-600 hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
            <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent hover:bg-accent/90 text-white">Agende seu Diagnóstico</Button>
                </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/cases" className="hover:text-primary">
              Cases de Sucesso
            </Link>
            <span>/</span>
            <span className="text-primary">{caseData.client}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">{caseData.sector}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {caseData.client}: <span className="text-accent">Redução de 55% no Tempo de Atendimento</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-primary mb-2">Cliente</h3>
                <p className="text-gray-600">{caseData.client}</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-primary mb-2">Setor</h3>
                <p className="text-gray-600">{caseData.sector}</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-primary mb-2">Desafio</h3>
                <p className="text-gray-600">{caseData.challenge}</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-primary mb-2">Solução</h3>
                <p className="text-gray-600">{caseData.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Results Highlight */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {caseData.results.map((result, index) => {
              const IconComponent = result.icon
              return (
                <Card key={index} className="p-8 text-center bg-gradient-to-br from-accent/5 to-primary/5">
                  <CardContent className="pt-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl font-bold text-accent mb-2">{result.metric}</div>
                    <p className="text-gray-600">{result.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Challenge */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">O Desafio</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{caseData.detailedChallenge}</p>
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Situação antes da implementação"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Solution */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">A Solução PluginCo</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{caseData.detailedSolution}</p>

              <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Processo de Implementação</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Diagnóstico e Mapeamento</h4>
                      <p className="text-gray-600">
                        Análise completa do fluxo de atendimento e identificação de gargalos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Desenvolvimento e Treinamento</h4>
                      <p className="text-gray-600">
                        Criação do chatbot e treinamento com base de conhecimento específica
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Integração e Testes</h4>
                      <p className="text-gray-600">Integração com sistemas existentes e testes com usuários reais</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Go-live e Otimização</h4>
                      <p className="text-gray-600">Lançamento oficial e ajustes baseados em feedback real</p>
                    </div>
                  </div>
                </div>
              </div>

              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Fluxo da solução implementada"
                width={800}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Resultados e Impacto</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{caseData.detailedResults}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <CardContent className="pt-0">
                    <h3 className="font-semibold text-primary mb-4">Benefícios Operacionais</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-600">78% das consultas resolvidas automaticamente</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-600">Equipe focada em casos complexos</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-600">Atendimento 24/7 sem custo adicional</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-0">
                    <h3 className="font-semibold text-primary mb-4">Impacto Financeiro</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-600">ROI de 340% em 6 meses</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-600">Redução de 60% nos custos de atendimento</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-accent" />
                        <span className="text-gray-600">Aumento de 25% na conversão de leads</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mb-16">
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="pt-0">
                  <Quote className="w-12 h-12 text-accent mb-6" />
                  <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                    "{caseData.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt={caseData.testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-primary">{caseData.testimonial.author}</div>
                      <div className="text-gray-600">{caseData.testimonial.position}</div>
                      <div className="text-sm text-gray-500">{caseData.testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sua empresa pode ser nosso próximo caso de sucesso</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma conversa gratuita e descubra como podemos transformar sua operação.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
            Agende seu Diagnóstico
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
