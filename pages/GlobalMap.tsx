import React from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema, organizationSchema } from '../components/schemas';

const GlobalMap: React.FC = () => {
  const mapBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Global Network', url: '/globalmap' }
  ]);

  const combinedSchema = [mapBreadcrumb, organizationSchema];

  return (
    <>
      <SEO 
        title="Global Talent Management Network | PRAEQ Worldwide Brand Architecture"
        description="PRAEQ's global talent management and brand architecture network spans major markets worldwide. International reach for music artists, influencers, and real estate brands. Strategic brand consulting across continents."
        canonical="/globalmap"
        keywords="global talent management, international brand architecture, worldwide talent agency, global brand consulting, international influencer management, global music talent management, worldwide brand strategy, international brand development"
        schema={combinedSchema}
      />
      <main className="relative flex-1 w-full min-h-[100dvh] bg-bone overflow-hidden flex flex-col pt-20">
        {/* Background Map Image - Object Cover with fixed center anchoring */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply flex items-center justify-center">
            <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                alt="Minimalist map background" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-110" 
            />
        </div>

        {/* Map Container for Relative Positioning */}
        {/* We use a container that tries to maintain some aspect ratio or at least centers appropriately so points don't drift too wildly */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none hidden lg:block">
            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad-bronze" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#A67C52" stopOpacity="0" />
                        <stop offset="50%" stopColor="#A67C52" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#A67C52" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad-slate" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2C3E50" stopOpacity="0" />
                        <stop offset="50%" stopColor="#2C3E50" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2C3E50" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Arcs - Using percentages for path might be hard, so we assume a standard large screen ratio for desktop view lines */}
                {/* Lines are decorative and can be approximate */}
                <path d="M 15% 45% Q 30% 25% 45% 35%" fill="none" stroke="url(#grad-slate)" strokeDasharray="4,4" strokeLinecap="round" strokeWidth="1" />
                <path d="M 65% 47% Q 55% 30% 45% 35%" fill="none" stroke="url(#grad-bronze)" strokeLinecap="round" strokeWidth="1" />
            </svg>

             {/* Hub: Los Angeles - Left 15%, Top 45% */}
             <div className="absolute top-[45%] left-[15%] group cursor-pointer pointer-events-auto">
                <div className="relative flex items-center justify-center">
                    <div className="absolute size-10 rounded-full bg-slate-dark/10 animate-ping opacity-75"></div>
                    <div className="relative size-3 rounded-full bg-slate-dark shadow-md border border-white/50"></div>
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-white border border-charcoal/10 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-bold text-charcoal font-sans uppercase tracking-widest">Los Angeles</p>
                </div>
             </div>

             {/* Hub: HQ (London/Europe approx) - Left 45%, Top 35% */}
             <div className="absolute top-[35%] left-[45%] group cursor-pointer pointer-events-auto">
                <div className="relative flex items-center justify-center">
                    <div className="absolute size-14 rounded-full bg-bronze/10 animate-[ping_3s_linear_infinite]"></div>
                    <div className="absolute size-6 rounded-full bg-bronze/20"></div>
                    <div className="relative size-4 rounded-full bg-bronze shadow-lg border-2 border-bone flex items-center justify-center"></div>
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-max text-center mt-2">
                    <span className="block text-[9px] font-bold tracking-[0.2em] uppercase text-charcoal font-sans">PRAEQ HQ</span>
                </div>
             </div>

             {/* Hub: Delhi/Himalayas - Left 65%, Top 47% */}
             <div className="absolute top-[47%] left-[65%] group cursor-pointer pointer-events-auto">
                <div className="relative flex items-center justify-center">
                    <div className="absolute size-10 rounded-full bg-bronze/10 animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
                    <div className="relative size-3 rounded-full bg-bronze shadow-md border border-white/50"></div>
                </div>
                 <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-sm border border-charcoal/10 p-4 flex flex-col gap-2 z-30 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 border-b border-charcoal/5 pb-2">
                        <div className="size-1.5 rounded-full bg-bronze"></div>
                        <p className="text-[10px] font-bold text-charcoal uppercase tracking-widest font-sans">New Delhi</p>
                    </div>
                    <p className="text-[10px] text-charcoal/80 leading-relaxed font-sans font-medium">Estate Vision Hub active. Himalayan expedition logistics center.</p>
                </div>
             </div>
        </div>
        
        {/* Floating UI - Responsive Positioning */}
        <div className="absolute inset-0 z-30 pointer-events-none p-6 md:p-12 lg:p-16 flex flex-col justify-between pt-24 md:pt-32">
             <div className="pointer-events-auto self-end w-full sm:w-[320px] bg-white border border-charcoal/5 shadow-lg shadow-charcoal/5 overflow-hidden">
                <div className="px-6 py-4 border-b border-charcoal/5 bg-bone/50">
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-charcoal/70 font-sans">Impact Statistics</h3>
                </div>
                <div className="p-6 flex flex-col gap-6 font-display">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-charcoal/80 font-sans">Cultural Reach</span>
                            <span className="material-symbols-outlined text-charcoal/30 text-[16px]">public</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-serif text-charcoal">142 <span className="text-xs font-sans font-normal opacity-50 uppercase tracking-wide">Countries</span></p>
                    </div>
                     <div className="h-[1px] w-full bg-charcoal/5"></div>
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-charcoal/80 font-sans">Global Impressions</span>
                            <span className="material-symbols-outlined text-charcoal/30 text-[16px]">visibility</span>
                        </div>
                        <p className="text-2xl md:text-3xl font-serif text-charcoal">1.2 <span className="text-xs font-sans font-normal opacity-50 uppercase tracking-wide">Billion+</span></p>
                    </div>
                </div>
             </div>
             
             {/* Filter Tabs - Center Bottom */}
             <div className="pointer-events-auto self-center mt-auto mb-6 w-full flex justify-center">
                 <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-2 bg-white/80 backdrop-blur-md border border-charcoal/10 shadow-lg">
                    <button className="flex items-center gap-2 md:gap-3 pl-3 pr-4 py-2 bg-white hover:bg-bone transition-colors border border-charcoal/5 group">
                        <div className="size-1.5 rounded-full bg-bronze group-hover:scale-125 transition-transform"></div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-charcoal font-sans">Estate</span>
                    </button>
                    <button className="flex items-center gap-2 md:gap-3 pl-3 pr-4 py-2 bg-white hover:bg-bone transition-colors border border-charcoal/5 group">
                        <div className="size-1.5 rounded-full bg-slate-dark group-hover:scale-125 transition-transform"></div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-charcoal font-sans">Sonic</span>
                    </button>
                 </div>
             </div>
        </div>
    </main>
    </>
  );
};

export default GlobalMap;