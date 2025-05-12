import { Plug, Wind, Droplet, Sun, Fan } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: "electrical" | "air-conditioning" | "refrigeration" | "solar"
  title: string
  description: string
  subtitle?: string
  licenseNumber?: string
}

export default function ServiceCard({ icon, title, description, subtitle, licenseNumber }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "electrical":
        return <Plug className="w-16 h-16 text-black mx-auto transition-all duration-300 group-hover:text-[#f21d2a] group-hover:rotate-90" />
      case "air-conditioning":
        return <Fan className="w-16 h-16 text-black mx-auto transition-all duration-300 group-hover:text-[#f21d2a] group-hover:rotate-90" />
      case "refrigeration":
        return <Droplet className="w-16 h-16 text-black mx-auto transition-all duration-300 group-hover:text-[#f21d2a] group-hover:rotate-90" />
      case "solar":
        return <Sun className="w-16 h-16 text-black mx-auto transition-all duration-300 group-hover:text-[#f21d2a] group-hover:rotate-90" />
      default:
        return null
    }
  }

  return (
    <div className="text-center group">
      <div className="mb-6">{getIcon()}</div>
      <h3 className="text-xl font-bold text-[#494544]">{title}</h3>
      {subtitle && <p className="text-[#494544]">{subtitle}</p>}
      {licenseNumber && <p className="text-[#494544] mb-4">{licenseNumber}</p>}
      <p className="text-[#494544] mt-4">{description}</p>
    </div>
  )
}
