import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "text-sm font-medium transition-colors",
    "rounded-[var(--atlas-radius-md)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atlas-surface-ring)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--atlas-color-primary-600)] text-white hover:bg-[var(--atlas-color-primary-700)] active:bg-[var(--atlas-color-primary-700)]",
        secondary:
          "bg-[var(--atlas-color-neutral-100)] text-[var(--atlas-surface-foreground)] border border-[var(--atlas-surface-border)] hover:bg-[var(--atlas-color-neutral-200)] active:bg-[var(--atlas-color-neutral-300)]",
        ghost:
          "text-[var(--atlas-surface-foreground)] hover:bg-[var(--atlas-color-neutral-100)] active:bg-[var(--atlas-color-neutral-200)]",
      },
      size: {
        sm: "h-8 px-3 text-xs [&_svg]:size-3.5",
        md: "h-10 px-4 text-sm [&_svg]:size-4",
        lg: "h-12 px-6 text-base [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };
