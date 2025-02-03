"use client";
import { useState } from "react";
import {
  FaCogs,
  FaGlobe,
  FaMicrochip,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";

export default function Solutions() {
  const [selected, setSelected] = useState("IoT Engineering");

  const solutions = [
    { name: "Web Development", icon: <FaGlobe /> },
    { name: "Mobile Apps Development", icon: <FaMobileAlt /> },
    { name: "IoT Engineering", icon: <FaMicrochip /> },
    { name: "Maintenance", icon: <FaTools /> },
    { name: "Engineering", icon: <FaCogs /> },
  ];

  return (
    <section
      className="bg-cover md:flex bg-center text-white py-20 px-10"
      style={{
        backgroundImage: "url('/images/texture.webp')", // Replace with your image path
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4">
          <h2 className="text-sm sm:text-xl font-bold text-blue-600">
            SOLUTIONS
          </h2>
          <div className="border-t-2 border-blue-600 flex-grow"></div>
        </div>
        <h1 className="text-4xl font-bold mt-2">
          Effective Solutions For Your Business
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl">
          We provide tailored software solutions that drive success, from
          websites and mobile apps to IoT and automation.
        </p>

        <div className="mt-6 text-gray-300 max-w-4xl">
          <p className="mb-4">
            "We're dedicated in delivering effective solutions for businesses by
            harnessing the power of the right platforms, including websites,
            mobile apps, and more. With a keen focus on understanding the unique
            needs and goals of each client, we craft tailored software solutions
            that drive success.
          </p>
          <p className="mb-4">
            Whether it's creating user-friendly websites that leave a lasting
            impression, developing mobile apps that enhance accessibility and
            engagement, or leveraging advanced technologies for efficient
            business processes, we're committed to delivering results.
          </p>
          <p>
            Our expertise in selecting the most suitable platforms ensures that
            businesses can thrive in the ever-evolving digital landscape, making
            us a trusted partner for achieving digital excellence.
          </p>
        </div>
      </div>{" "}
      <div className="mt-6  p-4 rounded-lg w-full max-w-md">
        {solutions.map((solution) => (
          <div
            key={solution.name}
            onClick={() => setSelected(solution.name)}
            className={`flex items-center space-x-3 bg-gray-500 mt-3  p-3 rounded-lg cursor-pointer transition ${
              selected === solution.name ? "bg-blue-500" : "hover:bg-blue-600"
            }`}
          >
            {solution.icon}
            <span className="text-white">{solution.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
