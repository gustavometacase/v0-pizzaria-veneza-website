"use client";

import { useLanguage } from "@/lib/language-context";
import { Leaf, BookOpen, Users } from "lucide-react";
import Image from "next/image";

export function About() {
  const { t } = useLanguage();

  const features = [
    { icon: Leaf, label: t("about.feature1") },
    { icon: BookOpen, label: t("about.feature2") },
    { icon: Users, label: t("about.feature3") },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl">
            <Image
              src="/IMG_1286.JPG.jpeg"
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
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-4 sm:mb-6">
              {t("about.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-10">
              {t("about.description")}
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 sm:p-4 bg-secondary rounded-lg sm:rounded-xl"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                    <feature.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
