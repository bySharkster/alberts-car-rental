import config from "@/config";
import Link from "next/link";
import Image from "next/image";
export default function FooterSection() {
  return (
    <footer className="bg-[#1f3045] pb-8 pt-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 text-xl font-bold">Albert Car Rental</h3>
            <p className="mb-6 text-white/80">
              Providing premium car rental experiences since 2023. Our
              commitment to quality and service excellence makes every journey
              exceptional.
            </p>
            <div className="flex space-x-4">
              <Link
                href={config.social.facebook}
                className="flex h-8 w-8 cursor-pointer items-center justify-center text-white transition-colors hover:text-[#26a6fb]"
              >
                <i className="fab fa-facebook-f text-xl" />
              </Link>
              {/* <Link href="#" className="text-white hover:text-[#26a6fb] transition-colors cursor-pointer">
              <i className="fab fa-x-twitter text-xl"/>
            </Link> */}
              {/* <Link href="#" className="text-white hover:text-[#26a6fb] transition-colors cursor-pointer">
              <i className="fab fa-instagram text-xl"/>
            </Link> */}
              {/* <Link href="#" className="text-white hover:text-[#26a6fb] transition-colors cursor-pointer">
              <i className="fab fa-linkedin-in text-xl"/>
            </Link> */}
              <Link
                href={config.social.whatsapp}
                className="flex h-8 w-8 cursor-pointer items-center justify-center text-white transition-colors hover:text-[#26b578]"
              >
                <i className="fab fa-whatsapp text-2xl" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/fleet"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  Our Fleet
                </Link>
              </li>
              {/* <li><Link href="/locations" className="text-white/80 hover:text-white transition-colors cursor-pointer">Locations</Link></li> */}
              {/* <li><Link href="/special-offers" className="text-white/80 hover:text-white transition-colors cursor-pointer">Special Offers</Link></li> */}
              <li>
                <Link
                  href="/book"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  Reservations
                </Link>
              </li>
              {/* <li><Link href="/corporate-accounts" className="text-white/80 hover:text-white transition-colors cursor-pointer">Corporate Accounts</Link></li> */}
              {/* <li>
                <Link
                  href="/about-us"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold">Customer Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#faqs"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li><Link href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">Roadside Assistance</Link></li> */}
              <li>
                <Link
                  href="/terms"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="cursor-pointer text-white/80 transition-colors hover:text-white"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden">
            <h3 className="mb-6 text-xl font-bold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 mt-1 text-[#26a6fb]" />
                <span className="text-white/80">{config.address}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mr-3 mt-1 text-[#26a6fb]" />
                <span className="text-white/80">{config.ownerPhone}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mr-3 mt-1 text-[#26a6fb]" />
                <span className="text-white/80">
                  <Link
                    href={`mailto:${config.resend.supportEmail}`}
                    className="cursor-pointer transition-colors hover:underline"
                  >
                    {config.resend.supportEmail}
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mr-3 mt-1 text-[#26a6fb]" />
                <span className="text-white/80">
                  Mon-Fri: 8AM-8PM
                  <br />
                  Sat-Sun: 9AM-6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 border-t border-white/20 pt-8">
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-white/60 md:mb-0">
              © 2025 Albert Car Rental. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <i className="fab fa-cc-visa text-2xl text-white/80" />
              <i className="fab fa-cc-mastercard text-2xl text-white/80" />
              <i className="fab fa-cc-amex text-2xl text-white/80" />
              <i className="fab fa-cc-paypal text-2xl text-white/80" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div>
              <Link href="http://digital-sunsets.com/?utm_source=albertscarrental&utm_medium=website&utm_campaign=lead&utm_content=footer-call-to-action">
                <Image
                  src="/designed_by_dark.svg"
                  alt="Designed by"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
