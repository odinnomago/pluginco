"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowRight, Search, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_NUMBER } from '@/lib/constants'

export default function BlogPage() {
  const featuredPost = {
    id: "roi-ia-pmes-2024",
    title: "ROI da IA para PMEs: Como Calcular o Retorno Real do Investimento em 2024",
    excerpt:
      "Descubra a metodologia completa para medir o retorno sobre investimento em projetos de IA, com exemplos práticos e métricas essenciais para PMEs brasileiras.",
    category: "Estratégia",
    author: "Carlos Silva",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    image: "/blog-featured-post.svg",
  }

  const recentPosts = [
    {
      id: "chatbots-vendas-2024",
      title: "Como Chatbots Estão Revolucionando as Vendas B2B no Brasil",
      excerpt:
        "Análise completa de como assistentes virtuais estão transformando o processo de vendas em empresas brasileiras.",
      category: "IA Conversacional",
      author: "Ana Costa",
      date: "12 de Janeiro, 2024",
      readTime: "6 min",
      image: "/blog-post-thumbnail.svg",
    },
    {
      id: "automacao-processos-rh",
      title: "5 Processos de RH que Você Pode Automatizar Hoje Mesmo",
      excerpt: "Guia prático para implementar automação em departamentos de recursos humanos, com ROI comprovado.",
      category: "Automação",
      author: "Roberto Lima",
      date: "10 de Janeiro, 2024",
      readTime: "5 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "ia-pequenas-empresas",
      title: "IA para Pequenas Empresas: Por Onde Começar sem Quebrar o Orçamento",
      excerpt:
        "Estratégias acessíveis para implementar inteligência artificial em pequenos negócios com orçamento limitado.",
      category: "Estratégia",
      author: "Julia Ferreira",
      date: "8 de Janeiro, 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "dashboard-bi-pmes",
      title: "Business Intelligence para PMEs: Transformando Dados em Decisões",
      excerpt: "Como criar dashboards eficazes que realmente ajudam gestores de PMEs a tomar decisões mais assertivas.",
      category: "Inteligência Organizacional",
      author: "Pedro Oliveira",
      date: "5 de Janeiro, 2024",
      readTime: "9 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "tendencias-ia-2024",
      title: "10 Tendências de IA que Vão Impactar PMEs em 2024",
      excerpt: "Previsões e tendências tecnológicas que pequenas e médias empresas devem acompanhar neste ano.",
      category: "Tendências",
      author: "Mariana Santos",
      date: "3 de Janeiro, 2024",
      readTime: "10 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "implementacao-crm-ia",
      title: "CRM com IA: Como Potencializar Suas Vendas com Automação Inteligente",
      excerpt:
        "Guia completo para implementar funcionalidades de IA em seu CRM e aumentar a produtividade da equipe de vendas.",
      category: "Crescimento",
      author: "Carlos Silva",
      date: "1 de Janeiro, 2024",
      readTime: "8 min",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    "Todos",
    "Estratégia",
    "IA Conversacional",
    "Automação",
    "Crescimento",
    "Inteligência Organizacional",
    "Tendências",
  ]

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista.')}`

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Insights para sua <span className="text-accent">jornada de inovação</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Artigos, guias e análises sobre inteligência artificial, automação e gestão de negócios, escritos por
              nossos especialistas.
            </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
                >
                  Fale com um especialista
                </Button>
              </a>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8">Artigo em Destaque</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-accent hover:bg-accent/90 text-white">
                      Ler artigo completo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts and Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold text-primary mb-8">Artigos Recentes</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <Badge className="mb-3">{post.category}</Badge>
                        <h3 className="text-lg font-bold text-primary mb-3 leading-tight">{post.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center space-x-3">
                            <span>{post.author}</span>
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            Ler mais
                            <ArrowRight className="ml-2 w-3 h-3" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Search */}
                <Card className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Buscar Artigos</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input placeholder="Digite sua busca..." className="pl-10" />
                  </div>
                </Card>

                {/* Categories */}
                <Card className="p-6">
                  <h3 className="font-semibold text-primary mb-4">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog?categoria=${category.toLowerCase()}`}
                        className="block text-gray-600 hover:text-primary transition-colors py-1"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </Card>

                {/* Lead Magnet */}
                <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5">
                  <h3 className="font-semibold text-primary mb-4">Guia Gratuito</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Baixe nosso guia &quot;O ROI da IA para PMEs&quot; e descubra como calcular o retorno do investimento em
                    automação.
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="w-full bg-accent hover:bg-accent/90 text-white"
                    >
                      Agende seu Diagnóstico
                    </Button>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Não perca nenhum insight</h2>
            <p className="text-xl mb-8 opacity-90">
              Receba nossos melhores artigos sobre IA e automação diretamente no seu email.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Seu melhor email" className="bg-white text-gray-900 border-0 h-12" />
              <Button className="bg-accent hover:bg-accent/90 text-white h-12 px-8">Assinar</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

