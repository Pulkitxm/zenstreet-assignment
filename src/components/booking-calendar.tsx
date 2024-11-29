"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

const TIMES = {
  Morning: ["8:00 - 8:45 AM", "9:00 - 9:45 AM", "11:00 - 11:45 AM"],
  Afternoon: ["12:00 - 12:45 PM", "2:00 - 2:45 PM", "3:00 - 3:45 PM", "4:00 - 4:45 PM"],
  Evening: ["5:00 - 5:45 PM", "6:00 - 6:45 PM", "7:00 - 7:45 PM", "8:00 - 8:45 PM"],
}

export function BookingCalendar() {
  const [selectedMode, setSelectedMode] = useState<"in-person" | "video">("in-person")
  const [selectedTime, setSelectedTime] = useState<string>("")

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Select therapy mode</CardTitle>
        <RadioGroup
          defaultValue="in-person"
          onValueChange={(value) => setSelectedMode(value as "in-person" | "video")}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="in-person" id="in-person" />
            <label htmlFor="in-person">In-person</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="video" id="video" />
            <label htmlFor="video">Video Call</label>
          </div>
        </RadioGroup>
        {selectedMode === "in-person" && (
          <p className="text-sm text-muted-foreground">3rd Floor, A2, 35, Block A2, Delhi</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {Object.entries(TIMES).map(([period, times]) => (
            <div key={period}>
              <h4 className="mb-3 font-medium">{period}</h4>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {times.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    className={cn(
                      "w-full",
                      selectedTime === time && "border-primary bg-primary/10 text-primary"
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

