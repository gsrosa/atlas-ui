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
          "border-(--atlas-color-primary-200) bg-(--atlas-color-primary-50) text-(--atlas-color-primary-700)",
        success:
          "border-(--atlas-color-success-200) bg-(--atlas-color-success-50) text-(--atlas-color-success-700)",
        warning:
          "border-(--atlas-color-warning-200) bg-(--atlas-color-warning-50) text-(--atlas-color-warning-700)",
        danger:
          "border-(--atlas-color-danger-200) bg-(--atlas-color-danger-50) text-(--atlas-color-danger-700)",
        info:
          "border-(--atlas-color-info-200) bg-(--atlas-color-info-50) text-(--atlas-color-info-700)",
        neutral:
          "border-(--atlas-color-neutral-200) bg-(--atlas-color-neutral-50) text-(--atlas-color-neutral-700)",
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
