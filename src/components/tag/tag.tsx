import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/cn";

const tagVariants = cva(
  [
    "inline-flex items-center gap-1 rounded-sm",
    "text-xs font-medium transition-colors",
    "border",
  ],
  {
    variants: {
      variant: {
        default:
          "border-primary-200 bg-primary-50 text-primary-700",
        success:
          "border-success-200 bg-success-50 text-success-700",
        warning:
          "border-warning-200 bg-warning-50 text-warning-700",
        danger:
          "border-danger-200 bg-danger-50 text-danger-700",
        neutral:
          "border-neutral-200 bg-neutral-50 text-neutral-700",
      },
      size: {
        sm: "px-1.5 py-0.5 text-xs",
        md: "px-2 py-0.5 text-xs",
        lg: "px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type TagVariantProps = VariantProps<typeof tagVariants>;

interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, TagVariantProps {
  onClose?: () => void;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant, size, onClose, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagVariants({ variant, size, className }))}
        {...props}
      >
        {children}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="ml-0.5 inline-flex size-3.5 items-center justify-center rounded-full opacity-70 hover:opacity-100 focus:outline-none"
            aria-label="Remove"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = "Tag";

export { Tag, tagVariants, type TagProps };
