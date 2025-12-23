
import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Key, 
  Wrench, 
  FilePieChart, 
  TrendingUp, 
  Megaphone,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  Users,
  Briefcase,
  History,
  Send,
  ExternalLink,
  Globe
} from 'lucide-react';
import { SERVICES, COMPLETED_PROJECTS, UPCOMING_PROJECTS } from './constants';

const ACCENT_COLOR = '#3356a6';

// Section Divider Component
const SectionDivider = ({ variant = 'default' }: { variant?: 'default' | 'gradient' | 'dotted' | 'geometric' }) => {
  if (variant === 'gradient') {
    return (
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3356a6]/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rotate-45 border-4 border-[#3356a6]/30"></div>
      </div>
    );
  }
  
  if (variant === 'dotted') {
    return (
      <div className="relative h-20 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#3356a6] rounded-full"></div>
          <div className="w-3 h-3 bg-[#3356a6] rounded-full"></div>
          <div className="w-20 h-[2px] bg-gradient-to-r from-[#3356a6] to-transparent"></div>
          <div className="w-12 h-12 border-4 border-[#3356a6]/20 rotate-45 flex items-center justify-center">
            <Building2 className="text-[#3356a6] -rotate-45" size={20} />
          </div>
          <div className="w-20 h-[2px] bg-gradient-to-l from-[#3356a6] to-transparent"></div>
          <div className="w-3 h-3 bg-[#3356a6] rounded-full"></div>
          <div className="w-2 h-2 bg-[#3356a6] rounded-full"></div>
        </div>
      </div>
    );
  }

  if (variant === 'geometric') {
    return (
      <div className="relative h-24 overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 flex items-center justify-center gap-8">
          <div className="w-16 h-16 border-t-4 border-r-4 border-[#3356a6]/30 rotate-45"></div>
          <div className="w-12 h-12 bg-[#3356a6]/10"></div>
          <div className="w-16 h-16 border-b-4 border-l-4 border-[#3356a6]/30 rotate-45"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-16 flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-50 via-white to-slate-50">
      <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#3356a6]/30 to-transparent"></div>
      <div className="relative bg-white px-8 py-2">
        <div className="w-3 h-3 bg-[#3356a6] rotate-45"></div>
      </div>
    </div>
  );
};

// Custom hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const NavIcon = ({ name, className, size }: { name: string, className?: string, size?: number }) => {
  switch (name) {
    case 'Building2': return <Building2 className={className} size={size} />;
    case 'Key': return <Key className={className} size={size} />;
    case 'Wrench': return <Wrench className={className} size={size} />;
    case 'FilePieChart': return <FilePieChart className={className} size={size} />;
    case 'TrendingUp': return <TrendingUp className={className} size={size} />;
    case 'Megaphone': return <Megaphone className={className} size={size} />;
    default: return <Building2 className={className} size={size} />;
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'من نحن', href: '#about' },
    { name: 'الشهادات', href: '#certificates' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'مشاريعنا', href: '#portfolio' },
    { name: 'قيد التجهيز', href: '#upcoming' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 md:py-3 border-b border-black/5' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="./logoo.svg" alt="مدار الخليج العقاري" className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-800">مدار الخليج</span>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT_COLOR }}>العقاري</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-bold transition-colors text-sm uppercase tracking-wide cursor-pointer ${isScrolled ? 'text-slate-600 hover:text-[#3356a6]' : 'text-slate-700 hover:text-[#3356a6]'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-white px-8 py-2.5 rounded-none font-black text-sm transition-all transform hover:translate-y-[-2px] shadow-lg cursor-pointer"
            style={{ backgroundColor: ACCENT_COLOR }}
          >
            تواصل معنا
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-black/5 shadow-2xl overflow-hidden animate-slide-down">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 hover:text-[#3356a6] text-lg font-black cursor-pointer hover:translate-x-2 transition-all"
                style={{ 
                  animation: `slideInRight 0.3s ease-out ${idx * 0.05}s both`
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-0 md:pt-8 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none topographic-bg"></div>
      {/* Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none -z-10">
        <img src="./logoo.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3356a6]/5 -z-10 blur-3xl"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3356a6]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      {/* Geometric Shapes */}
      <div className="absolute top-40 right-10 w-20 h-20 border-4 border-[#3356a6]/20 rotate-45 -z-10"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#3356a6]/10 -z-10"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 md:space-y-8 text-center md:text-right">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#3356a6]/10 border border-[#3356a6]/20 text-[#3356a6] text-xs font-black uppercase tracking-widest transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#3356a6] opacity-75"></span>
              <span className="relative inline-flex rounded-none h-2 w-2 bg-[#3356a6]"></span>
            </span>
            مؤسسة عقارية سعودية مرخصة
          </div>
          
          <h1 className={`text-4xl md:text-7xl font-black leading-tight text-slate-900 uppercase transition-all duration-1000 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            مدار الخليج <br className="hidden md:block" />
            <span style={{ color: ACCENT_COLOR }} className="inline-block">العقاري</span>
          </h1>
          
          <p className={`text-slate-600 text-lg md:text-xl max-w-xl md:ml-0 md:mr-0 mx-auto leading-relaxed border-r-4 pr-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ borderColor: ACCENT_COLOR }}>
            مؤسسة عقارية سعودية مرخصة تقدم حلولًا متكاملة في الوساطة والتسويق وإدارة الأصول العقارية داخل المنطقة الغربية.
          </p>
          
          <div className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#contact" className="px-10 py-5 text-white rounded-none font-black flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl" style={{ backgroundColor: ACCENT_COLOR }}>
              تواصل معنا
              <ChevronLeft size={20} />
            </a>
            <a href="#services" className="px-10 py-5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 rounded-none font-black transition-all transform hover:-translate-y-1">
              اكتشف خدماتنا
            </a>
          </div>
        </div>

        <div className={`relative hidden md:block transition-all duration-1000 delay-700 z-0 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
          <div className="relative rounded-none overflow-hidden border-8 border-white shadow-2xl transform hover:scale-[1.01] transition-all duration-500 max-h-[500px]">
             <img 
               src="./Gemini_Generated_Image_puaukxpuaukxpuau.png" 
               alt="Luxury Real Estate" 
               className="w-full h-full object-cover transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
             <div className="absolute bottom-0 right-0 p-6 bg-white border-t-4 border-r-4 shadow-xl" style={{ borderColor: ACCENT_COLOR }}>
                <p className="text-[#3356a6] text-xs font-black uppercase mb-1 tracking-widest">المقر الرئيسي</p>
                <p className="text-slate-800 font-black text-xl">مكة المكرمة</p>
             </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-8 border-r-8 -z-1 opacity-20" style={{ borderColor: ACCENT_COLOR }}></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b-8 border-l-8 -z-1 opacity-20" style={{ borderColor: ACCENT_COLOR }}></div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const statsRef = React.useRef<HTMLDivElement>(null);
  
  const stats = [
    { label: 'سنة خبرة في السوق', value: 15, icon: <History className="text-white" /> },
    { label: 'عميل يثقون بنا', value: 300, icon: <Users className="text-white" /> },
    { label: 'وحدة عقارية تحت الإدارة', value: 500, icon: <Building2 className="text-white" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.value);
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <div ref={statsRef} className="relative -mt-16 z-20 container mx-auto px-4 sm:px-6">
      <div className="bg-gradient-to-r from-white via-blue-50/30 to-white rounded-none p-6 sm:p-10 md:p-14 border-b-8 shadow-2xl grid grid-cols-3 gap-4 md:gap-8 overflow-hidden relative" style={{ borderBottomColor: ACCENT_COLOR }}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3356a6]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
        {stats.map((stat, idx) => (
          <div key={idx} className={`flex flex-col items-center text-center space-y-2 sm:space-y-4 relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
            <div className="p-3 sm:p-5 rounded-none group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: ACCENT_COLOR }}>
              {stat.icon}
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              +{counts[idx]}
            </h3>
            <p className="text-slate-500 font-black uppercase text-[10px] sm:text-xs tracking-widest leading-tight">{stat.label}</p>
            {idx < stats.length - 1 && (
              <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 h-20 w-[2px] bg-slate-100"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="about" className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Real Estate Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233356a6' fill-opacity='1'%3E%3Cpath d='M20 10h8v8h-8zM20 26h8v8h-8zM36 10h8v8h-8zM52 10h8v8h-8zM52 26h8v8h-8z'/%3E%3Cpath d='M24 6l4 4h-8zM40 6l4 4h-8zM56 6l4 4h-8z'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      {/* Watermark Logo */}
      <div className="absolute top-1/2 right-20 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.02] pointer-events-none -z-10">
        <img src="./logoo.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-20 right-0 w-1/2 h-96 bg-gradient-to-l from-[#3356a6]/10 to-transparent blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-1/2 h-96 bg-gradient-to-r from-blue-500/10 to-transparent blur-3xl -z-10"></div>
      {/* Building shapes as decorative accents */}
      <div className="absolute top-32 left-10 w-20 h-24 border-4 border-[#3356a6]/10 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-[#3356a6]/10"></div>
      </div>
      <div className="absolute bottom-32 right-10 w-24 h-32 border-4 border-blue-500/10 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[12px] border-r-[12px] border-b-[10px] border-l-transparent border-r-transparent border-b-blue-500/10"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className={`order-2 md:order-1 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-[4/5] rounded-none overflow-hidden border-4 border-white relative shadow-2xl">
               <img 
                 src="./Gemini_Generated_Image_3eop8k3eop8k3eop.png" 
                 alt="Our Strategy" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-[#3356a6]/5"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-none border-b-8 shadow-2xl" style={{ borderBottomColor: ACCENT_COLOR }}>
              <span className="text-6xl font-black block mb-2" style={{ color: ACCENT_COLOR }}>2025</span>
              <span className="text-slate-800 text-sm font-black uppercase tracking-[0.2em]">مستقبل العقار</span>
            </div>
          </div>
          
          <div className={`order-1 md:order-2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="inline-block px-6 py-2 rounded-none bg-[#3356a6]/10 border-r-4 text-[#3356a6] font-black text-xs uppercase tracking-widest" style={{ borderRightColor: ACCENT_COLOR }}>
              نبذة عن المؤسسة
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              نعمل على تحقيق أعلى قيمة تشغيلية للأصول
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              مؤسسة مدار الخليج العقاري هي مؤسسة متخصصة في تقديم الخدمات العقارية وفق أنظمة الهيئة العامة للعقار. نعمل على تحقيق أعلى قيمة تشغيلية واستثمارية للأصول العقارية من خلال إدارة احترافية تعتمد على الخبرة العريقة، الحوكمة، والشفافية التامة.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                "إدارة احترافية وعريقة",
                "حوكمة كاملة للعمليات",
                "شفافية تامة وشاملة",
                "التزام بأنظمة الهيئة"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white border-l-4" style={{ borderLeftColor: ACCENT_COLOR }}>
                  <div className="w-2 h-2 rounded-none bg-[#3356a6]"></div>
                  <span className="font-black text-slate-800 text-sm uppercase">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const certificates = [
    {
      id: 1,
      title: 'شهادة السجل التجاري',
      number: '7051545288',
      image: 'شهادة السجل التجاري.jpg',
      description: 'سجل تجاري معتمد من وزارة التجارة'
    },
    {
      id: 2,
      title: 'شهادة العضوية',
      number: 'EJAR_33304472',
      image: 'شهادة عضوية.jpg',
      description: 'عضو معتمد في شبكة إيجار'
    },
    {
      id: 3,
      title: 'شهادة فال',
      number: '1200041182',
      image: 'شهادة فال.jpg',
      description: 'رخصة فال للوساطة العقارية'
    }
  ];

  return (
    <section ref={ref} id="certificates" className="py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Certificate/Document Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233356a6' fill-opacity='1'%3E%3Crect x='20' y='20' width='30' height='40' fill='none' stroke='%233356a6' stroke-width='1'/%3E%3Cpath d='M25 28h20M25 32h20M25 36h15' stroke='%233356a6' stroke-width='0.5'/%3E%3Ccircle cx='35' cy='50' r='4' fill='none' stroke='%233356a6' stroke-width='1'/%3E%3Cpath d='M30 52l5 3 5-3' fill='none' stroke='%233356a6' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      {/* Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] opacity-[0.025] pointer-events-none -z-10">
        <img src="./logoo.svg" alt="" className="w-full h-full object-contain" />
      </div>
      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#3356a6]/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/5 to-transparent -z-10"></div>
      {/* Building-shaped decorations */}
      <div className="absolute top-40 left-20 w-24 h-32 border-4 border-[#3356a6]/10 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[12px] border-r-[12px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#3356a6]/10"></div>
      </div>
      <div className="absolute bottom-40 right-20 w-28 h-36 border-4 border-blue-500/10 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-l-[14px] border-r-[14px] border-b-[12px] border-l-transparent border-r-transparent border-b-blue-500/10"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-20 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-6 py-2 rounded-none bg-[#3356a6]/10 border-b-4 text-[#3356a6] font-black text-xs uppercase tracking-widest" style={{ borderBottomColor: ACCENT_COLOR }}>
            الشهادات والتراخيص
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase">موثوقية ومصداقية</h2>
          <p className="text-slate-500 text-xl font-medium">حاصلون على كافة التراخيص والاعتمادات اللازمة من الجهات الرسمية لضمان أعلى مستوى من الجودة والثقة.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="group relative">
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3356a6]/0 via-[#3356a6]/5 to-blue-500/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              <div className="bg-white rounded-none border-2 border-slate-200 overflow-hidden hover:border-[#3356a6] transition-all duration-500 shadow-lg hover:shadow-2xl relative">
                {/* Certificate number badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">رقم {index + 1}</span>
                </div>
                <div className="h-auto overflow-hidden bg-slate-50 relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6 md:p-8 border-t-4 transition-colors" style={{ borderTopColor: index === 0 ? ACCENT_COLOR : index === 1 ? '#0d9488' : '#f59e0b' }}>
                  <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 uppercase group-hover:text-[#3356a6] transition-colors">{cert.title}</h3>
                    <p className="text-slate-500 text-xs md:text-sm font-medium mb-3">{cert.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">رقم الشهادة</p>
                      <p className="text-slate-800 font-mono text-xs md:text-sm font-bold">{cert.number}</p>
                    </div>
                    <div className="w-10 h-10 rounded-none flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: index === 0 ? ACCENT_COLOR : index === 1 ? '#0d9488' : '#f59e0b' }}>
                      <ExternalLink className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 opacity-20 group-hover:opacity-40 transition-opacity -z-10" style={{ borderColor: index === 0 ? ACCENT_COLOR : index === 1 ? '#0d9488' : '#f59e0b' }}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-50 border-r-4 rounded-none" style={{ borderRightColor: ACCENT_COLOR }}>
            <div className="w-3 h-3 rounded-none bg-green-500 animate-pulse"></div>
            <p className="text-slate-700 font-black text-sm uppercase tracking-wide">جميع التراخيص سارية المفعول ومُحدَّثة</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="services" className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Real Estate Icons Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233356a6' fill-opacity='1'%3E%3Cpath d='M25 20h10v15h-10zM25 45h10v15h-10zM45 20h10v15h-10zM65 20h10v15h-10zM65 45h10v15h-10z'/%3E%3Cpath d='M30 15l5 5h-10zM50 15l5 5h-10zM70 15l5 5h-10z'/%3E%3Crect x='27' y='23' width='2' height='3'/%3E%3Crect x='31' y='23' width='2' height='3'/%3E%3Crect x='27' y='28' width='2' height='3'/%3E%3Crect x='31' y='28' width='2' height='3'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      {/* Watermark Logo */}
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] opacity-[0.02] pointer-events-none -z-10">
        <img src="./logoo.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-[#3356a6]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-6 py-2 rounded-none bg-[#3356a6]/10 border-l-4 text-[#3356a6] font-black text-xs uppercase tracking-widest" style={{ borderLeftColor: ACCENT_COLOR }}>
            خدماتنا المتكاملة
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase">حلول عقارية ذكية</h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium">نقدم باقة واسعة من الخدمات التي تغطي كافة جوانب الدورة الحياتية للعقار لضمان أفضل عائد للمستثمر وأعلى راحة للمالك.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="group bg-white rounded-none border-2 border-slate-100 overflow-hidden hover:border-[#3356a6] transition-all duration-300 shadow-lg hover:shadow-2xl relative">
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#3356a6]/5 to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/5 to-transparent"></div>
              
              <div className="p-8 md:p-10 space-y-6 relative">
                {/* Service number */}
                <div className="absolute top-6 left-6 w-12 h-12 border-2 border-[#3356a6]/20 flex items-center justify-center text-[#3356a6]/30 font-black text-xl">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                
                {/* Icon */}
                <div className="flex justify-end">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3356a6] to-blue-600 rounded-none flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <NavIcon name={service.icon} size={36} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[#3356a6] transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-medium">{service.description}</p>
                </div>
                
                {/* Footer */}
                <div className="pt-6 border-t-2 border-slate-100">
                  <a href="#contact" className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" style={{ color: ACCENT_COLOR }}>
                    طلب الخدمة <ChevronLeft size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="portfolio" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 relative overflow-hidden">
      {/* Real Estate Cityscape Pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233356a6' fill-opacity='1'%3E%3Crect x='10' y='40' width='15' height='30'/%3E%3Cpath d='M17.5 35l7.5 5h-15z'/%3E%3Crect x='30' y='30' width='20' height='40'/%3E%3Cpath d='M40 25l10 5h-20z'/%3E%3Crect x='55' y='35' width='18' height='35'/%3E%3Cpath d='M64 30l9 5h-18z'/%3E%3Crect x='78' y='25' width='22' height='45'/%3E%3Cpath d='M89 20l11 5h-22z'/%3E%3Crect x='13' y='45' width='2' height='3'/%3E%3Crect x='18' y='45' width='2' height='3'/%3E%3Crect x='33' y='35' width='3' height='4'/%3E%3Crect x='39' y='35' width='3' height='4'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#3356a6]/10 to-transparent blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent blur-3xl -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`mb-16 md:mb-20 space-y-6 text-center md:text-right transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-6 py-2 rounded-none bg-[#3356a6]/10 border-r-4 text-[#3356a6] font-black text-xs uppercase tracking-widest" style={{ borderRightColor: ACCENT_COLOR }}>
            أعمالنا ومشاريعنا
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase">سجل حافل بالإنجازات</h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl font-medium mx-auto md:mx-0">نفخر بشراكاتنا الاستراتيجية والمشاريع التي ساهمنا في تطويرها وإدارتها في المنطقة الغربية.</p>
        </div>

        <div className="space-y-12">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex items-center gap-4 uppercase">
            <div className="w-3 h-10 rounded-none shadow-lg" style={{ backgroundColor: ACCENT_COLOR }}></div>
            مشاريع نفخر بها
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPLETED_PROJECTS.map((project, idx) => (
              <div key={project.id} className="group bg-white rounded-none overflow-hidden border-2 border-slate-200 hover:border-[#3356a6] hover:shadow-2xl transition-all duration-500 relative">
                {/* Corner decoration */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-[#3356a6]/10 -z-10 group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
                <div className="h-56 overflow-hidden relative">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  {/* Role badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform" style={{ color: ACCENT_COLOR }}>
                    <div className="w-2 h-2 bg-[#3356a6] rounded-full"></div>
                    {project.role}
                  </div>
                  {/* Project number */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm flex items-center justify-center font-black text-xl shadow-lg" style={{ color: ACCENT_COLOR }}>
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#3356a6] transition-colors">{project.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const UpcomingProjects = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="upcoming" className="py-32 bg-gradient-to-br from-teal-50 via-emerald-50/30 to-cyan-50 relative overflow-hidden">
      {/* Construction Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230d9488' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%230d9488' stroke-width='1'/%3E%3Cpath d='M10 10h5v5h-5zM25 10h5v5h-5zM10 25h5v5h-5zM25 25h5v5h-5z'/%3E%3Ccircle cx='35' cy='5' r='2'/%3E%3Ccircle cx='5' cy='35' r='2'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      {/* Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none -z-10">
        <img src="./logoo.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`text-center max-w-4xl mx-auto mb-16 md:mb-20 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-6 py-2 rounded-none bg-teal-600/10 border-l-4 border-teal-600 text-teal-700 font-black text-xs uppercase tracking-widest">
            مشاريع المستقبل
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase">قيد التجهيز والتطوير</h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium">نعمل حاليًا على تطوير وإدارة مجموعة من المشاريع الاستثمارية الواعدة في المنطقة الغربية</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {UPCOMING_PROJECTS.map((project, idx) => (
            <div key={project.id} className={`group bg-white rounded-none overflow-hidden border-2 border-teal-200 hover:border-teal-600 hover:shadow-2xl transition-all duration-500 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
              {/* Status badge */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-teal-600 to-emerald-600 rotate-45 flex items-center justify-center shadow-xl z-10">
                <TrendingUp size={16} className="text-white -rotate-45" />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              
              {/* Number badge */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-white border-4 border-teal-600 flex items-center justify-center font-black text-2xl text-teal-600 shadow-lg z-10">
                {(idx + 1).toString().padStart(2, '0')}
              </div>
              
              {/* Icon background */}
              <div className="h-48 bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230d9488'%3E%3Cpath d='M15 20h10v15h-10z'/%3E%3Cpath d='M20 15l5 5h-10z'/%3E%3Crect x='17' y='23' width='2' height='3'/%3E%3Crect x='21' y='23' width='2' height='3'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
                <div className="relative w-24 h-24 bg-white rounded-none shadow-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                  <Building2 size={48} className="text-teal-600" />
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <h4 className="text-2xl font-black text-slate-900 group-hover:text-teal-600 transition-colors uppercase">{project.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{project.description}</p>
                
                <div className="pt-6 mt-6 border-t-2 border-teal-100 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-teal-600">قريبًا</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className={`max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-emerald-600 rounded-none p-12 shadow-2xl relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-20 h-20 bg-white rounded-none shadow-xl flex items-center justify-center">
              <TrendingUp size={40} className="text-teal-600" />
            </div>
            <div className="flex-1 text-center md:text-right">
              <h3 className="text-3xl font-black text-white mb-3 uppercase">جاري العمل على 5 مشاريع جديدة</h3>
              <p className="text-teal-50 text-lg font-medium leading-relaxed">تعمل مؤسسة مدار الخليج العقاري على تطوير وإدارة مجموعة من المشاريع الاستثمارية المبتكرة التي ستسهم في تطوير القطاع العقاري بالمنطقة الغربية</p>
            </div>
            <a href="#contact" className="flex-shrink-0 px-8 py-4 bg-white text-teal-600 font-black uppercase tracking-wide hover:bg-teal-50 transition-colors shadow-xl flex items-center gap-3 group">
              استفسر الآن
              <ChevronLeft size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="contact" className="py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Building silhouettes as background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233356a6'%3E%3Crect x='20' y='80' width='30' height='60'/%3E%3Cpath d='M35 75l15 5h-30z'/%3E%3Crect x='60' y='60' width='40' height='80'/%3E%3Cpath d='M80 55l20 5h-40z'/%3E%3Crect x='110' y='70' width='35' height='70'/%3E%3Cpath d='M127.5 65l17.5 5h-35z'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3356a6]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#3356a6]/5 to-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <div className={`text-center max-w-4xl mx-auto mb-20 space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="inline-block px-6 py-2 rounded-none bg-white border-l-4 text-[#3356a6] font-black text-xs uppercase tracking-widest shadow-lg" style={{ borderLeftColor: ACCENT_COLOR }}>
            تواصل معنا
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase">نسعد بخدمتك</h2>
          <p className="text-slate-600 text-xl font-medium">نحن هنا لتقديم الاستشارات والحلول العقارية المثلى لك</p>
        </div>

        <div className={`max-w-5xl mx-auto bg-gradient-to-br from-[#3356a6] to-blue-700 rounded-none p-12 md:p-16 text-white space-y-12 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">لنبدأ رحلتك العقارية</h3>
            <p className="text-slate-100 text-lg font-medium max-w-2xl mx-auto">فريقنا جاهز لتقديم الاستشارات المتخصصة وحلول إدارة الأصول الحديثة</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-none hover:bg-white/20 transition-all group">
              <div className="w-16 h-16 rounded-none bg-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <MapPin size={32} />
              </div>
              <div>
                <h4 className="font-black text-xl mb-2 text-white uppercase tracking-wide">الموقع</h4>
                <p className="text-slate-100 text-sm font-medium">مكة المكرمة - وادي جليل - 7221</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-none hover:bg-white/20 transition-all group">
              <div className="w-16 h-16 rounded-none bg-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="font-black text-xl mb-2 text-white uppercase tracking-wide">أوقات العمل</h4>
                <p className="text-slate-100 text-sm font-medium">الأحد - الخميس<br/>(09:00 - 17:00)</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-none hover:bg-white/20 transition-all group">
              <div className="w-16 h-16 rounded-none bg-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <div>
                <h4 className="font-black text-xl mb-2 text-white uppercase tracking-wide">هاتف</h4>
                <p className="text-slate-100 text-lg font-bold" dir="ltr">+20 102 316 0657</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-none hover:bg-white/20 transition-all group">
              <div className="w-16 h-16 rounded-none bg-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <div>
                <h4 className="font-black text-xl mb-2 text-white uppercase tracking-wide">البريد الإلكتروني</h4>
                <p className="text-slate-100 text-sm font-medium break-all" dir="ltr">samehabdealsalam@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center gap-6 p-8 bg-white/10 backdrop-blur-sm rounded-none hover:bg-white/20 transition-all group lg:col-span-2">
              <div className="w-16 h-16 rounded-none bg-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <i className="fa-brands fa-whatsapp text-4xl"></i>
              </div>
              <div>
                <h4 className="font-black text-xl mb-3 text-white uppercase tracking-wide">تواصل مباشر عبر واتساب</h4>
                <a href="https://wa.me/2001023160657" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#3356a6] font-black rounded-none hover:bg-slate-100 transition-all shadow-xl">
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  ابدأ المحادثة الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 relative overflow-hidden text-slate-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-none flex items-center justify-center shadow-2xl p-2">
                <img src="./logoo.svg" alt="مدار الخليج العقاري" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white uppercase tracking-tighter">مدار الخليج</span>
                <span className="text-sm font-black tracking-[0.3em] uppercase" style={{ color: ACCENT_COLOR }}>العقاري</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md text-lg font-medium">
              مؤسسة عقارية سعودية مرخصة متخصصة في تقديم الحلول المتكاملة في الوساطة والتسويق وإدارة الأصول العقارية وفق أعلى معايير الجودة والشفافية.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="p-4 bg-slate-800 rounded-none border-r-4 flex flex-col items-start min-w-[150px] shadow-xl" style={{ borderRightColor: ACCENT_COLOR }}>
                 <span className="text-[10px] text-slate-500 font-black mb-1 uppercase tracking-widest">رخصة فال</span>
                 <span className="text-white font-mono text-sm font-bold">1200041182</span>
              </div>
              <div className="p-4 bg-slate-800 rounded-none border-r-4 flex flex-col items-start min-w-[150px] shadow-xl" style={{ borderRightColor: ACCENT_COLOR }}>
                 <span className="text-[10px] text-slate-500 font-black mb-1 uppercase tracking-widest">السجل التجاري</span>
                 <span className="text-white font-mono text-sm font-bold">7051545288</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-xl font-black text-white uppercase tracking-widest border-b-4 inline-block pb-2" style={{ borderBottomColor: ACCENT_COLOR }}>روابط سريعة</h4>
            <ul className="space-y-5 font-bold text-slate-400 uppercase text-sm">
              <li><a href="#" className="hover:text-white hover:translate-x-[-8px] transition-all inline-block">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-white hover:translate-x-[-8px] transition-all inline-block">من نحن</a></li>
              <li><a href="#services" className="hover:text-white hover:translate-x-[-8px] transition-all inline-block">خدماتنا</a></li>
              <li><a href="#portfolio" className="hover:text-white hover:translate-x-[-8px] transition-all inline-block">مشاريعنا</a></li>
              <li><a href="#upcoming" className="hover:text-white hover:translate-x-[-8px] transition-all inline-block">قيد التجهيز</a></li>
              <li><a href="#contact" className="hover:text-white hover:translate-x-[-8px] transition-all inline-block">تواصل معنا</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xl font-black text-white uppercase tracking-widest border-b-4 inline-block pb-2" style={{ borderBottomColor: ACCENT_COLOR }}>الاعتمادات</h4>
            <div className="space-y-6">
               <div className="flex items-center gap-5 p-5 bg-slate-800 rounded-none border-r-4 group hover:bg-slate-700 transition-all shadow-lg" style={{ borderRightColor: ACCENT_COLOR }}>
                  <div className="w-12 h-12 rounded-none flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: ACCENT_COLOR }}>
                     <Key size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black mb-1 uppercase tracking-widest">رخصة إيجار</p>
                    <p className="text-white text-sm font-black">EJAR_33304472</p>
                  </div>
               </div>
               <div className="p-6 bg-white/5 rounded-none border border-white/5 flex flex-col items-center gap-3">
                 <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: ACCENT_COLOR }}>عضو معتمد لدى شبكة إيجار</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest text-center">حقوق النشر © 2025 مؤسسة مدار الخليج العقاري. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-3 text-slate-500 text-xs font-black uppercase tracking-widest">
            تم التطوير بواسطة 
            <div className="flex items-center gap-2">
              <a href="https://samehreda.com" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2" style={{ color: ACCENT_COLOR }}>
                <Globe size={14} />
                sameh reda
              </a>
              <a href="https://wa.me/201023160657" target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-white/5 hover:bg-white/10 transition-all flex items-center" style={{ color: ACCENT_COLOR }}>
                <i className="fa-brands fa-whatsapp text-base"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <UpcomingProjects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
