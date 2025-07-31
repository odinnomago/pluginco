import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Vamos <span className="text-accent">conversar?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Preencha o formulário abaixo ou utilize um de nossos canais de contato. Estamos prontos para ouvir sobre
              seus desafios e discutir como a IA pode ajudar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-primary mb-2">Envie sua mensagem</CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                        <Input placeholder="Seu nome completo" className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input type="email" placeholder="seu@email.com" className="h-12" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                        <Input placeholder="(11) 99999-9999" className="h-12" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                        <Input placeholder="Nome da sua empresa" className="h-12" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cargo/Função</label>
                      <Input placeholder="Seu cargo na empresa" className="h-12" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Qual seu maior desafio hoje?
                      </label>
                      <Textarea
                        placeholder="Descreva brevemente o principal desafio ou gargalo que sua empresa enfrenta..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Qual o principal desafio da sua empresa?
                      </label>
                      <Textarea
                        placeholder="Descreva brevemente os principais gargalos ou desafios que sua empresa enfrenta..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Qual serviço tem mais interesse?
                      </label>
                      <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                        <option value="">Selecione uma opção</option>
                        <option value="ia-conversacional">IA Conversacional (Chatbots)</option>
                        <option value="automacao">Automação Inteligente de Processos</option>
                        <option value="crescimento">Crescimento Guiado por IA</option>
                        <option value="inteligencia">Inteligência Organizacional</option>
                        <option value="consultoria">Consultoria Estratégica Geral</option>
                      </select>
                    </div>

                    <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white text-lg">
                        Enviar Mensagem
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>

                    <p className="text-sm text-gray-500 text-center">
                      Ao enviar este formulário, você concorda em receber comunicações da PluginCo.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Fale com um especialista</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-gray-600">contato@pluginco.com.br</p>
                      <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Telefone</h3>
                      <p className="text-gray-600">(11) 9999-9999</p>
                      <p className="text-sm text-gray-500">Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">WhatsApp</h3>
                      <p className="text-gray-600">(11) 9999-9999</p>
                      <p className="text-sm text-gray-500">Atendimento rápido via WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Nosso Escritório</h3>
                      <p className="text-gray-600">
                        Av. Paulista, 1000 - Sala 1001
                        <br />
                        Bela Vista, São Paulo - SP
                        <br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 9h às 18h
                        <br />
                        Sábado: 9h às 12h
                        <br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Quick */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl text-primary">Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Quanto tempo leva uma implementação?</h4>
                      <p className="text-sm text-gray-600">
                        Depende da complexidade, mas a maioria dos projetos são entregues entre 4 a 12 semanas.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Vocês atendem empresas de que porte?</h4>
                      <p className="text-sm text-gray-600">
                        Focamos em PMEs, mas atendemos desde startups até empresas de médio porte.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">O diagnóstico é realmente gratuito?</h4>
                      <p className="text-sm text-gray-600">
                        Sim! É uma conversa estratégica sem compromisso para entender suas necessidades.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossa Localização</h2>
            <p className="text-gray-600">Estamos localizados no coração de São Paulo, mas atendemos todo o Brasil</p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">
                Mapa interativo será carregado aqui
                <br />
                Av. Paulista, 1000 - São Paulo, SP
              </p>
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
