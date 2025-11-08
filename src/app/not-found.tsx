import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex size-full min-h-screen max-w-[50rem] flex-col justify-center">
      <div className="px-4 text-center sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
          404
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Oops, something went wrong.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Sorry, we couldn&apos;t find your page.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <Link
            className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent px-4 py-3 text-sm font-semibold text-green-600 hover:text-green-800 disabled:pointer-events-none disabled:opacity-50 dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 sm:w-auto"
            href="/"
          >
            <svg
              className="size-4 flex-shrink-0"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
