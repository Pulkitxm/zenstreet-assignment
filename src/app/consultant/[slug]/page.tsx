"use client";

import consultants from "@/data/consultants";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function TherapistProfile({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const therapist = consultants.find((consultant) => consultant.slug === slug);

  if (!therapist) {
    return notFound();
  }

  return <DisplayProfile therapist={therapist} />;
}

const DisplayProfile = ({
  therapist,
}: {
  therapist: (typeof consultants)[number];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto ">
      <div className="flex flex-col items-center bg-[#1F9FE6] text-white p-10 rounded-lg md:w-1/3">
        <div className="bg-white text-black p-6 rounded-lg w-full ">
          <div className="relative">
            <div className="flex justify-center">
              <Image
                src={therapist.image.src}
                alt={therapist.name}
                width={128}
                height={128}
                className="w-32 h-32 rounded-lg object-cover"
              />
            </div>
            <button
              className="absolute top-0 right-0 text-[#1F9FE6] bg-white rounded-full p-2 shadow-md"
              aria-label="Share profile"
            >
              <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
                <path
                  fill="currentColor"
                  d="M18 9a3 3 0 10-2.977-2.63l-6.94 3.47a3 3 0 100 4.319l6.94 3.47a3 3 0 10.895-1.789l-6.94-3.47a3.03 3.03 0 000-.74l6.94-3.47C16.456 8.68 17.19 9 18 9z"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center mt-4 gap-2">
            <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
              <path
                fill="currentColor"
                d="M18 9a3 3 0 10-2.977-2.63l-6.94 3.47a3 3 0 100 4.319l6.94 3.47a3 3 0 10.895-1.789l-6.94-3.47a3.03 3.03 0 000-.74l6.94-3.47C16.456 8.68 17.19 9 18 9z"
              />
            </svg>
            <h2 className="text-lg font-semibold">{therapist.name}</h2>
          </div>
          <p className="mt-2 text-sm text-center">{therapist.title}</p>
          <p className="mt-4 text-sm">{therapist.experience}</p>
          <p className="text-sm mt-2">
            Starts at <strong>{therapist.startsAt}</strong>/Session
          </p>
          <p className="mt-2 flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            {therapist.located}
          </p>
        </div>{" "}
        <button className="mt-6 py-2 px-6 w-full bg-white text-[#1F9FE6] font-medium rounded-full shadow-md">
          Book session
        </button>
      </div>

      <div className="w-full md:w-2/3">
        <div>
          <h3 className="text-xl font-semibold mb-2">About me</h3>
          <p className="text-[#4A4A4A]">{therapist.about}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Credentials</h3>
          <ul className="space-y-4">
            {therapist.credentials.map((credential, index) => (
              <li key={index} className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#1F9FE6]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{credential}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Available on</h3>
          <div className="flex flex-wrap gap-4">
            {therapist.availableOn.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 h-12 border-2 border-dashed border-[#1F9FE6] rounded-lg text-[#1F9FE6]"
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">I offer therapy for</h3>
          <div className="flex flex-wrap gap-4">
            {therapist.therapyOfferings.map((offering, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#F0F8FF] text-[#1F9FE6] rounded-lg"
              >
                {offering}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-2">I offer therapy for</p>
          {therapist.therapyOfferings.map((offering, index) => (
            <div
              key={index}
              className="py-2 px-4 text-sm m-2 inline-flex justify-center items-center  border-2 border-[#1F9FE6] rounded-full"
            >
              {offering}
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1">
            <div className="flex gap-1 items-center justify-center text-lg font-semibold">
              I am from
              <svg
                viewBox="0 0 576 512"
                fill="currentColor"
                height="1em"
                width="1em"
                className="ml-2"
              >
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
              </svg>
            </div>
            <p className="text-center mt-2">{therapist.located}</p>
          </div>
          <div className="flex-1">
            <div className="flex gap-1 items-center justify-center text-lg font-semibold">
              Languages
              <svg
                viewBox="0 0 576 512"
                fill="currentColor"
                height="1em"
                width="1em"
                className="ml-2"
              >
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120 168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6.5-1.2 1-2.5 1.5-3.7l116-46.4c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zm-278.4-62.1c2.4 14.1 7.2 28.3 12.8 41.5 2.9 6.8 6.1 13.7 9.6 20.6v251.4L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77v249.3l-192-54.9V255c20.5 31.3 42.3 59.6 56.2 77 20.5 25.6 59.1 25.6 79.6 0zM288 152c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z" />
              </svg>
            </div>
            <p className="text-center mt-2">{therapist.languages.join(", ")}</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Testimonials</h3>
          <ul className="space-y-4">
            {therapist.testimonials.map((testimonial, index) => (
              <li key={index} className="p-4 bg-[#F0F8FF] rounded-lg shadow-md">
                <p className="text-sm text-[#4A4A4A]">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="mt-2 text-right text-sm font-semibold">
                  - {testimonial.from}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
