"use server";

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schema';

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: Record<string, string[]> | null;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Form data submitted:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    status: 'success',
    errors: null,
  };
}
