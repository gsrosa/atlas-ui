import * as LabelPrimitive from "@radix-ui/react-label";
import React from "react";

import { cn } from "@/utils/cn";

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none text-[var(--atlas-surface-foreground)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
));

Label.displayName = "Label";

export { Label, type LabelProps };
