"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { MessageSquare, Cog, TrendingUp, Brain, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { Metadata } from "next";



export default function ServicosPage() {
  const conversationalLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de IA Conversacional.')}`
  const automationLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de Automação Inteligente.')}`
  const growthLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de Crescimento Guiado por IA.')}`
  const intelligenceLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de Inteligência Organizacional.')}`
  const specialistLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista sobre os serviços.')}`

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Soluções de IA que{" "}
              <span className="text-accent">transformam sua operação</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore nossos pilares de atuação e descubra como podemos aplicar
              inteligência artificial para resolver seus desafios mais
              complexos, do atendimento ao cliente à análise de dados.
            </p>
          </div>
        </div>
      </section>

      {/* Serviço 1: IA Conversacional */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  Atendimento e Vendas que nunca dormem
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                O que é?
              </h3>
              <p className="text-gray-600 mb-6">
                Criamos assistentes virtuais (chatbots e voicebots) que, utilizando o poder da IA Generativa, entendem e respondem às necessidades dos seus clientes em tempo real, 24/7, nos canais que eles mais usam, como WhatsApp, site e redes sociais.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quais problemas resolve?
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Clientes esperando horas por uma resposta simples
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Equipe de vendas sobrecarregada com leads não qualificados
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Perda de oportunidades de negócio fora do horário comercial
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Agendamentos manuais que geram erros e consomem tempo
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Principais ferramentas que usamos:
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline">Botpress</Badge>
                <Badge variant="outline">Zenvia</Badge>
                <Badge variant="outline">Dialogflow</Badge>
                <Badge variant="outline">ManyChat</Badge>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Para quem é ideal?
              </h3>
              <p className="text-gray-600">
                Empresas de e-commerce, serviços por assinatura, clínicas,
                imobiliárias e qualquer negócio que precise escalar a
                comunicação com o cliente.
              </p>
            </div>
            <div>
              <Image
                src="/service-conversational-ai.svg"
                alt="Conversational AI"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
          </div>
          <a
            href={conversationalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-6 bg-accent hover:bg-accent/90 text-white">
              Saiba Mais
            </Button>
          </a>
        </div>
      </section>

      {/* Serviço 2: Automação Inteligente */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/service-intelligent-automation.svg"
                alt="Intelligent Automation"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Cog className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  Liberte sua equipe de tarefas repetitivas
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                O que é?
              </h3>
              <p className="text-gray-600 mb-6">
                Implementamos robôs de software (RPA) e integramos com IA Generativa para automatizar processos manuais e repetitivos, desde a entrada de dados e a triagem de e-mails com a inteligência do ChatGPT até a geração de relatórios complexos, permitindo que sua equipe se concentre em atividades mais estratégicas.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quais problemas resolve?
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Processos manuais que consomem tempo e recursos
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Erros humanos em tarefas repetitivas
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Dificuldade em integrar sistemas e dados
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Falta de visibilidade e controle sobre os processos
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Principais ferramentas que usamos:
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline">UiPath</Badge>
                <Badge variant="outline">Make.com</Badge>
                <Badge variant="outline">Zapier</Badge>
                <Badge variant="outline">Power Automate</Badge>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Para quem é ideal?
              </h3>
              <p className="text-gray-600">
                Empresas com grande volume de dados, processos complexos e
                equipes sobrecarregadas com tarefas manuais.
              </p>
            </div>
          </div>
          <a
            href={automationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-6 bg-accent hover:bg-accent/90 text-white">
              Saiba Mais
            </Button>
          </a>
        </div>
      </section>

      {/* Serviço 3: Crescimento Guiado por IA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  Conquiste mais clientes com inteligência
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                O que é?
              </h3>
              <p className="text-gray-600 mb-6">
                Utilizamos IA para identificar, atrair e qualificar leads,
                otimizar campanhas de marketing e personalizar a jornada do
                cliente, aumentando suas vendas e receita.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quais problemas resolve?
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Dificuldade em gerar leads qualificados
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Baixa taxa de conversão de leads em clientes
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Alto custo de aquisição de clientes (CAC)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Falta de personalização na comunicação com o cliente
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Principais ferramentas que usamos:
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline">HubSpot</Badge>
                <Badge variant="outline">Salesforce</Badge>
                <Badge variant="outline">RD Station</Badge>
                <Badge variant="outline">Pipedrive</Badge>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Para quem é ideal?
              </h3>
              <p className="text-gray-600">
                Empresas que buscam aumentar suas vendas, otimizar seus
                investimentos em marketing e melhorar a experiência do cliente.
              </p>
            </div>
            <div>
              <Image
                src="/service-ai-growth.svg"
                alt="AI-Driven Growth"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
          </div>
          <a
            href={growthLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-6 bg-accent hover:bg-accent/90 text-white">
              Saiba Mais
            </Button>
          </a>
        </div>
      </section>

      {/* Serviço 4: Inteligência Organizacional */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/service-organizational-intelligence.svg"
                alt="Organizational Intelligence"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-64 md:h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  Tome decisões mais inteligentes e rápidas
                </h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                O que é?
              </h3>
              <p className="text-gray-600 mb-6">
                Transformamos seus dados brutos em insights acionáveis,
                permitindo que você identifique tendências, otimize processos e
                tome decisões estratégicas com base em informações precisas.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quais problemas resolve?
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Dificuldade em analisar grandes volumes de dados
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Falta de visibilidade sobre o desempenho da empresa
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Decisões baseadas em intuição, não em dados
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-gray-600">
                    Dificuldade em identificar oportunidades de melhoria
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Principais ferramentas que usamos:
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge variant="outline">Power BI</Badge>
                <Badge variant="outline">Tableau</Badge>
                <Badge variant="outline">Google Analytics</Badge>
                <Badge variant="outline">Looker Studio</Badge>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Para quem é ideal?
              </h3>
              <p className="text-gray-600">
                Empresas que buscam otimizar seus resultados, identificar
                oportunidades de crescimento e tomar decisões estratégicas com
                base em dados.
              </p>
            </div>
          </div>
          <a
            href={intelligenceLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-6 bg-accent hover:bg-accent/90 text-white">
              Saiba Mais
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para transformar sua empresa com IA?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma conversa gratuita e descubra qual solução é ideal para o
            seu negócio.
          </p>
          <a
            href={specialistLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
            >
              Fale com um especialista
            </Button>
          </a>
        </div>
      </section>

      
    </div>
  )
}
