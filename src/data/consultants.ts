import Swetha from "@/assets/swetha.png";

const consultants = [
  {
    name: "Swetha Verma",
    title: "Consultant Clinical Psychologist",
    experience: "10+ years of experience",
    startsAt: "₹1,200",
    address: "Block A2, Delhi",
    located: "Chennai, India",
    image: Swetha,
    about:
      "Hello, I'm Swetha, a licensed therapist dedicated to guiding individuals through life's challenges with empathy and expertise. With over 10 years of experience, I specialize in helping clients manage anxiety, depression, and relationship issues through personalized, evidence-based practices.",
    credentials: [
      "Ph.D. in Clinical Psychology - Harvard University",
      "M.A. in Counseling - University of California, Berkeley",
      "Licensed Professional Counselor (LPC) - State of GA",
      "Certified Cognitive Behavioral Therapist (CCBT)",
      "Member, American Psychological Association (APA)",
      "10+ years of experience in individual and group therapy",
    ],
    availableOn: ["Video call", "Voice call"],
    therapyOfferings: [
      "Stress Management",
      "Relationship Skills",
      "Anxiety Reduction",
      "Depression Relief",
      "Behavioral",
      "Trauma Healing",
    ],
    languages: ["English", "Hindi"],
    testimonials: [
      {
        from: "anonymous",
        text: "The guidance I received helped me manage my stress and live a more balanced life.",
        stars: 4.5,
      },
      {
        from: "anonymous",
        text: "I'm grateful for the support I received during a difficult time in my life.",
        stars: 4,
      },
    ],
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      linkedin: "https://www.linkedin.com",
      mail: "mailto:xyz@abc.com",
    },
  },
].map((consultant) => ({
  ...consultant,
  slug: consultant.name.toLowerCase().replace(" ", "-"),
  averageRating:
    consultant.testimonials.reduce(
      (sum, testimonial) => sum + testimonial.stars,
      0
    ) / consultant.testimonials.length,
}));

export default [...consultants] as const;
