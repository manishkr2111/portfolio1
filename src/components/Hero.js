import { useState } from 'react';

export default function Hero() {
  const [copiedCode, setCopiedCode] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const codeSnippet = `<?php

namespace Portfolio\\Developer;

class ManishKumar extends BackendEngineer 
{
    public string $title = "Laravel / PHP Backend Developer";
    public string $experience = "2.5+ Years";
    public string $company = "iB Arts Pvt. Ltd.";

    public array $coreSkills = [
        'Backend'   => ['PHP', 'Laravel', 'REST APIs', 'Queue Workers'],
        'Databases' => ['MySQL', 'Relational Database Design'],
        'Fintech'   => ['Stripe Subscriptions', 'Wallet Systems'],
        'Cloud'     => ['AWS EC2', 'Cloudflare', 'DNS', 'SSL', 'cPanel']
    ];

    public function getMission(): string 
    {
        return "Building secure, scalable, and reliable backend solutions.";
    }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="hero" id="hero">
      <div className="section-container">
        <div className="hero-layout">
          {/* Left Column: Intro */}
          <div className="hero-text-col">
            <div className="hero-status-pill">
              <span className="status-indicator-dot" />
              <span>Available for Opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">Manish Kumar</span>
            </h1>

            <div className="hero-role-wrapper">
              <span className="role-tag">Laravel &amp; PHP Specialist</span>
              <span className="role-exp-tag">2.5+ Years Exp</span>
            </div>

            <p className="hero-description">
              I build secure, high-performance RESTful APIs, design optimized MySQL databases,
              and integrate reliable Stripe payment systems. Focused on clean backend architecture
              and scalable web solutions.
            </p>

            <div className="hero-cta-group">
              <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
                View Projects
              </button>
              <button className="btn btn-secondary" onClick={() => scrollTo('#contact')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3.02a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.97-.96a2 2 0 0 1 2.11-.46c.91.34 1.86.57 2.82.7a2 2 0 0 1 1.73 2.02z"/>
                </svg>
                Get In Touch
              </button>
              <a href="#experience" className="btn btn-tertiary" onClick={(e) => { e.preventDefault(); scrollTo('#experience'); }}>
                Experience Details
              </a>
            </div>

            <div className="hero-contact-strip">
              <a href="tel:9507262310" className="contact-pill" title="Call Manish Kumar">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3.02a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.97-.96a2 2 0 0 1 2.11-.46c.91.34 1.86.57 2.82.7a2 2 0 0 1 1.73 2.02z"/>
                </svg>
                <span>+91 9507262310</span>
              </a>

              <a href="mailto:manishkr211120002@gmail.com" className="contact-pill" title="Email Manish Kumar">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>manishkr211120002@gmail.com</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-pill" title="LinkedIn Profile">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-pill" title="GitHub Profile">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Code Terminal Window with High-Contrast Braces & Symbols */}
          <div className="hero-code-col">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="control-dot close" />
                  <span className="control-dot minimize" />
                  <span className="control-dot expand" />
                </div>
                <div className="terminal-title">ManishKumar.php</div>
                <button
                  className="terminal-copy-btn"
                  onClick={copyCode}
                  title="Copy Code"
                >
                  {copiedCode ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="terminal-body">
                <pre className="code-block">
                  <code>
                    <span className="code-php-tag">&lt;?php</span>{'\n\n'}
                    <span className="code-keyword">namespace</span> <span className="code-ns">Portfolio\Developer</span><span className="code-punct">;</span>{'\n\n'}
                    <span className="code-keyword">class</span> <span className="code-class">ManishKumar</span> <span className="code-keyword">extends</span> <span className="code-class">BackendEngineer</span>{'\n'}
                    <span className="code-brace">{'{'}</span>{'\n'}
                    {'    '}<span className="code-visibility">public string</span> <span className="code-var">$title</span> <span className="code-op">=</span> <span className="code-string">"Laravel / PHP Backend"</span><span className="code-punct">;</span>{'\n'}
                    {'    '}<span className="code-visibility">public string</span> <span className="code-var">$experience</span> <span className="code-op">=</span> <span className="code-string">"2.5+ Years"</span><span className="code-punct">;</span>{'\n'}
                    {'    '}<span className="code-visibility">public string</span> <span className="code-var">$company</span> <span className="code-op">=</span> <span className="code-string">"iB Arts Pvt. Ltd."</span><span className="code-punct">;</span>{'\n\n'}
                    {'    '}<span className="code-visibility">public array</span> <span className="code-var">$coreStack</span> <span className="code-op">=</span> <span className="code-bracket">[</span>{'\n'}
                    {'        '}<span className="code-string">'framework'</span> <span className="code-arrow">=&gt;</span> <span className="code-string">'Laravel (MVC, Queues)'</span><span className="code-punct">,</span>{'\n'}
                    {'        '}<span className="code-string">'languages'</span> <span className="code-arrow">=&gt;</span> <span className="code-bracket">[</span><span className="code-string">'PHP'</span><span className="code-punct">,</span> <span className="code-string">'SQL'</span><span className="code-punct">,</span> <span className="code-string">'JS'</span><span className="code-bracket">]</span><span className="code-punct">,</span>{'\n'}
                    {'        '}<span className="code-string">'database'</span>  <span className="code-arrow">=&gt;</span> <span className="code-string">'MySQL Relational Design'</span><span className="code-punct">,</span>{'\n'}
                    {'        '}<span className="code-string">'payments'</span>  <span className="code-arrow">=&gt;</span> <span className="code-string">'Stripe Billing &amp; Wallets'</span><span className="code-punct">,</span>{'\n'}
                    {'        '}<span className="code-string">'cloud'</span>     <span className="code-arrow">=&gt;</span> <span className="code-bracket">[</span><span className="code-string">'AWS EC2'</span><span className="code-punct">,</span> <span className="code-string">'Cloudflare'</span><span className="code-punct">,</span> <span className="code-string">'SSL'</span><span className="code-bracket">]</span>{'\n'}
                    {'    '}<span className="code-bracket">]</span><span className="code-punct">;</span>{'\n\n'}
                    {'    '}<span className="code-visibility">public function</span> <span className="code-func">deployReliableSolutions</span><span className="code-parens">()</span><span className="code-punct">:</span> <span className="code-type">bool</span>{'\n'}
                    {'    '}<span className="code-brace">{'{'}</span>{'\n'}
                    {'        '}<span className="code-keyword">return</span> <span className="code-var">$this</span><span className="code-arrow">-&gt;</span><span className="code-func">buildSecureRestApis</span><span className="code-parens">()</span><span className="code-punct">;</span>{'\n'}
                    {'    '}<span className="code-brace">{'}'}</span>{'\n'}
                    <span className="code-brace">{'}'}</span>
                  </code>
                </pre>
              </div>

              <div className="terminal-footer">
                <span className="terminal-status-dot" />
                <span className="terminal-status-text">PHP 8.2+ · Laravel 10/11 · MySQL 8.0 · Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
