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
};


export default function Projects() {
  const [openProject, setOpenProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "FESTIVIA",
      desc: "Event Management : A platform to book and list events",
      link: "https://festivia.jothish.online/",
      source: "https://github.com/JYOTHISHTM/festivia-frontend",
      tags: ["React", "TypeScript", "Tailwind", "Nodejs", "Express"],
      showFeatures: true,
      features: [
        {
          title: "Admin Panel",
          items: [
            "Dashboard with analytics",
            "Event & creator management",
            "Subscription plans",
            "Financial tracking"
          ]
        },
        {
          title: "Event Creators",
          items: [
            "Application process",
            "Event creation & management",
            "Earnings dashboard",
            "User communication"
          ]
        },
        {
          title: "Users",
          items: [
            "Authentication options",
            "Event discovery & booking",
            "Personal event creation",
            "Profile management"
          ]
        },
        {
          title: "Secure Payments",
          items: ["Razorpay integration for transactions"]
        },
        {
          title: "Tech Stack",
          items: ["Backend: Node.js, Express, TypeScript, MongoDB", "Frontend: Vite + React/Vue, TailwindCSS"]
        },
        {
          title: "Additional Services",
          items: ["Cloudinary for media handling", "Nodemailer for notifications"]
        }
      ]
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
            "sales report"
          ]
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
            "Referals and rewards"
          ]
        }
      ]
    },
    {
      title: "AADHAR OCR",
      desc: "extract details from aadhar image",
      link: "https://aadharocr.jothish.online/",
      source: "https://github.com/JYOTHISHTM/aadhaar-ocr-frontend",
      tags: ["Node.js", "JS", "REST API", "MongoDB"],
      showFeatures: true,
      features: [
        {
          title: "Features",
          items: [
            "Upload Aadhaar card front and back images",
            "Preview uploaded images on the same page",
            "Send images to backend API for OCR processing",
            "Display extracted Aadhaar details in a clean, organized format",
            "Responsive and user-friendly interface"
          ]
        },
        {
          title: "Tech Stack",
          items: [
            "React.js (Vite)",
            "Axios (API calls)",
            "Tailwind CSS (UI styling)",
            "Deployment → Vercel",

          ]
        }
      ]
    },
  ];


  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            What I’ve Built
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Here’s a selection of projects I’ve created, showcasing my skills in MernStack, and building real-world applications.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300"
            >
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>

                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 flex-grow">{p.desc}</p>

                {/* Tags */}
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

                {/* Buttons row */}
                <div className="flex justify-between items-center mt-auto gap-4 flex-wrap">
                  {/* Left: Source Code */}
                  <a
                    href={p.source}
                    target="_blank"
                    className="flex items-center gap-2 text-slate-900 font-semibold hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Source Code
                  </a>

                  {/* Right: View Project & View Features */}
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

        {/* Modal */}
        {openProject !== null && projects[openProject].showFeatures && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl w-full max-w-lg p-6 shadow-xl overflow-y-auto max-h-[90vh]">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">
                {projects[openProject].title} – Features
              </h3>

              <div className="space-y-4 text-slate-700">
                {projects[openProject].features?.map((section: FeatureSection, idx: number) => (
                  <div key={idx}>
                    <h4 className="font-semibold mb-1">{section.title}</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {section.items.map((item: string, id: number) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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
