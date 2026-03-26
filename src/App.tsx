import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Flower2, Sparkles, Heart, Gift, Star, Phone, Mail, MapPin, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/95 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wide">
            <span className="text-gray-900">Events by </span>
            <span className="text-rose-400">Maryann</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-400 transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-400 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-rose-400 transition-colors">Events</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-rose-400 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="bg-rose-400 text-white px-6 py-2.5 rounded-full hover:bg-rose-500 transition-all hover:shadow-lg">
              Inquire Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="flex flex-col p-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-400 transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-400 transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-400 transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-rose-400 transition-colors text-left">Events</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-rose-400 transition-colors text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="bg-rose-400 text-white px-6 py-3 rounded-full hover:bg-rose-500 transition-colors text-center">
                Inquire Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(251, 207, 232, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(253, 230, 138, 0.5) 0%, transparent 50%)',
        }}></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-8 border border-rose-100">
              <Sparkles className="text-rose-400" size={18} />
              <span className="text-sm tracking-wide text-gray-700">Fully Insured • Serving Long Island, NY</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 leading-tight">
              Luxury Event Decor<br />That Brings Your<br />
              <span className="text-rose-400">Vision to Life</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Weddings, showers, birthdays, and custom event styling across Long Island, NY
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all hover:shadow-xl flex items-center justify-center gap-2 group">
                Inquire Now
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button onClick={() => scrollToSection('gallery')} className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-gray-200 hover:border-rose-400">
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elevated event decor tailored to your unique style and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Flower2 className="text-rose-400" size={32} />,
                title: 'Flower Walls & Arches',
                description: 'Stunning floral installations that create breathtaking backdrops for your most cherished moments'
              },
              {
                icon: <Sparkles className="text-amber-400" size={32} />,
                title: 'Balloon Garlands',
                description: 'Luxurious balloon artistry in sophisticated color palettes to complement your event aesthetic'
              },
              {
                icon: <Star className="text-rose-300" size={32} />,
                title: 'Custom Backdrops',
                description: 'Bespoke backdrop designs that reflect your personal style and create unforgettable photo opportunities'
              },
              {
                icon: <Heart className="text-rose-400" size={32} />,
                title: 'Wedding Decor',
                description: 'Complete wedding styling services from ceremony to reception, designed to make your day flawless'
              },
              {
                icon: <Gift className="text-amber-400" size={32} />,
                title: 'Baby Showers & Birthdays',
                description: 'Elegant celebrations for life\'s special milestones, designed with sophistication and charm'
              },
              {
                icon: <Sparkles className="text-rose-300" size={32} />,
                title: 'Full Event Styling',
                description: 'Comprehensive design and coordination services for a seamlessly beautiful event from start to finish'
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button onClick={() => scrollToSection('contact')} className="text-rose-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Get a Quote
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into the beautiful celebrations we've had the honor of styling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { height: 'h-80', gradient: 'from-rose-200 to-rose-300' },
              { height: 'h-96', gradient: 'from-amber-100 to-rose-200' },
              { height: 'h-80', gradient: 'from-rose-100 to-amber-100' },
              { height: 'h-96', gradient: 'from-rose-300 to-rose-400' },
              { height: 'h-80', gradient: 'from-amber-200 to-rose-200' },
              { height: 'h-80', gradient: 'from-rose-200 to-amber-200' }
            ].map((item, index) => (
              <div key={index} className={`${item.height} bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative group`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium">View Project</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Event Types</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating unforgettable moments for every celebration
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Weddings', icon: Heart },
              { name: 'Bridal Showers', icon: Sparkles },
              { name: 'Baby Showers', icon: Gift },
              { name: 'Birthdays', icon: Star },
              { name: 'Proposals', icon: Heart },
              { name: 'Special Events', icon: Flower2 }
            ].map((event, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-rose-50 to-white border border-rose-100 hover:border-rose-300 hover:shadow-lg transition-all">
                <event.icon className="text-rose-400 mx-auto mb-3" size={32} />
                <h3 className="font-medium text-gray-900">{event.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Events by Maryann</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Excellence in every detail, dedication to your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fully Insured',
                description: 'Licensed and insured to work in any venue across Long Island, giving you complete peace of mind'
              },
              {
                title: 'Custom Designs',
                description: 'Every event is uniquely designed to reflect your personal style and vision'
              },
              {
                title: 'Attention to Detail',
                description: 'Meticulous care in every aspect, from initial concept to final setup'
              },
              {
                title: 'Reliable & Professional',
                description: 'Punctual, organized, and committed to making your event stress-free'
              },
              {
                title: 'Serving Long Island',
                description: 'Local expertise with deep knowledge of venues throughout Long Island, NY'
              },
              {
                title: 'Passionate Team',
                description: 'Dedicated professionals who genuinely love bringing your dreams to life'
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from couples and families who trusted us with their special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah & Michael',
                event: 'Wedding',
                text: 'Maryann transformed our wedding venue into an absolute fairytale. The flower wall was breathtaking, and every detail was perfect. She made the entire process stress-free and brought our vision to life beyond what we imagined.'
              },
              {
                name: 'Jennifer L.',
                event: 'Baby Shower',
                text: 'The most beautiful baby shower I could have dreamed of! The balloon garland was stunning and elegant—not childish at all. Maryann\'s professionalism and attention to detail made everything seamless. Highly recommend!'
              },
              {
                name: 'Amanda R.',
                event: 'Bridal Shower',
                text: 'From our first consultation to setup day, Maryann was incredible. The custom backdrop was exactly what we wanted, and all of our guests couldn\'t stop talking about how beautiful everything looked. Worth every penny!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-50 to-white p-8 rounded-2xl border border-rose-100 hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-amber-400 fill-amber-400" size={18} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-rose-200 pt-4">
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A seamless journey from inquiry to your perfect celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Inquiry',
                description: 'Share your vision, event details, and style preferences with us'
              },
              {
                step: '02',
                title: 'Planning & Design',
                description: 'We create a custom design plan tailored to your event and budget'
              },
              {
                step: '03',
                title: 'Setup & Execution',
                description: 'Our team handles all setup with precision and attention to detail'
              },
              {
                step: '04',
                title: 'Event Day Experience',
                description: 'Enjoy your beautifully styled event while we ensure everything is flawless'
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-rose-100">
                  <div className="text-6xl font-serif text-rose-100 mb-4">{process.step}</div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-rose-200" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Request Your Event Quote</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Let's bring your vision to life. Share your event details and we'll create a custom proposal for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2 justify-center">
                <MapPin size={18} className="text-rose-400" />
                <span>Serving Long Island, NY</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Star size={18} className="text-rose-400" />
                <span>Fully insured to work in any venue</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-white p-8 md:p-12 rounded-3xl border border-rose-100 shadow-xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none" placeholder="your@email.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none">
                    <option value="">Select event type</option>
                    <option>Wedding</option>
                    <option>Bridal Shower</option>
                    <option>Baby Shower</option>
                    <option>Birthday</option>
                    <option>Proposal</option>
                    <option>Other Special Event</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none" placeholder="Venue or city in Long Island" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your vision *</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition-all outline-none resize-none" placeholder="Share details about your event, color preferences, style inspiration, or any specific requests..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-full hover:bg-gray-800 transition-all hover:shadow-xl font-medium text-lg flex items-center justify-center gap-2 group">
                Send Inquiry
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">
                Events by <span className="text-rose-400">Maryann</span>
              </h3>
              <p className="text-gray-400 mb-4">
                Luxury event decor and styling for weddings and special celebrations across Long Island, NY
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-rose-400 transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-rose-400 transition-colors">Services</button>
                <button onClick={() => scrollToSection('gallery')} className="block text-gray-400 hover:text-rose-400 transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('events')} className="block text-gray-400 hover:text-rose-400 transition-colors">Event Types</button>
                <button onClick={() => scrollToSection('reviews')} className="block text-gray-400 hover:text-rose-400 transition-colors">Reviews</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-rose-400 transition-colors">Contact</button>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-lg mb-4">Service Area</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-start gap-2">
                  <MapPin className="text-rose-400 flex-shrink-0 mt-1" size={18} />
                  <span>Long Island, NY</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="text-rose-400 flex-shrink-0 mt-1" size={18} />
                  <span>info@eventsbymaryann.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="text-rose-400 flex-shrink-0 mt-1" size={18} />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Events by Maryann. All rights reserved.
              </p>
              <button onClick={() => scrollToSection('contact')} className="bg-rose-400 text-white px-6 py-2.5 rounded-full hover:bg-rose-500 transition-all">
                Book Your Event
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
