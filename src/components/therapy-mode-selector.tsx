"use client"

import { Button } from "@/components/ui/button"
import { Video, Phone, Users } from 'lucide-react'
import { TherapyMode } from "@/types/booking"

interface TherapyModeSelectorProps {
  selected?: TherapyMode
  onSelect: (mode: TherapyMode) => void
}

export function TherapyModeSelector({ selected, onSelect }: TherapyModeSelectorProps) {
  const modes: { id: TherapyMode; icon: React.ReactNode; label: string }[] = [
    { id: "in-person", icon: <Users className="h-6 w-6" />, label: "In person" },
    { id: "video", icon: <Video className="h-6 w-6" />, label: "Video" },
    { id: "call", icon: <Phone className="h-6 w-6" />, label: "Call" },
  ]

  return (
    <div className="grid grid-cols-3 gap-4">
      {modes.map((mode) => (
        <Button
          key={mode.id}
          variant="outline"
          className={`flex flex-col items-center gap-2 p-4 h-auto ${
            selected === mode.id ? "border-blue-500 bg-blue-50" : ""
          }`}
          onClick={() => onSelect(mode.id)}
        >
          {mode.icon}
          <span className="text-sm">{mode.label}</span>
        </Button>
      ))}
    </div>
  )
}

