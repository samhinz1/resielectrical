"use client"

import { Plug, Wind, Droplet, Sun, Fan, Lightbulb, Power, Tv, Battery, HardDrive, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  icon: "electrical" | "air-conditioning" | "refrigeration" | "solar" | "lighting" | "powerpoints" | "appliances" | "home-battery" | "off-grid" | "fault-diagnosis"
  title: string
  description: string
  subtitle?: string
  licenseNumber?: string
}

export default function ServiceCard({ icon, title, description, subtitle, licenseNumber }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "electrical":
        return <Plug className="w-12 h-12 text-black" />
      case "air-conditioning":
        return <Fan className="w-12 h-12 text-black" />
      case "refrigeration":
        return <Droplet className="w-12 h-12 text-black" />
      case "solar":
        return <Sun className="w-12 h-12 text-black" />
      case "lighting":
        return <Lightbulb className="w-12 h-12 text-black" />
      case "powerpoints":
        return <Power className="w-12 h-12 text-black" />
      case "appliances":
        return <Tv className="w-12 h-12 text-black" />
      case "home-battery":
        return <Battery className="w-12 h-12 text-black" />
      case "off-grid":
        return <HardDrive className="w-12 h-12 text-black" />
      case "fault-diagnosis":
        return <Search className="w-12 h-12 text-black" />
      default:
        return null
    }
  }

  return (
    <motion.button 
      className="text-left bg-[#f5f5f5] p-8 rounded-3xl shadow-md hover:shadow-lg w-full h-[320px] flex flex-col cursor-pointer group outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-6 h-12 relative">
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          {getIcon()}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <ArrowRight className="w-12 h-12 text-black" />
        </motion.div>
      </div>
      <motion.h3 
        className="text-2xl font-medium text-black mb-4 group-hover:underline decoration-[#d4af37] decoration-2 underline-offset-4"
      >
        {title}
      </motion.h3>
      {subtitle && <p className="text-black/80">{subtitle}</p>}
      {licenseNumber && <p className="text-black/80 mb-4">{licenseNumber}</p>}
      <div className="flex-grow overflow-y-auto">
        <p className="text-black/80">{description}</p>
      </div>
    </motion.button>
  )
}
