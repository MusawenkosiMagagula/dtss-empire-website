export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gold/30">
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-3 text-gold">DTSS&DE Empire</h2>
          <p className="text-gray-300 max-w-md mx-auto">
            Your trusted partner for a secure and prosperous lifestyle.
          </p>
        </div>

        {/* Quick Links - Compact Grid */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {/* Column 1 */}
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-gold transition text-sm">Home</a>
              <a href="/about" className="block text-gray-300 hover:text-gold transition text-sm">About</a>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-2">
              <a href="/services/security" className="block text-gray-300 hover:text-gold transition text-sm">Security</a>
              <a href="/services/loans" className="block text-gray-300 hover:text-gold transition text-sm">Cash Loans</a>
            </div>
            
            {/* Column 3 */}
            <div className="space-y-2">
              <a href="/services/transport" className="block text-gray-300 hover:text-gold transition text-sm">Transport</a>
              <a href="/services/food" className="block text-gray-300 hover:text-gold transition text-sm">Food Services</a>
            </div>
            
            {/* Column 4 */}
            <div className="space-y-2">
              <a href="/contact" className="block text-gray-300 hover:text-gold transition text-sm">Contact</a>
              <div className="pt-1">
                <a 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#3b5998] text-white hover:bg-white hover:scale-110 transition-all duration-300 group"
                  href="https://www.facebook.com/profile.php?id=61583641628366" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Follow us on Facebook"
                >
                  <svg 
                    className="w-5 h-5 group-hover:text-[#3b5998] transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info - Compact */}
        <div className="text-center mb-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400 text-sm">
            <div>+27 76 173 0711</div>
            <div className="hidden sm:block">•</div>
            <div>+27 63 720 7603</div>
            <div className="hidden sm:block">•</div>
            <div>dtssanddde@gmail.com</div>
          </div>
        </div>

        {/* Facebook Follow Button - More Visible */}
        <div className="text-center mb-4">
          <a 
            className="inline-flex items-center justify-center gap-2 bg-[#3b5998] text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-[#3b5998] transition-all duration-300 border border-[#3b5998] group"
            href="https://www.facebook.com/profile.php?id=61583641628366" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg 
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Follow us on Facebook
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 my-4 max-w-2xl mx-auto"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">
            © 2025 DTSS&DE Empire. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Powered by <span className="text-gold">LaunchPad Digital</span>
          </p>
          <p className="text-gray-400 text-xs mt-2">
            05 NUMBI TRUST HAZYVIEW, MPUMALANGA 1242
          </p>
        </div>
      </div>
    </footer>
  )
}