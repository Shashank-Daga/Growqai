"use client"

import { motion } from "framer-motion"
import { animationConfig, fadeInUp, staggerContainer } from "@/lib/animations"
import { Mail, MapPin, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="mb-12">
          {/* Decorative top line */}
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm tracking-wide text-gray-800 font-medium">/CONTACT US</p>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: animationConfig.duration.normal }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it and explore how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: Mail, label: "Email", value: "info@growqai.com" },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/company/growqai",
                link: "https://www.linkedin.com/company/growqai/",
              },
              {
                icon: MapPin,
                label: "Location",
                value:
                  "101, 1st Floor, Shreyas Crest, S.No. 48/1/5, 6 & 7, Pashan - Sus Rd, Baner, Pune, Maharashtra 411045",
                link: "https://maps.app.goo.gl/kuKMxRDjATTGEtGPA",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="max-w-sm wrap-break-word">
                    <p className="font-semibold mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors wrap-break-word"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground wrap-break-word">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: animationConfig.duration.normal }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-shadow"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
