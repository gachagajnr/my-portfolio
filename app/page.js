import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="py-4 my-4 h-auto w-auto">
        <Image
          src="/profile.jpg"
          alt="Gachaga Pius"
          className="rounded-full"
          width={200}
          height={35}
          priority
        />
      </div>
      <h1 className="text-3xl text-center font-extralight my-8 px-2">
        Muthomi Gachaga
      </h1>

      <h2 className="font-bold text-4xl text-center">
        Hybrid Mobile App & Full Stack Web Developer
      </h2>

      <p className="text-md text-center p-12 font-bold  font-mono">
        I am a results-driven Hybrid Mobile App & Full Stack Web Developer with
        a passion for creating dynamic and user-centric digital solutions.
        Specializing in cross-platform mobile app development and full-stack web
        technologies, I bring a versatile skill set that merges creativity with
        technical expertise. With a keen eye for detail and a commitment to
        staying at the forefront of industry trends, I thrive in transforming
        concepts into high-performing applications. Collaborative by nature, I
        am excited to contribute my skills to innovative projects that push the
        boundaries of technology.
      </p>
      <h1 className="my-8 px-2 font-extralight text-3xl">Tech Stack</h1>
      <div className="max-w-5xl w-full items-center justify-between font-mono text-md lg:flex md:flex-row ">
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Flutter
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Node JS
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          React JS
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Next JS
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          React Native
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Tailwind CSS
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Laravel
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          MongoDB
        </div>
        <div className=" flex font-extrabold w-full p-4 items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          PostgreSQL
        </div>
      </div>
      <h1 className="my-8 px-2 font-extralight text-3xl">Projects </h1>
      <div className=" max-w-5xl w-full items-center   justify-between lg:flex md:flex-row ">
        <div className="flex-col p-2">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mahali Kenya Mobile App
              </h5>
            </a>
            <p class="mb-2 font-mono text-sm text-gray-700 dark:text-gray-400">
              Overview
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Flutter Based Cross Platform Mobile App.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Download
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          {/* <div className=" pb-8 font-bold text-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            MahaliKenya Mobile App
          </div>
          <h3 className="text-xs font-mono ">Overview</h3>
          <p>Flutter Based Mobile App</p> */}
        </div>
        <div className="flex-col p-2">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://michoro-postgres.vercel.app/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Michoro Art Website
              </h5>
            </a>
            <p class="mb-2 font-mono text-sm text-gray-700 dark:text-gray-400">
              Overview
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Node JS & React Js Art Based Ecommerce Website
            </p>
            <a
              href="https://michoro-postgres.vercel.app/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Learn More
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* <div className=" pb-8 font-bold text-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Michoro Art Website
          </div>
          <h3 className="text-xs font-mono">Overview</h3>
          <p>Art Based Ecommerce Website</p> */}
        </div>
        <div className="flex-col p-2">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://www.mahalikenya.com">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mahali Kenya Web App
              </h5>
            </a>
            <p class="mb-2 font-mono text-sm text-gray-700 dark:text-gray-400">
              Overview
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Node JS Landing Page & Web Server
            </p>
            <a
              href="https://www.mahalikenya.com"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read More
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* <div className=" pb-8 font-bold text-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            Mahali Kenya Web App
          </div>
          <h3 className="text-xs font-mono">Overview</h3>
          <p>Node JS Web Server</p> */}
        </div>
      </div>
      <h1 className="my-8 px-2 font-extralight text-3xl">Contact Me </h1>
      <p>+254 706-335-880</p>
      <p>williampius17@gmail.com</p>
      <p>https://www.linkedin.com/in/muthomi-gachaga-8b98a1121/</p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
