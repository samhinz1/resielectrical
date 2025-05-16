"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Image } from "@/components/ui/image"
import { config } from "@/lib/config"

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-[#f5f5f5] py-12 px-4 md:px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-64 h-32 relative">
              <Image src={`${config.basePath}/VPOWER.svg`} alt="VPower Electrical Services Logo" width={800} height={800} className="w-48 h-40" />
            </div>
          </div>
        </div>

        <div className="md:col-span-3 md:text-right">
          <h3 className="font-medium text-[#242131] mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <Link href={`${config.basePath}/`} className="text-[#494544] hover:text-[#d4af37]">
                Home
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/about`} className="text-[#494544] hover:text-[#d4af37]">
                About
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/services`} className="text-[#494544] hover:text-[#d4af37]">
                Services
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/contact`} className="text-[#494544] hover:text-[#d4af37]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 md:text-right">
          <h3 className="font-medium text-[#242131] mb-4">Utilities</h3>
          <ul className="space-y-2">
            <li>
              <Link href={`${config.basePath}/privacy-policy`} className="text-[#494544] hover:text-[#d4af37]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={`${config.basePath}/feedback`} className="text-[#494544] hover:text-[#d4af37]">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#494544]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-[#494544] text-sm w-full md:w-auto text-center md:text-left">
          © 2024{" "}
          <Link href={`${config.basePath}/`} className="text-[#242131]">
            {config.companyName}
          </Link>
          . All rights reserved.
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 md:mt-0 w-full md:w-auto">
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.facebook} className="text-[#242131] hover:text-[#d4af37]">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.instagram} className="text-[#242131] hover:text-[#d4af37]">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.twitter} className="text-[#242131] hover:text-[#d4af37]">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
            <Link href={config.socialLinks.linkedin} className="text-[#242131] hover:text-[#d4af37]">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
} 