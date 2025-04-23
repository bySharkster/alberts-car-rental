import { AnimatedSection } from "@/components/templates/animations/AnimatedSection";

export default function VisionSection() {
  return (
    <AnimatedSection direction="right" delay={0.2} className="relative overflow-hidden rounded-xl min-h-96">
              <img 
                src="https://readdy.ai/api/search-image?query=Futuristic%20car%20rental%20showroom%20with%20electric%20vehicles%20on%20display%2C%20modern%20architectural%20interior%20with%20ambient%20lighting%2C%20high-tech%20digital%20displays%20showing%20vehicle%20information%2C%20sustainable%20design%20elements%2C%20vision%20of%20future%20automotive%20rental%20experience%2C%20premium%20atmosphere&width=700&height=500&seq=15&orientation=landscape" 
                alt="Our Vision" 
                className="w-full h-full object-cover object-top rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3045]/90 via-[#1f3045]/50 to-transparent"/>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-white/90">To lead the transformation of the car rental industry by embracing sustainable practices, cutting-edge technology, and customer-centric services that redefine mobility for future generations.</p>
              </div>
      </AnimatedSection>
  );
}
