import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

export default function ComponentWrapper({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "bg-background border relative rounded-2xl w-full min-h-[325px] select-none overflow-hidden flex flex-col items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
