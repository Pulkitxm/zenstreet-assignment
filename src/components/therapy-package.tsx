import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

interface TherapyPackageProps {
  title: string;
  price: number;
  features: string[];
  durations: string[];
  onProceed: () => void;
  slug: string;
  type: string;
}

export function TherapyPackage({
  title,
  price,
  features,
  durations,
  onProceed,
  slug,
  type,
}: TherapyPackageProps) {
  return (
    <Card className="overflow-hidden border-0 bg-[#0093FE] text-white">
      <CardHeader className="space-y-1 pb-4">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <div className="text-center">
          <span className="text-3xl font-bold">₹{price.toLocaleString()}</span>
          <span className="text-sm opacity-85">/ session</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center gap-2">
          {durations.map((duration) => (
            <Button
              key={duration}
              variant="secondary"
              className={cn(
                "bg-transparent  text-white border ",
                duration === "60 min" ? "border-white" : "border-blue-400"
              )}
              size="sm"
            >
              {duration}
            </Button>
          ))}
        </div>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={`/consultant/${slug}/book/${type}`}>
          <Button
            onClick={onProceed}
            className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-full"
            size="lg"
          >
            Proceed
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
