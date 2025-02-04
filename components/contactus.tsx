import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-green-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <p>+62 123 4567 890</p>
          </div>
          <div className="text-center">
            <Mail className="h-12 w-12 mx-auto mb-4" />
            <p>info@pupukpro.com</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <p>Jl. Pupuk Subur No. 123, Kota Makmur</p>
          </div>
        </div>
      </div>
    </section>
  );
}
