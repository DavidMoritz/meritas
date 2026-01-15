// services/contact/ContactService.tsx

import type { ContactFormType } from '@/forms/contact/ContactForm.schema.ts';
import { GenericService } from '../generic/GenericService.tsx';

export class ContactService extends GenericService<ContactFormType> {
  constructor() {
    super('contact');
  }
}

export default ContactService;
