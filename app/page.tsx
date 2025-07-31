import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Clock,
  TrendingDown,
  MessageCircleX,
  BarChart3,
  MessageSquare,
  Cog,
  TrendingUp,
  Brain,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Pare de adivinhar. Comece a otimizar com <span className="text-accent">Inteligência Artificial</span>.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A PluginCo analisa suas operações e implementa as soluções de IA certas para automatizar tarefas, aumentar
              suas vendas e encantar seus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg">
                Agende seu Diagnóstico Estratégico
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Junte-se às mais de 60% das empresas brasileiras que já usam IA para crescer.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5"></div>
      </section>

      {/* Dores Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Sua empresa parece estar trabalhando mais, mas rendendo menos?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Processos Manuais Lentos</h3>
                <p className="text-gray-600">Tarefas repetitivas consomem o tempo da sua equipe?</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Leads Perdidos</h3>
                <p className="text-gray-600">Sua equipe de vendas não consegue contatar todas as oportunidades?</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircleX className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Atendimento Demorado</h3>
                <p className="text-gray-600">Seus clientes esperam muito por respostas simples?</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Decisões no Escuro</h3>
                <p className="text-gray-600">Falta de dados claros para guiar sua estratégia?</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apresentação da Solução */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                PluginCo: Inteligência Artificial que sua empresa realmente usa.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nós não apenas vendemos tecnologia, nós construímos soluções. Nosso método foca em entender seus
                desafios de negócio para depois conectar as ferramentas de IA mais eficientes, garantindo um impacto
                real na sua operação e no seu faturamento.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-gray-700">Foco em ROI tangível</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-gray-700">Implementação ágil</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="text-gray-700">Suporte contínuo</span>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipe PluginCo em reunião estratégica"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Atuação */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Como nós otimizamos o seu negócio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-primary text-center">IA Conversacional</h3>
                <p className="text-gray-600 text-center">Chatbots e Voicebots que resolvem, vendem e encantam 24/7.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-primary text-center">Automação Inteligente</h3>
                <p className="text-gray-600 text-center">
                  Automatize tarefas de back-office, do financeiro ao RH, e liberte sua equipe.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-primary text-center">Crescimento Guiado por IA</h3>
                <p className="text-gray-600 text-center">
                  Captação e nutrição automática de leads. Potencialize seu CRM e suas vendas.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-primary text-center">Inteligência Organizacional</h3>
                <p className="text-gray-600 text-center">
                  Transforme seus dados em dashboards interativos e insights preditivos.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href="/servicos" className="text-accent hover:text-accent/80 font-semibold inline-flex items-center">
              Veja todos os nossos serviços em detalhe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Nosso Processo: Simples, Transparente e Focado em Resultados
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Descobrir e Diagnosticar</h3>
              <p className="text-gray-600">
                Mapeamos seus processos, identificamos gargalos e criamos um roadmap de otimização com ROI claro.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Construir e Implementar</h3>
              <p className="text-gray-600">
                Configuramos e integramos as ferramentas de IA de forma ágil, com entregas rápidas de valor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Otimizar e Escalar</h3>
              <p className="text-gray-600">
                Analisamos a performance continuamente e oferecemos suporte para garantir a evolução da sua operação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Resultados que nossos clientes alcançam</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-2">-55%</div>
                <p className="text-lg">no tempo de atendimento ao cliente com chatbots inteligentes.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-2">+30%</div>
                <p className="text-lg">na produtividade da equipe de vendas com automação de CRM.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-accent mb-2">90%</div>
                <p className="text-lg">de redução de erros em tarefas manuais com automação RPA.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8">Tecnologias que Dominamos</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
                HubSpot
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
                Salesforce
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
                Zenvia
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
                Botpress
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
                UiPath
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white px-4 py-2">
                Make.com
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <Image
                src="/placeholder.svg?height=400&width=300"
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
                Baixe nosso guia gratuito "O ROI da Inteligência Artificial: Um Guia Prático para PMEs" e descubra como
                calcular o retorno do investimento em automação.
              </p>
              <div className="space-y-4">
                <Input placeholder="Seu nome completo" className="h-12" />
                <Input type="email" placeholder="Seu melhor email" className="h-12" />
                <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white text-lg">
                  Baixar Guia Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Chega de perder tempo e dinheiro. Vamos construir o futuro da sua empresa.
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Agende uma conversa sem compromisso e receba um diagnóstico estratégico gratuito para suas operações.
          </p>
          <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 py-6 text-xl font-semibold">
              Agende seu Diagnóstico Estratégico
              <ArrowRight className="ml-3 w-6 h-6" />
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
