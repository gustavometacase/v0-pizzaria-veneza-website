"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    "nav.about": "Sobre Nós",
    "nav.menu": "Menu",
    "nav.reservations": "Reservas",
    "nav.reviews": "Avaliações",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.tagline": "Sabor autêntico, feito com amor",
    "hero.cta": "Reservar Mesa",
    
    // About
    "about.title": "Sobre Nós",
    "about.subtitle": "Uma tradição de família",
    "about.description": "A Pizzaria Veneza é mais do que uma simples pizzaria — é um lugar onde famílias se reúnem, amigos celebram e cada refeição é preparada com amor e dedicação. Desde os nossos ingredientes frescos até às nossas receitas tradicionais italianas, cada pizza que servimos conta uma história de paixão pela culinária autêntica.",
    "about.feature1": "Ingredientes Frescos",
    "about.feature2": "Receitas Tradicionais",
    "about.feature3": "Ambiente Familiar",
    
    // Menu
    "menu.title": "O Nosso Menu",
    "menu.subtitle": "Descubra os nossos sabores",
    "menu.pizzas": "Pizzas",
    "menu.dishes": "Pratos",
    "menu.dinner": "Pratos de Jantar",
    "menu.pasta": "Massas",
    "menu.sizes": "Tamanhos disponíveis",
    "menu.mini": "Mini",
    "menu.small": "Pequena",
    "menu.medium": "Média",
    "menu.family": "Familiar",
    "menu.dinner.note": "Disponível apenas ao jantar — tempo de preparação 30 minutos",
    "menu.pasta.choose": "Escolha a massa",
    "menu.sauce.choose": "Escolha o molho",
    
    // Reservations
    "reservations.title": "Reservas",
    "reservations.subtitle": "Reserve a sua mesa",
    "reservations.description": "Reserve a sua mesa pelo WhatsApp — respondemos rapidamente!",
    "reservations.cta": "Reservar via WhatsApp",
    "reservations.hours": "Horário de Funcionamento",
    "reservations.hours.weekdays": "Segunda a Sábado",
    
    // Reviews
    "reviews.title": "Avaliações",
    "reviews.subtitle": "O que dizem os nossos clientes",
    "reviews.cta": "Deixar Avaliação no Google",
    
    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "Venha visitar-nos",
    "contact.address": "Morada",
    "contact.phone": "Telefone",
    "contact.email": "Email",
    "contact.hours": "Horário",
    
    // Order
    "order.title": "Faça o Seu Pedido",
    "order.subtitle": "Entregas e Encomendas",
    "order.phone.label": "Ligue para encomendar",
    "order.apps.label": "Ou peça através das nossas apps de entrega:",
    
    // Footer
    "footer.rights": "Todos os direitos reservados",
    
    // Reviews content
    "review1.name": "Maria Santos",
    "review1.text": "As melhores pizzas da região! O ambiente é muito acolhedor e o atendimento é excelente. Recomendo vivamente!",
    "review2.name": "João Silva",
    "review2.text": "Pizza Veneza é simplesmente deliciosa! A massa é perfeita e os ingredientes são sempre frescos. Voltaremos com certeza!",
    "review3.name": "Ana Costa",
    "review3.text": "Um lugar fantástico para jantar em família. As crianças adoraram e a pizza estava incrível. Obrigada pela experiência maravilhosa!",
  },
  en: {
    // Navigation
    "nav.about": "About Us",
    "nav.menu": "Menu",
    "nav.reservations": "Reservations",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    
    // Hero
    "hero.tagline": "Authentic flavor, made with love",
    "hero.cta": "Book a Table",
    
    // About
    "about.title": "About Us",
    "about.subtitle": "A family tradition",
    "about.description": "Pizzaria Veneza is more than just a pizzeria — it's a place where families gather, friends celebrate, and every meal is prepared with love and dedication. From our fresh ingredients to our traditional Italian recipes, every pizza we serve tells a story of passion for authentic cuisine.",
    "about.feature1": "Fresh Ingredients",
    "about.feature2": "Traditional Recipes",
    "about.feature3": "Family Environment",
    
    // Menu
    "menu.title": "Our Menu",
    "menu.subtitle": "Discover our flavors",
    "menu.pizzas": "Pizzas",
    "menu.dishes": "Dishes",
    "menu.dinner": "Dinner Specials",
    "menu.pasta": "Pasta",
    "menu.sizes": "Available sizes",
    "menu.mini": "Mini",
    "menu.small": "Small",
    "menu.medium": "Medium",
    "menu.family": "Family",
    "menu.dinner.note": "Available only at dinner — 30 minutes preparation time",
    "menu.pasta.choose": "Choose your pasta",
    "menu.sauce.choose": "Choose your sauce",
    
    // Reservations
    "reservations.title": "Reservations",
    "reservations.subtitle": "Book your table",
    "reservations.description": "Book your table via WhatsApp — we respond quickly!",
    "reservations.cta": "Book via WhatsApp",
    "reservations.hours": "Opening Hours",
    "reservations.hours.weekdays": "Monday to Saturday",
    
    // Reviews
    "reviews.title": "Reviews",
    "reviews.subtitle": "What our customers say",
    "reviews.cta": "Leave a Google Review",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Come visit us",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Hours",
    
    // Order
    "order.title": "Place Your Order",
    "order.subtitle": "Delivery & Takeaway",
    "order.phone.label": "Call to order",
    "order.apps.label": "Or order through our delivery apps:",
    
    // Footer
    "footer.rights": "All rights reserved",
    
    // Reviews content
    "review1.name": "Maria Santos",
    "review1.text": "The best pizzas in the region! The atmosphere is very welcoming and the service is excellent. Highly recommend!",
    "review2.name": "João Silva",
    "review2.text": "Pizza Veneza is simply delicious! The dough is perfect and the ingredients are always fresh. We'll definitely be back!",
    "review3.name": "Ana Costa",
    "review3.text": "A fantastic place for family dinner. The kids loved it and the pizza was amazing. Thank you for the wonderful experience!",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
