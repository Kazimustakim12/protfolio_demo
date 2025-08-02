"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/schema';
import { submitContactForm, FormState } from '@/app/actions';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Hand, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { servicesData } from '@/lib/data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending}
      className="w-full text-lg py-7 px-8 bg-transparent border-2 border-highlight text-highlight hover:bg-highlight hover:text-black"
    >
      {pending ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'SUBMIT'}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  const initialState: FormState = { message: "", status: 'idle', errors: {} };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      form.reset();
    } else if (state.status === 'error') {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: state.message,
      });
    }
  }, [state, toast, form]);


  return (
    <motion.section
      id="contact"
      className="section-container"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={itemVariants} className="relative hidden md:block">
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Mustakim Kazi"
              fill
              className="object-cover"
              data-ai-hint="man portrait professional"
            />
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-12 -left-12 w-32 h-32 bg-highlight rounded-full flex items-center justify-center"
          >
            <Hand className="w-16 h-16 text-black" fill="black" />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-5xl font-bold font-serif mb-4">LET'S WORK TOGETHER</h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance">
            Let's build something impactful together—whether it's your brand, your website, or your next big idea.
          </p>

          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-highlight">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Smith" {...field} />
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
                      <FormLabel className="text-highlight">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="johnsmith@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-highlight">Service Needed?</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {servicesData.map(service => (
                            <SelectItem key={service.id} value={service.title}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-highlight">What Can I Help You With...</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hello, I'd like to enquire about..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <SubmitButton />
            </form>
          </Form>
        </motion.div>
      </div>
    </motion.section>
  );
}
