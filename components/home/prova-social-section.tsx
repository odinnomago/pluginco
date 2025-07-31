"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProvaSocialSection() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Resultados que nossos clientes alcançam
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">-55%</div>
              <p className="text-lg">
                no tempo de atendimento ao cliente com chatbots inteligentes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">+30%</div>
              <p className="text-lg">
                na produtividade da equipe de vendas com automação de CRM.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">90%</div>
              <p className="text-lg">
                de redução de erros em tarefas manuais com automação RPA.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">
            Parceiros e Tecnologias que Dominamos
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-80">
            <Image src="/partners/hubspot.svg" alt="HubSpot" width={100} height={40} />
            <Image src="/partners/salesforce.svg" alt="Salesforce" width={100} height={40} />
            <Image src="/partners/zenvia.svg" alt="Zenvia" width={100} height={40} />
            <Image src="/partners/botpress.svg" alt="Botpress" width={100} height={40} />
            <Image src="/partners/uipath.svg" alt="UiPath" width={100} height={40} />
            <Image src="/partners/make.svg" alt="Make.com" width={100} height={40} />
          </div>
        </div>
      </div>
    </section>
  )
}
