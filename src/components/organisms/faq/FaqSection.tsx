import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger } from "../../ui/accordion";
import { MotionAccordionContent } from "../../ui/motion-accordion-content";
import { Button } from "../../ui/button";
import * as motion from "motion/react-client";
import { AnimatedSection } from "@/components/templates/animations/AnimatedSection";
import BasicAccordion from "@/components/ui/basic-accordion";

const faqs = [
  {
    question: "Where do I pick up the vehicle?",
    answer:
      "The vehicle is picked up and dropped off in Ponce, PR. The exact location will be sent to you on the day you make your reservation.",
  },
  {
    question: "What is the starting price for vehicle rentals?",
    answer: "Rentals start at $35.00 (price varies by season).",
  },
  {
    question: "Where is your office located?",
    answer:
      "Currently, we do not have a physical office. Pickup and drop-off are done at the provided location.",
  },
  {
    question: "Can I cancel my rental?",
    answer:
      "Yes, you can cancel your rental, taking into account the cancellation and refund policies provided in the contract on the day of your reservation.",
  },
  {
    question: "Can I reschedule my rental?",
    answer:
      "Yes, you can reschedule your rental as long as there is availability on the new date.",
  },
  {
    question: "Do I need a driver's license to make a reservation?",
    answer:
      "Yes, you need a valid (not learner's) driver's license to make a reservation and drive the vehicle.",
  },
  {
    question: "Can anyone drive the vehicle?",
    answer:
      "No, only the person who makes the reservation is authorized to drive the vehicle, as they are responsible for it.",
  },
];

export default function FaqSection() {
  return (
    <motion.section
      id="faqs"
      className="inner-shadow inner-shadow-[#1f3045] inner-shadow-[inset_0px_0px_10px_0px] rounded-e-3xl rounded-s-3xl bg-[#eff2f4] py-20 drop-shadow-[#1f3045]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.1 }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.7 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#1f3045]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#464648]">
            Find answers to common questions about our services, booking
            process, and policies.
          </p>
        </motion.div>

        <AnimatedSection
          className="mx-auto max-w-3xl"
          direction="up"
          delay={0.2}
        >
          {/* Dynamic FAQ Accordion using BasicAccordion */}
          <BasicAccordion
            items={faqs.map((faq, idx) => ({
              id: idx + 1,
              title: faq.question,
              content: (
                <span className="block pb-4 text-[#464648]">{faq.answer}</span>
              ),
            }))}
            allowMultiple={false}
            className="w-full"
          />

          <div className="mt-12 text-center">
            <p className="mb-6 text-[#464648]">
              Can&apos;t find the answer you&apos;re looking for? Contact our
              customer support team.
            </p>
            <Button
              className="!rounded-button cursor-pointer whitespace-nowrap bg-[#024f7d] px-8 py-6 text-lg text-white hover:bg-[#026bad]"
              asChild
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </motion.section>
  );
}
