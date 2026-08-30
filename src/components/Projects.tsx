import { useState } from "react";
import { ExternalLink } from "lucide-react";

type FeatureSection = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  desc: string;
  link: string;
  source: string;
  tags: string[];
  showFeatures: boolean;
  features?: FeatureSection[];
  image?: string
};


export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  // ⭐ NEW: Show All / Show Less
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: "FESTIVIA",
      desc: "Event Management : A platform to book and list events",
      link: "https://festivia-event-management.vercel.app",
      source: "https://github.com/JYOTHISHTM/festivia-frontend",
      image: "https://res.cloudinary.com/drha2z2qr/image/upload/v1776074397/Screenshot_2026-04-13_152846_rasqwv.png",
      tags: ["React", "TypeScript", "Tailwind", "Nodejs", "Express", "MongoDB"],
      showFeatures: true,
      features: [
        {
          title: "Admin Panel",
          items: [
            "Dashboard with analytics",
            "Event & creator management",
            "Subscription plans",
            "Financial tracking",
          ],
        },
        {
          title: "Event Creators",
          items: [
            "Application process",
            "Event creation & management",
            "Earnings dashboard",
            "User communication",
          ],
        },
        {
          title: "Users",
          items: [
            "Authentication options",
            "Event discovery & booking",
            "Personal event creation",
            "Profile management",
          ],
        },
        {
          title: "Secure Payments",
          items: ["Razorpay integration for transactions"],
        },
        {
          title: "Tech Stack",
          items: [
            "Backend: Node.js, Express, TypeScript, MongoDB",
            "Frontend: Vite + React/Vue, TailwindCSS",
          ],
        },
        {
          title: "Additional Services",
          items: ["Cloudinary for media handling", "Nodemailer for notifications"],
        },
      ],
    },
    {
      title: "FoodScanner",
      desc: "Scan barcodes to get personalized food health insights.",
      link: "https://foodscanner.jothish.online/",
      source: "https://github.com/JYOTHISHTM/foodscanner-frontend",
      image:"https://res.cloudinary.com/drha2z2qr/image/upload/v1776074928/Screenshot_2026-04-13_153835_xaopip.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      showFeatures: true,
      features: [
        {
          title: "Admin Panel",
          items: [
            "User management (view, block/unblock users)",
          ],
        },
        {
          title: "User Features",
          items: [
            "Authentication (signup, login, OTP verification)",
            "Scan barcode using camera or enter manually",
            "Personalized results based on profile and allergies",
            "View scan history and manage favorites",
            "User profile management",
          ],
        },
        {
          title: "Core Functionality",
          items: [
            "Fetch product data using barcode",
            "Analyze ingredients and generate safety score",
            "Highlight allergens and health risks",
          ],
        },
        {
          title: "Tech Stack",
          items: [
            "Backend: Node.js, Express, TypeScript, MongoDB",
            "Frontend: Vite + React, Tailwind CSS",
          ],
        },
        {
          title: "Additional Services",
          items: [
            "Cloudinary for image/media handling",
            "Nodemailer for email notifications",
          ],
        },
      ],
    },
    {
      title: "AUTH APP",
      desc: "User authentication system with admin controls",
      link: "https://authapp.jothish.online",
      source: "https://github.com/JYOTHISHTM/AuthApp",
      image:"https://res.cloudinary.com/drha2z2qr/image/upload/v1776076234/Screenshot_2026-04-13_160007_udyvln.png",
      tags: ["Node.js", "Express JS", "JWT", "MongoDB"],
      showFeatures: true,
      features: [
        {
          title: "Admin Panel",
          items: [
            "Admin login (env credentials)",
            "View all users",
            "Block/Unblock users",
            "Force logout blocked users",
          ],
        },
        {
          title: "Users",
          items: [
            "Clean EJS UI",
            "JWT-based auth",
            "Protected routes",
            "Signup/Login",
            "Auto logout when blocked",
          ],
        },
      ],
    },

    {
      title: "QUOTES GENERATOR",
      desc: "Generate instant quotes websites",
      link: "https://quotes.jothish.online/",
      source: "https://github.com/JYOTHISHTM/QuoteApp",
      image:"https://res.cloudinary.com/drha2z2qr/image/upload/v1776076186/Screenshot_2026-04-13_155931_m23jui.png",
      tags: ["React", "Tailwind", "TS", "CSS", "HTML", "JS"],
      showFeatures: true,
      features: [
        {
          title: "Features",
          items: [
            "Retrieves a new quote from an API with a single click.",
            "Includes loading animation (bouncing dots) while fetching.",
            "Neon glow border trails using CSS animations.",
            "Smooth hover effects on buttons and container",
            "Takes a screenshot of the quote box using html2canvas.",
            "Download as image",
            "Displays error messages if API fails."
          ],
        },

      ],
    },
     {
      title: "FOXHUB",
      desc: "ECOMMERCE : place to purchase dress",
      link: "https://your-ecommerce-link.com",
      source: "https://github.com/JYOTHISHTM/FOXHUB",
      tags: ["Node.js", "JS", "REST API", "MongoDB"],
      showFeatures: true,
      features: [
        {
          title: "Admin Panel",
          items: [
            "Dashboard with analytics",
            "Add/Edit/Delete Products",
            "Add and manage Coupons",
            "View and manage Users",
            "Order tracking system",
            "Sales report",
          ],
        },
        {
          title: "Users",
          items: [
            "Signup/Login (Google OAuth supported)",
            "Browse and shop products",
            "Cart and Wishlist functionality",
            "Checkout with Razorpay",
            "Wallet payment",
            "Profile management",
            "Apply and use Coupons",
            "Referrals and rewards",
          ],
        },
      ],
    },
    {
      title: "AADHAR OCR",
      desc: "Extract details from Aadhaar image",
      link: "https://aadharocr.jothish.online/",
      source: "https://github.com/JYOTHISHTM/aadhaar-ocr-frontend",
      tags: ["Node.js", "JS", "REST API", "MongoDB"],
      showFeatures: true,
      features: [
        {
          title: "Features",
          items: [
            "Upload Aadhaar card front and back images",
            "Preview uploaded images",
            "Send images to backend API for OCR processing",
            "Display extracted details",
            "Responsive UI",
          ],
        },
        {
          title: "Tech Stack",
          items: ["React.js (Vite)", "Axios", "Tailwind CSS", "Deployment → Vercel"],
        },
      ],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            What I’ve Built
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Here’s a selection of projects I’ve created, showcasing my skills in
            MERN stack and real-world applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 overflow-hidden"
            >
              {/* ⭐ ADD IMAGE HERE */}
              {p.image && (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* EXISTING CONTENT */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                </div>

                <p className="text-slate-600 mb-4 flex-grow">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto gap-4 flex-wrap">
                  <a
                    href={p.source}
                    target="_blank"
                    className="flex items-center gap-2 text-slate-900 font-semibold hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Source Code
                  </a>

                  {p.showFeatures && (
                    <div className="flex items-center gap-6 flex-wrap">
                      <a
                        href={p.link}
                        target="_blank"
                        className="text-cyan-700 font-semibold hover:underline"
                      >
                        View Project
                      </a>

                      <button
                        onClick={() => setOpenProject(i)}
                        className="text-cyan-700 font-semibold hover:underline"
                      >
                        View Features
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ⭐ Show All / Show Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
          >
            {showAll ? "Show Less" : "Show All Projects"}
          </button>
        </div>

        {/* Modal */}
        {openProject !== null && projects[openProject].showFeatures && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl overflow-y-auto max-h-[90vh]">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                {projects[openProject].title} – Features
              </h3>

              <div className="space-y-4 text-slate-700">
                {projects[openProject].features?.map(
                  (section: FeatureSection, idx: number) => (
                    <div key={idx}>
                      <h4 className="font-semibold mb-1">{section.title}</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {section.items.map((item: string, id: number) => (
                          <li key={id}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>

              <button
                onClick={() => setOpenProject(null)}
                className="mt-6 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
