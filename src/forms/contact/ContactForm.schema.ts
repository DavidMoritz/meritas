// forms/ContactLog/ContactLogForm.schema.ts

import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  company: z.string(),
  phone: z.string(),
  service: z.string(),
  message: z.string(),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
