import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  rating: number
  image?: string
}

export default function TestimonialCard({ quote, author, rating, image = "/placeholder.svg?height=48&width=48" }: TestimonialCardProps) {
  return (
    <div className="border border-[#242131]/10 rounded-lg p-6 space-y-4 bg-white relative shadow-sm hover:shadow-md transition-shadow">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-[#f21d2a] text-[#f21d2a]" : "text-gray-300"}`} />
        ))}
      </div>

      <p className="text-[#494544]">"{quote}"</p>

      <div className="flex items-center gap-3 pt-2">
        <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-[#f21d2a]/20">
          <Image 
            src={image || "https://randomuser.me/api/portraits/women/44.jpg"} 
            alt={author} 
            width={48} 
            height={48} 
            className="object-cover" 
          />
        </div>
        <span className="font-medium text-[#242131]">{author}</span>
      </div>
    </div>
  )
}
