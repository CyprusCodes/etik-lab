export const getImagePath = (path: string) => {
  const base = import.meta.env.VITE_S3_BUCKET_ASSET_URL.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  return `${base}/${cleanPath}`;
};
