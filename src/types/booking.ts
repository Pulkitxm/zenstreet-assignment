export type TherapyMode = "in-person" | "video" | "call";
export type TherapyType = "group" | "individual" | "couple";
export type TimeOfDay = "morning" | "afternoon" | "evening";

export interface TimeSlot {
  id: string;
  time: string;
  period: TimeOfDay;
}

export interface BookingState {
  mode?: TherapyMode;
  date?: Date;
  timeSlot?: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isEmployerReferred: boolean;
  employerName?: string;
}
