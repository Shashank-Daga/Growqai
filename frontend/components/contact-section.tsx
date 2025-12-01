"use client"

import { motion } from "framer-motion"
import { animationConfig, fadeInUp, staggerContainer } from "@/lib/animations"
import { Mail, MapPin, Linkedin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@growqai.com",
      link: "mailto:contact@growqai.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Growqai LinkedIn",
      link: "https://linkedin.com/company/growqai"
    },
    {
      icon: MapPin,
      label: "Location",
      value:
        "101, 1st Floor, Shreyas Crest, S.No. 48/1/5, 6 & 7, Pashan - Sus Rd, Baner, Pune, Maharashtra 411045",
      link: "https://maps.app.goo.gl/kuKMxRDjATTGEtGPA"
    }
  ]

  return (
    <section id="contact" className="py-9 px-6 bg-[#E7E9F1] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="mb-9">
          {/* Decorative top line */}
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm tracking-wide text-gray-800 font-medium">/CONTACT US</p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: animationConfig.duration.normal }}
          viewport={{ once: true }}
          className="text-center mb-16 grid md:grid-cols-2 gap-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#050659] font-bold mb-4">Let's Connect</h2>
          <p className="text-[#2527D9] max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it and explore how we can help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >

          {/* LEFT SIDE — CONTACT INFO */}
          <motion.div variants={fadeInUp} className="py-12 space-y-12">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="max-w-sm wrap-break-words">
                    <p className="font-semibold mb-1">{item.label}</p>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors wrap-break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground wrap-break-words">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: animationConfig.duration.normal }}
            viewport={{ once: true }}
            className="border border-[#E7E9F1] p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#1718FF] text-primary-foreground disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm">Message sent successfully!</p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm">Failed to send message. Try again.</p>
              )}
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
