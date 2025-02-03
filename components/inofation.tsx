import React from "react";

export default function Innovations() {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="max-w-6xl mx-auto flex">
        <div>
          <div className="flex items-center space-x-4">
            <h2 className="text-sm sm:text-xl font-bold text-blue-600">
              INOVATIONS
            </h2>
            <div className="border-t-2 border-blue-600 flex-grow"></div>
          </div>
          <h1 className="text-4xl text-black font-bold mt-2">
            Your Digital Journey Starts Here
          </h1>
          <p className="mt-4 text-gray-700 max-w-2xl">
            We specialize in Warehouse Management Systems (WMS), Point of Sales
            (POS) solutions, and Information Systems to optimize warehouse
            operations and inventory tracking.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 gap-6 mt-6">
          <div className="relative bg-gray-900 text-white p-6 rounded-lg overflow-hidden">
            <img
              src="images/Sutton-Tile-1024x614.jpg"
              alt="Warehouse"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <h3 className="relative text-lg font-bold">
              Integrated Warehouse Management System
            </h3>
          </div>
          <div className="relative bg-gray-900 text-white p-6 rounded-lg overflow-hidden">
            <img
              src="/pos.jpg"
              alt="Point of Sales"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <h3 className="relative text-lg font-bold">
              Point of Sales Application
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
