import { useState } from 'react';
import { Languages, Download, Headphones } from 'lucide-react';

const languages = [
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'ID', name: 'Indonesian', flag: '🇮🇩' },
  { code: 'JP', name: 'Japanese', flag: '🇯🇵' },
  { code: 'KR', name: 'Korean', flag: '🇰🇷' },
  { code: 'CN', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
  { code: 'FR', name: 'French', flag: '🇫🇷' },
  { code: 'DE', name: 'German', flag: '🇩🇪' },
  { code: 'IT', name: 'Italian', flag: '🇮🇹' },
  { code: 'NL', name: 'Dutch', flag: '🇳🇱' },
  { code: 'RU', name: 'Russian', flag: '🇷🇺' },
  { code: 'AR', name: 'Arabic', flag: '🇸🇦' },
];

export default function AutoGuide() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <div className="bg-[#F4EFE6] min-h-screen py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 rounded-full bg-[#8C6B3E] flex items-center justify-center mx-auto mb-6">
            <Headphones className="w-10 h-10 text-white" />
          </div>
          <h1 className="font-['Cinzel'] text-4xl md:text-5xl text-[#2B2B2B] mb-4">
            Audio Guide
          </h1>
          <div className="w-24 h-1 bg-[#8C6B3E] mx-auto mb-6"></div>
          <p className="text-[#5A5A5A] text-lg max-w-3xl mx-auto leading-relaxed">
            Enhance your museum experience with our comprehensive audio guide. Available in 12 languages, 
            our audio tour provides detailed narratives about our collections, exhibits, and cultural significance. 
            Simply select your preferred language below to get started.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded shadow-md p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
              <Languages className="w-8 h-8 text-[#8C6B3E]" />
            </div>
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">12 Languages</h3>
            <p className="text-[#5A5A5A] leading-relaxed">
              Audio guides available in multiple languages for international visitors
            </p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-[#8C6B3E]" />
            </div>
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Download & Play</h3>
            <p className="text-[#5A5A5A] leading-relaxed">
              Download the guide before your visit or stream directly at the museum
            </p>
          </div>

          <div className="bg-white rounded shadow-md p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E7DED0] flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-[#8C6B3E]" />
            </div>
            <h3 className="font-['Cinzel'] text-xl text-[#2B2B2B] mb-3">Expert Narration</h3>
            <p className="text-[#5A5A5A] leading-relaxed">
              Professionally narrated by cultural experts and historians
            </p>
          </div>
        </div>

        {/* Language Selection */}
        <div className="bg-white rounded shadow-lg p-8 md:p-12">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-2 text-center">
            Select Your Language
          </h2>
          <p className="text-[#5A5A5A] text-center mb-8">
            Choose your preferred language to access the audio guide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`p-6 rounded border-2 transition-all hover:shadow-lg transform hover:-translate-y-1 ${
                  selectedLanguage === lang.code
                    ? 'border-[#8C6B3E] bg-[#E7DED0]'
                    : 'border-[#C8B9A6] bg-white hover:border-[#8C6B3E] hover:bg-[#F4EFE6]'
                }`}
              >
                <div className="text-4xl mb-3">{lang.flag}</div>
                <div className="font-['Cinzel'] text-lg text-[#2B2B2B] mb-1">{lang.code}</div>
                <div className="text-sm text-[#5A5A5A]">{lang.name}</div>
              </button>
            ))}
          </div>

          {selectedLanguage && (
            <div className="mt-8 p-6 bg-[#E7DED0] rounded text-center">
              <p className="text-[#2B2B2B] mb-4">
                You have selected:{' '}
                <span className="font-['Cinzel'] text-lg text-[#8C6B3E]">
                  {languages.find((l) => l.code === selectedLanguage)?.name}
                </span>
              </p>
              <button className="px-8 py-4 bg-[#8C6B3E] text-white rounded hover:bg-[#6F532F] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Audio Guide
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-16 bg-[#E7DED0] rounded shadow-md p-8 md:p-12">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6 text-center">
            How to Use the Audio Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">Before Your Visit</h3>
              <ol className="space-y-3 text-[#2B2B2B] list-decimal list-inside">
                <li>Select your preferred language from the options above</li>
                <li>Download the audio guide to your device</li>
                <li>Bring headphones or earphones for the best experience</li>
                <li>Ensure your device is fully charged</li>
              </ol>
            </div>
            <div>
              <h3 className="font-['Cinzel'] text-xl text-[#8C6B3E] mb-4">During Your Visit</h3>
              <ol className="space-y-3 text-[#2B2B2B] list-decimal list-inside">
                <li>Look for numbered markers next to each exhibit</li>
                <li>Select the corresponding number in the audio guide</li>
                <li>Listen to detailed information about the artifact</li>
                <li>Pause and replay as needed to explore at your own pace</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Alternative Options */}
        <div className="mt-16 text-center">
          <h2 className="font-['Cinzel'] text-3xl text-[#2B2B2B] mb-6">
            Alternative Options
          </h2>
          <p className="text-[#5A5A5A] mb-8 max-w-2xl mx-auto">
            Audio guide devices are also available for rent at the museum entrance. 
            Our staff will be happy to assist you with setup and usage.
          </p>
          <div className="inline-block bg-white rounded shadow-md p-6">
            <p className="text-[#2B2B2B] mb-2">
              <span className="font-['Cinzel'] text-lg text-[#8C6B3E]">Rental Price:</span> IDR 25,000
            </p>
            <p className="text-[#5A5A5A] text-sm">
              Deposit required • Includes headphones
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
