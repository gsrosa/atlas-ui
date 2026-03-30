import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/cn";

const textareaVariants = cva(
  [
    "flex min-h-[80px] w-full font-normal transition-colors",
    "rounded-[var(--atlas-radius-md)]",
    "border border-[var(--atlas-surface-border)]",
    "bg-[var(--atlas-surface-background)] text-[var(--atlas-surface-foreground)]",
    "placeholder:text-[var(--atlas-surface-muted-foreground)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atlas-surface-ring)] focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      textareaSize: {
        sm: "px-3 py-2 text-xs",
        md: "px-3 py-2 text-sm",
        lg: "px-4 py-3 text-base",
      },
    },
    defaultVariants: {
      textareaSize: "md",
    },
  },
);

type TextareaVariantProps = VariantProps<typeof textareaVariants>;

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaVariantProps {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, textareaSize, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ textareaSize, className }))}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants, type TextareaProps };
