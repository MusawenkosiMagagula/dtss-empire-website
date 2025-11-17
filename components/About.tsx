export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gold">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="rounded-xl overflow-hidden border border-gold">
            <div className="h-64">
              <img
                src="/images/about-us.jpeg"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* About Content */}
          <div>
            <p className="text-gray-300 leading-relaxed mb-6">
              At DTSS&DE Empire, we combine excellence, trust, and professionalism to
              deliver unmatched services in security, financial support, transport,
              and food services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our brand stands on integrity, dignity, and customer
              satisfaction. We are committed to providing premium services that
              enhance your lifestyle and business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}