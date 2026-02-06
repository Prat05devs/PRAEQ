import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { breadcrumbSchema, organizationSchema } from '../components/schemas';

const Timeline: React.FC = () => {
  const timelineBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Process', url: '/timeline' }
  ]);

  const combinedSchema = [timelineBreadcrumb, organizationSchema];

  return (
    <>
      <SEO 
        title="Brand Architecture Process | PRAEQ Talent Management Methodology"
        description="Discover PRAEQ's strategic brand architecture and talent management process. From discovery and brand strategy consulting to execution and global launch. Our methodology for music artists, influencers, and real estate brand development."
        canonical="/timeline"
        keywords="brand architecture process, talent management methodology, brand strategy process, career development roadmap, brand consulting steps, talent agency process, strategic brand development, brand architecture methodology"
        schema={combinedSchema}
      />
      <main className="relative w-full flex flex-col items-center bg-bone font-display text-charcoal pt-20">
      
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-slate-dark/5 rounded-full blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[30%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-bronze/5 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-charcoal/5 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero */}
      <section className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border-b border-bronze/30">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-bronze font-sans">Brand Architecture Methodology</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight text-charcoal mb-6 leading-[1.1]">
            Strategic Brand <br/> <span className="italic font-light">Development Process</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-charcoal font-sans font-normal leading-relaxed max-w-xl mx-auto">
            Our proven talent management and brand strategy consulting methodology. From discovery to global launch - architecting careers for music artists, influencers, and real estate brands.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pb-24 md:pb-32">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-charcoal/10 hidden md:block"></div>
        <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-charcoal/10 md:hidden"></div>

        <div className="space-y-16 md:space-y-32 py-10">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full md:w-[45%] pl-12 sm:pl-16 md:pl-0 md:pr-16 md:text-right order-2 md:order-1">
                    <div className="relative bg-white border border-charcoal/5 p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-500 overflow-hidden group-hover:-translate-y-1">
                         <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] md:text-[120px] text-slate-dark/5 select-none pointer-events-none">architecture</span>
                         <h3 className="text-2xl font-serif mb-3 text-charcoal relative z-10">Discovery & Blueprinting</h3>
                         <p className="text-charcoal font-sans font-normal mb-6 relative z-10 text-base leading-relaxed">Establishing the foundational geometry for career acceleration.</p>
                         <div className="inline-block border border-bronze/20 px-3 py-1.5 md:px-4 md:py-2 bg-bone">
                            <span className="text-[10px] md:text-xs font-bold text-bronze font-sans tracking-wide uppercase">Outcome: 3-Year Strategic Roadmap</span>
                         </div>
                    </div>
                </div>
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 order-1 md:order-2 z-20">
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-bone border border-charcoal/20 shadow-lg">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-bronze rounded-full"></div>
                    </div>
                </div>
                <div className="hidden md:block w-[45%] order-3"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="hidden md:block w-[45%] order-1"></div>
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 order-1 md:order-2 z-20">
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-bone border border-charcoal/20 shadow-lg">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-slate-dark rounded-full"></div>
                    </div>
                </div>
                 <div className="w-full md:w-[45%] pl-12 sm:pl-16 md:pl-16 order-2 md:order-3">
                    <div className="relative bg-white border border-charcoal/5 p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-500 overflow-hidden group-hover:-translate-y-1">
                         <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-[80px] md:text-[120px] text-bronze/5 select-none pointer-events-none">precision_manufacturing</span>
                         <h3 className="text-2xl font-serif mb-3 text-charcoal relative z-10">Machinery Integration</h3>
                         <p className="text-charcoal font-sans font-normal mb-6 relative z-10 text-base leading-relaxed">Implementing high-velocity operational workflows.</p>
                         <div className="inline-block border border-slate-dark/20 px-3 py-1.5 md:px-4 md:py-2 bg-bone">
                            <span className="text-[10px] md:text-xs font-bold text-slate-dark font-sans tracking-wide uppercase">Outcome: Efficiency <span className="text-bronze">+45%</span></span>
                         </div>
                    </div>
                </div>
            </div>
             {/* Step 3 */}
             <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                <div className="w-full md:w-[45%] pl-12 sm:pl-16 md:pl-0 md:pr-16 md:text-right order-2 md:order-1">
                    <div className="relative bg-white border border-charcoal/5 p-6 md:p-8 shadow-sm hover:shadow-lg hover:shadow-charcoal/5 transition-all duration-500 overflow-hidden group-hover:-translate-y-1">
                         <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[80px] md:text-[120px] text-charcoal/5 select-none pointer-events-none">trending_up</span>
                         <h3 className="text-2xl font-serif mb-3 text-charcoal relative z-10">Market Penetration</h3>
                         <p className="text-charcoal font-sans font-normal mb-6 relative z-10 text-base leading-relaxed">Aggressive positioning in tier-one industry sectors.</p>
                         <div className="inline-block border border-charcoal/20 px-3 py-1.5 md:px-4 md:py-2 bg-bone">
                            <span className="text-[10px] md:text-xs font-bold text-charcoal font-sans tracking-wide uppercase">Outcome: Top 5 Position Secured</span>
                         </div>
                    </div>
                </div>
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 order-1 md:order-2 z-20">
                    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-bone border border-charcoal/20 shadow-lg">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-charcoal rounded-full"></div>
                    </div>
                </div>
                <div className="hidden md:block w-[45%] order-3"></div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full py-20 md:py-24 bg-white border-t border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal mb-6">Ready for Strategic Brand Architecture?</h2>
            <p className="text-base sm:text-lg md:text-xl text-charcoal font-sans font-normal mb-10 max-w-xl mx-auto">Our brand strategy consulting and talent management process is ready. Begin your transformation with PRAEQ today.</p>
            <Link to="/submission" className="inline-flex items-center gap-3 bg-charcoal hover:bg-bronze text-white text-xs uppercase tracking-[0.25em] font-bold px-6 py-3 md:px-8 md:py-4 shadow-xl shadow-charcoal/10 hover:shadow-bronze/20 transition-all transform hover:-translate-y-1">
                <span>Apply for Consultation</span>
                <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
        </div>
      </section>
    </main>
    </>
  );
};

export default Timeline;