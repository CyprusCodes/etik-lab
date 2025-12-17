import { BreadcrumbNav } from "./breadcrumb-nav";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  badge,
}: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground pt-32 pb-16">
      <div className="container-wide">
        {/* <BreadcrumbNav items={breadcrumbs} /> */}
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4 border border-primary-foreground/20">
            {badge}
          </span>
        )}
        <h1 className="heading-1 mb-4">{title}</h1>
        {description && (
          <p className="body-large text-primary-foreground/80 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
