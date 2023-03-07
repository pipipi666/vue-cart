export const getSuff = (productsCount) => {
  return productsCount % 10 > 4 ||
    !(productsCount % 10) ||
    (productsCount > 10 && productsCount < 15)
    ? "ов"
    : productsCount % 10 === 1
    ? ""
    : "а";
};
