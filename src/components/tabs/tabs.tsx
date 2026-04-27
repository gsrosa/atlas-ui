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
      "inline-flex h-10 items-center justify-center gap-1 rounded-md p-1",
      "bg-neutral-800 ring-1 ring-neutral-700 ring-offset-0",
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
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5",
      "text-sm font-medium text-neutral-400 transition-all",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 focus-visible:ring-offset-0",
      "disabled:pointer-events-none disabled:opacity-50",
      "hover:text-neutral-200",
      "data-[state=active]:bg-primary-500 data-[state=active]:text-neutral-50 data-[state=active]:shadow-none",
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
      "mt-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 focus-visible:ring-offset-0",
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
