import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/cn";

const badgeVariants = cva(
  [
    "inline-flex items-center rounded-full px-2.5 py-0.5",
    "text-xs font-medium transition-colors",
    "border",
  ],
  {
    variants: {
      variant: {
        default:
          "border-[var(--atlas-color-primary-200)] bg-[var(--atlas-color-primary-50)] text-[var(--atlas-color-primary-700)]",
        success:
          "border-[var(--atlas-color-success-200)] bg-[var(--atlas-color-success-50)] text-[var(--atlas-color-success-700)]",
        warning:
          "border-[var(--atlas-color-warning-200)] bg-[var(--atlas-color-warning-50)] text-[var(--atlas-color-warning-700)]",
        danger:
          "border-[var(--atlas-color-danger-200)] bg-[var(--atlas-color-danger-50)] text-[var(--atlas-color-danger-700)]",
        info:
          "border-[var(--atlas-color-info-200)] bg-[var(--atlas-color-info-50)] text-[var(--atlas-color-info-700)]",
        neutral:
          "border-[var(--atlas-color-neutral-200)] bg-[var(--atlas-color-neutral-50)] text-[var(--atlas-color-neutral-700)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, BadgeVariantProps {}

const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
};

Badge.displayName = "Badge";

export { Badge, badgeVariants, type BadgeProps };
