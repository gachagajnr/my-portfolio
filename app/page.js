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
    <main className=" max-w-screen-lg min-h-screen w-full   text-center justify-center items-center p-4 mx-4">
      <div className="  text-center w-full  ">
        <h2 className="font-bold text-primary text-4xl py-8 text-center">
          Welcome to My Portfolio
        </h2>
        <div class="flex flex-col flex-wrap justify-center gap-4 items-center">
          <div className="py-4 my-4 h-auto w-auto">
            <Image
              src="/profile.jpg"
              alt="Pius Gachaga"
              className="rounded-2xl"
              width={200}
              height={35}
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-secondary text-center  py-2 px-2">
             I am Pius Gachaga
            </h1>
          </div>
        </div>

        <p className="text-2xl text-center p-12   text-pretty">
          A Hybrid Mobile App & Full Stack Web Developer with a passion for
          creating dynamic and user-centric digital solutions. Specializing in
          cross-platform mobile app development and full-stack web technologies.
        </p>
        {/* <h1 className="py-3 px-2 font-bold text-4xl">Tech Stack</h1> */}
        <div className="menu menu-horizontal gap-3 py-4  justify-center">
          {stack.map((item) => {
            return (
              <h2
                key={item}
                className="btn text-primary text-lg font-bold rounded-md"
              >
                {item}
              </h2>
            );
          })}
        </div>
        <h1 className="my-8 px-2 font-bold text-4xl">Projects Completed </h1>

        <div className="flex flex-row flex-wrap  justify-center  gap-4 items-center">
          <div className="card w-96 bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title">Mahali Kenya Mobile App</h2>
              <p>Flutter Cross Platform Mobile App.</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.mahalikenya.app.mahali&hl=en&gl=US"
                  className="btn btn-secondary btn-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title">Ookulima</h2>
              <p>Ukulima Blogs Web Application</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://ookulima.vercel.app/"
                  className="btn btn-sm rounded-md btn-secondary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title">Mahali Kenya Landing Page</h2>
              <p>Landing Page.</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://www.mahalikenya.com"
                  className="btn btn-sm rounded-md btn-secondary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title"> Michoro Art Ecommerce</h2>
              <p>Ecommerce Website</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://michoro-postgres.vercel.app/"
                  className="btn btn-sm rounded-md btn-secondary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title"> Wirerent</h2>
              <p>Rental Management System</p>
              <div className="card-actions justify-end">
                <Link href="" className="btn btn-sm rounded-md btn-secondary">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96  bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">Rentaspace</h2>
              <p>Properties Listing Web Application</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://luxury-rent.vercel.app/"
                  className="btn btn-sm rounded-md btn-secondary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96  bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">Nerves Web Solutions</h2>
              <p>Business Website for Nerves Web Solutions</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://nerve-webs.vercel.app/"
                  className="btn btn-sm rounded-md btn-secondary"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1 className="my-8 px-2 font-bold text-4xl"></h1>
        <div className="py-2 menu menu-horizontal text-center gap-3">
          <p className="text-center font-semibold text-xl">
            <Link href="https://github.com/gachagajnr">Github</Link>
          </p>
          <p className="text-center font-semibold text-xl">
            <Link href="https://www.linkedin.com/in/muthomi-gachaga">
              LinkedIn
            </Link>
          </p>
          <p className="text-center font-semibold text-xl">
            <Link href="https://www.facebook.com/pius.muthomi.967/">
              Facebook
            </Link>
          </p>
        </div>
        <div className="menu menu-horizontal gap-2">
          <p className="text-center font-semibold text-xl">
            <span className="text-sm">Email: </span> williampius17@gmail.com
          </p>
          <p className="text-center font-semibold text-xl">
            <span className="text-sm">Mobile: </span>
            (+254) 706 335 880
          </p>
        </div>
      </div>
    </main>
  );
}
