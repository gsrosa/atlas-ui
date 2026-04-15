import * as TabsPrimitive from "@radix-ui/react-tabs";
import React from "react";

import { cn } from "@/utils/cn";

const Tabs = TabsPrimitive.Root;

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center gap-1 rounded-(--atlas-radius-md)",
      "bg-(--atlas-color-neutral-100) p-1",
      "text-(--atlas-surface-muted-foreground)",
      className,
    )}
    {...props}
  />
));

TabsList.displayName = "TabsList";

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-(--atlas-radius-sm) px-3 py-1.5",
      "text-sm font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--atlas-surface-ring) focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-(--atlas-surface-background) data-[state=active]:text-(--atlas-surface-foreground) data-[state=active]:shadow-sm",
      className,
    )}
    {...props}
  />
));

TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--atlas-surface-ring) focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));

TabsContent.displayName = "TabsContent";

export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  type TabsContentProps,
  type TabsListProps,
  type TabsTriggerProps,
};
