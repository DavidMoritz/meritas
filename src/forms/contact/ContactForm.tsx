// forms/contact/ContactForm.tsx

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';
import { useMemo, useState } from 'react';
import {
  Controller,
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';

import Alert from '@/components/alert/Alert.tsx';
import Button from '@/components/button/Button.tsx';
import ButtonRow from '@/components/button-row/ButtonRow.tsx';
import InputRadioGroup from '@/components/InputRadioGroup/InputRadioGroup.tsx';
import InputTextarea from '@/components/InputTextarea/InputTextarea.tsx';
import { useToaster } from '@/components/toaster/useToaster';
import ContactService from '@/services/contact/ContactService.tsx';
import type { Response } from '@/types/Response.type.ts';
import {
  ContactFormSchema,
  type ContactFormType,
} from './ContactForm.schema.ts';

import './ContactLogForm.style.scss';
import InputPhone from '@/components/InputPhone/InputPhone.tsx';
import InputText from '@/components/InputText/InputText.tsx';

export interface ContactLogFormProps {
  /** `id` prop applied to the HTML form element.  Important if more than one form is in the same view. */
  id?: string;
  /** Initial form value. Only used if updating/replacing a User's preferences. */
  initialValue?: ContactFormType;
  /** Toggles the skeleton state for the form. */
  isLoading?: boolean;
  /** On value change callback. */
  onValueChange?: (formValue: ContactFormType) => void;
  /** On form submit callback. */
  onSubmit?: (formValue: ContactFormType) => void;
}

const ContactForm = (props: ContactLogFormProps) => {
  const router = useRouter();
  const toaster = useToaster();

  const service = useMemo(() => new ContactService(), []);

  const id = useMemo(() => props.id || 'contact-form', [props.id]);

  /**
   * Setting show to `true` will add the alert above the form.
   */
  const [alert, setAlert] = useState({
    show: false,
    theme: 'success',
    message: '',
  });

  /**
   * Form Controller. Uses react-hook-form. Manages form state.
   */
  const form = useForm<ContactFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(ContactFormSchema),
    values: props.initialValue,
    defaultValues: { type: 'phone' },
  });

  /**
   *
   */
  const createMutation = useMutation({
    mutationFn: (formValue: ContactFormType) => service.add(formValue),
    onSuccess: (res: Response<ContactFormType>) => {
      if (!res.success) {
        console.error(res.errorMessage);

        return;
      }

      router.history.push(`/contact/${res.data._id}`);
    },
    onError: error => {
      setAlert({
        show: true,
        theme: 'danger',
        message: error.message,
      });
    },
  });

  /** Handle Form Submit */
  const onSubmit: SubmitHandler<ContactFormType> = (
    formValue: ContactFormType
  ) => {
    try {
      createMutation.mutate(formValue);

      props.onSubmit?.(formValue);
    } catch {
      setAlert({
        show: true,
        theme: 'danger',
        message: 'Something went wrong.',
      });
    }
  };

  /** Handle Form Error */
  const onError: SubmitErrorHandler<ContactFormType> = _errors => {
    // console.log(errors);
    setAlert({
      show: true,
      theme: 'danger',
      message: 'Correct the errors below',
    });
  };

  return (
    <>
      <Alert open={alert.show} theme="danger">
        {alert.message}
      </Alert>

      <form
        className="ContactLog-form"
        data-testid="ContactLogForm"
        id={id}
        onSubmit={form.handleSubmit(onSubmit, onError)}
      >
        {/* FORM INPUTS GO HERE */}

        <Controller
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              {...fieldState}
              id="contact-name-input"
              label="Full Name"
            />
          )}
        />

        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              {...fieldState}
              id="contact-email-input"
              label="Email Address"
            />
          )}
        />

        <Controller
          control={form.control}
          name="company"
          render={({ field, fieldState }) => (
            <InputText
              {...field}
              {...fieldState}
              id="contact-company-input"
              label="Company Name"
            />
          )}
        />

        <Controller
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <InputPhone
              {...field}
              {...fieldState}
              id="contact-phone-input"
              label="Phone Number (optional)"
            />
          )}
        />

        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <InputTextarea
              {...field}
              {...fieldState}
              id="contact-message-input"
              label="Contact Notes"
              placeholder="(e.g. We need to replatform a legacy system and integrate new BI tools…)"
              required
            />
          )}
        />

        <ButtonRow>
          <Button.Submit
            disabled={form.formState.isSubmitting || !form.formState.isValid}
            size="sm"
            width="block"
          >
            Save Note
          </Button.Submit>
        </ButtonRow>
      </form>
    </>
  );
};

export default ContactForm;
