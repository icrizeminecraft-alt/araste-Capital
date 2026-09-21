import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";

/** En-tête de page intérieure : fil d'Ariane, surtitre, H1, chapeau. */
export function PageIntro({
  eyebrow,
  title,
  lead,
  crumbs,
  crumbsLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  crumbsLabel?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="container-x pt-10 md:pt-16">
      {crumbs && crumbsLabel ? <Breadcrumb items={crumbs} label={crumbsLabel} /> : null}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
          <h1 className="display-lg">{title}</h1>
        </div>
        {lead ? (
          <p className="lead measure text-ink-soft lg:col-span-8 lg:col-start-1">{lead}</p>
        ) : null}
      </div>
      {children}
    </header>
  );
}
