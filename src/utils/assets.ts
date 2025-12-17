export const getImagePath = (path: string) => {
  console.log("BASE_URL:", import.meta.env.BASE_URL);
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const fullPath = `${import.meta.env.BASE_URL}${cleanPath}`;
  console.log("Full path:", fullPath);
  return fullPath;
};
