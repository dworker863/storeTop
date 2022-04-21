export const calculateRating = (ratings: number[]) => {
  const rating =
    ratings?.reduce((sum, ratingsItem) => (sum += ratingsItem), 0) /
    ratings?.length;

  return Number(rating.toFixed(1));
};
