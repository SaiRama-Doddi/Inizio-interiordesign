import { useState } from "react";
import {
  Sofa,
  BedDouble,
  DoorClosed,
  Baby,
  Tv,
  LampDesk,
  UtensilsCrossed,
  Briefcase,
  X,
  ChevronRight,
} from "lucide-react";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  gallery: string[];
};

const services: Service[] = [
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchens",
    description:
      "Bespoke modular kitchens combining innovation and elegance. Crafted with smart storage, premium materials, and seamless modular units that blend style with utility.",
    image:
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
      "https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg",
    ],
  },
  {
    icon: BedDouble,
    title: "Personalized Bedroom Designs",
    description:
      "Luxury meets comfort with custom-designed bedrooms. From bed back paneling to elegant lighting and wardrobes, every detail reflects your unique personality and lifestyle.",
    image:
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    ],
  },
  {
    icon: DoorClosed,
    title: "Functional Wardrobes",
    description:
      "Custom wardrobes designed for efficiency and elegance. Explore walk-in closets, wall-mounted units, and tinted glass designs that redefine organized living.",
    image:
      "https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg",
      "https://images.pexels.com/photos/706376/pexels-photo-706376.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    ],
  },
  {
    icon: Baby,
    title: "Fun & Functional Kids Room Designs",
    description:
      "Vibrant, safe, and creative spaces for kids. Designed with playful decor, smart storage, and ergonomic layouts that grow with your child’s imagination.",
    image:
      "https://images.pexels.com/photos/3935347/pexels-photo-3935347.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/3935337/pexels-photo-3935337.jpeg",
      "https://images.pexels.com/photos/8534274/pexels-photo-8534274.jpeg",
      "https://images.pexels.com/photos/8534063/pexels-photo-8534063.jpeg",
    ],
  },
  {
    icon: Sofa,
    title: "Living Room Interiors",
    description:
      "Stylish and comfortable living spaces designed to bring warmth and sophistication. From statement walls to custom furniture, we create spaces that feel like home.",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg",
    ],
  },
  {
    icon: Tv,
    title: "Elegant Entertainment Units",
    description:
      "Transform your living area with entertainment units that combine functionality and design—perfect for displaying your TV, decor, and collectibles in style.",
    image:
      "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg",
      "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg",
      "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    ],
  },
  {
    icon: LampDesk,
    title: "Divine Pooja Rooms",
    description:
      "Peaceful and sacred spaces crafted with devotion. From traditional temple-style setups to modern minimalist sanctuaries, we design pooja rooms that inspire serenity.",
    image:
      "https://images.pexels.com/photos/774282/pexels-photo-774282.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/161640/pexels-photo-161640.jpeg",
      "https://images.pexels.com/photos/774282/pexels-photo-774282.jpeg",
      "https://images.pexels.com/photos/163833/pexels-photo-163833.jpeg",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Elegant Dining Room Designs",
    description:
      "Make every meal special with elegantly designed dining rooms featuring bespoke furniture, statement lighting, and decor that celebrates togetherness.",
    image:
      "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/271742/pexels-photo-271742.jpeg",
      "https://images.pexels.com/photos/1668860/pexels-photo-1668860.jpeg",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    ],
  },
  {
    icon: Briefcase,
    title: "Functional Home Office Designs",
    description:
      "Boost productivity and creativity with ergonomic home office designs featuring intelligent layouts, inspiring decor, and functional organization.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    gallery: [
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 px-6 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Interior Design Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of bespoke interior design services,
            tailored to transform every space into a reflection of your
            lifestyle and personality.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="bg-[#BDB8D9] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#433673]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-[#433673] font-semibold flex items-center space-x-2 hover:space-x-3 transition-all"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-6">
          <div className="bg-white rounded-3xl max-w-5xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedService(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedService.title}
            </h3>
            <p className="text-gray-600 mb-6">{selectedService.description}</p>

            <div className="grid md:grid-cols-3 gap-4">
              {selectedService.gallery.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl">
                  <img
                    src={img}
                    alt={`${selectedService.title} ${i + 1}`}
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
