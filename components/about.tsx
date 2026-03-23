"use client"

import { useLanguage } from "@/lib/language-context"
import { Leaf, BookOpen, Users } from "lucide-react"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  const features = [
    { icon: Leaf, label: t("about.feature1") },
    { icon: BookOpen, label: t("about.feature2") },
    { icon: Users, label: t("about.feature3") },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/pizzeria-interior.jpg"
              alt="Interior acolhedor da Pizzaria Veneza"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-medium uppercase tracking-wider text-sm">
              {t("about.subtitle")}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t("about.description")}
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-secondary rounded-full"
                >
                  <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="text-xs md:text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
