import Chat from './components/Chat';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'var(--clr-glass-bg)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--clr-glass-border)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, lineHeight: 1 }}>Infinity Electric</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--clr-accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Maui</div>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#services" style={{ color: 'var(--clr-text-main)', textDecoration: 'none', fontWeight: 500 }}>Services</a>
            <a href="#work" style={{ color: 'var(--clr-text-main)', textDecoration: 'none', fontWeight: 500 }}>Our Work</a>
          </div>
          <div>
            <a href="tel:8085550192" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="container animate-fade-up" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '100px', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <div className="glass-panel" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '2rem' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--clr-accent)', borderRadius: '50%' }}></span>
            SERVING ALL OF MAUI
          </div>
          
          <h1 style={{ marginBottom: '1.5rem' }}>
            Maui's most <em style={{ color: 'var(--clr-accent)', fontStyle: 'italic' }}>reliable</em> electrician. On time, every time.
          </h1>
          
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px' }}>
            Licensed, insured, and on-call for homeowners, vacation rentals, and contractors across the island.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="tel:8085550192" className="btn btn-primary">Call (808) 555-0192</a>
            <a href="#services" className="btn btn-outline">See Our Services</a>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="container" style={{ padding: '6rem 2rem' }}>
        <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Full-service electrical for every project</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--clr-accent)' }}>Panel Upgrades</h3>
            <p>200A upgrades, sub-panels, and code compliance for older Maui homes.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--clr-accent)' }}>EV Charger Install</h3>
            <p>Level 2 home charger installation. Fast, permitted, and warranty-ready.</p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--clr-accent)' }}>Rewiring & Repairs</h3>
            <p>Full rewires, outlet replacements, GFCI installs, and targeted troubleshooting.</p>
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section id="work" className="container" style={{ padding: '4rem 2rem 8rem 2rem' }}>
        <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Recent projects across Maui</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/project1.png" alt="Luxury lighting installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3' }}>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/project2.png" alt="EV Charger installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3' }}>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/project3.png" alt="Clean electrical panel wiring" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

        </div>
      </section>
      
      {/* Chat Component */}
      <Chat />
    </main>
  );
}