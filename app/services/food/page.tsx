import Header from "../../../components/Header"
import Footer from "../../../components/Footer"
import WhatsAppFloat from "../../../components/WhatsAppFloat"
import Image from 'next/image'

export default function FoodServices() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="bg-black text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Food Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium catering and daily meal services with exceptional quality and presentation.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gold">Culinary Excellence</h2>
                <p className="text-gray-300 mb-6">
                  Food is more than just sustenance—it's an experience that can make or break your event. 
                  Our professional catering services bring expertise, quality, and presentation that elevate 
                  ordinary gatherings into memorable occasions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Corporate Catering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Event Catering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Daily Meal Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                    <span className="text-gray-300">Custom Menu Planning</span>
                  </div>
                </div>
              </div>
              <div className="bg-black border border-gold rounded-2xl p-8">
                <div className="w-full h-64 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/Food-drop-down-page-1.jpeg" 
                    alt="Food Services - Premium Catering"
                    width={500}
                    height={400}
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
            <h2 className="text-3xl font-bold mb-6 text-gold">Plan Your Menu</h2>
            <a
              href="/contact"
              className="bg-gold text-black px-8 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block"
            >
              Get Catering Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}