import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { MotionAccordionContent } from "../../ui/motion-accordion-content";
import { Button } from "../../ui/button";


import { AnimatedSection } from "@/components/templates/animations/AnimatedSection";

export default function FaqSection() {
  return (
    <section id="faqs" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1f3045] mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-[#464648] max-w-3xl mx-auto">Find answers to common questions about our services, booking process, and policies.</p>
      </div>
      
      <AnimatedSection className="max-w-3xl mx-auto" direction="up" delay={0.2}  >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-[#1f3045] py-4">What documents do I need to rent a car?</AccordionTrigger>
            <MotionAccordionContent className="text-[#464648] pb-4">
              You&apos;ll need a valid driver&apos;s license, a major credit card in your name, and proof of insurance. International customers may need to provide a passport and international driver&apos;s permit depending on the country of origin.
            </MotionAccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-[#1f3045] py-4">Is there a minimum age requirement to rent a car?</AccordionTrigger>
            <MotionAccordionContent className="text-[#464648] pb-4">
              Yes, the standard minimum age is 25 years for most vehicle categories. Drivers aged 21-24 may rent certain vehicle classes with a young driver surcharge. Luxury and specialty vehicles may have higher age requirements.
            </MotionAccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-[#1f3045] py-4">What is your cancellation policy?</AccordionTrigger>
            <MotionAccordionContent className="text-[#464648] pb-4">
              Reservations can be cancelled free of charge up to 48 hours before the scheduled pickup time. Cancellations made within 48 hours may incur a one-day rental fee. No-shows will be charged the full reservation amount.
            </MotionAccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-[#1f3045] py-4">Do you offer airport pickup and drop-off?</AccordionTrigger>
            <MotionAccordionContent className="text-[#464648] pb-4">
              Yes, we offer convenient airport pickup and drop-off services at major airports. Our shuttle service will take you to our nearby location, or for premium rentals, we can arrange for the vehicle to be waiting for you upon arrival.
            </MotionAccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-[#1f3045] py-4">What insurance options do you provide?</AccordionTrigger>
            <MotionAccordionContent className="text-[#464648] pb-4">
              We offer several insurance options including Collision Damage Waiver (CDW), Supplemental Liability Protection (SLP), Personal Accident Insurance (PAI), and Roadside Assistance Protection (RAP). Our staff can help you choose the right coverage for your needs.
            </MotionAccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-medium text-[#1f3045] py-4">Can I add an additional driver to my rental?</AccordionTrigger>
            <MotionAccordionContent className="text-[#464648] pb-4">
              Yes, additional drivers can be added to your rental agreement. Each additional driver must be present at the time of rental with their valid driver&apos;s license. A daily fee may apply for each additional driver unless they qualify for a waiver.
            </MotionAccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-[#464648] mb-6">Can&apos;t find the answer you&apos;re looking for? Contact our customer support team.</p>
          <Button className="bg-[#024f7d] hover:bg-[#026bad] text-white px-8 py-6 text-lg !rounded-button whitespace-nowrap cursor-pointer" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
    </section>
  );
}
