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
      <div className="grid text-center w-fullbg-base-200">
        <div class="flex flex-row flex-wrap justify-center gap-4 items-center">
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
          <div>
            <h1 className="text-6xl font-bold text-secondary text-center  py-8 px-2">
              Gachaga Pius
            </h1>
          </div>
        </div>

        <h2 className="font-bold text-4xl py-4 text-center">
          Mobile & Full Stack Web Developer
        </h2>

        <p className="text-2xl text-center p-12   text-pretty">
          I am a results-driven Hybrid Mobile App & Full Stack Web Developer
          with a passion for creating dynamic and user-centric digital
          solutions. Specializing in cross-platform mobile app development and
          full-stack web technologies, I bring a versatile skill set that merges
          creativity with technical expertise. With a keen eye for detail and a
          commitment to staying at the forefront of industry trends, I thrive in
          transforming concepts into high-performing applications. Collaborative
          by nature, I am excited to contribute my skills to innovative projects
          that push the boundaries of technology. I am 
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
        <h1 className="my-8 px-2 font-bold text-4xl">Projects </h1>

        <div className="flex flex-row flex-wrap  justify-center  gap-4 items-center">
          <div className="card  bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
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
          <div className="card  bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title">Ookulima</h2>
              <p> Next JS Blogs Web Application</p>
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
          <div className="card  bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title">Mahali Kenya Landing Page</h2>
              <p>Backend API Server & Landing Page.</p>
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
          <div className="card bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title"> Michoro Art Ecommerce</h2>
              <p>Express & React Js Art Ecommerce Web Application</p>
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
          <div className="card bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl glass">
            <div className="card-body">
              <h2 className="card-title"> Wirerent</h2>
              <p>Node & React Js Rental Management System</p>
              <div className="card-actions justify-end">
                <Link href="" className="btn btn-sm rounded-md btn-secondary">
                  Details
                </Link>
              </div>
            </div>
          </div>
          <div className="card  bg-base-100 hover:-translate-y-2 duration-300 cursor-pointer shadow-xl ">
            <div className="card-body">
              <h2 className="card-title">Rentaspace</h2>
              <p> Next JS Properties Listing Full Stack Web Application</p>
              <div className="card-actions justify-end">
                <Link
                  href="https://rent-out-a-space.vercel.app/"
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
