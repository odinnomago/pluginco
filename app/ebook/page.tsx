import { EbookLeadForm } from "@/components/ebook-lead-form";

export default function EbookPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Baixe nosso E-book: O ROI da Inteligência Artificial</h1>
      <p className="text-lg text-center mb-8 max-w-2xl">Preencha o formulário abaixo para ter acesso ao nosso e-book exclusivo e descubra como a Inteligência Artificial pode transformar o seu negócio.</p>
      <EbookLeadForm />
    </div>
  );
}