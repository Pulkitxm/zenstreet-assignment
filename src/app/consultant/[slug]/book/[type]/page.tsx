"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TherapyModeSelector } from "@/components/therapy-mode-selector";
import { TimeSlots } from "@/components/time-slots";
import {
  BookingState,
  TherapyMode,
  TimeSlot,
} from "@/types/booking";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const MOCK_TIME_SLOTS: TimeSlot[] = [
  { id: "1", time: "9:00 - 9:45 AM", period: "morning" },
  { id: "2", time: "10:00 - 10:45 AM", period: "morning" },
  { id: "3", time: "11:00 - 11:45 AM", period: "morning" },
  { id: "4", time: "2:00 - 2:45 PM", period: "afternoon" },
  { id: "5", time: "3:00 - 3:45 PM", period: "afternoon" },
  { id: "6", time: "4:00 - 4:45 PM", period: "afternoon" },
  { id: "7", time: "5:00 - 5:45 PM", period: "evening" },
  { id: "8", time: "6:00 - 6:45 PM", period: "evening" },
];

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const [booking, setBooking] = useState<BookingState>({});
  const [activeTab, setActiveTab] = useState("slots");

  const handleModeSelect = (mode: TherapyMode) => {
    setBooking((prev) => ({ ...prev, mode }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setBooking((prev) => ({ ...prev, date }));
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setBooking((prev) => ({ ...prev, timeSlot: slotId }));
  };

  const handleProceed = () => {
    if (booking.date) {
      router.push(
        `/consultant/${params.slug}/book/${params.type}/confirm?date=${booking.date.toISOString()}`
      );
    }
  };

  const canProceed = booking.mode && booking.date && booking.timeSlot;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6 max-w-3xl space-y-6">
        <div className="flex items-center gap-4">
          <Link
            href={`/consultant/${params.slug}`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
          <h1 className="text-xl font-semibold">Please select therapy mode</h1>
        </div>

        <Card className="p-6 space-y-8">
          <TherapyModeSelector
            selected={booking.mode}
            onSelect={handleModeSelect}
          />

          {booking.mode && (
            <>
              <div className="space-y-4">
                <h2 className="text-lg font-medium">Filter by</h2>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 max-w-[200px]">
                    <TabsTrigger value="slots">Slots</TabsTrigger>
                    <TabsTrigger value="date">Date</TabsTrigger>
                  </TabsList>
                  <TabsContent value="slots" className="space-y-4">
                    <TimeSlots
                      slots={MOCK_TIME_SLOTS}
                      selectedSlot={booking.timeSlot}
                      onSelectSlot={handleTimeSlotSelect}
                    />
                  </TabsContent>
                  <TabsContent value="date">
                    <div className="flex justify-center p-4">
                      <Calendar
                        mode="single"
                        selected={booking.date}
                        onSelect={handleDateSelect}
                        className="rounded-md border"
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="pt-4">
                <Button
                  className="w-full"
                  size="lg"
                  disabled={!canProceed}
                  onClick={handleProceed}
                >
                  Proceed
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
