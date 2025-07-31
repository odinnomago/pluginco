import { Button } from "@/components/ui/button"
import { Brain, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
            <Brain className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Página não encontrada</h1>
        <p className="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
        <a href="https://wa.me/5521971872236" target="_blank" rel="noopener noreferrer">
          <Button className="bg-accent hover:bg-accent/90 text-white">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Fale Conosco
          </Button>
        </a>
      </div>
    </div>
  )
}
