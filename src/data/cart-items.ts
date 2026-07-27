export const cartItems = [
  {
    id: "miso-glazed-salmon",
    name: "Miso Glazed Salmon",
    price: "₦27,000",
    description: "Norwegian salmon, miso glaze, bok choy, sesame, ginger.",
    tag: "Gluten Free",
    quantity: 1,
  },
  {
    id: "truffle-mushroom-risotto",
    name: "Truffle Mushroom Risotto",
    price: "₦28,500",
    description: "Arborio rice, wild mushrooms, white truffle oil, parmesan.",
    tag: "Vegetarian",
    quantity: 1,
  },
  {
    id: "negroni",
    name: "Negroni",
    price: "₦9,000",
    description: "Gin, Campari, sweet vermouth, orange peel.",
    tag: "Signature Drink",
    quantity: 1,
  },
];

export const recommendations = [
  {
    id: "grilled-ribeye-steak",
    name: "Grilled Ribeye Steak",
    price: "₦38,000",
  },
  {
    id: "dark-chocolate-fondant",
    name: "Dark Chocolate Fondant",
    price: "₦12,000",
  },
  {
    id: "house-red-wine",
    name: "House Red Wine",
    price: "₦16,000",
  },
];

export type CartItem = (typeof cartItems)[number];