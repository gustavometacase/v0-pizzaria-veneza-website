"use client";

import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_1282.JPG.jpeg"
          alt="Pizza artesanal da Pizzaria Veneza"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-4 sm:mb-6 animate-fade-in-up">
            Pizzaria Veneza
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-background/90 font-light animate-fade-in-up animation-delay-100">
            {t("hero.tagline")}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-background/50 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-1.5 sm:h-2 bg-background/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
