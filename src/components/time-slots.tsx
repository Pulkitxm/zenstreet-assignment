"use client"

import { Button } from "@/components/ui/button"
import { TimeSlot } from "@/types/booking"
import { cn } from "@/lib/utils"

interface TimeSlotsProps {
  slots: TimeSlot[]
  selectedSlot?: string
  onSelectSlot: (slotId: string) => void
}

export function TimeSlots({ slots, selectedSlot, onSelectSlot }: TimeSlotsProps) {
  const groupedSlots = slots.reduce((acc, slot) => {
    if (!acc[slot.period]) {
      acc[slot.period] = []
    }
    acc[slot.period].push(slot)
    return acc
  }, {} as Record<string, TimeSlot[]>)

  const periods = {
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
  }

  return (
    <div className="space-y-6">
      {Object.entries(groupedSlots).map(([period, periodSlots]) => (
        <div key={period} className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500 capitalize">
            {periods[period as keyof typeof periods]}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {periodSlots.map((slot) => (
              <Button
                key={slot.id}
                variant="outline"
                className={cn(
                  "w-full justify-center",
                  selectedSlot === slot.id && "border-blue-500 bg-blue-50"
                )}
                onClick={() => onSelectSlot(slot.id)}
              >
                {slot.time}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

