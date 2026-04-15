import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { cn } from "@/utils/cn";

const alertVariants = cva(
  [
    "relative w-full rounded-(--atlas-radius-lg) border p-4",
    "[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px]",
    "[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-5",
  ],
  {
    variants: {
      variant: {
        default:
          "border-(--atlas-color-info-200) bg-(--atlas-color-info-50) text-(--atlas-color-info-700) [&>svg]:text-(--atlas-color-info-600)",
        success:
          "border-(--atlas-color-success-200) bg-(--atlas-color-success-50) text-(--atlas-color-success-700) [&>svg]:text-(--atlas-color-success-600)",
        warning:
          "border-(--atlas-color-warning-200) bg-(--atlas-color-warning-50) text-(--atlas-color-warning-700) [&>svg]:text-(--atlas-color-warning-600)",
        danger:
          "border-(--atlas-color-danger-200) bg-(--atlas-color-danger-50) text-(--atlas-color-danger-700) [&>svg]:text-(--atlas-color-danger-600)",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type AlertVariantProps = VariantProps<typeof alertVariants>;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariantProps {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      {...props}
    />
  ),
);

Alert.displayName = "Alert";

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);

AlertTitle.displayName = "AlertTitle";

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  ),
);

AlertDescription.displayName = "AlertDescription";

export {
  Alert,
  AlertDescription,
  AlertTitle,
  alertVariants,
  type AlertDescriptionProps,
  type AlertProps,
  type AlertTitleProps,
};
