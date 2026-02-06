import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { breadcrumbSchema, organizationSchema } from '../components/schemas';

const Submission: React.FC = () => {
  const submissionBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Submit Application', url: '/submission' }
  ]);

  const combinedSchema = [submissionBreadcrumb, organizationSchema];

  return (
    <>
      <SEO 
        title="Apply for Talent Management | PRAEQ Brand Architecture Consultation"
        description="Submit your application to PRAEQ's elite talent management program. We partner with exceptional talent in music, influencer marketing, and real estate for strategic brand architecture consulting. Contact us for brand development consultation."
        canonical="/submission"
        keywords="talent management application, brand architecture consultation, submit to talent agency, influencer management inquiry, music talent application, brand consulting contact, real estate brand consultation, talent agency submission"
        schema={combinedSchema}
      />
      <main className="relative flex min-h-screen w-full flex-col overflow-hidden font-display text-slate-dark pt-24 md:pt-32 bg-bone">
        
        {/* Architectural Background Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-0 left-[10%] md:left-[20%] w-[1px] h-full bg-charcoal/5"></div>
            <div className="absolute top-0 right-[10%] md:right-[20%] w-[1px] h-full bg-charcoal/5"></div>
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-charcoal/5"></div>
            <div className="absolute bottom-[30%] left-0 w-full h-[1px] bg-charcoal/5"></div>
        </div>
        
        <div className="relative z-20 flex h-full flex-col items-center justify-center p-6 md:p-8 flex-grow">
            <div className="flex flex-col items-center max-w-3xl w-full text-center space-y-12 md:space-y-16 animate-fade-in-up">
                
                <div className="space-y-6 md:space-y-8 max-w-2xl mx-auto">
                    <span className="text-orange-burnished font-sans text-[10px] md:text-[11px] tracking-architectural uppercase font-bold">Talent Management Application</span>
                    <h1 className="text-charcoal text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.05]">
                        Apply for Elite <br/>Brand Architecture
                    </h1>
                    <div className="w-12 md:w-16 h-[1px] bg-charcoal/20 mx-auto"></div>
                    <p className="font-sans text-charcoal text-base sm:text-lg md:text-xl font-normal tracking-wide leading-relaxed max-w-xl mx-auto">
                        PRAEQ provides strategic brand architecture consulting for exceptional talent only. We partner with music artists, content creators, influencers, and real estate professionals who possess the ambition to become international icons. Submit your application for talent management consultation.
                    </p>
                </div>

                {/* Form Placeholder */}
                <div className="w-full max-w-lg bg-white border border-charcoal/5 p-6 md:p-12 shadow-2xl shadow-charcoal/5 text-left relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-navy-premium"></div>
                    <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-charcoal/10">
                        <p className="text-[9px] md:text-[10px] font-mono text-charcoal/70 uppercase mb-2 tracking-widest font-bold">Investment Tier</p>
                        <p className="text-xs md:text-sm text-charcoal/70 mt-2 font-sans font-medium">We do not compete on price we dominate on results.</p>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-architectural font-bold font-sans text-charcoal/90">Full Name</label>
                            <input type="text" className="bg-bone border border-charcoal/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-orange-burnished focus:bg-white transition-all text-charcoal placeholder:text-charcoal/30 font-sans" placeholder="Enter your name" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-architectural font-bold font-sans text-charcoal/90">Primary Domain</label>
                            <input type="text" className="bg-bone border border-charcoal/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-orange-burnished focus:bg-white transition-all text-charcoal placeholder:text-charcoal/30 font-sans" placeholder="Enter your name" />
                        </div>
                         <div className="flex flex-col gap-2">
                            <label className="text-xs uppercase tracking-architectural font-bold font-sans text-charcoal/90">Portfolio / Link</label>
                            <input type="text" className="bg-bone border border-charcoal/10 p-3 md:p-4 text-sm md:text-base focus:outline-none focus:border-orange-burnished focus:bg-white transition-all text-charcoal placeholder:text-charcoal/30 font-sans" placeholder="http://" />
                        </div>
                        <button className="w-full mt-4 md:mt-6 bg-navy-premium text-white py-4 md:py-5 text-[10px] md:text-[11px] uppercase tracking-architectural font-bold hover:bg-orange-burnished transition-colors duration-500 shadow-lg">
                            Submit Inquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  );
};

export default Submission;