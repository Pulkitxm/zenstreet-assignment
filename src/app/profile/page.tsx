"use client"

import { useState } from "react"
import { ArrowLeft, MapPin, Share2, CheckCircle2, Video } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TherapistProfile() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showAllTestimonials, setShowAllTestimonials] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#0085FF] text-white p-4">
        <div className="flex items-center gap-2">
          <ArrowLeft className="h-6 w-6" />
          <span className="text-lg">Back</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto">
        {/* Profile Card */}
        <Card className="mx-4 -mt-6 relative z-20 bg-white shadow-md rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <Avatar className="h-20 w-20 rounded-xl">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Swetha Varma" />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-lg font-semibold">Swetha Varma</h2>
                    <CheckCircle2 className="h-4 w-4 text-[#0085FF]" />
                  </div>
                  <p className="text-sm text-gray-600">Consultant Clinical Psychologist</p>
                  <p className="text-xs text-gray-500">10+ Years of experience</p>
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span>Block A2, Delhi</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <span className="text-lg font-semibold">₹1,200</span>
                <span className="text-sm text-gray-500">/ Session</span>
              </div>
              <Button className="bg-[#0085FF] hover:bg-[#0085FF]/90 text-white">Book session</Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="p-4 space-y-6">
          {/* About */}
          <section>
            <h3 className="text-lg font-semibold mb-2">About me</h3>
            <div className={`relative ${!isExpanded && "max-h-[72px] overflow-hidden"}`}>
              <p className="text-sm text-gray-600 leading-6">
                Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.
              </p>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
              )}
            </div>
            <Button
              variant="link"
              className="p-0 h-auto font-semibold text-[#0085FF]"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read less" : "Read more"}
            </Button>
          </section>

          {/* Credentials */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Credentials</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Ph.D. in Clinical Psychology - Harvard University",
                "M.A. in Counseling - University of California, Berkeley",
                "Licensed Professional Counselor (LPC) - State of DEF",
                "Certified Cognitive Behavioral Therapist (CBT)",
                "Member, American Psychological Association (APA)",
                "10+ years of experience in individual and group therapy"
              ].map((credential, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#0085FF] shrink-0 mt-0.5" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Available on */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Available on</h3>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 h-20 flex-col border-gray-300">
                <MapPin className="h-6 w-6 mb-2 text-[#0085FF]" />
                <span className="text-sm">In-person</span>
              </Button>
              <Button variant="outline" className="flex-1 h-20 flex-col border-gray-300">
                <Video className="h-6 w-6 mb-2 text-[#0085FF]" />
                <span className="text-sm">Video/ Voice call</span>
              </Button>
            </div>
          </section>

          {/* Therapy Types */}
          <section>
            <h3 className="text-lg font-semibold mb-2">I offer therapy for</h3>
            <div className="flex flex-wrap gap-2">
              {["Stress Management", "Relationship Skills", "Anxiety Reduction", "Depression Relief", "Behavioral", "Trauma Healing"].map((type) => (
                <Badge key={type} variant="outline" className="rounded-full text-[#0085FF] border-[#0085FF] bg-[#0085FF]/10">
                  {type}
                </Badge>
              ))}
            </div>
          </section>

          {/* Location & Languages */}
          <div className="flex gap-6">
            <section className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Iam from</h3>
              <p className="text-sm text-gray-600">Chennai, India</p>
            </section>
            <section className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Languages</h3>
              <p className="text-sm text-gray-600">English, Hindi</p>
            </section>
          </div>

          {/* Testimonials */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Client Testimonials</h3>
              <Button
                variant="link"
                className="p-0 h-auto font-semibold text-[#0085FF]"
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
              >
                Show {showAllTestimonials ? "less" : "more"}
              </Button>
            </div>
            <div className="space-y-4">
              <Card className="p-4 shadow-md rounded-xl">
                <blockquote className="text-sm text-gray-600">
                  "The guidance I received helped me manage my stress and live a more balanced life."
                </blockquote>
                <p className="mt-2 text-sm font-medium">Anonymous</p>
              </Card>
              <Card className="p-4 shadow-md rounded-xl">
                <blockquote className="text-sm text-gray-600">
                  "Therapy helped me build self-esteem and confidence that I never thought possible."
                </blockquote>
                <p className="mt-2 text-sm font-medium">Anonymous</p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
