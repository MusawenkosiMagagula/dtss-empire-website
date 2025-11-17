"use client"

import { useState } from 'react'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const templateParams = {
        service_id: 'service_8qp2r26',
        template_id: 'template_q509gd6',
        user_id: 'yh-uyhVD4zbJcyrl-',
        template_params: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          time: new Date().toLocaleString()
        }
      }

      console.log('Sending email with Service ID:', templateParams.service_id)

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(templateParams),
      })

      console.log('Response status:', response.status)

      if (response.ok) {
        setIsSent(true)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setIsSent(false), 5000)
        console.log('✅ Email sent successfully!')
      } else {
        const errorText = await response.text()
        console.error('EmailJS API error:', errorText)
        setError('Temporary issue with contact form. Please use WhatsApp or email directly.')
      }

    } catch (error) {
      console.error('Network error:', error)
      setError('Network error. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="bg-black text-white py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gold">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with DTSS & DE Empire for all your service needs. We're here to help!
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-softBlack">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gold">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  Have questions about our services? Need a quote? Ready to get started? 
                  Reach out to us through any of the following methods.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone Numbers</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <p className="text-gray-300">+27 76 173 0711</p>
                          <a 
                            href="tel:+27761730711" 
                            className="bg-gold text-black px-3 py-1 rounded-lg text-sm font-bold hover:opacity-90 transition"
                          >
                            📞 Call
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <p className="text-gray-300">+27 63 720 7603</p>
                          <a 
                            href="tel:+27637207603" 
                            className="bg-gold text-black px-3 py-1 rounded-lg text-sm font-bold hover:opacity-90 transition"
                          >
                            📞 Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">dtssanddde@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300">
                        05 NUMBI TRUST HAZYVIEW<br />
                        HAZYVIEW<br />
                        MPUMALANGA 1242
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Business Name</h3>
                      <p className="text-gray-300">
                        DTSS AND D DE TONNYS SEBENDZILE<br />
                        SONS AND DAUGHTERS EMPIRE
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-black border border-gold rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gold">Send us a Message</h3>
                
                {isSent && (
                  <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6 text-center">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6 text-center">
                    ❌ {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold transition"
                      placeholder="Your full name"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold transition"
                      placeholder="your.email@example.com"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold transition"
                      placeholder="Your phone number"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-300 mb-2">Service Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold transition"
                      disabled={isLoading}
                    >
                      <option value="">Select a service</option>
                      <option value="security">Security Services</option>
                      <option value="loans">Cash Loans</option>
                      <option value="transport">Transport Services</option>
                      <option value="food">Food Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-gold transition"
                      placeholder="Tell us about your requirements..."
                      disabled={isLoading}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`
                      w-full bg-gold text-black py-3 rounded-lg font-bold shadow-md transition-all duration-300
                      ${isLoading 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:opacity-90 hover:scale-105'
                      }
                    `}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gold/30 text-center">
                  <p className="text-gray-400 mb-3">Prefer other methods?</p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://wa.me/27761730711" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition"
                    >
                      📱 WhatsApp
                    </a>
                    <a 
                      href="tel:+27761730711" 
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      📞 Call Us
                    </a>
                    <a 
                      href="mailto:dtssanddde@gmail.com" 
                      className="text-gold hover:text-yellow-300 transition"
                    >
                      ✉️ Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Quick Links */}
        <section className="py-16 px-6 bg-black text-center">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gold">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="/services/security" className="block bg-softBlack py-4 rounded-lg hover:bg-gold/20 transition">
                <span className="text-white">Security</span>
              </a>
              <a href="/services/loans" className="block bg-softBlack py-4 rounded-lg hover:bg-gold/20 transition">
                <span className="text-white">Cash Loans</span>
              </a>
              <a href="/services/transport" className="block bg-softBlack py-4 rounded-lg hover:bg-gold/20 transition">
                <span className="text-white">Transport</span>
              </a>
              <a href="/services/food" className="block bg-softBlack py-4 rounded-lg hover:bg-gold/20 transition">
                <span className="text-white">Food Services</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}