"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Image } from "@/components/ui/image"
import { config } from "@/lib/config"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* About Hero Section */}
        <section className="bg-[#f5f5f5] py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
                <span className="text-[#d4af37] font-medium">About Us</span>
                <div className="h-0.5 w-6 bg-[#d4af37]"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-medium text-[#242131] leading-tight mb-4">
                Your Trusted Electrical Partner
              </h1>
              <p className="text-[#494544] text-lg max-w-3xl mx-auto">
                With over two decades of experience serving homes and businesses across South East Queensland, we've built
                a reputation for excellence, reliability, and customer satisfaction.
              </p>
            </motion.div>
            
            <div className="relative h-[400px] overflow-hidden rounded-lg mb-16">
              <Image
                src={`${config.basePath}/tmesphoto1.avif`}
                alt="Electrician team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#242131]/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
                  <p className="text-xl max-w-xl">Delivering quality electrical solutions since 2000</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-medium text-[#242131] mb-6">
                  Our Mission
                </h2>
                <p className="text-[#494544] mb-4">
                  At {config.companyName}, our mission is to provide reliable, high-quality electrical services to residential and commercial clients 
                  throughout Gold Coast and Brisbane. We are committed to safety, efficiency, and customer satisfaction in every project we undertake.
                </p>
                <p className="text-[#494544] mb-6">
                  We strive to be the region's most trusted electrical contractor by consistently delivering exceptional workmanship, transparent communication, 
                  and personalized solutions tailored to each client's specific needs.
                </p>
                <Button className="bg-[#d4af37] hover:bg-[#d4af37]/90 text-[#242131] rounded-md font-medium">
                  Our Services
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-medium text-[#242131] mb-6">
                  Why Choose Us
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white mt-1">✓</div>
                    <div>
                      <h3 className="font-medium text-[#242131]">Licensed & Experienced Professionals</h3>
                      <p className="text-[#494544]">Our team consists of fully licensed, trained, and experienced electricians.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white mt-1">✓</div>
                    <div>
                      <h3 className="font-medium text-[#242131]">Quality Workmanship Guarantee</h3>
                      <p className="text-[#494544]">We stand behind our work with a satisfaction guarantee on all services.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white mt-1">✓</div>
                    <div>
                      <h3 className="font-medium text-[#242131]">Transparent Pricing</h3>
                      <p className="text-[#494544]">No hidden fees or surprises - just clear, upfront pricing on all projects.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center text-white mt-1">✓</div>
                    <div>
                      <h3 className="font-medium text-[#242131]">24/7 Emergency Service</h3>
                      <p className="text-[#494544]">Electrical emergencies don't wait, and neither do we.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
} 