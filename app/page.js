import Image from "next/image";
import Link from "next/link";
const stack = [
  "Flutter",
  "Feathers JS",
  "Express JS",
  "HTML",
  "CSS",
  "Android",
  "React",
  "Next JS",
  "React Native",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
];
export default function Home() {
  return (
    <main className=" container  min-h-screen w-full   text-center justify-center items-center  ">
      <div className="  text-center w-full  ">
        {/* <h2 className="font-bold text-primary text-4xl py-8 text-center">
          Welcome to My Portfolio
        </h2> */}
        <div class="flex flex-row flex-wrap justify-center gap-6 items-center p-8 mt-12">
          <div className="flex flex-col  justify-center items-center h-auto ">
            <Image
              src="/profile.jpg"
              alt="Pius Gachaga"
              className="rounded"
              width={200}
              height={35}
              priority
            />
            <h1 className="text-3xl font-bold text-primary   py-2 ">
              I am Pius Gachaga
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start  gap-2 p-4  ">
            <h1 className="uppercase text-primary">FOLLOW ME</h1>

            <p className=" text-lg flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-5 h-5"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
              <Link
                href="https://github.com/gachagajnr"
                className="font-semibold"
              >
                Github
              </Link>
            </p>
            <p className=" text-lg flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
              <Link
                href="https://www.linkedin.com/in/muthomi-gachaga"
                className="font-semibold"
              >
                LinkedIn
              </Link>
            </p>
            <p className=" text-lg flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <Link
                href="https://www.instagram.com/yunn_don/"
                className="font-semibold"
              >
                Instagram
              </Link>
            </p>
            <p className=" text-lg flex flex-row gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-5 h-5"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
              <Link
                href="https://www.facebook.com/pius.muthomi.807/"
                className="font-semibold"
              >
                Facebook
              </Link>
            </p>
            <h1 className="uppercase font-semibold text-primary ">REACH OUT</h1>

            <a
              href="https://decidedtech.co.ke"
              target="_blank"
              className=" text-lg flex flex-row gap-3 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              decidedtech.co.ke
            </a>
            <p className=" text-lg flex flex-row gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              williampius17@gmail.com
            </p>
            <a
              href="tel:+254706335880"
              target="_blank"
              className=" text-lg flex flex-row gap-3 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              (+254) 706 335 880
            </a>
            <a
              href="https://wa.me/+254706335880?text=Hi, Lets Build."
              target="_blank"
              className=" text-lg flex flex-row gap-3 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="h-6 w-6"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              (+254) 706 335 880
            </a>
          </div>
        </div>
        <div className="flex flex-col   justify-center items-center gap-3 shadow p-12">
          <div className="max-w-4xl">
            <p className="text-xl text-center  py-2  text-pretty">
              A Hybrid Mobile App & Full Stack Web Developer with a passion for
              creating dynamic and user-centric digital solutions. Specializing
              in cross-platform mobile app development and full-stack web
              technologies.
            </p>
            <div className="menu menu-horizontal gap-3 py-4  justify-center">
              {stack.map((item) => {
                return (
                  <h2
                    key={item}
                    className="btn text-primary text-lg font-bold rounded-none"
                  >
                    {item}
                  </h2>
                );
              })}
            </div>
          </div>
          <h1 className="my-8  font-bold text-4xl">Projects Completed </h1>
        </div>
        {/* <h1 className="py-3 px-2 font-bold text-4xl">Tech Stack</h1> */}

        <div className="flex flex-row flex-wrap  justify-center p-8  gap-4 items-center">
          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title  text-secondary">NutriCare</h2>
              <p>Business Website for NutriCare</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://nutricare.co.ke/"
                  className="btn btn-sm rounded-none btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary">Jirani Lighting Solutions Ltd</h2>
              <p>Business Website for Jirani Lighting solutions Ltd</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://jiranilightingsolutions.co.ke/"
                  className="btn btn-sm rounded-none btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary">Decided Tech</h2>
              <p>Business Website for Decided Tech</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://decidedtech.co.ke/"
                  className="btn btn-sm rounded-none btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>

          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary">Mahali Kenya Mobile App</h2>
              <p>Flutter Cross Platform Mobile App.</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://play.google.com/store/apps/Visit ?id=com.mahalikenya.app.mahali&hl=en&gl=US"
                  className="btn btn-primary rounded-none btn-sm"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary">Ookulima</h2>
              <p>Ukulima Blogs Web Application</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://ookulima.vercel.app/"
                  className="btn btn-sm rounded-none btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary">Mahali Kenya Website</h2>
              <p>Landing Page.</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://mahalikenya.vercel.app"
                  className="btn btn-sm rounded-none btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80  hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary text-primary"> Michoro Art</h2>
              <p>Ecommerce Website</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://michoro-postgres.vercel.app/"
                  className="btn btn-sm rounded-none  btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80   hover:-translate-y-2 duration-300 cursor-pointer rounded-none glass">
            <div className="card-body">
              <h2 className="card-title text-secondary"> Wirerent</h2>
              <p>Rental Management System</p>
              <div className="card-actions justify-end">
                <Link href="" className="btn btn-sm rounded-none btn-primary">
                  Visit
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-80 rounded-none  hover:-translate-y-2 duration-300 cursor-pointer shadow ">
            <div className="card-body">
              <h2 className="card-title text-secondary">Rentaspace</h2>
              <p>Properties Listing Web Application</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://luxury-rent.vercel.app/"
                  className="btn btn-sm rounded-none btn-primary"
                >
                  Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
