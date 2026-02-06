import React, { useState } from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../components/schemas';

const Ecosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState('Creative Labs');

  const ecosystemSchema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Infrastructure & Media Strategy', url: '/ecosystem' }
  ]);

  return (
    <>
      <SEO 
        title="Influencer Management & Media Strategy Infrastructure"
        description="PRAEQ's Dialogue Axis: Elite influencer management, content creator partnerships, and media strategy consulting. We architect digital brand narratives for social media talent and modern authority figures across platforms."
        canonical="/ecosystem"
        keywords="influencer management company, content creator management, media strategy consulting, social media talent management, influencer partnerships, digital talent agency, brand ambassador management, influencer campaign management"
        schema={ecosystemSchema}
      />
      <div className="flex flex-col w-full bg-bone text-charcoal font-display selection:bg-orange-burnished/20 selection:text-charcoal">
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/infraBg.jpg" 
            alt="Influencer Management Infrastructure - Media Strategy Consulting"
            className="w-full h-full object-cover opacity-50 mix-blend-multiply filter contrast-100"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32">
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-architectural font-sans" style={{color: '#F5A76B'}}>Dialogue Axis</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light tracking-tight leading-[1.05]" style={{color: '#F5F5F0'}}>
            Influencer Management <br/>& Media Strategy
          </h1>
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-normal max-w-3xl leading-relaxed font-sans text-balance" style={{color: '#F5F5F0'}}>
          Elite content creator management and influencer partnerships. We architect digital brand narratives for social media talent, building media strategies that amplify authority across every platform.
        </p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 md:py-32 flex flex-col gap-20 md:gap-32">

      {/* Interactive Diagram */}
      <section className="relative w-full flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-charcoal/10 pb-6 md:pb-8 gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-2 md:mb-4">Influencer Management Infrastructure</h2>
            <p className="text-charcoal/90 max-w-lg font-sans text-base font-normal leading-relaxed">Interact with the network nodes to reveal our content creator management capabilities and media strategy consulting services.</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[10px] font-mono text-orange-burnished uppercase tracking-widest">Fig 1.1 — Media Strategy System</p>
          </div>
        </div>

        {/* Container - Stacked on Mobile, Row on Desktop. Using Sand for this layer. */}
        <div className="relative w-full bg-sand rounded-sm border border-charcoal/5 flex flex-col lg:flex-row shadow-xl shadow-charcoal/5 min-h-[600px] lg:min-h-[700px]">
           <div className="absolute inset-0 z-0 opacity-[0.04] bg-[radial-gradient(#2C3E50_1px,transparent_1px)] bg-[size:48px_48px]"></div>
           
           {/* Diagram Layer */}
           <div className="relative flex-1 h-[400px] sm:h-[500px] lg:h-auto z-10 p-4 md:p-12 flex items-center justify-center">
             <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#1A1A1A" strokeOpacity="0.1" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#1A1A1A" strokeOpacity="0.1" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#1A1A1A" strokeOpacity="0.1" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="70%" y2="65%" stroke="#C05621" strokeDasharray="6 4" strokeOpacity="0.6" strokeWidth="1.5" />
             </svg>

             {/* Central Node */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 md:gap-3 group cursor-pointer z-20" onClick={() => setActiveNode('Studio Syndicate')}>
                <div className="size-16 md:size-20 rounded-full bg-navy-premium text-white flex items-center justify-center shadow-2xl shadow-navy-premium/20 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl md:text-3xl">mic</span>
                </div>
                <span className="text-[9px] md:text-[10px] font-bold tracking-architectural uppercase bg-bone px-2 py-0.5 md:px-3 md:py-1 border border-charcoal/10 shadow-sm text-center">Studio Syndicate</span>
             </div>

             {/* Peripheral Nodes - Using Percentages */}
             <div className="absolute top-[20%] lg:top-[25%] left-[20%] lg:left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20" onClick={() => setActiveNode('Creative Labs')}>
                 <div className="size-10 md:size-14 rounded-full bg-white border border-charcoal/10 text-charcoal flex items-center justify-center hover:border-orange-burnished hover:text-orange-burnished transition-colors shadow-lg">
                    <span className="material-symbols-outlined text-lg md:text-2xl">palette</span>
                 </div>
                 <span className="text-[8px] md:text-[10px] font-bold tracking-wide text-charcoal uppercase">Creative Labs</span>
             </div>

             <div className="absolute top-[20%] lg:top-[25%] left-[80%] lg:left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20" onClick={() => setActiveNode('Social Engine')}>
                 <div className="size-10 md:size-14 rounded-full bg-white border border-charcoal/10 text-charcoal flex items-center justify-center hover:border-orange-burnished hover:text-orange-burnished transition-colors shadow-lg">
                    <span className="material-symbols-outlined text-lg md:text-2xl">share</span>
                 </div>
                 <span className="text-[8px] md:text-[10px] font-bold tracking-wide text-charcoal uppercase">Social Engine</span>
             </div>
             
             <div className="absolute top-[80%] lg:top-[75%] left-[20%] lg:left-[25%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group cursor-pointer z-20" onClick={() => setActiveNode('Legal')}>
                 <div className="size-10 md:size-14 rounded-full bg-white border border-charcoal/10 text-charcoal flex items-center justify-center hover:border-orange-burnished hover:text-orange-burnished transition-colors shadow-lg">
                    <span className="material-symbols-outlined text-lg md:text-2xl">gavel</span>
                 </div>
                 <span className="text-[8px] md:text-[10px] font-bold tracking-wide text-charcoal uppercase">Legal</span>
             </div>

             <div className="absolute top-[75%] lg:top-[65%] left-[80%] lg:left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer" onClick={() => setActiveNode('Content Studios')}>
                <div className="relative">
                    {activeNode === 'Content Studios' && <div className="absolute inset-0 bg-orange-burnished/20 rounded-full animate-ping"></div>}
                    <div className={`size-12 md:size-16 rounded-full ${activeNode === 'Content Studios' ? 'bg-orange-burnished text-white' : 'bg-white text-charcoal border border-charcoal/20'} flex items-center justify-center shadow-lg transition-colors`}>
                        <span className="material-symbols-outlined text-lg md:text-2xl">movie_filter</span>
                    </div>
                </div>
                <span className={`text-[8px] md:text-[10px] font-bold tracking-wide uppercase ${activeNode === 'Content Studios' ? 'text-orange-burnished' : 'text-charcoal'}`}>Production</span>
             </div>
           </div>

           {/* Info Panel */}
           <div className="w-full lg:w-[450px] border-t lg:border-t-0 lg:border-l border-charcoal/5 bg-white/60 backdrop-blur-xl p-8 md:p-14 flex flex-col justify-between z-20">
                <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-[9px] md:text-[10px] font-mono text-orange-burnished uppercase tracking-widest mb-2 font-bold">Active Unit</h4>
                            <h2 className="text-2xl md:text-3xl font-serif text-charcoal">{activeNode}</h2>
                        </div>
                        <span className="material-symbols-outlined text-charcoal/40 text-3xl">settings_suggest</span>
                    </div>
                    <div className="h-px w-full bg-charcoal/10"></div>
                    <div className="space-y-4 md:space-y-6 font-sans">
                        <p className="text-base md:text-lg text-charcoal leading-7 md:leading-8 font-normal">
                            {activeNode === 'Studio Syndicate' && "Elite content production facilities designed for influencer interviews, podcast recording, and professional media content creation."}
                            {activeNode === 'Creative Labs' && "In-house visual architects and video editors ensuring every piece of social media content is strategically designed for maximum engagement."}
                            {activeNode === 'Social Engine' && "Expert media strategists who architect influencer campaigns, content creator partnerships, and social media narratives that dominate platforms."}
                            {activeNode === 'Legal' && "Comprehensive legal support for influencer contracts, brand partnership negotiations, content rights management, and intellectual property protection."}
                            {activeNode === 'Content Studios' && "From 8K broadcast facilities to rapid-response social content suites optimized for content creators and influencer production."}
                        </p>
                    </div>
                    <div className="space-y-3 pt-2 md:pt-4 font-sans">
                        <h5 className="text-[9px] md:text-[10px] font-bold text-charcoal uppercase tracking-architectural">Influencer Management Capabilities</h5>
                        <ul className="text-sm text-charcoal space-y-2 md:space-y-3">
                            <li className="flex items-center gap-3"><div className="size-1.5 rounded-full bg-orange-burnished"></div> Content Creator Management</li>
                            <li className="flex items-center gap-3"><div className="size-1.5 rounded-full bg-navy-premium"></div> Social Media Strategy</li>
                            <li className="flex items-center gap-3"><div className="size-1.5 rounded-full bg-navy-premium"></div> Influencer Partnerships</li>
                        </ul>
                    </div>
                </div>
                <button className="mt-8 md:mt-12 w-full flex items-center justify-between p-4 md:p-5 bg-navy-premium text-white hover:bg-orange-burnished transition-colors group font-sans shadow-lg">
                    <span className="text-[9px] md:text-[10px] font-bold tracking-architectural uppercase">Access Labs</span>
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
           </div>
        </div>
      </section>

      {/* Physical Layer */}
      <section className="flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-2 md:gap-3">
            <span className="text-[9px] md:text-[10px] font-mono text-orange-burnished uppercase tracking-widest font-bold">Content Creator Facilities</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-charcoal">Global Production Infrastructure</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="group flex flex-col gap-4 md:gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop" alt="Influencer Podcast Studio - Content Creator Recording Facilities" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 contrast-[0.95]" />
                    <div className="absolute bottom-4 left-4 bg-white/95 text-charcoal text-[9px] md:text-[10px] px-3 py-1.5 uppercase tracking-architectural font-mono border border-charcoal/10 font-bold">Loc: London, UK</div>
                </div>
                <div className="flex flex-col px-1">
                    <div className="flex justify-between items-baseline border-b border-charcoal/10 pb-3 mb-3">
                        <h4 className="font-bold text-charcoal font-sans text-base md:text-lg uppercase tracking-wide">Content Creator Studios</h4>
                        <span className="text-[9px] md:text-[10px] font-mono text-orange-burnished">PODCAST</span>
                    </div>
                    <p className="text-sm md:text-base text-charcoal/80 font-sans font-normal leading-relaxed">Acoustically optimized environments for influencer podcasting, interviews, and professional audio content production.</p>
                </div>
            </div>
             <div className="group flex flex-col gap-4 md:gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=2574&auto=format&fit=crop" alt="Social Media Content Editing - Video Production for Influencers" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 contrast-[0.95]" />
                    <div className="absolute bottom-4 left-4 bg-white/95 text-charcoal text-[9px] md:text-[10px] px-3 py-1.5 uppercase tracking-architectural font-mono border border-charcoal/10 font-bold">Loc: New York, NY</div>
                </div>
                <div className="flex flex-col px-1">
                    <div className="flex justify-between items-baseline border-b border-charcoal/10 pb-3 mb-3">
                        <h4 className="font-bold text-charcoal font-sans text-base md:text-lg uppercase tracking-wide">Visual Content Labs</h4>
                        <span className="text-[9px] md:text-[10px] font-mono text-orange-burnished">VIDEO</span>
                    </div>
                    <p className="text-sm md:text-base text-charcoal/80 font-sans font-normal leading-relaxed">High-performance editing suites for social media content, influencer videos, and real-time rendering for content creators.</p>
                </div>
            </div>
             <div className="group flex flex-col gap-4 md:gap-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-200 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" alt="Influencer Strategy Planning - Media Consulting Services" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 contrast-[0.95]" />
                    <div className="absolute bottom-4 left-4 bg-white/95 text-charcoal text-[9px] md:text-[10px] px-3 py-1.5 uppercase tracking-architectural font-mono border border-charcoal/10 font-bold">Loc: Tokyo, JP</div>
                </div>
                <div className="flex flex-col px-1">
                    <div className="flex justify-between items-baseline border-b border-charcoal/10 pb-3 mb-3">
                        <h4 className="font-bold text-charcoal font-sans text-base md:text-lg uppercase tracking-wide">Media Strategy Hub</h4>
                        <span className="text-[9px] md:text-[10px] font-mono text-orange-burnished">STRATEGY</span>
                    </div>
                    <p className="text-sm md:text-base text-charcoal/80 font-sans font-normal leading-relaxed">Dedicated spaces for influencer partnership planning, social media strategy development, and brand collaboration negotiations.</p>
                </div>
            </div>
        </div>
      </section>
      </div>
      </div>
    </>
  );
};

export default Ecosystem;