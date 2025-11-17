"use client"

import { useState, useEffect, useRef, MouseEvent } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Scroll effect for header animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close desktop dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
      
      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) &&
          !(event.target as Element).closest('button[class*="md:hidden"]')) {
        setIsMobileMenuOpen(false)
        setIsMobileDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside as any)
    return () => document.removeEventListener('mousedown', handleClickOutside as any)
  }, [])

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileDropdownOpen(false)
  }

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
      ${isScrolled 
        ? 'bg-softBlack/95 backdrop-blur-md border-b border-gold/50 shadow-xl' 
        : 'bg-softBlack border-b border-gold'
      }
    `}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4">
              <img 
                src="/images/logo.png" 
                alt="DTSS&DE Empire Logo"
                className={`transition-all duration-500 ease-in-out ${
                  isScrolled ? 'h-12 w-12' : 'h-16 w-16'
                } object-contain`}
              />
              <div className={`text-2xl font-bold text-gold transition-all duration-500 ${
                isScrolled ? 'text-xl' : 'text-2xl'
              }`}>
                DTSS&DE Empire
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gold transition-all duration-300 hover:scale-105">Home</Link>
            <Link href="/about" className="hover:text-gold transition-all duration-300 hover:scale-105">About</Link>
            
            {/* APPLE-STYLE DESKTOP DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button 
                ref={buttonRef}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gold transition-all duration-300 hover:scale-105 flex items-center gap-1 group"
              >
                Offerings 
                <span className={`text-sm transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Apple-style Dropdown Menu */}
              <div 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className={`
                  absolute top-full left-1/2 transform -translate-x-1/2 mt-4
                  bg-black/80 backdrop-blur-2xl border border-white/20 rounded-2xl
                  shadow-2xl overflow-hidden transition-all duration-500 ease-out
                  ${isDropdownOpen 
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                  }
                `}
                style={{
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                <div className="p-2 min-w-[200px]">
                  <Link 
                    href="/services/security" 
                    className="flex items-center px-4 py-3 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    Security
                  </Link>
                  <Link 
                    href="/services/loans" 
                    className="flex items-center px-4 py-3 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    Cash Loans
                  </Link>
                  <Link 
                    href="/services/transport" 
                    className="flex items-center px-4 py-3 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    Transport
                  </Link>
                  <Link 
                    href="/services/food" 
                    className="flex items-center px-4 py-3 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    Food Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Blog link removed from here */}
            <Link href="/contact" className="hover:text-gold transition-all duration-300 hover:scale-105">Contact</Link>
            <Link 
              href="/contact"
              className={`
                bg-gold text-black px-6 py-2 rounded-lg font-bold transition-all duration-500
                ${isScrolled 
                  ? 'hover:bg-gold/90 hover:scale-105' 
                  : 'hover:bg-gold/80 hover:scale-110'
                }
              `}
            >
              Contact Us Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gold text-2xl transition-all duration-300 hover:scale-110 z-60"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              if (isMobileMenuOpen) {
                setIsMobileDropdownOpen(false)
              }
            }}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* APPLE-STYLE MOBILE MENU */}
        <div 
          ref={mobileMenuRef}
          className={`
            md:hidden fixed left-4 right-4 top-20
            bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl
            shadow-2xl overflow-hidden transition-all duration-500 ease-out z-50
            ${isMobileMenuOpen 
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto max-h-96' 
              : 'opacity-0 scale-95 -translate-y-4 pointer-events-none max-h-0'
            }
          `}
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <nav className="p-4 space-y-1">
            {/* Mobile Menu Links */}
            <Link 
              href="/" 
              className="flex items-center px-4 py-4 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
              onClick={closeMobileMenu}
            >
              <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
              Home
            </Link>
            
            <Link 
              href="/about" 
              className="flex items-center px-4 py-4 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
              onClick={closeMobileMenu}
            >
              <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
              About
            </Link>
            
            {/* APPLE-STYLE MOBILE DROPDOWN */}
            <div className="space-y-1">
              <button 
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-4 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-70"></div>
                  <span>Offerings</span>
                </div>
                <span className={`transform transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Mobile Dropdown Items */}
              <div className={`
                space-y-1 ml-6 transition-all duration-500 ease-out overflow-hidden
                ${isMobileDropdownOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <Link 
                  href="/services/security" 
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  Security
                </Link>
                <Link 
                  href="/services/loans" 
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  Cash Loans
                </Link>
                <Link 
                  href="/services/transport" 
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  Transport
                </Link>
                <Link 
                  href="/services/food" 
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
                  onClick={closeMobileMenu}
                >
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                  Food Services
                </Link>
              </div>
            </div>

            {/* Blog link removed from mobile menu */}
            
            <Link 
              href="/contact" 
              className="flex items-center px-4 py-4 text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all duration-300 group/item"
              onClick={closeMobileMenu}
            >
              <div className="w-2 h-2 bg-gold rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
              Contact
            </Link>
            
            {/* Mobile Contact Button */}
            <Link 
              href="/contact"
              className={`
                w-full bg-gold text-black py-4 rounded-xl font-bold transition-all duration-500
                hover:bg-gold/90 hover:scale-105 mt-4 text-center block
              `}
              onClick={closeMobileMenu}
            >
              Contact Us Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}