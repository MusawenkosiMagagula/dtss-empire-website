"use client"

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      // ✅ CORRECT SERVICE ID: service_8qp2r26
      const templateParams = {
        service_id: 'service_8qp2r26', // ← This is your correct Service ID
        template_id: 'template_q509gd6',
        user_id: 'yh-uyhVD4zbJcyrl-',
        template_params: {
          name: formData.name,
          email: formData.email,
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
        setFormData({ name: '', email: '', message: '' })
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
    <section id="contact" className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-gold">Get In Touch</h2>

      <div className="max-w-lg mx-auto bg-softBlack p-10 rounded-xl border border-gold shadow-xl">
        <p className="text-center text-gray-300 mb-6">
          Our team will respond within 24 hours.
        </p>

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

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gold text-white rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/50 transition"
            disabled={isLoading}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gold text-white rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/50 transition"
            disabled={isLoading}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gold text-white h-32 rounded-lg focus:border-gold focus:ring-2 focus:ring-gold/50 transition"
            disabled={isLoading}
          />

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
              href="mailto:launchpaddigital01@gmail.com" 
              className="text-gold hover:text-yellow-300 transition"
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}