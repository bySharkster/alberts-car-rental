import React from 'react'
import { AnimatedSection, AnimatedCard } from "@/components/templates/animations/AnimatedSection";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 relative -mt-32 z-30 overflow-visible">
    
      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1f3045] mb-4">Premium Features</h2>
          <p className="text-xl text-[#464648] max-w-3xl mx-auto">Experience the difference with our premium services designed for your comfort and convenience.</p>
        </div>
        <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" direction="up" delay={0.2}>
          {/* Feature 1 */}
          <AnimatedCard delay={0.1}>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#024f7d]/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-car-side text-2xl text-[#024f7d]"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1f3045]">Premium Fleet</h3>
              <p className="text-[#464648]">Choose from our extensive collection of economy, and specialty vehicles to match your needs.</p>
            </div>
          </AnimatedCard>
          {/* Feature 2 */}
          <AnimatedCard delay={0.2}>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#26a6fb]/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-map-marker-alt text-2xl text-[#26a6fb]"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1f3045]">Flexible Pickup</h3>
              <p className="text-[#464648]">Convenient pickup and drop-off locations across the city, including airport service available 24/7.</p>
            </div>
          </AnimatedCard>
          {/* Feature 3 */}
          <AnimatedCard delay={0.3}>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#26b578]/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-2xl text-[#26b578]"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1f3045]">Full Insurance</h3>
              <p className="text-[#464648]">Comprehensive insurance packages for worry-free travel, with options to suit your coverage preferences.</p>
            </div>
          </AnimatedCard>
          {/* Feature 4 */}
          <AnimatedCard delay={0.4}>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#024f7d]/10 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-headset text-2xl text-[#024f7d]"/>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1f3045]">24/7 Support</h3>
              <p className="text-[#464648]">Our dedicated customer service team is available around the clock to assist with any inquiries or issues.</p>
            </div>
          </AnimatedCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
    
