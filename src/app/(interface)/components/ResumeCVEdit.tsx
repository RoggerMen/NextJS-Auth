'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Definimos el esquema para la validación del formulario con Zod
const formSchema = z.object({
  profession: z.string().min(1, { message: 'Campo obligatorio' }),
  resume: z
    .union([z.instanceof(File), z.null()])  // Permite 'File' o 'null'
    .refine((file) => {
      if (file && file instanceof File) {
        return file.size < 5000000; // Validamos el tamaño solo si es un archivo
      }
      return true;
    }, {
      message: 'El archivo debe ser menor a 5MB',
    }),
});

const ResumeCVForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profession: '',
      resume: null, // Esto acepta 'null' como valor predeterminado
    },
  });

  const onSubmit = async (values: any) => {
    try {
      // Aquí puedes hacer lo que necesites, como subir el archivo al servidor.
      console.log(values);
      toast.success('Formulario enviado con éxito');
      router.push('/overview/edit'); // Redirige a la página que desees
    } catch (error) {
      toast.error('Algo salió mal, por favor intenta de nuevo');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Subir mi CV</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profesión</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ejemplo: Ingeniero de Software"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subir CV</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    {...field} // Registramos el campo con react-hook-form
                    className="mt-1 block w-full p-2 border rounded-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            {form.formState.isSubmitting ? (
              <Button disabled className="w-full">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Subiendo...</span>
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800">
                Guardar
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ResumeCVForm;
