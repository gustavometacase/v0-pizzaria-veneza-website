"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock } from "lucide-react"

export function Reservations() {
  const { t } = useLanguage()

  const whatsappNumber = "351XXXXXXXXX" // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer uma reserva.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section id="reservations" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-primary-foreground/70 font-medium uppercase tracking-wider text-sm">
            {t("reservations.subtitle")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
            {t("reservations.title")}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            {t("reservations.description")}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 text-lg px-10 py-7 rounded-full shadow-xl mb-12"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              {t("reservations.cta")}
            </a>
          </Button>

          {/* Opening Hours */}
          <div className="bg-primary-foreground/10 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="h-6 w-6" />
              <h3 className="font-serif text-2xl font-bold">{t("reservations.hours")}</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/5 rounded-xl p-4">
                <span className="text-sm text-primary-foreground/70 block mb-1">
                  {t("reservations.hours.weekdays")}
                </span>
                <span className="text-lg font-semibold">12:00 - 15:00 | 19:00 - 23:00</span>
              </div>
              <div className="bg-primary-foreground/5 rounded-xl p-4">
                <span className="text-sm text-primary-foreground/70 block mb-1">
                  {t("reservations.hours.weekend")}
                </span>
                <span className="text-lg font-semibold">12:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
