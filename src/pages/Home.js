import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const faqs = [
    {
      question: "Is this platform free?",
      answer: "Yes! We offer a free tier with access to basic features. Premium features are available with our paid plans."
    },
    {
      question: "Is it useful for AMCAT preparation?",
      answer: "Absolutely! Our aptitude and coding sections are designed to help you excel in AMCAT and similar placement tests."
    },
    {
      question: "Can beginners use this platform?",
      answer: "Yes! Our platform is designed for students at all levels, from beginners to advanced learners."
    },
    {
      question: "How is it different from other platforms?",
      answer: "We provide company-specific preparation, AI-powered recommendations, comprehensive progress tracking, and all-in-one aptitude, coding, and interview prep."
    },
    {
      question: "Do you provide company-specific preparation?",
      answer: "Yes! We have dedicated sections for major companies with their specific question patterns and interview processes."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Delhi",
      role: "Placed at Google",
      feedback: "This platform helped me systematically prepare for my dream company. The coding practice and interview questions were spot-on!"
    },
    {
      name: "Rahul Verma",
      college: "NIT Trichy",
      role: "Placed at Microsoft",
      feedback: "The progress tracking feature kept me motivated. I could see my improvement daily, which boosted my confidence tremendously."
    },
    {
      name: "Anjali Patel",
      college: "BITS Pilani",
      role: "Placed at Amazon",
      feedback: "Company-specific preparation was a game-changer. I knew exactly what to expect in my Amazon interview!"
    },
    {
      name: "Arjun Kumar",
      college: "VIT Vellore",
      role: "Placed at TCS",
      feedback: "As a beginner, I found the platform very user-friendly. The step-by-step approach helped me build confidence gradually."
    }
  ];

  return (
    <div className="home-container">
      {/* Navbar for Home page only */}
      {/* <nav className="home-navbar">
        <div className="nav-content">
          <div className="nav-logo">SmartPrep</div>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => scrollToSection('hero')}>Home</a>
            <a href="#blogs" onClick={() => scrollToSection('blogs')}>Blogs</a>
            <button className="nav-btn login-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="nav-btn signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Smart Placement Preparation Platform</h1>
          <p className="hero-subtitle">Crack Interviews with Confidence, Strategy & Practice</p>
          <div className="hero-buttons">
            <button className="cta-primary" onClick={() => navigate('/signup')}>Get Started</button>
            <button className="cta-secondary" onClick={() => navigate('/login')}>Login</button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us-section" id="why-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>All-in-One Platform</h3>
            <p>Aptitude, Coding, and Interview preparation - everything in one place</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏢</div>
            <h3>Company-Specific Prep</h3>
            <p>Targeted preparation for top companies like Google, Microsoft, Amazon</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Progress Tracking</h3>
            <p>Monitor your improvement with detailed analytics and insights</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Real Interview Questions</h3>
            <p>Practice with actual questions asked in top company interviews</p>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="steps-section">
        <h2 className="section-title">Your Path to Success in 3 Steps</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Practice Smart</h3>
            <p>Access curated questions from aptitude, coding, and interview domains</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Track Progress</h3>
            <p>Monitor your performance with detailed analytics and personalized insights</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Crack Interviews</h3>
            <p>Apply your skills confidently and land your dream job</p>
          </div>
        </div>
        <div className="steps-cta">
          <button className="cta-primary" onClick={() => navigate('/signup')}>Get Started</button>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section" id="blogs">
        <h2 className="section-title">Resources & Tips</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-icon">🎯</div>
            <h3>Top 10 Interview Questions</h3>
            <p>Master the most commonly asked questions in placement interviews</p>
            <button className="blog-link">Read More →</button>
          </div>
          <div className="blog-card">
            <div className="blog-icon">💼</div>
            <h3>Interview Tips</h3>
            <p>Expert advice to ace your technical and HR interviews</p>
            <button className="blog-link">Read More →</button>
          </div>
          <div className="blog-card">
            <div className="blog-icon">📖</div>
            <h3>Placement Preparation Guide</h3>
            <p>Complete roadmap from basics to advanced placement preparation</p>
            <button className="blog-link">Read More →</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Trusted by Future Engineers</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{testimonial.feedback}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
                <p className="testimonial-college">{testimonial.college}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className={`faq-question ${openFaq === index ? 'active' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
              </div>
              {openFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SmartPrep</h3>
            <p>Your trusted partner for campus placement preparation</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#why-us">Features</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a onClick={() => navigate('/signup')}>Sign Up</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#blogs">Blog</a></li>
              <li><a href="#why-us">Study Material</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>support@smartprep.com</li>
              <li>+91 1234567890</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; SmartPreparation.All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;