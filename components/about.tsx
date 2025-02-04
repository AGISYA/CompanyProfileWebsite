import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-[#f4f4f4] py-20 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Text */}
        <div className="mb-12 md:mb-0 md:w-1/2">
          <div className="flex items-center space-x-4">
            <h2 className="text-sm sm:text-xl font-bold text-[#1a2a2f]">
              TENTANG KAMI
            </h2>
            <div className="border-t-2 border-[#1a2a2f] flex-grow"></div>
          </div>

          <div className="text-left text-[#333] mt-6">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Menyuburkan Tanah, Menumbuhkan Harapan
            </h3>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              PupukPro adalah gudang pupuk terkemuka yang berkomitmen untuk
              menyediakan produk berkualitas tinggi untuk meningkatkan kesuburan
              tanah dan hasil panen. Dengan pengalaman lebih dari 15 tahun, kami
              menjadi mitra terpercaya bagi petani dan perkebunan di seluruh
              negeri.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mb-6">
              Setiap produk kami dipilih dengan cermat untuk memberikan nutrisi
              terbaik bagi tanaman Anda. Anda dapat mengharapkan kombinasi
              sempurna antara kualitas dan inovasi, menghasilkan solusi yang
              memberdayakan pertanian Anda dan menetapkan standar baru dalam
              industri pupuk.
            </p>
            <Link
              href="#products"
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition inline-block"
            >
              Lihat Produk Kami &gt;
            </Link>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 w-full h-96 relative">
          <Image
            src="/images/Blog-Pupuk-Organik-Sawit.jpg"
            alt="Tentang PupukPro"
            layout="fill"
            objectFit="cover"
            className="rounded-lg md:mx-20 shadow-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
