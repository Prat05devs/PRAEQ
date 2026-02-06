import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { organizationSchema, serviceSchema, websiteSchema, breadcrumbSchema, faqSchema } from '../components/schemas';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const homeFAQs = [
    {
      question: "What services does PRAEQ offer?",
      answer: "PRAEQ is an elite talent management and brand architecture firm offering three core services: Sonic Spectrum (music talent management, artist development, and sonic branding), Dialogue Axis (influencer management, content creator partnerships, and media strategy), and Estate Vision (real estate brand development and property branding). We work across all industries with Fortune 500 companies and emerging brands globally."
    },
    {
      question: "How is PRAEQ different from traditional talent agencies?",
      answer: "Unlike traditional talent agencies that focus solely on representation, PRAEQ combines elite talent management with strategic brand architecture. We don't just place talent—we architect entire brand narratives, create sonic identities, build multi-platform strategies, and develop comprehensive brand ecosystems. We're industry-agnostic, working across music, media, real estate, technology, fashion, hospitality, and more."
    },
    {
      question: "What industries does PRAEQ work with?",
      answer: "PRAEQ is industry-agnostic. While our three Houses (Sonic Spectrum, Dialogue Axis, Estate Vision) showcase specific verticals, these are frameworks that adapt to any sector. We've worked with clients in music, entertainment, technology, fashion, hospitality, real estate, and beyond. Our expertise lies in architecting excellence regardless of industry."
    }
  ];

  const schemas = [
    organizationSchema,
    serviceSchema,
    websiteSchema,
    faqSchema(homeFAQs)
  ];

  return (
    <>
      <SEO 
        title="Elite Talent Management & Global Brand Architecture"
        description="PRAEQ is a high-performance talent management and brand architecture firm. We architect sonic identities, influencer strategies, and real estate brands across industries. Industry-agnostic excellence for Fortune 500 and emerging brands."
        canonical="/"
        keywords="talent management agency, brand architecture firm, sonic branding agency, influencer management company, music talent management, real estate brand consulting, creative talent management, global talent agency, brand strategy consulting, audio branding agency"
        schema={schemas}
      />
      <main className="relative z-10 w-full overflow-hidden bg-bone text-charcoal">
      {/* Hero Section: Cinematic Video Background */}
      <section className="min-h-[100dvh] flex flex-col justify-center items-center relative px-6 overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/HeroBG.jpg" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50 mix-blend-multiply filter contrast-100 grayscale-[20%]"
          />
          {/* Enhanced Overlay for text readability - Using new Cream (bone) color */}
          <div className="absolute inset-0 bg-bone/10 backdrop-blur-[1px]"></div>
        </div>
        
        <div className={`relative z-10 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} max-w-[90%] md:max-w-5xl mx-auto mt-12 md:mt-0`}>
          <h1 className="font-serif text-[13vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] xl:text-[8vw] leading-[0.85] select-none tracking-tight opacity-100 uppercase mix-blend-multiply" style={{color: '#1C1E1D', textShadow: '0 4px 16px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(0, 0, 0, 0.25)'}}>
            We Architect<br/>Icons
          </h1>
          <div className="mt-8 md:mt-16 flex flex-col items-center gap-6 md:gap-8 max-w-xl lg:max-w-3xl mx-auto">
            <p className="font-sans font-normal text-base sm:text-lg md:text-2xl leading-relaxed text-balance px-4" style={{color: '#F5F5F0', textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'}}>
              We architect global brands through sonic branding, influencer strategy, and real estate innovation.<br className="hidden md:block"/>
              Industry-agnostic excellence for music talent, content creators, and luxury brands.
            </p>
            <Link to="/submission" className="mt-4 md:mt-8 px-8 md:px-10 py-3 md:py-4 bg-navy-premium text-bone text-[10px] md:text-[11px] uppercase tracking-architectural font-bold hover:bg-orange-burnished transition-colors duration-500 shadow-xl shadow-navy-premium/10">
              Enter The Collective
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Content: Base Layer (Cream) */}
      <section className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32 lg:py-48 flex flex-col gap-24 md:gap-40 lg:gap-64 relative z-10 bg-bone">
        {/* Strategy */}
        <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-32">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] overflow-hidden group cursor-pointer shadow-lg shadow-charcoal/5">
            <img 
              alt="Strategy Session" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 contrast-[0.95] transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" 
            />
          </div>
          <div className="w-full lg:w-5/12 pb-4 lg:pb-8">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="text-[10px] md:text-[11px] font-bold tracking-architectural text-orange-burnished">01 — STRATEGY</span>
              <span className="h-[1px] w-12 md:w-16 bg-charcoal/10"></span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6 md:mb-10 text-charcoal">Strategic Brand Architecture</h2>
            <p className="font-sans font-normal text-base sm:text-lg md:text-xl leading-7 md:leading-9 text-charcoal/90 text-justify mb-8 md:mb-12 max-w-md">
              Elite talent management begins with strategic brand consulting. We architect comprehensive brand identities that transform creative talent into global icons. From music artists to content creators, we build brand narratives that drive commercial success.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-architectural text-charcoal hover:text-orange-burnished transition-colors">
              Read The Philosophy
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Diversity */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12 lg:gap-32">
          <div className="w-full lg:w-1/2 relative aspect-[3/4] overflow-hidden group mt-0 cursor-pointer shadow-lg shadow-charcoal/5">
             <div className="absolute inset-0 bg-olive-deep/10 mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
            <img 
              alt="Performance" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
              src="/work.jpg" 
            />
          </div>
          <div className="w-full lg:w-5/12 pt-0 lg:pt-24 flex flex-col items-start lg:items-end lg:text-right">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="h-[1px] w-12 md:w-16 bg-charcoal/10 hidden lg:block"></span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-architectural text-olive-deep">02 — DIVERSITY</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6 md:mb-10 text-charcoal">Industry-Agnostic Excellence</h2>
            <p className="font-sans font-normal text-base sm:text-lg md:text-xl leading-7 md:leading-9 text-charcoal/90 text-justify lg:text-right mb-8 md:mb-12 max-w-md">
              From sonic branding for luxury brands to influencer management for digital creators, we deliver brand strategy consulting across every industry. Music, media, real estate, technology—our expertise transcends traditional boundaries.
            </p>
            <Link to="/legacy" className="group inline-flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-architectural text-charcoal hover:text-olive-deep transition-colors">
              View Blueprints
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Three Houses: Middle Layer (Sand) */}
      <section className="pt-24 md:pt-40 w-full relative z-10 bg-sand">
        <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-charcoal/10 pb-8">
          <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">Domains of Dominance</h3>
          <span className="mt-4 md:mt-0 text-[10px] uppercase tracking-architectural text-charcoal/50 font-bold">Our Verticals</span>
        </div>
        
        <div className="flex flex-col lg:flex-row w-full h-auto min-h-[1200px] lg:min-h-0 lg:h-[700px]">
          
          {/* House I - Sonic Spectrum */}
          <Link to="/legacy" className="group relative flex-1 min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[1.5] bg-navy-premium cursor-pointer border-b lg:border-b-0 lg:border-r border-white/5">
            <img 
              alt="Sonic Branding Agency - Music Talent Management Services" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" 
            />
            <div className="absolute inset-0 bg-navy-premium/50 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-16 flex flex-col justify-end z-20">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-architectural text-white/80 mb-4 md:mb-6 border border-white/20 px-3 py-1 bg-navy-premium/40 backdrop-blur-sm">Sonic Branding</span>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Sonic Spectrum</h3>
                <p className="text-white/90 font-sans font-normal text-sm md:text-base max-w-xs leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Music talent management, artist development, sonic branding, and audio identity design for global brands.
                </p>
              </div>
            </div>
          </Link>

          {/* House II - Dialogue Axis */}
          <Link to="/ecosystem" className="group relative flex-1 min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[1.5] bg-olive-deep cursor-pointer border-b lg:border-b-0 lg:border-r border-white/5">
            <img 
              alt="Influencer Management Company - Content Creator Strategy" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
              src="/media.jpg" 
            />
            <div className="absolute inset-0 bg-olive-deep/50 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-16 flex flex-col justify-end z-20">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-architectural text-white/80 mb-4 md:mb-6 border border-white/20 px-3 py-1 bg-olive-deep/40 backdrop-blur-sm">Influencer Management</span>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Dialogue Axis</h3>
                 <p className="text-white/90 font-sans font-normal text-sm md:text-base max-w-xs leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Influencer partnerships, content creator management, media strategy, and digital brand narrative architecture.
                </p>
              </div>
            </div>
          </Link>

          {/* House III - Estate Vision */}
          <Link to="/global" className="group relative flex-1 min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[1.5] bg-orange-burnished cursor-pointer">
            <img 
              alt="Real Estate Brand Consulting - Property Branding Services" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
              src="/himalaya.jpg" 
            />
             <div className="absolute inset-0 bg-orange-burnished/20 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-16 flex flex-col justify-end z-20">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-architectural text-white/80 mb-4 md:mb-6 border border-white/20 px-3 py-1 bg-orange-burnished/40 backdrop-blur-sm">Real Estate Branding</span>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Estate Vision</h3>
                 <p className="text-white/90 font-sans font-normal text-sm md:text-base max-w-xs leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Real estate brand development, property branding, location strategy, and luxury development marketing.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 md:py-32 bg-bone">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-charcoal/70 font-sans">Learn more about PRAEQ's elite talent management and brand architecture services</p>
        </div>
        
        <div className="space-y-8">
          {homeFAQs.map((faq, index) => (
            <div key={index} className="border-b border-charcoal/10 pb-8">
              <h3 className="font-sans font-bold text-xl md:text-2xl text-charcoal mb-4">{faq.question}</h3>
              <p className="font-sans text-base md:text-lg text-charcoal/80 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect With Us: Top Layer (Linen) for Strong Warmth */}
      <section className="relative w-full py-24 md:py-32 lg:py-48 bg-linen overflow-hidden border-t border-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">
            
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy-premium leading-[0.9] mb-6 md:mb-10">
                    Connect <br/> <span className="italic font-light text-orange-burnished">with us</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-charcoal/90 font-normal font-sans max-w-lg mx-auto md:mx-0 mb-8 md:mb-12 leading-relaxed">
                    Learn how we can elevate your brand identity through our proprietary infrastructure.
                </p>
                <Link to="/submission" className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-navy-premium text-white text-[10px] md:text-[11px] uppercase tracking-architectural hover:bg-orange-burnished transition-colors duration-300 shadow-xl shadow-navy-premium/10 group font-bold">
                    Reach Out 
                    <span className="material-symbols-outlined ml-3 text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
                </Link>
            </div>

            {/* Bubbles */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative mt-8 md:mt-0">
               <div className="absolute top-[10%] left-[20%] w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white border border-charcoal/5 shadow-lg flex items-center justify-center animate-float hover:scale-110 transition-transform">
                     <span className="font-bold text-navy-premium text-xl md:text-2xl font-sans">in</span>
                </div>
                <div className="absolute top-[40%] left-[5%] w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-white border border-charcoal/5 shadow-lg flex items-center justify-center animate-float-delayed hover:scale-110 transition-transform">
                     <span className="material-symbols-outlined text-3xl md:text-4xl text-orange-burnished">photo_camera</span>
                </div>
                 <div className="absolute bottom-[20%] right-[10%] w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-navy-premium/5 border border-navy-premium/10 shadow-lg flex items-center justify-center animate-float hover:scale-110 transition-transform">
                     <span className="font-bold text-navy-premium text-2xl md:text-3xl font-sans">Bē</span>
                </div>
                <div className="absolute bottom-[10%] left-[30%] w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white border border-charcoal/5 shadow-lg flex items-center justify-center animate-float-delayed hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl md:text-3xl text-olive-deep">videocam</span>
                </div>
            </div>
        </div>
      </section>

      {/* Footer is now handled globally in App.tsx */}
    </main>
    </>
  );
};

export default Home;