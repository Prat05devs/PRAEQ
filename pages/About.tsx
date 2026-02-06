import React from 'react';

const About: React.FC = () => {
  return (
    <main className="flex-grow pt-0 md:pt-20 bg-bone">
      <div className="w-full flex flex-col lg:flex-row min-h-[90vh]">
        <div className="w-full lg:w-1/2 relative lg:sticky lg:top-0 h-[50vh] lg:h-screen overflow-hidden bg-[#e5e5e5]">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-bone lg:hidden"></div>
          <img 
            alt="High-key monochrome portrait" 
            className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-[1.1] opacity-90 mix-blend-multiply" 
            src="/about.png" 
          />
          <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 z-20 hidden lg:block">
            <div className="h-16 w-32 relative">
                <svg className="w-full h-full text-charcoal fill-none stroke-current stroke-2" viewBox="0 0 200 60">
                    <path d="M10,40 Q30,10 50,40 T90,30 T130,50 T180,20" style={{opacity: 0.8}}></path>
                </svg>
            </div>
            <p className="text-charcoal font-sans text-[10px] tracking-[0.25em] uppercase mt-2 font-bold">Prateek / Founder</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-6 py-12 md:px-16 md:py-24 lg:px-24 lg:py-32 bg-bone flex flex-col justify-between">
           <div className="max-w-xl mx-auto w-full">
             <div className="mb-12 md:mb-20">
                <span className="text-bronze font-sans text-[10px] tracking-[0.25em] uppercase block mb-4 font-bold">The Philosophy</span>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-charcoal mb-6 leading-none tracking-tight font-display">
                    Unapologetic <br/>Excellence.
                </h1>
                <div className="w-24 h-[1px] bg-charcoal mt-8"></div>
             </div>
             
             <div className="space-y-12 md:space-y-16">
                <div className="group">
                    <p className="text-charcoal/90 text-lg sm:text-xl md:text-2xl leading-relaxed font-sans font-normal text-justify">
                        Success at the highest level is never an accident. It is a structural achievement.
                        <br/><br/>
                        Founded by Prateek, PRAEQ was born from a singular passion for seeing the world's most capable individuals reach their absolute zenith. But we are more than a name; we are a high-performance collective.
                    </p>
                </div>
                
                <div className="group">
                    <span className="text-bronze font-sans text-[10px] tracking-[0.25em] uppercase block mb-4 font-bold">The Syndicate</span>
                    <h2 className="text-2xl font-serif text-charcoal mb-6">A Partnership Engine</h2>
                    <p className="text-charcoal/90 text-lg sm:text-xl leading-relaxed font-sans font-normal text-justify">
                        PRAEQ is a syndicate of master strategists, world-class graphic architects, and social media titans working in a synchronized rhythm. Prateek’s vision provides the spark, but our global partnership engine is the fuel. We don't "help" you grow. We rebuild the landscape around you so that growth becomes the only possible outcome.
                    </p>
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
                    <span className="text-charcoal font-serif text-lg italic border-b border-charcoal/5 pb-2">Creative Labs</span>
                </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-bronze text-[9px] uppercase tracking-widest font-sans font-bold">Media Relations</span>
                    <span className="text-charcoal font-serif text-lg italic border-b border-charcoal/5 pb-2">Vogue Comm.</span>
                </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-bronze text-[9px] uppercase tracking-widest font-sans font-bold">Legal</span>
                    <span className="text-charcoal font-serif text-lg italic border-b border-charcoal/5 pb-2">Sterling Partners</span>
                </div>
             </div>
           </div>
        </div>
      </div>
    </main>
  );
};

export default About;