import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-40 pt-20 pb-8 px-4 md:px-8 lg:px-12 overflow-hidden">
      
      {/* Background Image Section - Behind the Card */}
      <div className="absolute inset-0 z-0">
          <img 
              src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop" 
              alt="Footer Background Texture" 
              className="w-full h-full object-cover opacity-100"
          />
          {/* Dark overlay to ensure the white card pops and text on page edge is readable if any */}
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm mix-blend-multiply"></div>
          {/* Subtle grain */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      {/* Floating Card Container */}
      <div className="relative z-10 mx-auto max-w-[1920px] bg-white rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl shadow-black/20 border border-white/10">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-8 max-w-md">
            <div className="flex flex-col gap-4">
               <Link to="/" className="font-serif text-4xl font-bold tracking-tight text-charcoal">PRAEQ</Link>
               <p className="font-sans text-base md:text-lg text-charcoal/80 font-normal leading-relaxed text-balance">
                PRAEQ empowers raw talent to engineer global legacies. We transform potential into architectural fame through proprietary infrastructure and unapologetic strategy.
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 flex-1 lg:max-w-4xl">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
                <h4 className="font-sans text-sm font-bold uppercase tracking-architectural text-charcoal">Sectors</h4>
                <ul className="flex flex-col gap-4">
                    <li><Link to="/legacy" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Sonic Spectrum</Link></li>
                    <li><Link to="/ecosystem" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Dialogue Axis</Link></li>
                    <li><Link to="/global" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Estate Vision</Link></li>
                </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
                <h4 className="font-sans text-sm font-bold uppercase tracking-architectural text-charcoal">Agency</h4>
                <ul className="flex flex-col gap-4">
                    <li><Link to="/about" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Philosophy</Link></li>
                    <li><Link to="/legacy" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Blueprints</Link></li>
                    <li><Link to="/ecosystem" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Infrastructure</Link></li>
                    <li><Link to="/timeline" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Methodology</Link></li>
                </ul>
            </div>

             {/* Column 3 */}
             <div className="flex flex-col gap-6">
                <h4 className="font-sans text-sm font-bold uppercase tracking-architectural text-charcoal">Connect</h4>
                <ul className="flex flex-col gap-4">
                    <li><Link to="/submission" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Inquiry</Link></li>
                    <li><Link to="/global" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Locations</Link></li>
                    <li><a href="mailto:contact@praeq.com" className="font-sans text-base text-charcoal/80 hover:text-orange-burnished transition-colors">Contact</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-20 pt-8 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-sans text-xs sm:text-sm text-charcoal/60 font-medium">© 2024 PRAEQ Global. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8">
                <Link to="#" className="font-sans text-xs sm:text-sm text-charcoal/60 hover:text-charcoal transition-colors font-medium">Privacy Policy</Link>
                <Link to="#" className="font-sans text-xs sm:text-sm text-charcoal/60 hover:text-charcoal transition-colors font-medium">Terms of Service</Link>
                <Link to="#" className="font-sans text-xs sm:text-sm text-charcoal/60 hover:text-charcoal transition-colors font-medium">Cookies Settings</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;