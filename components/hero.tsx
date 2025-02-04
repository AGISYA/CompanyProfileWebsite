import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:bg-green-600 md:flex-row items-center justify-between">
      {/* Right side - Image */}
      <div className="relative w-full h-[50vh] md:h-screen md:w-1/2">
        <Image
          src="/images/istockphoto-1438707148-170667a.jpg"
          alt="Kesuburan Tanah Anda"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
        {/* Text overlay on mobile */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8 bg-black bg-opacity-50 md:hidden">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Kesuburan <br />
            Tanah Anda
          </h1>
          <Link
            href="#contact"
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>

      {/* Left side - Text (desktop only) */}
      <div className="md:w-1/2 w-full flex flex-col bg-green-600 justify-center items-start p-8 md:p-32 h-full hidden md:flex gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-center md:text-left">
          Kesuburan <br />
          Tanah Anda
        </h1>
        <Link
          href="#contact"
          className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Hubungi Kami
        </Link>
      </div>
    </section>
  );
};

export default Hero;
