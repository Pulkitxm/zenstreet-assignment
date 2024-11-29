"use client";

import { Notification } from "@/components/notification";
import { TherapyPackage } from "@/components/therapy-package";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const THERAPY_PACKAGES = [
  {
    title: "Group Therapy",
    price: 3200,
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
    durations: ["45 min", "60 min", "90 min"],
    type: "group",
  },
  {
    title: "Individual Therapy",
    price: 3200,
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
    durations: ["45 min", "60 min", "90 min"],
    type: "individual",
  },
  {
    title: "Couple Therapy",
    price: 3200,
    features: [
      "Joint Evaluation",
      "Communication Exercises",
      "Conflict Resolution",
      "Goal Setting",
      "Follow up plan",
    ],
    durations: ["45 min", "60 min", "90 min"],
    type: "couple",
  },
];

export default function BookingPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 space-y-8">
        <div className="flex items-center gap-4">
          <Link
            href={`/consultant/${slug}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
          <h1 className="text-xl font-semibold">Available sessions</h1>
        </div>

        <Notification
          variant="blue"
          message="Click on the duration to see the pricing details"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {THERAPY_PACKAGES.map((pkg) => (
            <TherapyPackage
              key={pkg.title}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              durations={pkg.durations}
              onProceed={() => {}}
              slug={slug}
              type={pkg.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
