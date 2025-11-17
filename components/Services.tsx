export default function Services() {
  const services = [
    { 
      id: "security",
      title: "Security Services", 
      desc: "Elite protection and security solutions for your safety and peace of mind.",
      image: "/images/security.png",
      link: "/services/security"  // Added link
    },
    { 
      id: "loans",
      title: "Cash Loans", 
      desc: "Quick, reliable micro-loans with flexible repayment options.",
      image: "/images/loans.png",
      link: "/services/loans"  // Added link
    },
    { 
      id: "transport",
      title: "Transport Services", 
      desc: "Safe, comfortable, and reliable transportation for all your needs.",
      image: "/images/transport.png",
      link: "/services/transport"  // Added link
    },
    { 
      id: "food",
      title: "Food Services", 
      desc: "Premium catering and daily meal services with exceptional quality.",
      image: "/images/food.jpeg",
      link: "/services/food"  // Added link
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-softBlack">
      <h2 className="text-4xl font-bold text-center mb-16 text-gold">Our Offerings</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <a
            key={i}
            href={service.link}  // Make the whole card clickable
            id={service.id}
            className="bg-black text-white rounded-xl overflow-hidden border border-gold shadow-lg hover:scale-105 transition group block" // Added 'block' for proper link styling
          >
            {/* Image container - maintains aspect ratio */}
            <div className="w-full h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-auto max-h-48 object-contain"
              />
            </div>
            
            {/* Service Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gold">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}