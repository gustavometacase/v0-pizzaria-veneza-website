"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { pizzas, dishes, dinnerDishes, pastaOptions, sauceOptions } from "@/lib/menu-data"
import { Clock, Info } from "lucide-react"

type TabType = "pizzas" | "dishes" | "dinner" | "pasta"

export function MenuSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabType>("pizzas")

  const tabs: { id: TabType; label: string }[] = [
    { id: "pizzas", label: t("menu.pizzas") },
    { id: "dishes", label: t("menu.dishes") },
    { id: "dinner", label: t("menu.dinner") },
    { id: "pasta", label: t("menu.pasta") },
  ]

  return (
    <section id="menu" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium uppercase tracking-wider text-sm">
            {t("menu.subtitle")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
            {t("menu.title")}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-background text-foreground hover:bg-background/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "pizzas" && <PizzasTab />}
          {activeTab === "dishes" && <DishesTab />}
          {activeTab === "dinner" && <DinnerTab />}
          {activeTab === "pasta" && <PastaTab />}
        </div>
      </div>
    </section>
  )
}

function PizzasTab() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Pizza Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {pizzas.map((pizza, index) => (
          <div
            key={index}
            className={`p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors ${
              pizza.name.includes("Veneza") ? "ring-2 ring-accent" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-lg font-bold text-foreground">
                {pizza.name}
                {pizza.name.includes("Veneza") && (
                  <span className="ml-2 text-xs bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                    Especial
                  </span>
                )}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground">{pizza.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function DishesTab() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dishes.map((dish, index) => (
        <div
          key={index}
          className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors text-center"
        >
          <h3 className="font-serif text-lg font-bold text-foreground">{dish.name}</h3>
        </div>
      ))}
    </div>
  )
}

function DinnerTab() {
  const { t } = useLanguage()

  return (
    <div>
      {/* Notice */}
      <div className="flex items-center justify-center gap-2 mb-8 p-4 bg-accent/10 rounded-xl text-accent">
        <Clock className="h-5 w-5" />
        <span className="text-sm font-medium">{t("menu.dinner.note")}</span>
      </div>

      {/* Dinner Dishes */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dinnerDishes.map((dish, index) => (
          <div
            key={index}
            className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors text-center"
          >
            <h3 className="font-serif text-lg font-bold text-foreground mb-1">
              {dish.name}
            </h3>
            {dish.description && (
              <p className="text-sm text-muted-foreground">{dish.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function PastaTab() {
  const { t } = useLanguage()

  return (
    <div className="space-y-10">
      {/* Pasta Options */}
      <div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-accent" />
          {t("menu.pasta.choose")}
        </h3>
        <div className="flex flex-wrap gap-3">
          {pastaOptions.map((pasta, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-background rounded-full border border-border text-sm font-medium text-foreground"
            >
              {pasta.name}
            </span>
          ))}
        </div>
      </div>

      {/* Sauce Options */}
      <div>
        <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Info className="h-5 w-5 text-accent" />
          {t("menu.sauce.choose")}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {sauceOptions.map((sauce, index) => (
            <div
              key={index}
              className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                {sauce.name}
              </h4>
              <p className="text-sm text-muted-foreground">{sauce.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
