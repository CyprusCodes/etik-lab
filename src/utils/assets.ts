export const getImagePath = (path: string) => {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const fullPath = `${import.meta.env.BASE_URL}${cleanPath}`;
  return fullPath;
};
