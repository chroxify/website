import { cn } from "@/lib/utils";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, children, className }: SectionProps) => {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="font-semibold">{title}</h3>
      <div className={cn("flex flex-col gap-4", className)}>{children}</div>
    </section>
  );
};
