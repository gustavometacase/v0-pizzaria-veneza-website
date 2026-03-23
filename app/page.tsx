"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Reservations } from "@/components/reservations"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { OrderOptions } from "@/components/order-options"

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <OrderOptions />
        <Reservations />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  )
}
