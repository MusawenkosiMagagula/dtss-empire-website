import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import WhatsAppFloat from "../../../components/WhatsAppFloat"
import Image from 'next/image'

export default function SecurityServices() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="bg-black text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Security Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Elite protection solutions for your safety, assets, and peace of mind.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gold">Comprehensive Protection</h2>
                <p className="text-gray-300 mb-6">
                  Our elite security teams are trained to handle any situation with professionalism and precision. 
                  From residential properties to corporate events, we provide tailored security solutions that meet 
                  international standards while understanding local contexts.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">24/7 Armed Response Teams</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">VIP Executive Protection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Event Security Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Access Control Systems</span>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gold rounded-2xl p-8">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/Security-drop-down-page-1.jpeg" 
                    alt="Security Services - Comprehensive Protection"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover object-top"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-black text-center">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-6 text-gold">Secure Your Peace Today</h2>
            <a
              href="/contact"
              className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block"
            >
              Get Security Assessment
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}