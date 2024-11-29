import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BookingSuccessProps {
  email: string
}

export function BookingSuccess({ email }: BookingSuccessProps) {
  return (
    <div className="max-w-md mx-auto text-center space-y-6 p-6">
      <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
      
      <p className="text-gray-600">
        Congratulations! Your therapy session has been successfully scheduled. We&apos;re
        looking forward to helping you on your journey to better mental health.
      </p>

      <div className="space-y-4 text-left">
        <h2 className="font-semibold">Instructions</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex gap-2">
            • A confirmation email with all the session details has been sent to{" "}
            <span className="text-blue-500">{email}</span>
          </li>
          <li>
            • If this is your first session, consider jotting down any key points or questions
            you want to discuss.
          </li>
        </ul>
      </div>

      <Link href="/" className="block">
        <Button className="w-full" size="lg">
          Back to home
        </Button>
      </Link>
    </div>
  )
}

