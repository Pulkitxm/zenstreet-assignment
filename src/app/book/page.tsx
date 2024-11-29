"use client"

import { Notification } from "@/components/notification"
import { TherapyPackage } from "@/components/therapy-package"
import { BookingCalendar } from "@/components/booking-calendar"

const THERAPY_PACKAGES = [
  {
    title: "Individual Therapy",
    price: 3200,
    features: ["Joint Evaluation", "Communication Exercises", "Conflict Resolution", "Goal Setting", "Follow up plan"],
    durations: ["45 min", "60 min", "90 min"],
  },
  {
    title: "Couple Therapy",
    price: 3200,
    features: ["Joint Evaluation", "Communication Exercises", "Conflict Resolution", "Goal Setting", "Follow up plan"],
    durations: ["45 min", "60 min", "90 min"],
  },
  {
    title: "Group Therapy",
    price: 3200,
    features: ["Joint Evaluation", "Communication Exercises", "Conflict Resolution", "Goal Setting", "Follow up plan"],
    durations: ["45 min", "60 min", "90 min"],
  },
]

export default function BookingPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <Notification message="Click on the duration to see the pricing details" />
      
      <div className="grid gap-6 md:grid-cols-3">
        {THERAPY_PACKAGES.map((pkg) => (
          <TherapyPackage
            key={pkg.title}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            durations={pkg.durations}
            onProceed={() => {}}
          />
        ))}
      </div>

      <BookingCalendar />
    </div>
  )
}

