'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const profileSchema = z.object({
  username: z.string().min(1, { message: "Campo Obligatorio" }),
  email: z.string().email({ message: "Debe ser formato email" }).min(1, { message: "Campo Obligatorio" }),
  description: z.string().max(250, { message: "Máximo 250 caracteres" }),
  linkedin: z.string().url({ message: "Debe ser una URL válida" }).optional(),
  jobTitle: z.string().optional(),
  experience: z.string().min(0, { message: "Debe ser un número positivo" }).optional()
});

type ProfileData = z.infer<typeof profileSchema>;

const ProfileForm = () => {
  
  const router = useRouter();
  const form = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: '',
      email: '',
      description: '',
      linkedin: '',
      jobTitle: '',
      experience: '',
    },
  });

  const onSubmit = async (values: ProfileData) => {
    try {
      const { data } = await axios.post("/api/profile/update", values);
      if (data.ok) {
        toast.success("Perfil actualizado exitosamente");
        router.refresh();
      } else if (data.error) {
        toast.error(data.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el perfil, intenta nuevamente");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Editar Perfil Profesional</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={form.control} name="username" render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de Usuario</FormLabel>
              <FormControl>
                <Input placeholder="Ej: RoggerMeneses" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Ej: ejemplo@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción Profesional</FormLabel>
              <FormControl>
                <Input placeholder="Breve descripción de tu perfil" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="linkedin" render={({ field }) => (
            <FormItem>
              <FormLabel>LinkedIn</FormLabel>
              <FormControl>
                <Input type="url" placeholder="Ej: https://linkedin.com/in/tu-perfil" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="jobTitle" render={({ field }) => (
            <FormItem>
              <FormLabel>Cargo Profesional</FormLabel>
              <FormControl>
                <Input placeholder="Ej: Desarrollador de Software" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="experience" render={({ field }) => (
            <FormItem>
              <FormLabel>Años de Experiencia</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Ej: 5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <div className="text-center">
            <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 py-2 px-4 rounded-lg shadow-lg transition-all">
              Guardar Cambios
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;
