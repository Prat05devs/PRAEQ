import React from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema, organizationSchema } from '../components/schemas';

const Legacy: React.FC = () => {
  const legacyBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/legacy' }
  ]);

  const combinedSchema = [legacyBreadcrumb, organizationSchema];

  return (
    <>
      <SEO 
        title="Brand Architecture Portfolio | PRAEQ Talent Management Case Studies"
        description="Explore PRAEQ's portfolio of elite talent management and brand architecture projects. From sonic branding for music artists to influencer campaigns and real estate brand development across industries. Industry-agnostic excellence demonstrated."
        canonical="/legacy"
        keywords="brand architecture portfolio, talent management case studies, sonic branding examples, influencer campaign portfolio, music talent success stories, real estate branding projects, brand strategy examples, creative agency portfolio"
        schema={combinedSchema}
      />
      <main className="flex-grow w-full max-w-[1920px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-32 md:pt-48 pb-24 md:pb-32 bg-bone text-charcoal">
      {/* Hero Section */}
      <section className="mb-24 md:mb-40 max-w-5xl">
        <div className="flex flex-col gap-6 md:gap-10 animate-fade-in-up">
          <h1 className="text-charcoal text-5xl sm:text-6xl md:text-8xl font-serif italic tracking-tight leading-[0.9]">
            Brand Architecture <br /> <span className="not-italic font-light">Portfolio</span>
          </h1>
          <div className="h-[2px] w-24 md:w-32 bg-orange-burnished"></div>
          <p className="text-charcoal text-lg md:text-2xl lg:text-3xl font-normal leading-relaxed max-w-3xl font-sans text-balance">
            We architect excellence across every domain. From sonic branding for music artists to influencer management campaigns to real estate brand development—we deliver industry-agnostic talent management and strategic brand consulting that transforms careers and properties into icons.
          </p>
        </div>
      </section>

      {/* Gallery Grid (Asymmetrical Masonry) */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-40 gap-x-12 lg:gap-x-24 auto-rows-min">
          
          {/* Blueprint 01 */}
          <div className="group relative flex flex-col gap-4 md:gap-6 md:row-span-2">
            <div className="absolute -left-4 md:-left-12 -top-12 md:-top-20 text-[100px] md:text-[180px] leading-none font-bold text-charcoal/5 select-none z-0 pointer-events-none font-serif">01</div>
            <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden bg-[#f0edeb] z-10 shadow-xl shadow-charcoal/5 cursor-pointer">
              <img 
                className="w-full h-full object-cover grayscale contrast-[0.9] transition-transform duration-[0.8s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2670&auto=format&fit=crop"
                alt="The Cultural Voice"
              />
              <div className="absolute inset-0 bg-navy-premium/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                 <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 border-l-4 border-navy-premium max-w-[95%] md:max-w-[90%] translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                    <p className="text-navy-premium text-[10px] md:text-xs uppercase tracking-architectural mb-2 md:mb-3 font-bold font-sans">Narrative Architecture</p>
                    <p className="text-charcoal text-sm md:text-base font-sans font-medium leading-relaxed">Transforming a singular voice into a global personality through targeted media placement.</p>
                </div>
              </div>
            </div>
            <div className="z-10 pt-4 border-t border-charcoal/10 mt-2">
              <h3 className="text-charcoal text-3xl md:text-4xl font-serif mt-2">The Cultural Voice</h3>
              <p className="text-charcoal/80 text-xs md:text-sm mt-3 flex items-center gap-2 font-sans tracking-architectural uppercase font-bold">
                <span className="material-symbols-outlined text-[16px] text-orange-burnished">mic</span> Rising Podcaster
              </p>
            </div>
          </div>

          {/* Blueprint 02 */}
          <div className="group relative flex flex-col gap-4 md:gap-6 mt-12 md:mt-40">
            <div className="absolute -right-4 md:-right-8 -top-10 md:-top-16 text-[100px] md:text-[180px] leading-none font-bold text-charcoal/5 select-none z-0 pointer-events-none font-serif">02</div>
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#f0edeb] z-10 shadow-xl shadow-charcoal/5 cursor-pointer">
              <img 
                className="w-full h-full object-cover grayscale contrast-[0.9] transition-transform duration-[0.8s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=2670&auto=format&fit=crop"
                alt="Expedition Architect"
              />
               <div className="absolute inset-0 bg-orange-burnished/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                 <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 border-l-4 border-orange-burnished max-w-[95%] md:max-w-[90%] translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                    <p className="text-orange-burnished text-[10px] md:text-xs uppercase tracking-architectural mb-2 md:mb-3 font-bold font-sans">Brand Scaling</p>
                    <p className="text-charcoal text-sm md:text-base font-sans font-medium leading-relaxed">Dominating the Himalayan treks of Chamoli to create an elite exploration brand.</p>
                </div>
              </div>
            </div>
            <div className="z-10 pt-4 border-t border-charcoal/10 mt-2">
              <h3 className="text-charcoal text-3xl md:text-4xl font-serif mt-2">The Expedition Architect</h3>
              <p className="text-charcoal/80 text-xs md:text-sm mt-3 flex items-center gap-2 font-sans tracking-architectural uppercase font-bold">
                <span className="material-symbols-outlined text-[16px] text-orange-burnished">landscape</span> Tourism Entrepreneur
              </p>
            </div>
          </div>

          {/* Blueprint 03 */}
          <div className="group relative flex flex-col gap-4 md:gap-6 mt-12 lg:mt-12">
            <div className="absolute -left-4 md:-left-8 -top-10 md:-top-16 text-[100px] md:text-[180px] leading-none font-bold text-charcoal/5 select-none z-0 pointer-events-none font-serif">03</div>
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#f0edeb] z-10 shadow-xl shadow-charcoal/5 cursor-pointer">
              <img 
                className="w-full h-full object-cover grayscale contrast-[0.9] transition-transform duration-[0.8s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop"
                alt="The Hospitality Sage"
              />
               <div className="absolute inset-0 bg-olive-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                 <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 border-l-4 border-olive-deep max-w-[95%] md:max-w-[90%] translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                    <p className="text-olive-deep text-[10px] md:text-xs uppercase tracking-architectural mb-2 md:mb-3 font-bold font-sans">Expert Transition</p>
                    <p className="text-charcoal text-sm md:text-base font-sans font-medium leading-relaxed">Architected the transition from "employee" to "expert consultant" for a hotel veteran.</p>
                </div>
              </div>
            </div>
            <div className="z-10 pt-4 border-t border-charcoal/10 mt-2">
              <h3 className="text-charcoal text-3xl md:text-4xl font-serif mt-2">The Hospitality Sage</h3>
              <p className="text-charcoal/80 text-xs md:text-sm mt-3 flex items-center gap-2 font-sans tracking-architectural uppercase font-bold">
                <span className="material-symbols-outlined text-[16px] text-orange-burnished">concierge</span> Elite Consultant
              </p>
            </div>
          </div>

           {/* Blueprint 04 */}
           <div className="group relative flex flex-col gap-4 md:gap-6 mt-12 md:-mt-48">
            <div className="absolute -right-4 md:right-8 -top-12 md:-top-20 text-[100px] md:text-[180px] leading-none font-bold text-charcoal/5 select-none z-0 pointer-events-none font-serif">04</div>
            <div className="relative w-full aspect-square overflow-hidden bg-[#f0edeb] z-10 shadow-xl shadow-charcoal/5 cursor-pointer">
              <img 
                className="w-full h-full object-cover grayscale contrast-[0.9] transition-transform duration-[0.8s] ease-out group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop"
                alt="The Sonic Transition"
              />
               <div className="absolute inset-0 bg-navy-premium/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                 <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 border-l-4 border-navy-premium max-w-sm translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-lg">
                    <p className="text-navy-premium text-[10px] md:text-xs uppercase tracking-architectural mb-2 md:mb-3 font-bold font-sans">Business Structure</p>
                    <p className="text-charcoal text-sm md:text-base font-sans font-medium leading-relaxed">Turning a side-hustle into a dominant career through creative fuel and strategy.</p>
                </div>
              </div>
            </div>
            <div className="z-10 pt-4 max-w-md border-t border-charcoal/10 mt-2">
              <h3 className="text-charcoal text-3xl md:text-4xl font-serif mt-2">The Sonic Transition</h3>
              <p className="text-charcoal/80 text-xs md:text-sm mt-3 flex items-center gap-2 font-sans tracking-architectural uppercase font-bold">
                <span className="material-symbols-outlined text-[16px] text-orange-burnished">equalizer</span> Music Producer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-[6px] md:h-[8px] bg-transparent z-50 pointer-events-none">
        <div className="h-full bg-orange-burnished" style={{ width: '35%' }}></div>
      </div>
    </main>
    </>
  );
};

export default Legacy;