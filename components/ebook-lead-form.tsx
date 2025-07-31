'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export function EbookLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    challenge: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (value: string, id: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or a CRM
    console.log('Form Data Submitted:', formData);
    // Redirect to the e-book page (or trigger download)
    window.location.href = '/ebook-download'; // Replace with actual e-book download URL or page
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div>
        <Label htmlFor="name">Nome Completo</Label>
        <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email Profissional</Label>
        <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" type="text" value={formData.company} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="role">Cargo</Label>
        <Select onValueChange={(value) => handleSelectChange(value, 'role')} value={formData.role} required>
          <SelectTrigger id="role">
            <SelectValue placeholder="Selecione seu cargo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CEO">CEO</SelectItem>
            <SelectItem value="Diretor">Diretor</SelectItem>
            <SelectItem value="Gerente">Gerente</SelectItem>
            <SelectItem value="Analista">Analista</SelectItem>
            <SelectItem value="Outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="challenge">Qual o seu maior desafio hoje?</Label>
        <Textarea id="challenge" value={formData.challenge} onChange={handleChange} rows={4} required />
      </div>
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
        Baixar e-Book
      </Button>
    </form>
  );
}