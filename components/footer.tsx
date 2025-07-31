import Link from 'next/link'
import { Brain } from 'lucide-react'

export function Footer() {
  return (
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
            <p className="text-gray-300">
              Inteligência Artificial que gera resultado real.
            </p>
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
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-2">&copy; 2024 PluginCo. Todos os direitos reservados.</p>
          <p>Nossas soluções são desenvolvidas em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
        </div>
      </div>
    </footer>
  )
}
