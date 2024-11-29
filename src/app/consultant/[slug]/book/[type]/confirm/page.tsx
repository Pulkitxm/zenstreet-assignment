"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { BookingSuccess } from "@/components/booking-success";
import { BookingFormData } from "@/types/booking";

export default function ConfirmBookingPage() {
  const searchParams = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const date = new Date(searchParams.get("date") || Date.now());
  const price = 2400;

  const handleSubmit = async (data: BookingFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmittedEmail(data.email);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return <BookingSuccess email={submittedEmail} />;
  }

  return <BookingForm date={date} price={price} onSubmit={handleSubmit} />;
}
