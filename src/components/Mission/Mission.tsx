export default function Mision() {
  return (
    // <!-- Icon Blocks -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Nuestra Misión
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              En Albert Car Rental, potenciamos su viaje con soluciones de
              alquiler de vehículos asequibles y confiables. Experimente la
              libertad y la comodidad de explorar Puerto Rico a su propio ritmo,
              ya sea residente local o turista visitante.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-10">
            {/* <!-- Icon Block --> */}
            <div className="flex">
              <svg
                className="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Calidad y libertad
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  En Albert Car Rental, no nos dedicamos sólo al alquiler de
                  coches, nuestro objetivo es proporcionar una puerta de entrada
                  a la libertad y la exploración.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex">
              <svg
                className="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Una Verdadera Aventura
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Con un compromiso con la accesibilidad, la confiabilidad y un
                  servicio al cliente incomparable, nos aseguramos de que cada
                  viaje que emprenda con nuestros vehículos no sea solo un
                  viaje, sino una verdadera aventura con comodidad y estilo.
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
