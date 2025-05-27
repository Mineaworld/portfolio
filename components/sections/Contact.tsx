"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
})

type FormValues = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const contactItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLFormElement>(null)
  const inputRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  })
  
  function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log(data)
      toast.success("Message sent successfully! I'll get back to you soon.")
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  const contactItems = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      description: "minea.dyy@gmail.com",
      content: "Feel free to email me anytime"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location",
      description: "Remote",
      content: "Available for remote work worldwide"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Response Time",
      description: "24-48 hours",
      content: "I aim to respond to all inquiries within 1-2 business days"
    }
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Description animation
    gsap.fromTo(
      descriptionRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Contact items animation
    contactItemsRef.current.forEach((item, index) => {
      if (!item) return

      gsap.fromTo(
        item,
        {
          x: -30,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Add hover animation to contact items
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    // Form animation
    gsap.fromTo(
      formRef.current,
      {
        x: 30,
        opacity: 0,
        scale: 0.95,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Input fields animation
    inputRefs.current.forEach((input, index) => {
      if (!input) return

      gsap.fromTo(
        input,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.3 + index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: input,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Add focus animation to input fields
      const inputElement = input.querySelector('input, textarea')
      if (inputElement) {
        inputElement.addEventListener("focus", () => {
          gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        inputElement.addEventListener("blur", () => {
          gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      contactItemsRef.current.forEach(item => {
        if (!item) return
        item.removeEventListener("mouseenter", () => {})
        item.removeEventListener("mouseleave", () => {})
      })
      inputRefs.current.forEach(input => {
        if (!input) return
        const inputElement = input.querySelector('input, textarea')
        if (inputElement) {
          inputElement.removeEventListener("focus", () => {})
          inputElement.removeEventListener("blur", () => {})
        }
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl font-bold tracking-tight mb-2">Get In Touch</h2>
          <p ref={descriptionRef} className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me using the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            {contactItems.map((item, index) => (
              <div 
                key={index} 
                ref={el => contactItemsRef.current[index] = el}
                className="flex gap-4 cursor-pointer"
              >
                <div className="mt-1 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-primary font-medium">{item.description}</p>
                  <p className="text-muted-foreground mt-1">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-3">
            <Form {...form}>
              <form 
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem ref={el => inputRefs.current[0] = el}>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem ref={el => inputRefs.current[1] = el}>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem ref={el => inputRefs.current[2] = el}>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Message subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem ref={el => inputRefs.current[3] = el}>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}