"use client"

import { useLanguage } from "@/lib/language-context"
import { Phone, Bike } from "lucide-react"

export function OrderOptions() {
  const { t } = useLanguage()

  const deliveryApps = [
    {
      name: "Glovo",
      color: "bg-[#FFC244]",
      textColor: "text-black",
      url: "https://glovoapp.com/pt/pt/setubal/pizzaria-veneza/",
    },
    {
      name: "Uber Eats",
      color: "bg-[#06C167]",
      textColor: "text-white",
      url: "https://www.ubereats.com/pt/store/pizzaria-veneza/",
    },
    {
      name: "Bolt Food",
      color: "bg-[#34D186]",
      textColor: "text-white",
      url: "https://food.bolt.eu/pt-PT/137-setubal/p/pizzaria-veneza/",
    },
  ]

  return (
    <section className="py-10 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Bike className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="text-accent font-medium uppercase tracking-wider text-xs sm:text-sm">
              {t("order.subtitle")}
            </span>
          </div>
          <h2 className="font-serif text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">
            {t("order.title")}
          </h2>

          {/* Phone Order */}
          <div className="mb-6 sm:mb-10 p-4 sm:p-6 bg-secondary rounded-xl sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm text-muted-foreground block">
                    {t("order.phone.label")}
                  </span>
                  <a
                    href="tel:+351265552013"
                    className="text-base sm:text-xl font-bold text-foreground hover:text-primary transition-colors"
                  >
                    265 552 013
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Apps */}
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{t("order.apps.label")}</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {deliveryApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${app.color} ${app.textColor} px-5 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:opacity-90 transition-opacity shadow-md hover:shadow-lg`}
              >
                {app.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
