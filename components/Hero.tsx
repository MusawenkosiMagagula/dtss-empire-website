export default function Hero() {
  return (
    <section 
      className="relative bg-black text-white py-28 px-6 text-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpeg')", // Changed from .png to .jpeg
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gold">
          DTSS&DE Empire
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-300">
          Your trusted partner for a secure and prosperous lifestyle.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-gold text-black px-8 py-3 rounded-lg font-bold shadow-lg hover:opacity-90 transition"
          >
            Our Services
          </a>

          <a
            href="#contact"
            className="border border-gold text-gold px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}