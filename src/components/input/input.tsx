import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/cn";

const inputVariants = cva(
  [
    "flex w-full font-normal transition-colors",
    "rounded-[var(--atlas-radius-md)]",
    "border border-[var(--atlas-surface-border)]",
    "bg-[var(--atlas-surface-background)] text-[var(--atlas-surface-foreground)]",
    "placeholder:text-[var(--atlas-surface-muted-foreground)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atlas-surface-ring)] focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
  ],
  {
    variants: {
      inputSize: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  },
);

type InputVariantProps = VariantProps<typeof inputVariants>;

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariantProps {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputSize, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ inputSize, className }))}
        aria-invalid={props["aria-invalid"]}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input, inputVariants, type InputProps };
