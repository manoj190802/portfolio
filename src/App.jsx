import React, { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from 'framer-motion';
import img from './assets/image.png';
import mibImg from './assets/mib.png';
import tamizhiImg from './assets/tamizhi.png';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Layout,
  Database,
  Cpu,
  Award,
  Briefcase,
  GraduationCap,
  Send,
  Download,
  Terminal,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const PROFILE_IMAGE = "https://images.unsplash.com/photo-1519081248540-2ee21867be3a?q=80&w=1887&auto=format&fit=crop";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i8ibdin",
        "template_m25ph5o",
        formRef.current,
        "eVgZ4djTuxPbPjoVC",
      )
      .then(
        () => alert("Message sent successfully! I'll get back to you soon."),
        () => alert("Something went wrong. Please try again."),
      );
    e.target.reset();
  };

  return (
    <div className="portfolio-app">
      {/* Background Gradients */}
      <div className="gradient-bg-base"></div>

      {/* Floating Socials (Desktop) */}

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            <Terminal size={28} className="dot" />
            MANOJ<span className="dot">.</span>L
          </a>

          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              Let's Talk
            </a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav-overlay"
          >
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(false)}
              style={{ position: 'absolute', top: '2rem', right: '2rem' }}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="hero" style={{ position: 'relative' }}>
        {/* Floating Socials in Hero */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '1rem' }}
          className="hero-floating-socials"
        >
          <a href="https://github.com/manoj190802" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/manojlink19/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', color: 'var(--text-primary)', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <Linkedin size={24} />
          </a>
        </motion.div>

        <div className="container hero-content">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="badge">
              <span className="pulse-dot"></span>
              Available for Opportunities
            </motion.div>

            <motion.h1 variants={fadeInUp} className="hero-title">
              Crafting <span className="text-gradient">Digital</span> Experiences That Spark <span className="text-gradient-2">Joy</span>.
            </motion.h1>

            <motion.p variants={fadeInUp} className="hero-desc">
              I am Manoj L, a passionate Frontend Developer from Tamil Nadu, India.
              I specialize in bridging the gap between design and interactive React applications.
            </motion.p>

            <motion.div variants={fadeInUp} className="hero-actions">
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn-outline">
                About Me
              </a>
              <a href="/" download className="btn-outline">
                Download CV <Download size={20} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Skills Marquee */}
      <div className="skills-marquee">
        <div className="marquee-content">
          {[
            { n: "React.js", i: <Code2 /> },
            { n: "Next.js", i: <Layout /> },
            { n: "JavaScript", i: <Terminal /> },
            { n: "Node.js", i: <Database /> },
            { n: "HTML/CSS", i: <Cpu /> },
            { n: "Tailwind", i: <Layout /> },
            { n: "Framer Motion", i: <Code2 /> },
            { n: "Git", i: <Terminal /> },
            // Repeat for smooth infinite scroll effect
            { n: "React.js", i: <Code2 /> },
            { n: "Next.js", i: <Layout /> },
            { n: "JavaScript", i: <Terminal /> },
            { n: "Node.js", i: <Database /> },
            { n: "HTML/CSS", i: <Cpu /> },
            { n: "Tailwind", i: <Layout /> },
          ].map((skill, idx) => (
            <div key={idx} className="skill-tag">
              {skill.i} {skill.n}
            </div>
          ))}
        </div>
      </div>

      {/* About Bento Grid */}
      <section id="about" className="section container">
        <motion.h2
          className="section-title"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          My <span className="text-gradient">Journey</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          A blend of engineering precision and creative design to produce elegant scalable solutions.
        </motion.p>

        <motion.div
          className="bento-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Main Intro */}
          <motion.div variants={fadeInUp} className="bento-item glass-pane bento-col-8">
            <div>
              <div className="bento-icon"><Code2 size={32} /></div>
              <h3 className="bento-title">Frontend Focused</h3>
              <p className="bento-desc" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                With professional internship experience at <strong>Softnova Technology</strong>, I dive deep into component architecture, state management, and performant animations to build high-converting web applications.
              </p>
            </div>
          </motion.div>

          {/* Education Mini Card */}
          <motion.div variants={fadeInUp} className="bento-item glass-pane bento-col-4" style={{ background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0,0,0,0.4))' }}>
            <div>
              <div className="bento-icon"><GraduationCap size={32} /></div>
              <h3 className="bento-title">Education</h3>
              <div className="bento-desc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ color: '#fff' }}>B.E. – Anna University</h4>
                  <span style={{ fontSize: '0.9rem' }}>Kings College of Engineering (7.73 CGPA)</span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Experience Mini Card */}
          <motion.div variants={fadeInUp} className="bento-item glass-pane bento-col-4" style={{ background: 'linear-gradient(135deg, rgba(245, 87, 108, 0.1), rgba(0,0,0,0.4))' }}>
            <div>
              <div className="bento-icon"><Briefcase size={32} /></div>
              <h3 className="bento-title">Experience</h3>
              <div className="bento-desc" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ color: '#fff' }}>Softnova Technology</h4>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-1)' }}>Internship</span>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Focused on React UI components and responsive implementation.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div variants={fadeInUp} className="bento-item glass-pane bento-col-8">
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', height: '100%' }}>
              <img
                src={img || PROFILE_IMAGE}
                alt="Manoj L"
                style={{ width: '400px', height: '400px', borderRadius: '1.5rem', objectFit: 'cover' }}
                onError={(e) => { e.target.src = PROFILE_IMAGE; }}
              />
              <div>
                <h3 className="bento-title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Design is <span className="text-gradient-2">Intelligence</span> Made Visible</h3>
                <p className="bento-desc">Clean code and scalable apps aren't just buzzwords, they form the foundation of my engineering philosophy.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="section container">
        <motion.h2
          className="section-title"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          Featured <span className="text-gradient-2">Work</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          A selection of projects that showcase my technical capabilities and design sensibility.
        </motion.p>

        <div className="projects-showcase">
          {[
            {
              name: "Tamizhi",
              year: "2026",
              desc: "A highly dynamic platform dedicated to Tamil culture. Features seamless rendering, specialized interactive components, and state-of-the-art UI architectures integrating deep historical aesthetics.",
              tech: ["React.js", "Context API", "CSS Modules", "Framer Motion"],
              imgUrl: tamizhiImg,
              link: "https://www.tamizhi.blog/",
              source: "https://github.com/softnova-technology1/Tamizhi_3.0"
            },
            {
              name: "Men in Black E-commerce",
              year: "2025",
              desc: "An active e-commerce application tailored for fashion. Implements a global CartContext for seamless state management, API integration for scalable product catalogs, and a crisp user experience.",
              tech: ["React.js", "Node.js", "REST APIs", "Modern CSS"],
              imgUrl: mibImg,
              link: "https://project-ten-lac-46.vercel.app/",
              source: "https://github.com/manoj190802/New"
            },
            {
              name: "Picky",
              year: "2026",
              desc: "Developed a modern shopping e-commerce website using Next.js Created responsive product pages and smooth shopping navigation.Integrated APIs and reusable components for better performance and user experience..",
              tech: ["Next.js", "Framer Motion", "EmailJS"],
              imgUrl: ""
            }
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              className="project-row"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <div className="project-image-box" onClick={() => proj.link && window.open(proj.link, '_blank')} style={{ cursor: proj.link ? 'pointer' : 'default' }}>
                <img src={proj.imgUrl} alt={proj.name} className="project-image" />
                <div className="project-image-overlay">
                  <a href={proj.link || "#"} target={proj.link ? "_blank" : "_self"} rel="noreferrer" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', width: 'auto' }} onClick={(e) => e.stopPropagation()}>
                    View Project <ArrowRight size={18} />
                  </a>
                </div>
              </div>
              <div className="project-details">
                <div className="project-year">{proj.year}</div>
                <h3 className="project-title">{proj.name}</h3>
                <div className="tech-stack">
                  {proj.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <p className="project-desc">{proj.desc}</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href={proj.link || "#"} target={proj.link ? "_blank" : "_self"} rel="noreferrer" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: '600' }}><ExternalLink size={20} /> Live Site</a>
                  <a href={proj.source || "#"} target={proj.source ? "_blank" : "_self"} rel="noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: '600' }}><Github size={20} /> Source</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Module */}
      <section id="contact" className="section container">
        <motion.div
          className="contact-grid"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="contact-info">
            <h2 className="title">Ready to build <span className="text-gradient">Impact?</span></h2>
            <p>I am always looking for challenging roles and innovative projects. Let's create something extraordinary together.</p>

            <a href="mailto:manoj.manojlenin@gmail.com" className="contact-method">
              <div className="cm-icon"><Mail size={24} /></div>
              <div className="cm-details">
                <h4>Send an Email</h4>
                <span>manoj.manojlenin@gmail.com</span>
              </div>
            </a>

            <a href="tel:+919361590501" className="contact-method">
              <div className="cm-icon"><Phone size={24} /></div>
              <div className="cm-details">
                <h4>Give me a call</h4>
                <span>+91 9361590501</span>
              </div>
            </a>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div className="input-group" style={{ flex: 1 }}>
                  <label>Name</label>
                  <input type="text" className="input-field" placeholder="Manoj" required name='user_fname' />
                </div>
                <div className="input-group" style={{ flex: 1 }}>
                  <label>Phone</label>
                  <input type="number" className="input-field" placeholder="+91 XXXXX XXXXX" required name='user_Mobile' />
                </div>
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" className="input-field" placeholder="manoj@example.com" required name='user_email' />
              </div>
              <div className="input-group">
                <label>Project Details</label>
                <textarea className="input-field" placeholder="Tell me about your vision..." rows="5" name='user_message'></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Transmit Message <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer container">
        <p>© {new Date().getFullYear()} Manoj L. Engineered with React, Vite & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
