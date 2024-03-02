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
    <main className="flex min-h-screen flex-col items-center p-4 mx-4">
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
          <h1 className="text-6xl font-bold text-center  py-8 px-2">
            Gachaga Pius
          </h1>
        </div>
      </div>

      <h2 className="font-bold text-4xl text-center">
        Hybrid Mobile App & Full Stack Web Developer
      </h2>

      <p className="text-md text-center p-12  text-lg text-pretty">
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
      <h1 className="py-2 px-2 font-bold text-4xl">Tech Stack</h1>
      <div className="menu menu-horizontal gap-2 py-2  justify-center">
        {stack.map((item) => {
          return (
            <h2 key={item} className="btn btn-sm rounded-md">
              {item}
            </h2>
          );
        })}
      </div>
      <h1 className="my-8 px-2 font-bold text-4xl">Projects </h1>

      <div className="flex flex-row flex-wrap  justify-center  gap-4 items-center">
        <div className="card  bg-base-100 shadow-xl glass">
          <div className="card-body">
            <h2 className="card-title">Mahali Kenya Mobile App</h2>
            <p>Flutter Cross Platform Mobile App.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl glass">
          <div className="card-body">
            <h2 className="card-title"> Michoro Art Ecommerce</h2>
            <p>Express & React Js Art Ecommerce Web Application</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl glass">
          <div className="card-body">
            <h2 className="card-title"> Wirerent</h2>
            <p>Node & React Js Rental Management System</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl glass">
          <div className="card-body">
            <h2 className="card-title">Rentaspace</h2>
            <p> Next JS Properties Listing Full Stack Web Application</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>

      <h1 className="my-8 px-2 font-bold text-4xl">Reach Out</h1>
      <div className="py-2 menu menu-horizontal gap-3">
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
      <p className="text-center font-semibold text-xl">
        <span className="text-sm">Email: </span> williampius17@gmail.com
      </p>
      <p className="text-center font-semibold text-xl">
        <span className="text-sm">Mobile: </span>
        (+254) 706 335 880
      </p>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
