import ContactDetails from "@/components/organisms/contact/ContactDetails";
import ContactFormV2 from "@/components/organisms/contact/ContactFormV2";
import getVehiclesAction from "@/app/actions/vehicle/getVehiclesAction";
import * as motion from "motion/react-client";

import SplitText from "@/components/ui/split-text";

export default async function ContactPage() {
  const vehicles = await getVehiclesAction();
  return (
    <>
      <motion.div
        className="w-full mx-auto py-16 px-4 sm:px-6 lg:py-20 relative min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "anticipate" }}
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1A57B2_0%,#2C75A0_40%,#3A8F92_70%,#1DAF5A_100%)]" />

        <div className="max-w-2xl lg:max-w-5xl mt-20 mx-auto">
          <motion.div
            className="text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <SplitText
              text="Contact Us"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#16202A] dark:text-white mb-4 mx-auto drop-shadow-lg"
            />
            <motion.div
              className="flex justify-center mb-6 h-1.5 mx-auto"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "12em" }}
              transition={{ duration: 0.3, delay: 1.4, ease: "easeOut" }}
            >
              <div className="w-[calc(28rem)] h-1.5 rounded-full bg-gradient-to-r from-[#1A57B2] via-[#00FFB4] to-[#1DAF5A] opacity-80" />
            </motion.div>
            <motion.p
              className="text-lg sm:text-xl text-[#1A1A1A] dark:text-gray-200 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              style={{
                color: "#16202A",
                background: "rgba(255,255,255,0.75)",
                borderRadius: "0.6rem",
                padding: "0.75rem 1.25rem",
                border: "1.5px solid #E5E7EB",
                boxShadow: "0 2px 12px 0 rgba(26,87,178,0.06)",
                marginBottom: "0.5rem",
              }}
            >
              We would love to talk to you and see how we can help.
            </motion.p>
          </motion.div>
          <div className="w-full flex justify-center my-8">
            <div className="h-px w-3/4 bg-[#1A57B2]/30 dark:bg-white/20 rounded-full" />
          </div>

          <motion.div
            className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <ContactFormV2 vehicles={vehicles} />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <ContactDetails />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
