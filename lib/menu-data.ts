export interface MenuItem {
  name: string
  description?: string
  prices?: {
    mini?: string
    small?: string
    medium?: string
    family?: string
  }
}

export interface PastaOption {
  name: string
}

export interface SauceOption {
  name: string
  description: string
}

export const pizzas: MenuItem[] = [
  { name: "Veneza (Especial da Casa)", description: "Fiambre, milho, mozarela, paio, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Quatro Queijos", description: "Mozarela, queijo fundido, roquefort, queijo gordo, azeitona e oregãos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Anchovas", description: "Mozarela, anchovas, azeitonas e tomate", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Atum", description: "Mozarela, atum, cebola, azeitonas, oregãos, milho e cogumelos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Atum e Cogumelo", description: "Mozarela, atum, cebola, azeitonas, oregãos, milho e cogumelos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Bacon", description: "Mozarela, bacon, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Bacon e Cogumelos", description: "Mozarela, bacon, cogumelos, fiambre, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Bolonhesa", description: "Carne picada, mozarela, pimentos, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Camarão", description: "Camarão, mozarela, tomate, cogumelos, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Chouriço", description: "Chouriço, mozarela, cebolas, pimentos, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Espinafre", description: "Espinafre, bacon, queijo fundido, mozarela, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Galinha com Milho", description: "Galinha, milho, mozarela, cebola, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Galinha com Natas", description: "Galinha, natas, mozarela, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Marguerita", description: "Mozarela, tomate, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Italiana", description: "Tomate fresco, presunto, tomate seco, cogumelos frescos, rúcula, manjericão, mozarela, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Mexicana", description: "Mozarela, fiambre, piri-piri, chouriço, cebola, azeitonas e oregãos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Vegetariana", description: "Milho, cebola, cogumelos, tomate, pimento, azeitonas e oregãos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Pepperoni", description: "Mozarela, pepperoni, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Milho", description: "Mozarela, milho, cebola, tomate, azeitonas e oregãos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Napolitana", description: "Mozarela, fiambre, cogumelos, tomate, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Paio", description: "Mozarela, paio, queijo fundido, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Paris", description: "Fiambre, mozarela, chouriço, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Portuguesa", description: "Fiambre, mozarela, ervilha, ovo, cebola, pimentos, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Setubalense", description: "Atum, ervilhas, cebola, pimentos, mozarela, oregãos e azeitonas", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Tropical", description: "Leite condensado, pêssego, ananás, mozarela e canela", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "4 Estações", description: "Mexicana, chouriço, napolitana e portuguesa", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
  { name: "Queijo e Fiambre", description: "Queijo, fiambre, azeitonas e oregãos", prices: { mini: "XX€", small: "XX€", medium: "XX€", family: "XX€" } },
]

export const dishes: MenuItem[] = [
  { name: "Bife à Casa (Bife da Vazia)" },
  { name: "Bife Grelhado" },
  { name: "Bitoque" },
  { name: "Febras Grelhadas" },
  { name: "Hambúrgueres" },
  { name: "Omeletes" },
  { name: "Pregos" },
  { name: "Bifanas" },
]

export const dinnerDishes: MenuItem[] = [
  { name: "Arroz de Marisco", description: "Para 2 pessoas" },
  { name: "Massinha de Cherne" },
  { name: "Canjinha de Cherne" },
  { name: "Açorda de Marisco" },
  { name: "Arroz de Tamboril", description: "Para 2 pessoas" },
]

export const pastaOptions: PastaOption[] = [
  { name: "Lasanha Branca" },
  { name: "Ravioli" },
  { name: "Nhoque" },
  { name: "Esparguete" },
]

export const sauceOptions: SauceOption[] = [
  { name: "À Alfredo de Roma", description: "Molho branco com cogumelos, fiambre e mozarela" },
  { name: "À Bolonhesa", description: "Carne picada com molho vermelho, fiambre e mozarela" },
  { name: "Napolitana", description: "Molho vermelho, fiambre e mozarela" },
  { name: "À Putanesca", description: "Molho vermelho, anchovas, atum, azeitonas, fiambre" },
  { name: "Ao Forno", description: "Molho vermelho, chouriço, bacon, fiambre e mozarela" },
  { name: "Alho e Óleo", description: "Alho, óleo, fiambre, molho vermelho e mozarela" },
  { name: "Frango", description: "Molho vermelho, frango, fiambre e mozarela" },
]
