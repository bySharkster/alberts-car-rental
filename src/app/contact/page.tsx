import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export default function Page() {
  //   <!-- Contact Us -->
  return (
    <div className="max-w-[85rem] px-4  pt-28 pb-10 lg:pt-32 sm:px-6 lg:px-8 lg:pb-14 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mt-20 mx-auto">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contáctenos
          </h1>
          <p className="mt-1 text-gray-800 dark:text-gray-400">
            Nos encantaria hablar con usted y saber en que podemos ayudarle.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 ">
          {/* <!-- Card --> */}
          <ContactForm />
          {/* <!-- End Card --> */}
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}
