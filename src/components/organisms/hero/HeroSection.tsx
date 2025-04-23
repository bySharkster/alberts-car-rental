import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-20 min-h-[700px] flex items-center">
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img 
        src="https://readdy.ai/api/search-image?query=Luxury%20car%20on%20a%20coastal%20road%2C%20sleek%20modern%20premium%20vehicle%20driving%20along%20scenic%20route%2C%20dramatic%20lighting%2C%20professional%20automotive%20photography%2C%20high-end%20car%20rental%20advertisement%2C%20cinematic%20wide%20shot%2C%20beautiful%20landscape%20background%2C%20golden%20hour%20lighting%2C%20clean%20minimal%20aesthetic&width=1440&height=800&seq=1&orientation=landscape" 
        alt="Premium car rental experience" 
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1f3045]/90 to-transparent"/>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-2xl text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">Keep your journey extraordinary</h1>
        <p className="text-xl mb-8 text-white/90">A premium car rental experience based on Puerto Rico. Albert Car Rental provides exceptional vehicles with a common goal — making every journey memorable.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#26a6fb] hover:bg-[#024f7d] text-white py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer" asChild>
            <Link href="/book">
              Book Your Ride
            </Link>
          </Button>
          <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-[#1f3045] py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer hover:shadow-sm shadow-inner hover:scale-95" asChild>
            <Link href="#fleet">
              Explore Our Fleet
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
)
}
