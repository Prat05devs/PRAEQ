import React from 'react';
import SEO from '../components/SEO';
import { breadcrumbSchema, faqSchema, organizationSchema } from '../components/schemas';

const About: React.FC = () => {
  const aboutBreadcrumb = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ]);

  const aboutFaq = faqSchema([
    {
      question: "What is brand architecture?",
      answer: "Brand architecture is the strategic framework that defines how brands and sub-brands relate to each other within an organization. At PRAEQ, we architect sonic identities, influencer strategies, and real estate brand narratives that create lasting market dominance. Our brand architecture consulting approach builds structural excellence for talent, artists, and properties."
    },
    {
      question: "Who founded PRAEQ?",
      answer: "PRAEQ was founded by Prateek, a strategic brand architect with a vision for elevating elite talent to their absolute zenith. Through partnerships with Axocom Media and Saffron Hill Studio, PRAEQ operates as a high-performance syndicate specializing in talent management, sonic branding, influencer strategy, and real estate brand development."
    },
    {
      question: "What makes PRAEQ's brand strategy different?",
      answer: "PRAEQ doesn't just help clients grow—we rebuild the landscape around them so growth becomes inevitable. Our brand architecture philosophy combines strategic brand consulting, visual design, media relations, and industry-agnostic excellence to create unapologetic brand narratives that dominate markets across music, influencer, and real estate sectors."
    }
  ]);

  const combinedSchema = [aboutBreadcrumb, aboutFaq, organizationSchema];

  return (
    <>
      <SEO 
        title="About PRAEQ | Brand Architecture Philosophy & Strategic Consulting"
        description="Founded by Prateek, PRAEQ is a high-performance brand architecture firm specializing in strategic brand consulting, talent management, sonic branding, influencer strategies, and real estate brand development. Discover our philosophy of structural excellence."
        canonical="/about"
        keywords="brand architecture firm, brand architecture philosophy, strategic brand consulting, brand strategy consulting, brand narrative development, talent management philosophy, brand identity consulting, brand architecture agency"
        schema={combinedSchema}
      />
      <main className="flex-grow bg-bone">
      <div className="w-full flex flex-col lg:flex-row min-h-[100vh]">
        <div className="w-full lg:w-1/2 relative lg:sticky lg:top-0 h-[50vh] lg:h-screen overflow-hidden bg-[#e5e5e5]">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-bone lg:hidden"></div>
          <img 
            alt="Brand Architecture Founder - Strategic Brand Consulting" 
            className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-[1.1] opacity-90 mix-blend-multiply" 
            src="/about.png" 
          />
          <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 z-20 hidden lg:block">
            <div className="h-16 w-32 relative">
                <svg className="w-full h-full text-charcoal fill-none stroke-current stroke-2" viewBox="0 0 200 60">
                    <path d="M10,40 Q30,10 50,40 T90,30 T130,50 T180,20" style={{opacity: 0.8}}></path>
                </svg>
            </div>
            <p className="text-charcoal font-sans text-[10px] tracking-[0.25em] uppercase mt-2 font-bold">Prateek / Founder & Brand Architect</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 py-12 md:px-16 md:py-24 lg:px-24 lg:py-32 bg-bone flex flex-col justify-between">
           <div className="max-w-xl mx-auto w-full">
             <div className="mb-12 md:mb-20">
                <span className="text-bronze font-sans text-[10px] tracking-[0.25em] uppercase block mb-4 font-bold">Brand Architecture Philosophy</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-charcoal mb-6 leading-none tracking-tight font-display">
                    Strategic Brand <br/>Excellence.
                </h1>
                <div className="w-24 h-[1px] bg-charcoal mt-8"></div>
             </div>
             
             <div className="space-y-12 md:space-y-16">
                <div className="group">
                    <p className="text-charcoal/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-sans font-normal text-justify">
                        Success at the highest level is never an accident. It is a structural achievement built through strategic brand architecture.
                        <br/><br/>
                        Founded by Prateek, PRAEQ was born from a singular passion for architecting brand narratives that elevate the world's most capable individuals and properties to their absolute zenith. We are a high-performance brand strategy consulting collective specializing in talent management, sonic branding, influencer strategy, and real estate brand development.
                    </p>
                </div>
                
                <div className="group">
                    <span className="text-bronze font-sans text-[10px] tracking-[0.25em] uppercase block mb-4 font-bold">The Syndicate</span>
                    <h2 className="text-2xl font-serif text-charcoal mb-6">A Strategic Partnership Engine</h2>
                    <p className="text-charcoal/90 text-lg sm:text-xl leading-relaxed font-sans font-normal text-justify">
                        PRAEQ is a syndicate of master brand strategists, world-class visual architects, and media relations experts working in synchronized rhythm. Prateek's brand architecture vision provides the spark, but our global partnership engine is the fuel. We don't "help" you grow—we architect brand identities and rebuild the competitive landscape around you so that dominance becomes the only possible outcome. From music talent management to influencer partnerships to luxury real estate branding, we create strategic brand narratives that shape industries.
                    </p>
                </div>

                <div className="group">
                    <span className="text-bronze font-sans text-[10px] tracking-[0.25em] uppercase block mb-4 font-bold">FAQ</span>
                    <h2 className="text-2xl font-serif text-charcoal mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-sans font-semibold text-charcoal mb-2">What is brand architecture?</h3>
                            <p className="text-charcoal/80 text-base leading-relaxed font-sans">Brand architecture is the strategic framework that defines how brands and sub-brands relate to each other. At PRAEQ, we architect sonic identities, influencer strategies, and real estate brand narratives that create lasting market dominance through structural excellence.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-sans font-semibold text-charcoal mb-2">What makes PRAEQ's brand strategy different?</h3>
                            <p className="text-charcoal/80 text-base leading-relaxed font-sans">PRAEQ doesn't just help clients grow—we rebuild the landscape around them so growth becomes inevitable. Our brand architecture philosophy combines strategic consulting, visual design, media relations, and industry-agnostic excellence to create brand narratives that dominate markets.</p>
                        </div>
                    </div>
                </div>
             </div>
           </div>
           
           <div className="mt-24 md:mt-32 pt-12 border-t border-charcoal/10 max-w-xl mx-auto w-full">
             <h3 className="text-charcoal font-sans text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">The Collective</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex flex-col gap-2">
                    <span className="text-bronze text-[9px] uppercase tracking-widest font-sans font-bold">Strategic Lead</span>
                    <span className="text-charcoal font-serif text-lg italic border-b border-charcoal/5 pb-2">Prateek</span>
                </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-bronze text-[9px] uppercase tracking-widest font-sans font-bold">Visual Architecture</span>
                    <span className="text-charcoal font-serif text-lg italic border-b border-charcoal/5 pb-2">Axocom Media</span>
                </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-bronze text-[9px] uppercase tracking-widest font-sans font-bold">Media Relations</span>
                    <span className="text-charcoal font-serif text-lg italic border-b border-charcoal/5 pb-2">Saffron Hill Studio</span>
                </div>
             </div>
           </div>
        </div>
      </div>
    </main>
    </>
  );
};

export default About;