"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { contactFormSchema, type ContactFormValues } from "@/lib/schema";
import { submitContactForm, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const initialFormState: FormState = {
  message: "",
  status: "idle",
};

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialFormState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === 'error' && state.message && !state.errors) { // General error
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 md:py-32 bg-background text-foreground"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-tight"
          variants={itemVariants}
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-primary">Let&apos;s Connect</h3>
            <p className="text-lg text-muted-foreground">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to collaborate. Feel free to reach out!
            </p>
            <div className="space-y-4">
              <a href="mailto:youremail@example.com" className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                <span className="text-foreground group-hover:text-accent transition-colors">youremail@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
                <span className="text-foreground group-hover:text-accent transition-colors">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">City, Country</span>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Form {...form}>
              <form action={formAction} className="space-y-6 p-6 md:p-8 bg-card rounded-lg shadow-xl border-border">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-background border-input focus:border-primary" />
                      </FormControl>
                      {state.errors?.name && <FormMessage>{state.errors.name[0]}</FormMessage>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.doe@example.com" {...field} className="bg-background border-input focus:border-primary" />
                      </FormControl>
                       {state.errors?.email && <FormMessage>{state.errors.email[0]}</FormMessage>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message here..." {...field} rows={5} className="bg-background border-input focus:border-primary" />
                      </FormControl>
                      {state.errors?.message && <FormMessage>{state.errors.message[0]}</FormMessage>}
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting || state.status === 'success'}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
