import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import React from "react";

import { cn } from "@/utils/cn";

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer size-4 shrink-0 rounded-(--atlas-radius-sm)",
      "border border-(--atlas-surface-border)",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--atlas-surface-ring) focus-visible:ring-offset-2",
      "data-[state=checked]:border-(--atlas-color-primary-600) data-[state=checked]:bg-(--atlas-color-primary-600) data-[state=checked]:text-white",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "transition-colors",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

Checkbox.displayName = "Checkbox";

export { Checkbox, type CheckboxProps };
