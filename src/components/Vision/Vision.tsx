export default function Vision() {
  return (
    // <!-- Icon Blocks -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl text-gray-950 font-bold lg:text-4xl dark:text-white">
              Nuestra Visión
            </h2>
            <p className="mt-3 text-gray-950 dark:text-white">
              Nuestra visión es ser reconocidos como el principal servicio de
              alquiler de vehículos de Puerto Rico, celebrado por nuestra fácil
              accesibilidad, atención excepcional al cliente y dedicación
              inquebrantable a su seguridad y satisfacción.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            {/* <!-- Icon Block --> */}
            <div className="flex">
              <svg
                className="flex-shrink-0 mt-2 size-6 text-gray-950 dark:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 21H9M15 21H18M17.5 6.5V14.5M3 6.2L3 14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18L17.8 18C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.7157 20.2843 3.40974 19.908 3.21799C19.4802 3 18.9201 3 17.8 3L6.2 3C5.0799 3 4.51984 3 4.09202 3.21799C3.7157 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2ZM11.5 10.5C11.5 11.8807 10.3807 13 9 13C7.61929 13 6.5 11.8807 6.5 10.5C6.5 9.11929 7.61929 8 9 8C10.3807 8 11.5 9.11929 11.5 10.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-950 dark:text-gray-200">
                  Seguridad y Facilidad
                </h3>
                <p className="mt-1 text-gray-800 dark:text-white">
                  Aspiramos a ser su socio de viajes de confianza, permitiéndole
                  explorar la belleza de Puerto Rico con facilidad, seguridad y
                  una sensación de libertad inigualable.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex">
              <svg
                className="flex-shrink-0 mt-2 size-6 text-gray-950 dark:text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68675 15.6451L4.59494 14.5435C4.6983 14.4839 4.8196 14.4631 4.9369 14.4851L8.6914 15.1878C8.99995 15.2455 9.28478 15.008 9.28338 14.6941L9.26876 11.4045C9.26836 11.3151 9.29193 11.2272 9.33701 11.15L11.2317 7.90621C11.3303 7.73739 11.3215 7.52658 11.2091 7.3666L8.01892 2.82568M19.0002 4.85905C13.5002 7.50004 16.5 11 17.5002 11.5C19.3773 12.4384 21.9876 12.5 21.9876 12.5C21.9958 12.3344 22 12.1677 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.1677 22 12.3344 21.9959 12.5 21.9877M16.7578 21.9398L13.591 13.591L21.9398 16.7578L18.2376 18.2376L16.7578 21.9398Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-950 dark:text-gray-200">
                  Viajes Unicos
                </h3>
                <p className="mt-1 text-gray-800 dark:text-white">
                  A través de la innovación continua y la dedicación a la
                  excelencia, nuestro objetivo es transformar sus experiencias
                  en viajes memorables.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
        {/* <!-- End Grid --> */}
      </div>
    </div>
    // <!-- End Icon Blocks -->
  );
}
