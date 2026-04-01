/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  ArrowUpRight, 
  Check, 
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { useState, useRef } from 'react';
import { cn } from './lib/utils';

const MARQUEE_BRANDS = [
  "L'ORÉAL PROFESSIONNEL",
  "KÉRASTASE PARIS",
  "REDAÇÃO DE MODA",
  "TRUSS PROFESSIONAL",
  "VISAGISMO ACADEMY"
];

const SERVICES = [
  {
    title: "Mechas Criativas",
    category: "Coloração Artística",
    description: "Técnicas exclusivas para iluminar o rosto com naturalidade e saúde capilar.",
    image: "https://lh3.googleusercontent.com/d/1c5oXmrXB6Wp5Y_t4V70TlA5P9JqXM3VA"
  },
  {
    title: "Corte Visagista",
    category: "Design de Corte",
    description: "A forma perfeita para o seu rosto, respeitando o caimento natural dos seus fios.",
    image: "https://lh3.googleusercontent.com/d/1o-hsiQcpRa-pEPqeIQWyPaUxQdBfQJma"
  },
  {
    title: "Terapia de Alma",
    category: "Saúde Capilar",
    description: "Protocolos de tratamento profundos que recuperam o brilho e a força dos cabelos.",
    image: "https://lh3.googleusercontent.com/d/1myoowgVKwPl2EfVSDZxHdJZ01oXjD2ZW"
  }
];

const TESTIMONIALS = [
  {
    text: "A Simone tem uma energia que acalma. Ela não só cuidou do meu loiro, mas me fez sentir maravilhosa em um dia difícil. É alma pura!",
    author: "Mariana Borges",
    role: "Empresária, 42 anos",
    initials: "MB"
  },
  {
    text: "Finalmente encontrei alguém que entende o que eu quero sem eu precisar falar muito. O corte visagista mudou minha autoestima!",
    author: "Carla Lemos",
    role: "Advogada, 35 anos",
    initials: "CL"
  },
  {
    text: "Ambiente acolhedor e papo descontraído. O Salão Simone Barros é o meu momento de refúgio semanal. Recomendo de olhos fechados.",
    author: "Renata Soares",
    role: "Arquiteta, 51 anos",
    initials: "RS"
  },
  {
    text: "O cuidado com os fios é impecável. Ela usa os melhores produtos e a técnica é de outro nível. Meu cabelo nunca esteve tão saudável.",
    author: "Ana Fernanda",
    role: "Médica, 29 anos",
    initials: "AF"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);

  return (
    <div className="min-h-screen font-sans">
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 px-6 py-4">
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
          className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-8 py-3"
        >
          <div className="text-2xl font-display font-bold tracking-tighter">
            SIMONE<span className="text-gold">BARROS</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-semibold">
            {["Início", "Experiência", "Serviços", "Feedback"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
                className="hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/message/INXNY2BHGTC2E1" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-dark px-6 py-2 rounded-full text-sm font-bold hover:bg-white transition-all"
            >
              RESERVAR
            </a>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass rounded-3xl p-6 flex flex-col gap-4"
          >
            {["Início", "Experiência", "Serviços", "Feedback"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-lg font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/message/INXNY2BHGTC2E1" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-dark px-6 py-3 rounded-full text-center font-bold mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              RESERVAR AGORA
            </a>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            style={{ opacity: heroOpacity }}
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop" 
            alt="Luxury Salon" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-bold"
          >
            Cabeleireira de alma e coração
          </motion.h4>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8"
          >
            Beleza que reflete <br />
            <span className="italic text-gradient font-light">sua essência.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Um espaço onde a técnica encontra a sensibilidade. Criamos looks personalizados que exaltam sua identidade única.
          </motion.p>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <a 
              href="https://wa.me/message/INXNY2BHGTC2E1" 
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse bg-gold text-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform"
            >
              Conheça Nossos Serviços
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="py-12 border-y border-white/5 bg-dark-lighter overflow-hidden">
        <div className="marquee-content gap-20 items-center">
          {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((brand, i) => (
            <span 
              key={i} 
              className="text-3xl font-display opacity-20 whitespace-nowrap uppercase tracking-tighter italic"
            >
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* BENTO GRID */}
      <section id="experiencia" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            A Experiência Simone Barros
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            Muito além de um corte, um momento de conexão com você mesma.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[700px]">
          {/* Bento 1 */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-end relative overflow-hidden group"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1P8I_TCazzQtozUe4VA_MTbLyJOaLPmGJ" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" 
              alt="Detail" 
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold mb-4">Cuidado de Alma</h3>
              <p className="text-gray-300 leading-relaxed">Nossa abordagem foca no seu bem-estar emocional. Simone atende cada cliente com o coração, ouvindo sua história antes de tocar em suas madeixas.</p>
            </div>
          </motion.div>
          
          {/* Bento 2 */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass rounded-[2.5rem] p-10 flex items-center gap-8 group"
          >
            <div className="w-1/2">
              <h3 className="text-2xl font-display font-bold mb-2">Visagismo</h3>
              <p className="text-gray-400 text-sm">Cortes que harmonizam com o seu formato de rosto e personalidade.</p>
            </div>
            <div className="w-1/2 h-32 bg-dark rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1974&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Visagismo" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Bento 3 */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 glass rounded-[2.5rem] p-10 flex flex-col justify-between border-gold/20"
          >
            <div className="bg-gold/10 w-12 h-12 rounded-full flex items-center justify-center text-gold mb-6">
              <Check className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-2">Premium Only</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest">Os melhores produtos do mundo.</p>
            </div>
          </motion.div>

          {/* Bento 4 */}
          <motion.a 
            href="https://wa.me/message/INXNY2BHGTC2E1"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 glass rounded-[2.5rem] p-10 flex flex-col justify-between bg-gold group cursor-pointer"
          >
            <h3 className="text-dark text-xl font-bold font-display">Agende sua transformação hoje.</h3>
            <div className="w-12 h-12 bg-dark rounded-full flex items-center justify-center text-white -rotate-45 group-hover:rotate-0 transition-transform">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </motion.a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <motion.h2 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 italic"
              >
                Menu de Especialidades
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg"
              >
                Serviços pensados para a mulher moderna, entre 28 e 58 anos, que busca sofisticação sem perder a leveza e a descontração.
              </motion.p>
            </div>
            <div className="h-[1px] flex-grow bg-white/10 mb-6 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="h-[450px] overflow-hidden rounded-3xl mb-6 relative">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={service.title} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-display font-bold">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed px-2">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="feedback" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-center mb-16 italic"
          >
            O que dizem nossas musas
          </motion.h2>
          
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-10 snap-x">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-[350px] glass p-10 rounded-[2rem] border-white/5 italic snap-center"
              >
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center font-bold text-gold">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.author}</h4>
                    <p className="text-xs text-gray-500 uppercase">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <div className="text-2xl font-display font-bold tracking-tighter mb-2">
              SIMONE<span className="text-gold">BARROS</span>
            </div>
            <p className="text-gray-500 text-sm italic">Cabeleireira de alma e coração.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-gold transition-colors flex items-center gap-2">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a 
              href="https://wa.me/message/INXNY2BHGTC2E1" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <div className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Salão Simone Barros. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
