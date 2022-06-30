export const getQuantityLevel = (quantity) => {
  if (quantity <= 10) return "levelLow";
  if (quantity <= 20) return "levelMedium";
  if (quantity > 20) return "levelHigh";
};

export const getPriceWithCurrency = (price, currency) => {
  switch (currency) {
    case "USD":
      return `$${price}`;

    case "EUR":
      return `€${price}`;

    default:
      return `${price} GBP`;
  }
};
