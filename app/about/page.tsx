import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function About() {
  const milestones = [
    { year: "2020", event: "Company Founded", desc: "Started as a local security service provider" },
    { year: "2021", event: "Expanded Services", desc: "Added financial and transport services" },
    { year: "2022", event: "National Reach", desc: "Expanded operations across South Africa" },
    { year: "2023", event: "Food Services Launch", desc: "Introduced premium catering services" },
    { year: "2024", event: "Digital Transformation", desc: "Launched online platforms and apps" }
  ]

  const values = [
    { 
      title: "Integrity", 
      desc: "We operate with honesty and transparency in all our dealings, building trust through consistent ethical practices." 
    },
    { 
      title: "Excellence", 
      desc: "Committed to the highest standards in every service we provide, ensuring quality and reliability." 
    },
    { 
      title: "Innovation", 
      desc: "Continuously improving and adapting our services to meet evolving client needs and market demands." 
    },
    { 
      title: "Community", 
      desc: "Investing in and empowering the communities we serve, creating lasting positive impact." 
    },
    { 
      title: "Reliability", 
      desc: "Building lasting relationships through consistent, dependable service delivery you can count on." 
    },
    { 
      title: "Professionalism", 
      desc: "Maintaining the highest standards of conduct and expertise across all our service divisions." 
    }
  ]

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">About Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building trust, ensuring security, and empowering prosperity across South Africa since 2020.
            </p>
          </div>
        </section>

        {/* Story Section with Main Image */}
        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gold">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded in 2020, we began as a vision to provide comprehensive 
                    solutions for modern South African challenges. We recognized the growing need 
                    for integrated services that address security, financial empowerment, 
                    transportation, and daily sustenance.
                  </p>
                  <p>
                    What started as a small security operation has evolved into a multi-faceted 
                    empire dedicated to enhancing the quality of life for individuals, families, 
                    and businesses across the nation.
                  </p>
                  <p>
                    Today, we stand as a testament to African excellence, combining traditional 
                    values with innovative solutions to create a safer, more prosperous community.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-black border-2 border-gold rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/About-us-page.jpeg" 
                    alt="Our Company"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-black">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-softBlack border border-gold rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gold">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To provide integrated, reliable, and accessible services that empower our clients 
                  to live securely, prosper financially, move freely, and thrive daily through 
                  exceptional security, financial solutions, transport, and food services.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-softBlack border border-gold rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gold">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To become South Africa's most trusted integrated service provider, 
                  setting the standard for excellence in security, financial empowerment, 
                  transportation, and culinary services while building lasting relationships 
                  with our communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-gold">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gold rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="bg-black border border-gold rounded-2xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-gold mb-2">{milestone.event}</h3>
                    <p className="text-gray-300">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-black">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-4 text-gold">Our Values</h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-softBlack border border-gold rounded-2xl p-6">
                  <h4 className="text-xl font-bold mb-3 text-gold">{value.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-black border border-gold rounded-2xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">4+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-black border border-gold rounded-2xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">500+</div>
                <div className="text-gray-300 text-sm">Satisfied Clients</div>
              </div>
              <div className="bg-black border border-gold rounded-2xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">4</div>
                <div className="text-gray-300 text-sm">Core Services</div>
              </div>
              <div className="bg-black border border-gold rounded-2xl p-6">
                <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Client Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner With Us Section with Image */}
        <section className="py-20 px-6 bg-black">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative">
                <div className="bg-black border-2 border-gold rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/Partner-with-us.jpeg" 
                    alt="Partner With Us - Let's Build Success Together"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              
              {/* Content Side */}
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-6 text-gold">Partner With Us</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Join the growing network of clients who trust us for their essential service needs. 
                  Together, we can build a safer, more prosperous future for your business and community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="/contact"
                    className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition text-center"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="/#services"  // Changed from /services to /#services
                    className="border border-gold text-gold px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-black transition text-center"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}