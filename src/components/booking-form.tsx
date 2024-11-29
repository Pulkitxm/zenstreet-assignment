"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { BookingFormData } from "@/types/booking";

interface BookingFormProps {
  date: Date;
  price: number;
  onSubmit: (data: BookingFormData) => void;
}

export function BookingForm({ date, price, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isEmployerReferred: false,
    employerName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-md mx-auto">
        <CardHeader className="bg-blue-500 text-white p-4">
          <div className="flex items-center gap-2">
            <div className="text-sm">{format(date, "EEE, dd MMM")}</div>
            <div className="text-sm">{format(date, "h:mm a")}</div>
          </div>
          <div className="text-xl font-semibold">
            ₹ {price.toLocaleString()}/-
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex">
                <select className="px-3 py-2 border rounded-l-md bg-white">
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <Input
                  id="phone"
                  type="tel"
                  className="rounded-l-none"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <p className="text-xs text-gray-500">
                You will receive booking details on WhatsApp
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="employer"
                  checked={formData.isEmployerReferred}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      isEmployerReferred: checked as boolean,
                    })
                  }
                />
                <Label htmlFor="employer">
                  Yes, I am employed under a partnering company
                </Label>
              </div>

              {formData.isEmployerReferred && (
                <div className="flex gap-2">
                  <Input
                    placeholder="Company Name"
                    value={formData.employerName}
                    onChange={(e) =>
                      setFormData({ ...formData, employerName: e.target.value })
                    }
                  />
                  <Button variant="secondary">Verify</Button>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Book session
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
