import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return(  <section className="py-20 bg-white">
<div className="container mx-auto px-6">
  <div className="bg-gradient-to-r from-[#024f7d] to-[#26a6fb] rounded-2xl overflow-hidden">
    <div className="grid md:grid-cols-2 items-center">
      <div className="p-4 sm:p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to elevate your journey?</h2>
        <p className="text-white/90 text-lg mb-8">Experience the difference with Albert Car Rental. Book your premium vehicle today and make every mile memorable.</p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Button className="bg-white text-[#024f7d] hover:bg-gray-100 py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer">
            Book Now
          </Button>
          <Button variant="ghost" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer  hover:shadow-sm shadow-inner">
            View Special Offers
          </Button>
        </div>
      </div>
      <div className="relative h-full min-h-[300px] md:min-h-[400px]">
        <img 
          src="https://readdy.ai/api/search-image?query=Luxury%20car%20keys%20on%20premium%20leather%20surface%20with%20elegant%20car%20rental%20brochure%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20premium%20car%20rental%20concept%2C%20high-end%20service%20imagery%2C%20minimalist%20composition%2C%20luxury%20lifestyle&width=700&height=500&seq=16&orientation=landscape" 
          alt="Premium Car Rental Experience" 
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  </div>
</div>
</section>)
}
