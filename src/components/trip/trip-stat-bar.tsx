import {
  CalendarDaysIcon,
  DollarSignIcon,
  MapPinIcon,
  SunIcon,
  ThermometerIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface TripStatBarProps {
  daysCount?: number | null;
  cities?: string[];
  totalCostUsd?: number;
  tempRange?: string | null;
  bestMonth?: string | null;
  className?: string;
}

function StatChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--atlas-surface-border)] bg-[var(--atlas-surface-container)] px-3 py-1.5 text-xs font-medium text-[var(--atlas-surface-muted-foreground)]">
      {icon}
      {label}
    </span>
  );
}

export function TripStatBar({
  daysCount,
  cities,
  totalCostUsd,
  tempRange,
  bestMonth,
  className,
}: TripStatBarProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {daysCount != null && daysCount > 0 && (
        <StatChip
          icon={<CalendarDaysIcon className="size-3.5" aria-hidden />}
          label={`${daysCount} ${daysCount === 1 ? 'day' : 'days'}`}
        />
      )}
      {cities != null && cities.length > 0 && (
        <StatChip
          icon={<MapPinIcon className="size-3.5" aria-hidden />}
          label={`${cities.length} ${cities.length === 1 ? 'city' : 'cities'}`}
        />
      )}
      {totalCostUsd != null && totalCostUsd > 0 && (
        <StatChip
          icon={<DollarSignIcon className="size-3.5" aria-hidden />}
          label={`~$${totalCostUsd.toLocaleString()} est.`}
        />
      )}
      {tempRange != null && tempRange.length > 0 && (
        <StatChip
          icon={<ThermometerIcon className="size-3.5" aria-hidden />}
          label={tempRange}
        />
      )}
      {bestMonth != null && bestMonth.length > 0 && (
        <StatChip
          icon={<SunIcon className="size-3.5" aria-hidden />}
          label={`Best: ${bestMonth}`}
        />
      )}
    </div>
  );
}
