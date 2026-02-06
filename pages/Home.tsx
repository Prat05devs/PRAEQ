import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
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
            We Architect Icons
          </h1>
          <div className="mt-8 md:mt-16 flex flex-col items-center gap-6 md:gap-8 max-w-xl lg:max-w-3xl mx-auto">
            <p className="font-sans font-normal text-base sm:text-lg md:text-2xl leading-relaxed text-balance px-4" style={{color: '#F5F5F0', textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'}}>
              Talent is a raw material. Fame is a design choice. <br className="hidden md:block"/>
              We don't just manage potential we engineer global legacies.
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
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6 md:mb-10 text-charcoal">Unapologetic <br/> Excellence</h2>
            <p className="font-sans font-normal text-base sm:text-lg md:text-xl leading-7 md:leading-9 text-charcoal/90 text-justify mb-8 md:mb-12 max-w-md">
              Success at the highest level is never an accident. It is a structural achievement. We rebuild the landscape around you so that growth becomes the only possible outcome.
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
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6 md:mb-10 text-charcoal">Proof of <br/> Concept</h2>
            <p className="font-sans font-normal text-base sm:text-lg md:text-xl leading-7 md:leading-9 text-charcoal/90 text-justify lg:text-right mb-8 md:mb-12 max-w-md">
              From high-altitude expeditions to high-fidelity sound. We seek out the extraordinary across the spectrum.
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
          
          {/* House I */}
          <Link to="/legacy" className="group relative flex-1 min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[1.5] bg-navy-premium cursor-pointer border-b lg:border-b-0 lg:border-r border-white/5">
            <img 
              alt="Sonic Spectrum" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" 
            />
            <div className="absolute inset-0 bg-navy-premium/50 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-16 flex flex-col justify-end z-20">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-architectural text-white/80 mb-4 md:mb-6 border border-white/20 px-3 py-1 bg-navy-premium/40 backdrop-blur-sm">House I</span>
                <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Sonic Spectrum</h4>
                <p className="text-white/90 font-sans font-normal text-sm md:text-base max-w-xs leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  High-Fidelity Influence for Music Producers and Audio Architects.
                </p>
              </div>
            </div>
          </Link>

          {/* House II */}
          <Link to="/ecosystem" className="group relative flex-1 min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[1.5] bg-olive-deep cursor-pointer border-b lg:border-b-0 lg:border-r border-white/5">
            <img 
              alt="Dialogue Axis" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
              src="/media.jpg" 
            />
            <div className="absolute inset-0 bg-olive-deep/50 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-16 flex flex-col justify-end z-20">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-architectural text-white/80 mb-4 md:mb-6 border border-white/20 px-3 py-1 bg-olive-deep/40 backdrop-blur-sm">House II</span>
                <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Dialogue Axis</h4>
                 <p className="text-white/90 font-sans font-normal text-sm md:text-base max-w-xs leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Amplifying the Voices of Modern Authority and Media Personalities.
                </p>
              </div>
            </div>
          </Link>

          {/* House III */}
          <Link to="/global" className="group relative flex-1 min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden transition-all duration-700 ease-out lg:hover:flex-[1.5] bg-orange-burnished cursor-pointer">
            <img 
              alt="Estate Vision" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-80 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105" 
              src="/himalaya.jpg" 
            />
             <div className="absolute inset-0 bg-orange-burnished/20 mix-blend-multiply z-10"></div>
            <div className="absolute inset-0 p-8 md:p-10 lg:p-16 flex flex-col justify-end z-20">
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block text-[9px] md:text-[10px] uppercase tracking-architectural text-white/80 mb-4 md:mb-6 border border-white/20 px-3 py-1 bg-orange-burnished/40 backdrop-blur-sm">House III</span>
                <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">Estate Vision</h4>
                 <p className="text-white/90 font-sans font-normal text-sm md:text-base max-w-xs leading-relaxed opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Curating once-in-a-lifetime Himalayan expeditions and unique traditions beyond luxury.
                </p>
              </div>
            </div>
          </Link>
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
  );
};

export default Home;