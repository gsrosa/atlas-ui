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
          "border-primary-200 bg-primary-50 text-primary-700",
        success:
          "border-success-200 bg-success-50 text-success-700",
        warning:
          "border-warning-200 bg-warning-50 text-warning-700",
        danger:
          "border-danger-200 bg-danger-50 text-danger-700",
        info:
          "border-info-200 bg-info-50 text-info-700",
        neutral:
          "border-neutral-200 bg-neutral-50 text-neutral-700",
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
