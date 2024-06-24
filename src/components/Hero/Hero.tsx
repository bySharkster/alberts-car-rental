import VideoBackground from "@/components/VideoHeroBackground";

export default function Hero() {
  return (
    // <!-- Hero -->
    <div className="pt-20 min-h-[80vh]">
      <VideoBackground />
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-28 space-y-8">
        {/* <!-- Announcement Banner --> */}
        {/* <div className="flex justify-center">
            <a
              className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 ps-4 rounded-full shadow-md"
              href="../figma.html"
            >
              <p className="me-2 inline-block text-white text-sm">
                Albert Car Rental UI Figma is live.
              </p>
              <span className="group-hover:bg-white/[.1] py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <svg
                  className="flex-shrink-0 size-4"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </a>
          </div> */}
        {/* <!-- End Announcement Banner --> */}

        {/* <!-- Title --> */}
        <div className="max-w-3xl text-center mx-auto">
          <h1 className=" font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Ahora es mas fácil que nunca alquilar un vehículo
          </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className="max-w-3xl text-center mx-auto">
          <p
            className="text-lg text-gray-200
            dark:text-gray-400"
          >
            Albert Car Rental es una empresa netamente puertorriqueña, dedicada
            al alquiler de autos.
          </p>
        </div>

        {/* <!-- Buttons --> */}
        <div className="text-center">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-600 to-blue-600 shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
            href="https://wa.link/k91t18"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 23.9999L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.33499 5.43799 0 11.993 0C15.174 0.000999998 18.16 1.24 20.406 3.48799C22.6509 5.73599 23.8869 8.72398 23.8859 11.902C23.8829 18.459 18.548 23.7939 11.993 23.7939C10.003 23.7929 8.04198 23.2939 6.30499 22.346L0 23.9999ZM6.59698 20.193C8.27298 21.188 9.87298 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.43799 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.44199 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.96998 9.86198 9.84598 9.96198 9.64698C10.061 9.44898 10.012 9.27498 9.93698 9.12598C9.86198 8.97798 9.26798 7.51498 9.02098 6.91998C8.77898 6.34099 8.53398 6.41899 8.35198 6.40999L7.78198 6.39999C7.58398 6.39999 7.26198 6.47399 6.98998 6.77198C6.71798 7.06998 5.94999 7.78798 5.94999 9.25098C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z"
                fill="currentColor"
              />
            </svg>
            Comunicate
            <svg
              className="flex-shrink-0 size-4"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
        {/* <!-- End Buttons --> */}
      </div>
    </div>
    // <!-- End Hero -->
  );
}
