import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#f5f5f5] py-4 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-[#242131] text-2xl font-medium">
              <div className="w-18 h-18 relative">
                <Image src="/tmes.png" alt="TMES Electrical Logo" width={80} height={80} />
              </div>
              
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-[#242131] hover:text-[#494544]">
              About us
            </Link>
            <Link href="/services" className="text-[#242131] hover:text-[#494544]">
              Services
            </Link>
            <Link href="/projects" className="text-[#242131] hover:text-[#494544]">
              Projects
            </Link>
            <Link href="/contact" className="text-[#242131] hover:text-[#494544]">
              Contact
            </Link>
          </nav>

          <Button className="bg-[#f21d2a] hover:bg-[#f21d2a]/90 text-white rounded-md">07 5545 7777</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#f5f5f5] py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#242131] leading-tight">
                Delivering quality home electrical solutions
              </h1>
              <div className="h-1 w-32 bg-[#f21d2a]"></div>
              <p className="text-[#494544] text-lg">
                Delivering quality home electrical solutions, we specialize in providing reliable and efficient
                electrical services for your home.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#f21d2a] hover:bg-[#f21d2a]/90 text-white rounded-md">Get a quote</Button>
                <Button variant="outline" className="border-[#242131] text-[#242131] hover:bg-[#242131]/10 rounded-md">
                  Our services
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/tmesphoto1.avif"
                  alt="Electrician in orange hard hat"
                  fill
                  className="object-contain"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#494544]/30 rounded-full"></div>
                <div className="absolute top-4 right-4 w-16 h-8">
                  <svg viewBox="0 0 60 30" className="w-full h-full">
                    <path d="M0,15 C20,0 40,30 60,15" stroke="#242131" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-[#f21d2a]">Services</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard
                icon="electrical"
                title="Electrical"
                description="Breakdowns, installations, repairs, switchboard upgrades, safety switches, smoke alarms, power poles, new buildings, design and construction"
              />
              <ServiceCard
                icon="air-conditioning"
                title="Air Conditioning"
                description="Sales, installations, repairs, maintenance, fault diagnosis"
              />
              <ServiceCard
                icon="refrigeration"
                title="Refrigeration"
                description="Breakdowns, maintenance, upgrades, freezers, cold rooms, display cabinets"
              />
              <ServiceCard
                icon="solar"
                title="Solar"
                description="Performance testing, diagnosis, repairs, replacements, upgrades, cleaning"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/tambourinemountain.avif"
                  alt="Electrician on ladder"
                  fill
                  className="object-cover filter grayscale"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#494544]/30 rounded-full"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-[#f21d2a] rounded-full"></div>
            </div>

            <div className="space-y-8">
              <div className="inline-flex items-center gap-2">
                <div className="h-0.5 w-6 bg-[#f21d2a]"></div>
                <span className="text-[#f21d2a] font-medium">Experience</span>
                <div className="h-0.5 w-6 bg-[#f21d2a]"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-medium text-[#242131]">
                Decades of expert electrical solutions
              </h2>

              <p className="text-[#494544] text-lg">
                Providing reliable electrical solutions backed by over 20 years of industry experience. From
                installations to troubleshooting, our seasoned professionals deliver unmatched quality and proficiency,
                ensuring your electrical needs are met with precision and care.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f21d2a] flex items-center justify-center text-white">✓</div>
                  <span className="text-[#494544]">Over 20 years of industry experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f21d2a] flex items-center justify-center text-white">✓</div>
                  <span className="text-[#494544]">Comprehensive electrical solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f21d2a] flex items-center justify-center text-white">✓</div>
                  <span className="text-[#494544]">Unmatched quality and proficiency</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-[#f21d2a] hover:bg-[#f21d2a]/90 text-white rounded-md">About us</Button>
                <Button variant="outline" className="border-[#242131] text-[#242131] hover:bg-[#242131]/10 rounded-md">
                  Meet the team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#f5f5f5]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 max-w-3xl relative">
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="h-0.5 w-6 bg-[#f21d2a]"></div>
                <span className="text-[#f21d2a] font-medium">Testimonials</span>
                <div className="h-0.5 w-6 bg-[#f21d2a]"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#242131]">Hear what our customers have to say</h2>
              <p className="text-[#494544] text-lg">
                Dive into a collection of testimonials that showcase our dedication to exceeding expectations in every
                electrical project.
              </p>
              <div className="absolute top-0 right-0 w-32 h-16">
                <svg viewBox="0 0 120 60" className="w-full h-full">
                  <path d="M0,30 C40,0 80,60 120,30" stroke="#494544" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Outstanding service! TMES Electrical truly exceeded my expectations. From start to finish, their team exhibited professionalism and expertise. I'm thrilled with the quality of their workmanship. Highly recommend!"
                author="Sarah Johnson"
                rating={5}
                image="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <TestimonialCard
                quote="TMES Electrical saved the day! I was facing a tricky electrical issue at home, and their quick response and efficient troubleshooting resolved it in no time. Friendly staff, excellent service. Thank you, TMES Electrical!"
                author="Michael Chang"
                rating={5}
                image="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <TestimonialCard
                quote="Impressive work by TMES Electrical! Their attention to detail and dedication to ensuring our electrical needs were met with precision and care were truly commendable. We couldn't be happier with the results."
                author="Emily Patel"
                rating={5}
                image="https://randomuser.me/api/portraits/women/68.jpg"
              />
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[#242131] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium text-white">Contact us for a free quote</h2>
              <div className="relative w-24 h-16">
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <path d="M0,30 L80,30 L100,10" stroke="#f21d2a" strokeWidth="3" fill="none" />
                  <polygon points="90,10 100,10 100,20" fill="#f21d2a" />
                </svg>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-white text-lg">
                With years of experience serving residential homes in the area, we're committed to delivering reliable
                and expert electrical solutions tailored to your needs. Trust TMES Electrical for all your home electrical needs,
                get a quote today!
              </p>
              <Button className="bg-[#f21d2a] hover:bg-[#f21d2a]/90 text-white rounded-md">Get a quote</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#494544]/20 py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link href="/" className="flex items-center gap-2 text-[#242131] text-2xl font-medium mb-6">
                <div className="w-32 h-32 relative">
                  <Image src="/tmes.png" alt="TMES Electrical Logo" width={90} height={90} />
                </div>
              </Link>
            </div>

            <div>
              <h3 className="font-medium text-[#242131] mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#494544] hover:text-[#242131]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#494544] hover:text-[#242131]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#494544] hover:text-[#242131]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#494544] hover:text-[#242131]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-[#242131] mb-4">Utilities</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-[#494544] hover:text-[#242131]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-[#494544] hover:text-[#242131]">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            
          </div>

          <div className="border-t border-[#494544]/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#494544] text-sm mb-4 md:mb-0">
              © 2024{" "}
              <Link href="/" className="text-[#242131]">
                TMES Electrical
              </Link>
              . All rights reserved.
            </div>


            <div className="flex items-center gap-2 text-[#494544] text-sm mt-4 md:mt-0">
              <span>Designed and developed by</span>
              <Link href="#" className="text-[#242131]">
                Sam Hinz
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <Link href="#" className="text-[#242131] hover:text-[#494544]">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-[#242131] hover:text-[#494544]">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-[#242131] hover:text-[#494544]">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-[#242131] hover:text-[#494544]">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
