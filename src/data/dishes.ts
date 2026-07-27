export const dishes = [
  {
    id: "wagyu-striploin",
    name: "Wagyu Striploin",
    category: "Chef’s Special",
    price: "₦38,500",
    description:
      "Grilled striploin served with black garlic puree, roasted shallots, and red wine jus.",
    longDescription:
      "A richly marbled striploin grilled over high heat for a deep crust, then finished with black garlic puree, roasted shallots, and a glossy red wine jus.",
    tags: ["Gluten Free", "High Protein"],
    prepTime: "25 mins",
    calories: "680 kcal",
    serving: "1 person",
  },
  {
    id: "seared-scallops",
    name: "Seared Scallops",
    category: "Chef’s Special",
    price: "₦24,000",
    description:
      "Pan-seared scallops with cauliflower puree, pancetta crisp, and lemon butter.",
    longDescription:
      "Delicate scallops seared until golden, served over silky cauliflower puree with pancetta crisp and a bright lemon butter finish.",
    tags: ["Gluten Free"],
    prepTime: "18 mins",
    calories: "420 kcal",
    serving: "1 person",
  },
  {
    id: "truffle-pappardelle",
    name: "Truffle Pappardelle",
    category: "Chef’s Special",
    price: "₦21,000",
    description:
      "Fresh pasta ribbons with wild mushrooms, parmesan cream, and black truffle.",
    longDescription:
      "Hand-cut pasta ribbons folded through parmesan cream, wild mushrooms, and black truffle for a rich, earthy finish.",
    tags: ["Vegetarian"],
    prepTime: "20 mins",
    calories: "590 kcal",
    serving: "1 person",
  },
  {
    id: "miso-glazed-salmon",
    name: "Miso Glazed Salmon",
    category: "Chef’s Special",
    price: "₦22,000",
    description:
      "Glazed salmon with sesame greens, citrus rice, and a delicate miso finish.",
    longDescription:
      "Tender salmon glazed with miso, served with sesame greens and citrus rice for a bright, balanced plate.",
    tags: ["Gluten Free", "High Protein"],
    prepTime: "22 mins",
    calories: "540 kcal",
    serving: "1 person",
  },
];

export type Dish = (typeof dishes)[number];