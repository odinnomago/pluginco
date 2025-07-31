import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, Calendar, Clock, User, Share2, Linkedin, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return [{ slug: "roi-ia-pmes-2024" }]
}

// Mock data - in a real app, this would come from a CMS or database
const posts = {
  "roi-ia-pmes-2024": {
    title: "ROI da IA para PMEs: Como Calcular o Retorno Real do Investimento em 2024",
    category: "Estratégia",
    author: {
      name: "Carlos Silva",
      bio: "CEO da PluginCo com mais de 15 anos de experiência em transformação digital e estratégia empresarial.",
      image: "/placeholder.svg?height=80&width=80",
    },
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    featuredImage: "/placeholder.svg?height=400&width=800",
    content: `
      <p>A implementação de Inteligência Artificial em pequenas e médias empresas deixou de ser um luxo para se tornar uma necessidade competitiva. Porém, muitos gestores ainda hesitam em investir por não saberem como medir o retorno real desses investimentos.</p>

      <p>Neste guia completo, vamos apresentar uma metodologia prática e testada para calcular o ROI de projetos de IA, com exemplos reais de empresas brasileiras que transformaram suas operações.</p>

      <h2>Por que o ROI da IA é Diferente?</h2>

      <p>Diferentemente de outros investimentos em tecnologia, a IA gera valor de múltiplas formas:</p>

      <ul>
        <li><strong>Redução de custos operacionais:</strong> Automação de tarefas repetitivas</li>
        <li><strong>Aumento de receita:</strong> Melhor qualificação de leads e personalização</li>
        <li><strong>Melhoria da experiência:</strong> Atendimento 24/7 e respostas mais rápidas</li>
        <li><strong>Insights estratégicos:</strong> Decisões baseadas em dados, não intuição</li>
      </ul>

      <h2>Metodologia de Cálculo: Os 4 Pilares</h2>

      <h3>1. Custos Diretos do Projeto</h3>
      <p>Inclua todos os investimentos necessários:</p>
      <ul>
        <li>Licenças de software e ferramentas</li>
        <li>Consultoria e implementação</li>
        <li>Treinamento da equipe</li>
        <li>Custos de integração com sistemas existentes</li>
      </ul>

      <h3>2. Economia de Custos Operacionais</h3>
      <p>Calcule a redução em:</p>
      <ul>
        <li>Horas de trabalho manual eliminadas</li>
        <li>Redução de erros e retrabalho</li>
        <li>Economia em contratações</li>
        <li>Redução de custos de atendimento</li>
      </ul>

      <h3>3. Aumento de Receita</h3>
      <p>Mensure o impacto em:</p>
      <ul>
        <li>Conversão de leads melhorada</li>
        <li>Vendas fora do horário comercial</li>
        <li>Upsell e cross-sell automatizados</li>
        <li>Retenção de clientes</li>
      </ul>

      <h3>4. Benefícios Intangíveis</h3>
      <p>Considere também:</p>
      <ul>
        <li>Melhoria na satisfação do cliente</li>
        <li>Maior produtividade da equipe</li>
        <li>Vantagem competitiva</li>
        <li>Capacidade de escalar operações</li>
      </ul>

      <h2>Exemplo Prático: E-commerce de Moda</h2>

      <p>Vamos analisar um caso real de um e-commerce que implementou um chatbot de atendimento:</p>

      <h3>Investimento Inicial</h3>
      <ul>
        <li>Implementação do chatbot: R$ 15.000</li>
        <li>Integração com sistemas: R$ 5.000</li>
        <li>Treinamento da equipe: R$ 2.000</li>
        <li><strong>Total: R$ 22.000</strong></li>
      </ul>

      <h3>Benefícios Mensais</h3>
      <ul>
        <li>Economia com atendentes: R$ 8.000</li>
        <li>Aumento de vendas (conversão): R$ 12.000</li>
        <li>Vendas fora do horário: R$ 5.000</li>
        <li><strong>Total mensal: R$ 25.000</strong></li>
      </ul>

      <h3>Cálculo do ROI</h3>
      <p>ROI = (Benefício - Investimento) / Investimento × 100</p>
      <p>ROI = (R$ 300.000 - R$ 22.000) / R$ 22.000 × 100 = <strong>1.263%</strong></p>
      <p><em>*Considerando 12 meses de operação</em></p>

      <h2>Métricas Essenciais para Acompanhar</h2>

      <p>Para garantir que seu projeto de IA está gerando o ROI esperado, monitore estas métricas-chave:</p>

      <h3>Métricas de Eficiência Operacional</h3>
      <ul>
        <li><strong>Tempo médio de resposta:</strong> Redução no tempo de atendimento</li>
        <li><strong>Taxa de resolução automática:</strong> % de consultas resolvidas sem intervenção humana</li>
        <li><strong>Produtividade da equipe:</strong> Tarefas completadas por funcionário/hora</li>
        <li><strong>Taxa de erro:</strong> Redução em erros operacionais</li>
      </ul>

      <h3>Métricas de Receita</h3>
      <ul>
        <li><strong>Taxa de conversão:</strong> % de leads que se tornam clientes</li>
        <li><strong>Ticket médio:</strong> Valor médio por transação</li>
        <li><strong>Lifetime Value (LTV):</strong> Valor total do cliente ao longo do tempo</li>
        <li><strong>Receita incremental:</strong> Vendas adicionais geradas pela IA</li>
      </ul>

      <h3>Métricas de Satisfação</h3>
      <ul>
        <li><strong>Net Promoter Score (NPS):</strong> Satisfação e lealdade do cliente</li>
        <li><strong>Customer Satisfaction (CSAT):</strong> Satisfação com o atendimento</li>
        <li><strong>Taxa de retenção:</strong> % de clientes que permanecem ativos</li>
        <li><strong>Tempo de resolução:</strong> Velocidade na solução de problemas</li>
      </ul>

      <h2>Armadilhas Comuns no Cálculo de ROI</h2>

      <p>Evite estes erros frequentes ao calcular o retorno da IA:</p>

      <h3>1. Não Considerar o Tempo de Implementação</h3>
      <p>Muitos projetos levam 2-3 meses para mostrar resultados completos. Inclua esse período no cálculo.</p>

      <h3>2. Ignorar Custos Ocultos</h3>
      <p>Manutenção, atualizações e treinamento contínuo devem ser considerados.</p>

      <h3>3. Superestimar Benefícios Iniciais</h3>
      <p>Seja conservador nas projeções iniciais. É melhor superar expectativas do que frustrá-las.</p>

      <h3>4. Não Medir Benefícios Intangíveis</h3>
      <p>Melhoria na moral da equipe e vantagem competitiva têm valor real, mesmo que difícil de quantificar.</p>

      <h2>Conclusão: O ROI da IA é Real e Mensurável</h2>

      <p>Com a metodologia correta, é possível calcular com precisão o retorno sobre investimento em projetos de IA. As empresas que implementam essas soluções de forma estratégica estão vendo ROIs de 200% a 500% no primeiro ano.</p>

      <p>O segredo está em começar com projetos menores, medir resultados rigorosamente e escalar gradualmente. A IA não é mais uma questão de "se", mas de "quando" e "como" implementar.</p>

      <blockquote>
        <p><em>"A melhor hora para implementar IA foi há um ano. A segunda melhor hora é agora."</em></p>
      </blockquote>
    `,
    relatedPosts: [
      {
        id: "chatbots-vendas-2024",
        title: "Como Chatbots Estão Revolucionando as Vendas B2B no Brasil",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "ia-pequenas-empresas",
        title: "IA para Pequenas Empresas: Por Onde Começar sem Quebrar o Orçamento",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "implementacao-crm-ia",
        title: "CRM com IA: Como Potencializar Suas Vendas com Automação Inteligente",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-accent prose-strong:text-primary"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* CTA Mid Article */}
                <div className="my-12 p-8 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Pronto para calcular o ROI da IA na sua empresa?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Agende um diagnóstico gratuito e descubra o potencial de retorno dos seus investimentos em IA.
                    </p>
                    <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                        Agende seu Diagnóstico Estratégico
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <h3 className="text-lg font-semibold text-primary mb-4">Compartilhe este artigo</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Copiar Link
                    </Button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={post.author.image || "/placeholder.svg"}
                      alt={post.author.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{post.author.name}</h3>
                      <p className="text-gray-600">{post.author.bio}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Table of Contents */}
                <Card className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Neste Artigo</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#roi-diferente" className="text-gray-600 hover:text-primary">
                        Por que o ROI da IA é Diferente?
                      </a>
                    </li>
                    <li>
                      <a href="#metodologia" className="text-gray-600 hover:text-primary">
                        Metodologia de Cálculo
                      </a>
                    </li>
                    <li>
                      <a href="#exemplo-pratico" className="text-gray-600 hover:text-primary">
                        Exemplo Prático
                      </a>
                    </li>
                    <li>
                      <a href="#metricas" className="text-gray-600 hover:text-primary">
                        Métricas Essenciais
                      </a>
                    </li>
                    <li>
                      <a href="#armadilhas" className="text-gray-600 hover:text-primary">
                        Armadilhas Comuns
                      </a>
                    </li>
                  </ul>
                </Card>

                {/* Lead Magnet */}
                <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5">
                  <h3 className="font-semibold text-primary mb-4">Calculadora de ROI</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Baixe nossa planilha gratuita para calcular o ROI dos seus projetos de IA de forma automática.
                  </p>
                  <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-white">
                      Baixar Calculadora
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Button>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Leia Também</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {post.relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4 leading-tight">{relatedPost.title}</h3>
                    <Link href={`/blog/${relatedPost.id}`}>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Ler artigo
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
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
