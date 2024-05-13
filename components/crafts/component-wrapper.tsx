import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

type ComponentWrapperProps = HTMLProps<HTMLDivElement> & {
  // Custom props
};

export default function ComponentWrapper({
  children,
  ...props
}: ComponentWrapperProps) {
  return (
    <div
      className={cn(
        "bg-background border relative rounded-2xl w-full min-h-[325px] select-none overflow-hidden flex flex-col items-center justify-center"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
