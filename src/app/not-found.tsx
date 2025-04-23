export default function NotFound() {
  return (
    <div className="max-w-[50rem] flex flex-col mx-auto size-full min-h-screen justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">
          404
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Oops, something went wrong.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Sorry, we couldn&apos;t find your page.
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
      
          <a
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/"
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Regresar a pagina principal</title>
              <path d="m15 18-6-6 6-6" />
            </svg>
            Regresar a pagina principal
          </a>
        </div>
      </div>
    </div>
  );
}
