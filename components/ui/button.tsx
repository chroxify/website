import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { CentralIconProps } from "@central-icons-react/all";
import { CentralIcon } from "@/lib/central-icon";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-250 cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive before:absolute before:inset-0 before:rounded-[inherit] before:-z-10 before:transition-all active:before:scale-[0.975]",
  {
    variants: {
      variant: {
        default:
          "before:bg-primary text-primary-foreground hover:before:bg-primary/90 active:text-primary-foreground/75",
        secondary:
          "before:bg-secondary text-foreground hover:before:brightness-[0.975] active:text-secondary-foreground",
        ghost:
          "hover:before:bg-secondary text-secondary-foreground hover:text-foreground active:text-foreground/85",
        tab: "before:bg-secondary text-foreground hover:before:brightness-[0.975] active:text-secondary-foreground data-[active=true]:before:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:before:bg-primary/90 data-[active=true]:active:text-primary-foreground/75",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  icon,
  iconClassName,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    icon?: CentralIconProps["name"];
    asChild?: boolean;
    iconClassName?: string;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon && <CentralIcon name={icon} className={iconClassName} />}
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
