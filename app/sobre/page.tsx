"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Users, Lightbulb, ArrowRight, CheckCircle, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Somos parceiros na sua <span className="text-accent">jornada de inovação</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A PluginCo nasceu da convicção de que a tecnologia só tem valor quando resolve problemas reais de negócio.
              Somos um time de estrategistas, engenheiros e designers apaixonados por usar a inteligência artificial
              para destravar o potencial de empresas como a sua.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Democratizar o acesso à inteligência artificial, atuando como uma ponte entre o potencial da
                  tecnologia e os resultados de negócio dos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossa Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser a consultoria de IA referência no Brasil, reconhecida por entregar soluções pragmáticas que geram
                  crescimento real e sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nossos Valores</h3>
                <p className="text-gray-600 leading-relaxed">
                  Parceria em primeiro lugar: O sucesso do cliente é o nosso sucesso. Pragmatismo acima do hype: Focamos
                  em soluções que funcionam. Educação contínua: Traduzimos o complexo para o simples. Resultados
                  mensuráveis: Nosso trabalho é medido pelo ROI que geramos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A PluginCo nasceu da frustração de ver empresas brasileiras perdendo competitividade por não conseguirem
                implementar IA de forma eficaz. Fundada por especialistas em tecnologia e negócios, nossa missão sempre
                foi clara: tornar a IA acessível e rentável para PMEs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Desde o início, focamos em entender primeiro o negócio, depois a tecnologia. Essa abordagem nos permitiu
                desenvolver uma metodologia única que garante ROI desde a primeira implementação.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <p className="text-sm text-gray-600">Projetos Entregues</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">95%</div>
                  <p className="text-sm text-gray-600">Taxa de Sucesso</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2M+</div>
                  <p className="text-sm text-gray-600">ROI Gerado</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Equipe PluginCo trabalhando"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Conheça Nossa Equipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Especialistas apaixonados por resolver problemas de negócio com tecnologia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="CEO da PluginCo"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Carlos Silva</h3>
                <p className="text-accent font-medium mb-3">CEO & Fundador</p>
                <p className="text-gray-600 text-sm">
                  15 anos em transformação digital. Ex-consultor McKinsey, especialista em traduzir estratégia em
                  execução com foco em ROI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="CTO da PluginCo"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Ana Costa</h3>
                <p className="text-accent font-medium mb-3">CTO & Co-fundadora</p>
                <p className="text-gray-600 text-sm">
                  Doutora em IA pela USP. 12 anos desenvolvendo soluções de automação inteligente para grandes
                  corporações.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Diretor de Operações"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Roberto Lima</h3>
                <p className="text-accent font-medium mb-3">Diretor de Operações</p>
                <p className="text-gray-600 text-sm">
                  Especialista em processos e automação. 10 anos otimizando operações em PMEs e garantindo
                  implementações bem-sucedidas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Gerente de Customer Success"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Mariana Santos</h3>
                <p className="text-accent font-medium mb-3">Gerente de Customer Success</p>
                <p className="text-gray-600 text-sm">
                  Especialista em relacionamento com cliente e adoção de tecnologia. Garante que cada implementação gere
                  o resultado esperado.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Cientista de Dados"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Pedro Oliveira</h3>
                <p className="text-accent font-medium mb-3">Lead Data Scientist</p>
                <p className="text-gray-600 text-sm">
                  Mestre em Machine Learning. Especialista em transformar dados em insights acionáveis e modelos
                  preditivos para negócios.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Consultora Sênior"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-primary mb-2">Julia Ferreira</h3>
                <p className="text-accent font-medium mb-3">Consultora Sênior</p>
                <p className="text-gray-600 text-sm">
                  MBA em Estratégia Empresarial. 8 anos ajudando PMEs a identificar oportunidades de otimização e
                  crescimento com IA.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">O Jeito PluginCo de Ser</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nós não vendemos software, entregamos soluções. Nosso diferencial está em nosso método. Mergulhamos fundo
              na sua operação antes de recomendar qualquer ferramenta. Acreditamos que a melhor solução de IA é aquela
              que sua equipe realmente usa e que se integra perfeitamente aos seus processos, gerando valor desde o
              primeiro dia.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Por que escolher a PluginCo?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Foco em ROI Tangível</h3>
                <p className="text-gray-600">
                  Cada projeto é estruturado com métricas claras de retorno sobre investimento.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Metodologia Comprovada</h3>
                <p className="text-gray-600">Processo testado e refinado em dezenas de implementações bem-sucedidas.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Implementação Ágil</h3>
                <p className="text-gray-600">
                  Entregas rápidas de valor, com resultados visíveis desde as primeiras semanas.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Suporte Contínuo</h3>
                <p className="text-gray-600">
                  Acompanhamento pós-implementação para garantir evolução e otimização constante.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Expertise Técnica</h3>
                <p className="text-gray-600">
                  Equipe especializada nas principais ferramentas e plataformas de IA do mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Foco em PMEs</h3>
                <p className="text-gray-600">
                  Soluções pensadas especificamente para a realidade das empresas brasileiras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Vamos construir algo incrível juntos?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma conversa gratuita e veja como podemos transformar sua empresa.
          </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() =>
                window.open(
                  `https://wa.me/+5521971872236?text=${encodeURIComponent(
                    'Olá! Gostaria de falar com um especialista.'
                  )}`,
                  '_blank'
                )
              }
            >
              Fale com um especialista
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
                  <Link href="#" className="hover:text-white">
                    IA Conversacional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Automação Inteligente
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Crescimento com IA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
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
                  <Link href="#" className="hover:text-white">
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
