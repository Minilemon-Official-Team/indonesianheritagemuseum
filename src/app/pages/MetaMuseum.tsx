import { Target, Users, BookOpen, Award } from 'lucide-react';

export default function MetaMuseum() {
  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            About Indonesian Heritage Museum
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            A living archive of Indonesian cultural heritage, dedicated to preservation, education, and celebration
          </p>
        </div>

        {/* Hero Image & Introduction */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.unsplash.com/photo-1686987195191-b3f91321d37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwaGVyaXRhZ2UlMjBtdXNldW0lMjBhcnRpZmFjdHN8ZW58MXx8fHwxNzcyNDgzNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Museum Building"
              className="rounded shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6">Our Story</h2>
            <p className="text-[#2B2B2B] leading-relaxed mb-4">
              Established in 2001, the Indonesian Heritage Museum was founded with a vision to preserve and showcase 
              the rich cultural heritage of Indonesia, particularly the Majapahit era and East Javanese civilization. 
              Our museum serves as a bridge between past and present, connecting contemporary audiences with the 
              remarkable achievements of Indonesia's ancestors.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed mb-4">
              Located in the historic city of Malang, East Java, our institution houses one of the most comprehensive 
              collections of Majapahit artifacts outside of the National Museum in Jakarta. Through careful curation, 
              conservation, and educational programming, we strive to make Indonesian heritage accessible and meaningful 
              to visitors from around the world.
            </p>
            <p className="text-[#5A5A5A] leading-relaxed">
              Our collection includes over 5,000 artifacts spanning prehistoric times to the Majapahit golden age, 
              featuring stone sculptures, bronze work, ceramics, textiles, and rare manuscripts that tell the story 
              of Indonesia's cultural evolution.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="bg-[#E7DED0] rounded-lg shadow-lg p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#8C6B3E] flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Our Mission</h2>
              </div>
              <p className="text-[#2B2B2B] leading-relaxed mb-4">
                To preserve, protect, and promote Indonesian cultural heritage through world-class exhibitions, 
                educational programs, and scholarly research that inspire appreciation and understanding of 
                Indonesia's diverse cultural traditions.
              </p>
              <ul className="space-y-2 text-[#5A5A5A]">
                <li>• Safeguard cultural artifacts for future generations</li>
                <li>• Provide accessible education about Indonesian heritage</li>
                <li>• Support archaeological and historical research</li>
                <li>• Foster cultural pride and national identity</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#8C6B3E] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B]">Our Vision</h2>
              </div>
              <p className="text-[#2B2B2B] leading-relaxed mb-4">
                To be recognized as the premier institution for Majapahit and East Javanese heritage, 
                serving as an international center of excellence for cultural preservation, research, 
                and public engagement.
              </p>
              <ul className="space-y-2 text-[#5A5A5A]">
                <li>• Leading heritage institution in Southeast Asia</li>
                <li>• Global hub for Majapahit studies</li>
                <li>• Model for community-engaged museums</li>
                <li>• Innovative digital heritage platform</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Education</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                We believe in the power of education to transform understanding and inspire appreciation for cultural heritage.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Excellence</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                We maintain the highest standards in conservation, curation, and visitor experience.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Community</h3>
              <p className="text-[#5A5A5A] leading-relaxed">
                We serve as a gathering place for cultural exchange, learning, and celebration of Indonesian identity.
              </p>
            </div>
          </div>
        </div>

        {/* Collection Highlights */}
        <div className="bg-white rounded-lg shadow-lg p-12 mb-16">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-8 text-center">Collection Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Majapahit Artifacts</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-4">
                Our cornerstone collection features rare artifacts from the Majapahit Empire (1293-1527), including 
                terracotta sculptures, royal insignia, and ceremonial objects that illuminate the sophisticated culture 
                of Indonesia's greatest pre-Islamic kingdom.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Temple Sculptures</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-4">
                Exceptional stone sculptures from Candi Jago, Candi Kidal, and other East Javanese temples showcase 
                the pinnacle of ancient Indonesian artistic achievement, with intricate relief carvings and religious 
                statuary.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Historical Manuscripts</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-4">
                Rare palm-leaf manuscripts and copper plate inscriptions provide invaluable insights into ancient 
                Javanese language, literature, and administrative systems, including royal genealogies and religious texts.
              </p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Traditional Textiles</h3>
              <p className="text-[#5A5A5A] leading-relaxed mb-4">
                A comprehensive textile collection documents the evolution of Indonesian fabric arts, from ancient 
                court batik to regional weaving traditions, representing centuries of artistic innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Research & Conservation */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#D9CFC1] rounded-lg shadow-md p-8">
            <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-4">Research Programs</h2>
            <p className="text-[#2B2B2B] leading-relaxed mb-4">
              Our research department collaborates with universities and international institutions to advance 
              scholarly understanding of Indonesian cultural heritage.
            </p>
            <ul className="space-y-2 text-[#5A5A5A]">
              <li>• Archaeological field research</li>
              <li>• Conservation science studies</li>
              <li>• Historical documentation projects</li>
              <li>• Academic publications and symposia</li>
            </ul>
          </div>
          <div className="bg-[#D9CFC1] rounded-lg shadow-md p-8">
            <h2 className="font-['Cinzel'] text-2xl text-[#2B2B2B] mb-4">Conservation Lab</h2>
            <p className="text-[#2B2B2B] leading-relaxed mb-4">
              Our state-of-the-art conservation laboratory employs cutting-edge techniques to preserve artifacts 
              for future generations.
            </p>
            <ul className="space-y-2 text-[#5A5A5A]">
              <li>• Artifact cleaning and stabilization</li>
              <li>• Preventive conservation measures</li>
              <li>• Digital documentation and 3D scanning</li>
              <li>• Public viewing opportunities</li>
            </ul>
          </div>
        </div>

        {/* Partners & Recognition */}
        <div className="bg-white rounded-lg shadow-lg p-12">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-8 text-center">Partners & Recognition</h2>
          <p className="text-center text-[#5A5A5A] mb-8 max-w-3xl mx-auto">
            The Indonesian Heritage Museum is proud to collaborate with leading cultural institutions, universities, 
            and government agencies to advance our mission of heritage preservation and education.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-2">Government Partners</h3>
              <p className="text-sm text-[#5A5A5A]">Ministry of Education & Culture, East Java Provincial Government</p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-2">Academic Partners</h3>
              <p className="text-sm text-[#5A5A5A]">Universitas Gadjah Mada, Brawijaya University, Leiden University</p>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-lg text-[#8C6B3E] mb-2">International Network</h3>
              <p className="text-sm text-[#5A5A5A]">ICOM, ASEAN Museums Association, UNESCO Heritage Sites</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
