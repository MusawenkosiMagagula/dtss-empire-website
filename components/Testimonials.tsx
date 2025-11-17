export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "James Mbeki",
      role: "Business Owner",
      service: "Security Services",
      content: "DTSS&DE Empire's security team has been protecting my business for over 2 years. Their professionalism and rapid response give me complete peace of mind.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Homeowner",
      service: "Cash Loans",
      content: "When I needed emergency funds for home repairs, their loan service was fast, transparent, and helped me when no bank would.",
      rating: 5
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Logistics Manager",
      service: "Transport Services",
      content: "Reliable, punctual, and professional. Their transport services have never let us down for our business deliveries.",
      rating: 4
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      role: "Event Planner",
      service: "Food Services",
      content: "The catering for our corporate event was exceptional! Great food, professional service, and very reasonable pricing.",
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating)
  }

  return (
    <section id="testimonials" className="py-20 px-6 bg-softBlack">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gold">What Our Clients Say</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about their experiences with DTSS&DE Empire.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-black border border-gold rounded-2xl p-8 hover:scale-105 transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 text-yellow-400">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="border-t border-gold/20 pt-4">
                <span className="text-gold text-sm font-medium">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Ready to become our next success story?</p>
          <a
            href="/contact"
            className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  )
}