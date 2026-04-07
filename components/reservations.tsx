"use client"

import { useLanguage } from "@/lib/language-context"
import { Clock } from "lucide-react"

export function Reservations() {
  const { t } = useLanguage()

  return (
    <section id="reservations" className="py-12 sm:py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-primary-foreground/70 font-medium uppercase tracking-wider text-xs sm:text-sm">
            {t("reservations.subtitle")}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 sm:mt-3 mb-4 sm:mb-6">
            {t("reservations.title")}
          </h2>
          <p className="text-base sm:text-xl text-primary-foreground/80 mb-6 sm:mb-10">
            {t("reservations.description")}
          </p>

          {/* Opening Hours */}
          <div className="bg-primary-foreground/10 rounded-xl sm:rounded-2xl p-5 sm:p-8">
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold">{t("reservations.hours")}</h3>
            </div>
            <div className="bg-primary-foreground/5 rounded-lg sm:rounded-xl p-3 sm:p-4 max-w-md mx-auto">
              <span className="text-xs sm:text-sm text-primary-foreground/70 block mb-1">
                {t("reservations.hours.weekdays")}
              </span>
              <span className="text-base sm:text-lg font-semibold">12:00 - 14:30 | 19:00 - 22:00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
