import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#f4f4f4] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Bagian Kiri - Text */}
        <div className="mb-12 md:mb-0 md:w-1/2">
          <div className="flex items-center space-x-4">
            <h2 className="text-sm sm:text-xl font-bold text-[#1a2a2f]">
              ABOUT
            </h2>
            <div className="border-t-2 border-[#1a2a2f] flex-grow"></div>
          </div>

          <div className="text-left text-[#333] mt-6">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Crafting Excellent Innovations
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              BTEKLabs is a beacon of professionalism and innovation in the
              technology industry. With an unwavering commitment to excellence,
              we excel in crafting solutions that not only meet but exceed the
              expectations of our clients.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              Every line of code is meticulously written to deliver top-tier,
              cutting-edge software. You can expect a seamless blend of
              professionalism and innovation, resulting in solutions that
              empower your digital journey and set new standards in the software
              industry.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Know More About Our Vision &gt;
            </button>
          </div>
        </div>

        {/* Bagian Kanan - Image */}
        <div className="md:w-1/2 w-full h-96 relative">
          <Image
            src="/images/Tanpa judul (Mode Foto TikTok 916).png"
            alt="About BTEKLabs"
            layout="fill" // Membuat gambar mengisi seluruh area
            objectFit="cover" // Gambar akan menutupi area tanpa terdistorsi
            className="rounded-lg md:mx-20 shadow-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
