"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/lib/schema";
import { submitContactForm, FormState } from "@/app/actions";

import Image from "next/image";
import { motion } from "framer-motion";
import { Hand, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { servicesData } from "@/lib/data";
import { MagicCard } from "../magicui/magic-card";

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
      variant={"default"}
      disabled={pending}
      className="w-full rounded-full"
    >
      {pending ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : "SUBMIT"}
    </Button>
  );
}

const waveAnimation = {
  rotate: [0, 14, -8, 14, -4, 10, 0, 0],
  transition: {
    duration: 2.5,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1,
  },
};

export function ContactSection() {
  const { toast } = useToast();
  const initialState: FormState = { message: "", status: "idle", errors: {} };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === "error") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
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
      <div className="grid md:grid-cols-3 gap-16 items-center">
        <motion.div
          variants={itemVariants}
          className="relative hidden md:block"
        >
          {/* <div className="relative w-full h-full rounded-3xl  border border-foreground/10">
            <Image
              src="/images/gbli_avtar.png"
              alt="Mustakim Kazi"
              fill
              className="object-cover object-top scale-100 h-full  bottom-5 relative"
              data-ai-hint="man portrait professional "
            />
          </div> */}
          {/* <div className="relative     mx-auto border border-foreground/10 rounded-xl bg-foreground/10">
            <Image
              // src="/images/center-img-my.png"
              src="/images/gbli_avtar.png"
              alt="Mustakim Kazi"
              width={400}
              height={600}
              className="rounded-3xl object-cover scale-110  bottom-6 relative"
              data-ai-hint="man portrait professional"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-left-8"
            >
              <div className="bg-green-400/80 backdrop-blur-sm text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center text-4xl shadow-lg">
                <motion.div
                  animate={waveAnimation}
                  style={{ originX: "70%", originY: "70%" }}
                >
                  👋
                </motion.div>
              </div>
            </motion.div>
          </div> */}
          {/* ?tesd */}

          <MagicCard
            gradientSize={200}
            gradientFrom="#0f1729"
            gradientTo="#fa6742"
            gradientColor={"dark" === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0 rounded-xl w-full h-full mx-auto"
          >
            <div className="relative w-full  md:w-full  mx-auto border border-foreground/10 rounded-xl bg-foreground/10">
              <Image
                // src="/images/center-img-my.png"
                src="/images/gbli_avtar.png"
                alt="Mustakim Kazi"
                width={400}
                height={600}
                className="rounded-3xl object-cover scale-110  bottom-4 relative"
                data-ai-hint="man portrait professional"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-left-8"
              >
                <div className="bg-green-400/80 backdrop-blur-sm text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center text-4xl shadow-lg">
                  <motion.div
                    animate={waveAnimation}
                    style={{ originX: "70%", originY: "70%" }}
                  >
                    👋
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </MagicCard>
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
            className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8"
          >
            <div className="bg-green-400/80 backdrop-blur-sm text-black font-semibold rounded-full w-24 h-24 flex items-center justify-center text-4xl shadow-lg">
              <motion.div
                animate={waveAnimation}
                style={{ originX: "70%", originY: "70%" }}
              >
                👋
              </motion.div>
            </div>
          </motion.div> */}
        </motion.div>

        <motion.div variants={itemVariants} className="col-span-2">
          <h2 className="section-title">LET'S WORK TOGETHER</h2>
          <p className="text-lg text-muted-foreground mb-10 text-balance">
            Let's build something impactful together—whether it's your brand,
            your website, or your next big idea.
          </p>

          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent">Name</FormLabel>
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
                      <FormLabel className="text-accent">Email</FormLabel>
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
                    <FormLabel className="text-accent">
                      Service Needed?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {servicesData.map((service) => (
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
                    <FormLabel className="text-accent">
                      What Can I Help You With...
                    </FormLabel>
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
