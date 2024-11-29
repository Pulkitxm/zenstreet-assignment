import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import consultants from "@/data/consultants";

export default function ConsultantsList() {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {consultants.map((consultant) => (
            <Link key={consultant.slug} href={`/consultant/${consultant.slug}`}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={consultant.image}
                      alt={consultant.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-semibold">
                          {consultant.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {consultant.title}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        Starts at {consultant.startsAt}
                      </Badge>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Specializations
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {consultant.therapyOfferings
                          .slice(0, 3)
                          .map((offering) => (
                            <Badge
                              key={offering}
                              variant="outline"
                              className="text-xs"
                            >
                              {offering}
                            </Badge>
                          ))}
                        {consultant.therapyOfferings.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{consultant.therapyOfferings.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-5 w-5 ${
                            index < Math.round(consultant.averageRating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        {consultant.testimonials.length} reviews
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
