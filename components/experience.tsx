interface ExperienceProps {
  name: string;
  description: string;
  href?: string;
  period: {
    start: string;
    end: string;
  };
}

export default function Experience({
  name,
  description,
  href,
  period,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-row gap-2 items-center">
        <h3 className="font-medium">{name}</h3>
        <span className="text-sm text-muted-foreground">
          {period.start} - {period.end}
        </span>
      </div>
      <p className="text-sm text-secondary-foreground">{description}</p>
    </div>
  );
}
