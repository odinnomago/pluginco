import { Brain } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-pulse">
            <Brain className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-gray-600">Carregando...</p>
      </div>
    </div>
  )
}
