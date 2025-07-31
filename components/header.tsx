'use client'

"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brain } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_NUMBER } from '@/lib/constants'

export function Header() {
  const pathname = usePathname()

  return (
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
            <Link 
              href="/" 
              className={pathname === '/' 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Home
            </Link>
            <Link 
              href="/servicos" 
              className={pathname === '/servicos' 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Serviços
            </Link>

            <Link 
              href="/precos" 
              className={pathname === '/precos' 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Preços
            </Link>
            <Link 
              href="/sobre" 
              className={pathname === '/sobre' 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Sobre
            </Link>
            <Link 
              href="/cases" 
              className={pathname === '/cases' 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Cases
            </Link>
            <Link 
              href="/blog" 
              className={pathname.startsWith('/blog') 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Blog
            </Link>
            <Link 
              href="/contato" 
              className={pathname === '/contato' 
                ? "text-primary font-semibold" 
                : "text-gray-600 hover:text-primary transition-colors"}
            >
              Contato
            </Link>
          </nav>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar um diagnóstico estratégico.')}`} target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent hover:bg-accent/90 text-white">Agende seu Diagnóstico</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
