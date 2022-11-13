export const handleStockAvailable = (stock: number): string => {
  if (!stock) return 'No stock available';
  if (stock <= 10) return `Only ${stock} items available`;
  return 'In stock';
};
