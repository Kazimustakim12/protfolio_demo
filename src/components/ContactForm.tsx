"use client";

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormValues } from '@/lib/schema';
import { submitContactForm, type FormState } from '@/app/actions';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2 } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" disabled={pending} className="w-full text-lg py-6">
            {pending ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                </>
            ) : (
                "Send Message"
            )}
        </Button>
    );
}

export function ContactForm() {
    const { toast } = useToast();
    const [state, formAction] = useFormState<FormState, FormData>(submitContactForm, {
        message: '',
        status: 'idle',
    });

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    useEffect(() => {
        if (state.status === 'success') {
            toast({
                title: "Message Sent!",
                description: state.message,
            });
            form.reset();
        } else if (state.status === 'error') {
            toast({
                title: "Error",
                description: state.message,
                variant: 'destructive'
            });
        }
    }, [state, toast, form]);
    
    // Set form errors from server action
    useEffect(() => {
        if (state.errors) {
            const { name, email, message } = state.errors;
            if (name) form.setError('name', { type: 'server', message: name[0] });
            if (email) form.setError('email', { type: 'server', message: email[0] });
            if (message) form.setError('message', { type: 'server', message: message[0] });
        }
    }, [state.errors, form]);


    return (
        <Form {...form}>
            <form action={formAction} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} className="text-base p-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Email" {...field} className="text-base p-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Your Message" {...field} className="min-h-[150px] text-base p-6"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton />
            </form>
        </Form>
    );
}
