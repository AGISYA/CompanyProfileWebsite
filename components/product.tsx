"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    name: "NPK",
    image: "/images/images.jpeg",
    description:
      "NPK adalah pupuk yang mengandung unsur nitrogen (N), fosfor (P), dan kalium (K) yang sangat penting untuk pertumbuhan tanaman.",
  },
  {
    name: "Urea",
    image: "/images/urea.webp",
    description:
      "Urea adalah pupuk nitrogen yang membantu meningkatkan pertumbuhan tanaman dengan menyediakan unsur nitrogen yang penting.",
  },
  {
    name: "KCl",
    image: "/images/631ec7b3e7bb1.jpg",
    description:
      "KCl (Kalium Klorida) adalah pupuk yang kaya akan kalium, yang berperan penting dalam meningkatkan ketahanan tanaman terhadap penyakit.",
  },
  {
    name: "SP-36",
    image: "/images/48b905a98093ca146eff1a6157e86615.jpeg",
    description:
      "SP-36 adalah pupuk fosfat yang membantu dalam pembentukan akar dan perkembangan bunga serta buah pada tanaman.",
  },
  {
    name: "ZA",
    image: "/images/fungsi-pupuk-za.webp",
    description:
      "ZA adalah pupuk yang mengandung unsur belerang dan amonia, yang mendukung pertumbuhan akar dan meningkatkan kualitas tanaman.",
  },
  {
    name: "Dolomit",
    image: "/images/saraswanti-pupuk-dolomit-2.jpg",
    description:
      "Dolomit adalah pupuk pengatur pH tanah yang mengandung kalsium dan magnesium, ideal untuk memperbaiki kualitas tanah asam.",
  },
];

export default function Product() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, products.length - 1)
    );
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center space-x-4">
            <h2 className="text-sm sm:text-xl font-bold text-green-600">
              PRODUK UNGGULAN
            </h2>
            <div className="border-t-2 border-green-600 flex-grow"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl text-black font-bold mt-4">
            Pupuk Berkualitas untuk Hasil Terbaik
          </h1>
          <p className="mt-6 text-gray-700 max-w-2xl">
            Kami menyediakan berbagai jenis pupuk berkualitas tinggi untuk
            meningkatkan kesuburan tanah dan mengoptimalkan hasil panen Anda.
            Setiap produk kami dirancang untuk memberikan nutrisi terbaik bagi
            tanaman.
          </p>
          <div className="flex mt-6 space-x-6">
            <button
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="bg-green-600 text-white p-3 rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= products.length - 1}
              className="bg-green-600 text-white p-3 rounded-full disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mx-10 flex flex-col items-center space-y-6">
          <div className="relative bg-gray-900 text-white p-8 rounded-lg overflow-hidden w-full h-72">
            <Image
              src={products[currentIndex].image}
              alt={products[currentIndex].name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <h3 className="relative text-lg font-bold">
              {products[currentIndex].name}
            </h3>
            <p className="relative text-sm mt-2">
              {products[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
