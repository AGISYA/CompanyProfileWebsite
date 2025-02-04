import { FaTruck, FaLeaf, FaPhone, FaChartBar } from "react-icons/fa";

interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: Service) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="h-12 w-12 text-green-600 mb-4 mx-auto" />
    <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default function Services() {
  const services: Service[] = [
    {
      icon: FaTruck,
      title: "Pengiriman Cepat",
      description: "Kami menjamin pengiriman tepat waktu ke lokasi Anda.",
    },
    {
      icon: FaLeaf,
      title: "Produk Berkualitas",
      description:
        "Hanya pupuk terbaik yang kami sediakan untuk hasil optimal.",
    },
    {
      icon: FaPhone,
      title: "Konsultasi Gratis",
      description: "Tim ahli kami siap membantu dengan saran terbaik.",
    },
    {
      icon: FaChartBar,
      title: "Analisis Tanah",
      description:
        "Kami menyediakan layanan analisis tanah untuk memaksimalkan hasil panen Anda.",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 text-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
