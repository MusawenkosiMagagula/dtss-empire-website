import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppFloat from "../../components/WhatsAppFloat"

const images = [
  'about-us.jpeg',
  'About-us-page.jpeg',
  'hero-bg.jpeg',
  'logo.png',
  'Partner-with-us.jpeg',
  'Cash-loans-drop-down-page-1.jpg',
  'Food-blog-3.jpeg',
  'Food-drop-down-page-1.jpeg',
  'food.jpeg',
  'loans.png',
  'Security-blog-1.jpeg',
  'Security-drop-down-page-1.jpeg',
  'security.png',
  'Transport-blog-2.jpeg',
  'transport.png',
  'WhatsApp Image 2025-09-06 at 14.54.55 - Copy.jpeg',
  'WhatsApp Image 2025-09-06 at 14.54.57 (1) - Copy.jpeg',
  'WhatsApp Image 2025-09-06 at 14.54.57 (2) - Copy.jpeg',
  'WhatsApp Image 2025-09-06 at 14.54.58 - Copy.jpeg',
  'WhatsApp Image 2025-09-06 at 14.54.59 - Copy.jpeg',
  'WhatsApp Image 2025-09-06 at 15.01.45 - Copy.jpeg',
]

function captionFromFilename(name: string) {
  // Remove extension and replace dashes/underscores with spaces
  return name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-6 bg-black text-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gold text-center mb-8">Gallery</h1>
          <p className="text-center text-gray-300 mb-10">A showcase of our work, teams and services. Click to view full size.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <figure key={img} className="bg-softBlack border border-gold rounded-2xl overflow-hidden">
                <a href={`/images/${encodeURIComponent(img)}`} target="_blank" rel="noreferrer">
                  <img
                    src={`/images/${img}`}
                    alt={captionFromFilename(img)}
                    className="w-full h-56 object-cover block"
                    loading="lazy"
                  />
                </a>
                <figcaption className="p-3 text-sm text-gray-300">{captionFromFilename(img)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
