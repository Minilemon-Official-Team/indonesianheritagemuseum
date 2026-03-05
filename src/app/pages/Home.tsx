import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock, MapPin, Calendar, Users } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-[#F4EFE6]">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(140, 107, 62, 0.4), rgba(140, 107, 62, 0.6)), url('https://images.unsplash.com/photo-1686987195191-b3f91321d37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwaGVyaXRhZ2UlMjBtdXNldW0lMjBhcnRpZmFjdHN8ZW58MXx8fHwxNzcyNDgzNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="font-['Cinzel'] text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-wide">
            Indonesian Heritage Museum
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            Discover the Rich Cultural Legacy of Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/visit"
              className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/virtual-tour"
              className="px-8 py-4 bg-white text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Take Virtual Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section
        id="welcome"
        className="fade-in-section py-20 md:py-28 px-4"
        style={{
          opacity: isVisible['welcome'] ? 1 : 0,
          transform: isVisible['welcome'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
              Welcome to Indonesian Heritage Museum
            </h2>
            <div className="w-24 h-1 bg-[#8C6B3E] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
                The Indonesian Heritage Museum stands as a beacon of cultural preservation, dedicated to showcasing the magnificent history and artistic achievements of Indonesia's diverse civilizations. Our museum houses an extensive collection of artifacts spanning centuries of Indonesian heritage.
              </p>
              <p className="text-[#5A5A5A] text-lg leading-relaxed mb-8">
                From ancient Majapahit treasures to contemporary cultural expressions, we invite you to journey through time and discover the stories that shaped this remarkable archipelago.
              </p>
              <Link
                to="/meta-museum"
                className="inline-flex items-center gap-2 text-[#8C6B3E] hover:text-[#6F532F] transition-colors font-medium"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1557010537-6c24b1f78a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBleGhpYml0aW9uJTIwY3VsdHVyYWwlMjBhcnRpZmFjdHN8ZW58MXx8fHwxNzcyNDgzNzIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Museum Exhibition"
                className="rounded shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Highlight */}
      <section
        id="collections"
        className="fade-in-section py-20 md:py-28 px-4 bg-[#E7DED0]"
        style={{
          opacity: isVisible['collections'] ? 1 : 0,
          transform: isVisible['collections'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
              Our Collections
            </h2>
            <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
            <p className="text-[#5A5A5A] text-lg max-w-2xl mx-auto">
              Explore our carefully curated collections representing the rich tapestry of Indonesian cultural heritage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1766314964971-1e912b24a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWphcGFoaXQlMjB0ZW1wbGUlMjBhbmNpZW50JTIwSW5kb25lc2lhfGVufDF8fHx8MTc3MjQ4MzcxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ancient Temples"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-3">Ancient Temples</h3>
                <p className="text-[#5A5A5A] leading-relaxed mb-4">
                  Discover the architectural marvels of Majapahit era temples, including Candi Jago and Candi Kidal.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-[#8C6B3E] hover:text-[#6F532F] transition-colors"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1690816651465-10cf898562e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZG9uZXNpYW4lMjBzY3VscHR1cmUlMjBoZXJpdGFnZXxlbnwxfHx8fDE3NzI0ODM3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Traditional Sculptures"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-3">Traditional Sculptures</h3>
                <p className="text-[#5A5A5A] leading-relaxed mb-4">
                  Experience the intricate artistry of Indonesian stone carving and traditional sculpture masterpieces.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-[#8C6B3E] hover:text-[#6F532F] transition-colors"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1717657337667-319479b6d8ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXZhJTIwdGVtcGxlJTIwYXJjaGl0ZWN0dXJlJTIwc3RvbmUlMjBjYXJ2aW5nfGVufDF8fHx8MTc3MjQ4MzcyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Stone Carvings"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-3">Stone Carvings</h3>
                <p className="text-[#5A5A5A] leading-relaxed mb-4">
                  Marvel at the detailed stone carvings that tell stories of ancient Javanese civilization and mythology.
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 text-[#8C6B3E] hover:text-[#6F532F] transition-colors"
                >
                  View Gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section
        id="visit-info"
        className="fade-in-section py-20 md:py-28 px-4"
        style={{
          opacity: isVisible['visit-info'] ? 1 : 0,
          transform: isVisible['visit-info'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
              Plan Your Visit
            </h2>
            <div className="w-24 h-1 bg-[#8C6B3E] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Opening Hours</h3>
              <p className="text-[#5A5A5A]">
                Tuesday - Sunday<br />
                09:00 - 17:00
              </p>
            </div>

            <div className="bg-white rounded shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Location</h3>
              <p className="text-[#5A5A5A]">
                Jl. Kajoetangan No. 22<br />
                Malang, East Java
              </p>
            </div>

            <div className="bg-white rounded shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Guided Tours</h3>
              <p className="text-[#5A5A5A]">
                Available daily<br />
                Book in advance
              </p>
            </div>

            <div className="bg-white rounded shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Group Visits</h3>
              <p className="text-[#5A5A5A]">
                Special rates for<br />
                groups & schools
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/visit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl"
            >
              Get Full Visit Information
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section
        id="virtual-tour-cta"
        className="fade-in-section py-20 md:py-28 px-4 bg-[#D9CFC1]"
        style={{
          opacity: isVisible['virtual-tour-cta'] ? 1 : 0,
          transform: isVisible['virtual-tour-cta'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1765153885305-85e56c2efe92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjB2aXNpdG9yJTIwZXhwZXJpZW5jZSUyMGdhbGxlcnl8ZW58MXx8fHwxNzcyNDgzNzIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Virtual Tour Experience"
                className="rounded shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-6">
                Explore from Anywhere
              </h2>
              <p className="text-[#2B2B2B] text-lg leading-relaxed mb-6">
                Can't visit in person? Experience our museum from the comfort of your home with our immersive virtual tour. Navigate through our galleries, zoom in on artifacts, and access detailed information about each piece.
              </p>
              <p className="text-[#5A5A5A] text-lg leading-relaxed mb-8">
                Our virtual tour includes the Indonesian Heritage Museum, Candi Jago, and Candi Kidal, providing a comprehensive digital experience of Indonesia's cultural treasures.
              </p>
              <Link
                to="/virtual-tour"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl"
              >
                Start Virtual Tour
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section
        id="education"
        className="fade-in-section py-20 md:py-28 px-4"
        style={{
          opacity: isVisible['education'] ? 1 : 0,
          transform: isVisible['education'] ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-out',
        }}
      >
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Education & Family Programs
          </h2>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto mb-12">
            We offer a range of educational programs designed for families, schools, and educational institutions. Engage with Indonesian heritage through interactive workshops, guided tours, and hands-on activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/education"
              className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </Link>
            <Link
              to="/auto-guide"
              className="px-8 py-4 bg-white border-2 border-[#8C6B3E] text-[#8C6B3E] rounded hover:bg-[#E7DED0] transition-all shadow-lg hover:shadow-xl"
            >
              Download Auto Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
