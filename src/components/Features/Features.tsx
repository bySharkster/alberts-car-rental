"use client";

import Image from "next/image";
import cars, { Car, Feature } from "../../types/cars-features";
import { SetStateAction, useState } from "react";

export default function Features() {
  const [active, setActive] = useState(0);

  const handleClick = (index: SetStateAction<number>) => {
    setActive(index);
  };

  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16 lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]">
        {/* <!-- Grid --> */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2 ">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
              Servicio de Alquiler de Vehiculos desde $35.00+
            </h2>

            {/* <!-- Tab Navs --> */}
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
            >
              {cars.map((car: Car, index: number) => (
                <button
                  key={index}
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${
                    active === index ? "active" : ""
                  }`}
                  id={`tabs-with-card-item-${index + 1}`}
                  data-hs-tab={`#tabs-with-card-${index + 1}`}
                  aria-controls={`tabs-with-card-${index + 1}`}
                  role="tab"
                  onClick={() => handleClick(index)}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex-row flex gap-1 p-1">
                      <div className={`${100 === car.id ? "hidden" : ""}`}>
                        <svg
                          className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 13H8M2 9L4 10L5.27064 6.18807C5.53292 5.40125 5.66405 5.00784 5.90729 4.71698C6.12208 4.46013 6.39792 4.26132 6.70951 4.13878C7.06236 4 7.47705 4 8.30643 4H15.6936C16.523 4 16.9376 4 17.2905 4.13878C17.6021 4.26132 17.8779 4.46013 18.0927 4.71698C18.3359 5.00784 18.4671 5.40125 18.7294 6.18807L20 10L22 9M16 13H19M6.8 10H17.2C18.8802 10 19.7202 10 20.362 10.327C20.9265 10.6146 21.3854 11.0735 21.673 11.638C22 12.2798 22 13.1198 22 14.8V17.5C22 17.9647 22 18.197 21.9616 18.3902C21.8038 19.1836 21.1836 19.8038 20.3902 19.9616C20.197 20 19.9647 20 19.5 20H19C17.8954 20 17 19.1046 17 18C17 17.7239 16.7761 17.5 16.5 17.5H7.5C7.22386 17.5 7 17.7239 7 18C7 19.1046 6.10457 20 5 20H4.5C4.03534 20 3.80302 20 3.60982 19.9616C2.81644 19.8038 2.19624 19.1836 2.03843 18.3902C2 18.197 2 17.9647 2 17.5V14.8C2 13.1198 2 12.2798 2.32698 11.638C2.6146 11.0735 3.07354 10.6146 3.63803 10.327C4.27976 10 5.11984 10 6.8 10Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className={`${100 !== car.id ? "hidden" : ""}`}>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.7518 6.24359C12.983 5.01246 14.782 4.69543 16.3057 5.29249L13.5532 8.04496C13.2216 8.37659 13.2216 8.91425 13.5532 9.24588L14.7541 10.4468C15.0857 10.7784 15.6234 10.7784 15.955 10.4468L18.7075 7.69432C19.3046 9.21796 18.9875 11.017 17.7564 12.2482C16.5253 13.4793 14.7262 13.7963 13.2026 13.1993L7.89927 18.5026C7.23602 19.1658 6.16068 19.1658 5.49744 18.5026C4.83419 17.8393 4.83419 16.764 5.49744 16.1007L10.8007 10.7974C10.2037 9.2738 10.5207 7.47472 11.7518 6.24359Z"
                            stroke="#464455"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="grow ms-6">
                        <h2 className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          {car.name}
                        </h2>
                      </div>
                    </div>
                    <span className=" mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200 sm:pl-12">
                      <ul>
                        {car.features.map((feature: Feature, index: number) => (
                          <li className="text-justify w-full pb-2" key={index}>
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </span>
                    <div
                      key={index}
                      id={`tabs-with-card-${index + 1}`}
                      className={active === index ? "md:hidden" : "hidden"}
                      role="tabpanel"
                      aria-labelledby={`tabs-with-card-item-${index + 1}`}
                    >
                      <figure className="w-full aspect-square">
                        <Image
                          className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2] w-full h-full object-cover"
                          src={car.imgUrl}
                          alt="{car.name}"
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                      </figure>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
            {/* <!-- End Tab Navs --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="hidden md:block lg:col-span-6">
            <div className="relative">
              {/* <!-- Tab Content --> */}
              <div>
                {cars.map((car: Car, index: number) => (
                  <div
                    key={index}
                    id={`tabs-with-card-${index + 1}`}
                    className={active === index ? "" : "hidden"}
                    role="tabpanel"
                    aria-labelledby={`tabs-with-card-item-${index + 1}`}
                  >
                    <figure className="w-full aspect-square">
                      <Image
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2] w-full h-full object-cover"
                        src={car.imgUrl}
                        alt=""
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                ))}
              </div>
              {/* <!-- End Tab Content --> */}
            </div>
            {/* <!-- SVG Element --> */}
            <div className="hidden absolute -top-10 end-10  translate-x-20 md:block lg:translate-x-20">
              <Image src="/images/logo.svg" alt="Logo" width={48} height={48} />
            </div>
            {/* <!-- End SVG Element --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </div>
    // {/* <!-- End Features --> */}
  );
}
