import config from "@/config";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-[#1f3045] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6">Albert Car Rental</h3>
            <p className="text-white/80 mb-6">
              Providing premium car rental experiences since 2023. Our
              commitment to quality and service excellence makes every journey
              exceptional.
            </p>
            <div className="flex space-x-4">
              <Link
                href={config.social.facebook}
                className="text-white hover:text-[#26a6fb] transition-colors cursor-pointer h-8 w-8 flex items-center justify-center"
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
                className="text-white hover:text-[#26b578] transition-colors cursor-pointer h-8 w-8 flex items-center justify-center"
              >
                <i className="fab fa-whatsapp text-2xl" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/fleet"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Our Fleet
                </Link>
              </li>
              {/* <li><Link href="/locations" className="text-white/80 hover:text-white transition-colors cursor-pointer">Locations</Link></li> */}
              {/* <li><Link href="/special-offers" className="text-white/80 hover:text-white transition-colors cursor-pointer">Special Offers</Link></li> */}
              <li>
                <Link
                  href="/book"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
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
            <h3 className="text-xl font-bold mb-6">Customer Support</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#faqs"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li><Link href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">Roadside Assistance</Link></li> */}
              <li>
                <Link
                  href="/terms"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cancellation"
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#26a6fb]" />
                <span className="text-white/80">{config.address}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-[#26a6fb]" />
                <span className="text-white/80">{config.ownerPhone}</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-[#26a6fb]" />
                <span className="text-white/80">
                  <Link
                    href={`mailto:${config.resend.supportEmail}`}
                    className="hover:underline transition-colors cursor-pointer"
                  >
                    {config.resend.supportEmail}
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-[#26a6fb]" />
                <span className="text-white/80">
                  Mon-Fri: 8AM-8PM
                  <br />
                  Sat-Sun: 9AM-6PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Albert Car Rental. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <i className="fab fa-cc-visa text-2xl text-white/80" />
              <i className="fab fa-cc-mastercard text-2xl text-white/80" />
              <i className="fab fa-cc-amex text-2xl text-white/80" />
              <i className="fab fa-cc-paypal text-2xl text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
