import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }).max(50, {
    message: "El nombre no debe exceder los 50 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }).max(500, {
    message: "El mensaje no debe exceder los 500 caracteres.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
