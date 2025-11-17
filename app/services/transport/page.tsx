import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import WhatsAppFloat from "../../../components/WhatsAppFloat"
import Image from 'next/image'

export default function TransportServices() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="bg-black text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Transport Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Safe, comfortable, and reliable transportation solutions for all your needs.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gold">Reliable Logistics</h2>
                <p className="text-gray-300 mb-6">
                  In the fast-paced world of business, reliable transportation is the backbone of successful operations. 
                  Whether you're delivering products to customers or managing supply chains, having a dependable 
                  transport partner can make or break your business.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Business Logistics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Personal Transportation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Event Transport</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">24/7 Availability</span>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gold rounded-2xl p-8">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/about-us.jpeg" 
                    alt="Transport Services - Reliable Logistics"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-black text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-gold">Book Your Transport</h2>
            <a
              href="/contact"
              className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block"
            >
              Schedule Transport
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}