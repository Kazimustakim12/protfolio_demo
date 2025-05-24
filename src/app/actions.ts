"use server";

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schema';

export type FormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  const validatedFields = contactFormSchema.safeParse({
    name,
    email,
    message,
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
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // Example of a potential error during submission
  // if (Math.random() > 0.5) {
  //   return {
  //     message: "An unexpected error occurred. Please try again later.",
  //     status: 'error',
  //   };
  // }

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    status: 'success',
  };
}
