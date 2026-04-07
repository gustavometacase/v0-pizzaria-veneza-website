"use client"

import { useLanguage } from "@/lib/language-context"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact.address"),
      value: "Av. Dr. António Rodrigues Manito 101\n2900-068 Setúbal",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "265 552 013",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "geral@pizzariaveneza.pt",
    },
    {
      icon: Clock,
      label: t("contact.hours"),
      value: "Seg-Sáb: 12h-14h30, 19h-22h\nDomingo: Encerrado",
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-accent font-medium uppercase tracking-wider text-xs sm:text-sm">
            {t("contact.subtitle")}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 sm:mt-3">
            {t("contact.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-6xl mx-auto">
          {/* Map */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8!2d-8.8939!3d38.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1943b45c7d8b1d%3A0x4b6c5f1234567890!2sAv.%20Dr.%20Ant%C3%B3nio%20Rodrigues%20Manito%20101%2C%202900-068%20Set%C3%BAbal!5e0!3m2!1spt-PT!2spt!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pizzaria Veneza"
              className="w-full h-full min-h-[300px]"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg sm:rounded-xl border border-border"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm text-muted-foreground block mb-1">
                    {info.label}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-foreground whitespace-pre-line">
                    {info.value}
                  </span>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-3 sm:pt-4">
              <span className="text-xs sm:text-sm text-muted-foreground block mb-3 sm:mb-4">
                Siga-nos nas redes sociais
              </span>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://instagram.com/pizzariaveneza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
                <a
                  href="https://facebook.com/pizzariaveneza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
