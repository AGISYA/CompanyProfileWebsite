import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:bg-[#1a2a2f] md:flex-row items-center justify-between ">
      {/* Bagian Kanan - Gambar */}
      <div className="relative w-full h-[50vh] md:h-screen">
        <Image
          src="/images/download (4).jpeg" // Gantilah dengan gambar yang sesuai
          alt="Empowering Tomorrow"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100} // Menjamin kualitas gambar yang terbaik
        />
        {/* Teks di atas gambar hanya pada mobile */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8 bg-black bg-opacity-50 md:hidden">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Empowering <br />
            Tomorrow™
          </h1>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Learn More About BTEKLabs
          </button>
        </div>
      </div>

      {/* Bagian Kiri - Teks hanya pada desktop */}
      <div className="md:w-1/2 flex flex-col bg-[#1a2a2f] justify-center items-start p-8 md:p-32 h-full md:block hidden">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          Empowering <br />
          Tomorrow™
        </h1>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Learn More About BTEKLabs
        </button>
      </div>
    </section>
  );
};

export default Hero;
