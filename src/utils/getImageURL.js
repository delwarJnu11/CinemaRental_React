export const getImageURL = (name) => {
  const url = new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
  return url;
};
