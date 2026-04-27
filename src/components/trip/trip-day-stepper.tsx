import { BedDoubleIcon, ClockIcon, DollarSignIcon, MapIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

export interface TripAttractionData {
  name: string;
  address?: string;
  notes?: string;
  averageMinutesSpent?: number;
  price?: { amount: number; currency: string };
  openingHours?: string;
}

export interface LodgingEvent {
  text: string;
  type: 'checkin' | 'checkout' | 'staying';
}

export interface TripDayStepperProps {
  dayNumber: number;
  city: string;
  region?: string;
  title?: string;
  isLast: boolean;
  attractions: TripAttractionData[];
  lodgingEvents?: LodgingEvent[];
  /** Google Maps Directions URL for the day's route. When provided, the Map button becomes an active link. */
  mapsUrl?: string;
  className?: string;
}

function formatMinutes(mins: number): string {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

function formatPrice(price: { amount: number; currency: string }): string {
  if (price.amount === 0) return 'Free';
  return `$${price.amount.toLocaleString()} ${price.currency}`;
}

function InfoPill({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-neutral-800 px-1.5 py-0.5 text-[11px] text-neutral-400">
      {icon}
      {label}
    </span>
  );
}

export function TripDayStepper({
  dayNumber,
  city,
  region,
  title,
  isLast,
  attractions,
  lodgingEvents,
  mapsUrl,
  className,
}: TripDayStepperProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-500 text-[11px] font-bold text-neutral-50 ring-4 ring-primary-500/20">
          {dayNumber}
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-primary-400/30" />
        )}
      </div>

      {/* Day content */}
      <div className={cn('min-w-0 flex-1', isLast ? 'pb-0' : 'pb-8')}>
        {/* Header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary-400">
                Day {dayNumber}
              </span>
              <span className="text-sm font-semibold text-neutral-100">
                · {city}
                {region ? `, ${region}` : ''}
              </span>
            </div>
            {title && (
              <p className="mt-0.5 text-xs italic text-neutral-400">
                {title}
              </p>
            )}
            {lodgingEvents && lodgingEvents.length > 0 && (
              <div className="mt-1.5 flex flex-col gap-0.5">
                {lodgingEvents.map((ev, i) => (
                  <span
                    key={i}
                    className={cn(
                      'inline-flex items-center gap-1 text-[11px]',
                      ev.type === 'checkin'
                        ? 'text-primary-400'
                        : 'text-neutral-400',
                    )}
                  >
                    <BedDoubleIcon className="size-3 shrink-0" aria-hidden />
                    {ev.text}
                  </span>
                ))}
              </div>
            )}
          </div>
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open day route in Google Maps"
              className="flex shrink-0 items-center gap-1 rounded-lg border border-neutral-700 px-2 py-1 text-[11px] text-neutral-400 transition-colors hover:border-primary-400 hover:text-primary-400"
            >
              <MapIcon className="size-3" aria-hidden />
              Map
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="Route map coming soon"
              aria-label="Map route (coming soon)"
              className="flex shrink-0 cursor-not-allowed items-center gap-1 rounded-lg border border-neutral-700 px-2 py-1 text-[11px] text-neutral-400 opacity-40"
            >
              <MapIcon className="size-3" aria-hidden />
              Map
            </button>
          )}
        </div>

        {/* Attractions */}
        {attractions.length > 0 && (
          <ul className="space-y-4">
            {attractions.map((attraction, i) => (
              <li key={i} className="flex gap-2.5">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-400"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-neutral-100">
                    {attraction.name}
                  </p>
                  {attraction.address && (
                    <p className="mt-0.5 text-xs text-neutral-400">
                      {attraction.address}
                    </p>
                  )}
                  {(attraction.averageMinutesSpent != null ||
                    attraction.price != null ||
                    attraction.openingHours) && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {attraction.averageMinutesSpent != null &&
                        attraction.averageMinutesSpent > 0 && (
                          <InfoPill
                            icon={<ClockIcon className="size-2.5" aria-hidden />}
                            label={formatMinutes(attraction.averageMinutesSpent)}
                          />
                        )}
                      {attraction.price != null && (
                        <InfoPill
                          icon={<DollarSignIcon className="size-2.5" aria-hidden />}
                          label={formatPrice(attraction.price)}
                        />
                      )}
                      {attraction.openingHours && (
                        <InfoPill
                          icon={<ClockIcon className="size-2.5" aria-hidden />}
                          label={attraction.openingHours}
                        />
                      )}
                    </div>
                  )}
                  {attraction.notes && (
                    <p className="mt-1 text-xs italic text-neutral-400">
                      {attraction.notes}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
