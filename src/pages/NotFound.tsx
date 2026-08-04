import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Sayfa Bulunamadı"
        description="Aradığınız sayfa bulunamadı veya kaldırılmış olabilir."
        path={location.pathname}
        noIndex
      />
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Sayfa Bulunamadı</h1>
          <p className="mb-4 text-xl text-gray-700">
            Aradığınız sayfa bulunamadı veya kaldırılmış olabilir.
          </p>
          <Link to="/" className="text-teal-800 underline hover:text-teal-800">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
