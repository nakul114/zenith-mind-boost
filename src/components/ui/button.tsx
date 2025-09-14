import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:scale-[1.02] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-sm)]",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02]",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "btn-glass text-foreground hover:shadow-[var(--shadow-md)]",
        hero: "bg-primary text-primary-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl",
        premium: "bg-gradient-to-r from-primary to-primary-glow text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:scale-[1.02] active:scale-[0.98] rounded-2xl",
        calm: "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-500",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-2xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };