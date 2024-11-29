import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface TherapyPackageProps {
  title: string
  price: number
  features: string[]
  durations: string[]
  onProceed: () => void
}

export function TherapyPackage({ title, price, features, durations, onProceed }: TherapyPackageProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">₹{price.toLocaleString()}</span>
          <span className="text-lg text-muted-foreground">/ session</span>
        </CardTitle>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4">
          {durations.map((duration) => (
            <Button key={duration} variant="outline" className="flex-1">
              {duration}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onProceed} className="w-full">
          Proceed
        </Button>
      </CardFooter>
    </Card>
  )
}

