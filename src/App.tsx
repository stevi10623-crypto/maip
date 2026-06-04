import { useState, useEffect } from 'react'

const SERVICES = [
  'Trial opening statements & full trial-prep packages',
  'Sentencing arguments & Guidelines rebuttals',
  'Suppression, seizure & forfeiture oppositions',
  'Deep-record review — transcripts, forensic reports, declarations',
  'Cross-examination prep, jury instructions & demonstratives',
  'Case-law & precedent research',
  'Motions, briefs & document production',
  'Contract review & redlining',
]

const SECURITY_POINTS = [
  ['Private systems', 'Everything I handle stays on private, access-controlled systems — never email, never a public chatbot.'],
  ['Client identity shielded', "When AI is used, your client's identity is shielded from any outside provider, so privilege and confidentiality stay intact."],
  ['Encrypted transfer', 'Files move over a secure, invite-only connection — not email attachments left on servers you don’t control.'],
  ['Best model for the job', 'Each task is routed to the AI model best suited to it, and upgraded as better models ship — you always get current, top-tier work without lifting a finger.'],
  ['You stay in control', 'Everything is draft work product for your independent review. Nothing is ever filed without you.'],
]

function App() {
  const [view, setView] = useState<'home' | 'security'>('home')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('section .kicker, section .h2, .svc, .stats, .contact'),
    ) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            ;(en.target as HTMLElement).style.animation = 'rise .8s cubic-bezier(.2,.7,.2,1) forwards'
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [view])

  const Nav = (
    <nav>
      <div className="wrap nav-in">
        <div className="brand" style={{ cursor: 'pointer' }} onClick={() => setView('home')}>
          <img
            src="/MAIP_logo.svg"
            alt="MAIP — Master AI Practitioner"
            style={{ height: 76, width: 'auto', display: 'block' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          <a
            onClick={() => setView(view === 'security' ? 'home' : 'security')}
            style={{ cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'var(--parch-dim)' }}
          >
            {view === 'security' ? 'Home' : 'Security'}
          </a>
          <a href="#contact" onClick={() => setView('home')} className="nav-cta">
            Request a consultation
          </a>
        </div>
      </div>
    </nav>
  )

  // ---------- SECURITY TAB ----------
  if (view === 'security') {
    return (
      <>
        {Nav}
        <header style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="eyebrow reveal d1">
              <span className="dot" /> For the few who like the details
            </div>
            <h1 className="reveal d2" style={{ fontSize: 'clamp(28px,3.6vw,44px)' }}>
              How your matters are <em>kept safe.</em>
            </h1>
            <p className="sub reveal d3">
              Plain answers, no jargon. Here's how confidentiality, security, and the AI itself are
              handled behind the scenes — so you never have to think about it.
            </p>
          </div>
        </header>

        <section>
          <div className="wrap">
            <div className="svc-card core" style={{ maxWidth: 820 }}>
              <div className="tagline">● Security &amp; confidentiality</div>
              <h3>The short version</h3>
              {SECURITY_POINTS.map(([title, body]) => (
                <div className="svc-li" key={title} style={{ flexDirection: 'column', gap: 4 }}>
                  <span style={{ color: 'var(--gold-bright)', fontWeight: 600 }}>{title}</span>
                  <span style={{ color: 'var(--parch-dim)' }}>{body}</span>
                </div>
              ))}
            </div>
            <p className="lead" style={{ marginTop: 32 }}>
              Want the technical detail? I'm happy to walk your IT person or partner through it.{' '}
              <a href="#contact" onClick={() => setView('home')} style={{ color: 'var(--gold-bright)' }}>
                Get in touch →
              </a>
            </p>
          </div>
        </section>

        <footer>
          <div className="wrap" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 18, width: '100%' }}>
            <div style={{ fontSize: 11.5, lineHeight: 1.65, maxWidth: 920, color: 'var(--parch-dim)' }}>
              <b style={{ color: 'var(--parch)' }}>Disclaimer.</b> MAIP (Master AI Practitioner) is{' '}
              <b>not a law firm</b> and does not provide legal advice or representation. I provide
              AI-assisted legal-research and document-preparation services to licensed attorneys, who
              work under their own professional judgment and remain solely responsible for the
              representation of their clients. All deliverables are <b>drafts</b> subject to the
              attorney's independent review and verification; every output must be verified before any
              filing or use. Nothing on this site creates an attorney-client relationship, and no result
              is guaranteed.
            </div>
            <div>© 2026 MAIP · Master AI Practitioner</div>
          </div>
        </footer>
      </>
    )
  }

  // ---------- HOME ----------
  return (
    <>
      {Nav}

      {/* HERO — win-focused */}
      <header>
        <div className="wrap">
          <div className="eyebrow reveal d1">
            <span className="dot" /> A personal AI consultant for attorneys
          </div>
          <h1 className="reveal d2">
            Don't be outsmarted
            <br />
            by <em>the opposition.</em>
          </h1>
          <p className="sub reveal d3">
            I'm a <b>real person</b> — a personal consultant who puts AI to work for you, not a chatbot
            you have to wrangle. I handle <b>full-service legal research and document production</b>,
            verify every line myself, and deliver finished work product ready for your name — so you walk
            in more prepared than the other side. Nothing to learn, nothing to install, nothing about how
            you practice has to change.
          </p>
          <div className="cta-row reveal d4">
            <a href="#contact">
              <button className="btn btn-gold">Request a consultation →</button>
            </a>
            <a href="#services">
              <button className="btn btn-ghost">See what I handle</button>
            </a>
          </div>
          <div className="trust reveal d5">
            <span>
              <b>✓</b> A real person — not a chatbot
            </span>
            <span>
              <b>✓</b> Verified by me, never raw AI
            </span>
            <span>
              <b>✓</b> Filed under your name
            </span>
          </div>
        </div>
      </header>

      {/* WHAT I HANDLE */}
      <section id="services">
        <div className="wrap">
          <div className="kicker">What I handle</div>
          <h2 className="h2">
            Full-service legal research &amp; <em>document production.</em>
          </h2>
          <p className="lead">
            Everything you need to walk into court more prepared than the opposition. Built for criminal
            defense and litigation — and ready for the rest of your practice. You stay the attorney; I
            take the time-consuming research and drafting off your desk.
          </p>
          <div className="svc">
            <div className="svc-card core">
              <div className="tagline">● What I handle for you</div>
              <h3>Research &amp; document production</h3>
              {SERVICES.map((s) => (
                <div className="svc-li" key={s}>
                  <span className="b">›</span> {s}
                </div>
              ))}
            </div>
            <div className="svc-card alt">
              <div className="tagline">How it works</div>
              <h3>You barely lift a finger</h3>
              <div className="svc-li">
                <span className="b">1</span> <span>Send me the matter — the record, the issue, the deadline.</span>
              </div>
              <div className="svc-li">
                <span className="b">2</span>{' '}
                <span>I do the work and verify every cite against the record.</span>
              </div>
              <div className="svc-li">
                <span className="b">3</span>{' '}
                <span>You get finished, filing-ready work product — ready for your name.</span>
              </div>
              <div className="svc-li" style={{ marginTop: 6 }}>
                <span className="b">↦</span>{' '}
                <span>
                  Curious about confidentiality &amp; security?{' '}
                  <a onClick={() => setView('security')} style={{ cursor: 'pointer', color: 'var(--gold-bright)' }}>
                    See the Security tab
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap">
          <div className="contact">
            <div className="contact-grid">
              <div>
                <div className="kicker">Get in touch</div>
                <h2 className="h2" style={{ fontSize: 34 }}>
                  Tell me about your practice.
                  <br />
                  I'll <em>email you back.</em>
                </h2>
                <p className="lead">
                  No cold calls and no calendar games. Send a note and I'll reply in writing — a straight
                  answer on how I can take the research and drafting off your desk.
                </p>
                <p className="form-note" style={{ marginTop: 24 }}>
                  ✓ Already trusted by practicing California criminal-defense attorneys —{' '}
                  <b style={{ color: 'var(--parch)' }}>references available on request</b>.
                </p>
              </div>
              <div>
                {!sent ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSent(true)
                    }}
                  >
                    <label>Name</label>
                    <input required placeholder="Jane Counsel" />
                    <label>Work email</label>
                    <input required type="email" placeholder="jane@yourfirm.com" />
                    <label>Practice area</label>
                    <select>
                      <option>Criminal defense &amp; litigation</option>
                      <option>Civil litigation</option>
                      <option>Contracts &amp; transactional</option>
                      <option>Solo / small firm — general</option>
                    </select>
                    <label>What would you want handled?</label>
                    <textarea placeholder="e.g. A sentencing memo with a Guidelines rebuttal, due in two weeks…" />
                    <button className="btn btn-gold" type="submit">
                      Send message →
                    </button>
                    <p className="form-note">I reply by email, usually same day.</p>
                  </form>
                ) : (
                  <div className="ok show">
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--gold-bright)' }}>
                      Message sent ✓
                    </div>
                    <p style={{ marginTop: 10, color: 'var(--parch-dim)' }}>
                      Thanks — I'll reply by email shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 18, width: '100%' }}>
          <div style={{ fontSize: 11.5, lineHeight: 1.65, maxWidth: 920, color: 'var(--parch-dim)' }}>
            <b style={{ color: 'var(--parch)' }}>Disclaimer.</b> MAIP (Master AI Practitioner) is{' '}
            <b>not a law firm</b> and does not provide legal advice or representation. I provide
            AI-assisted legal-research and document-preparation services to licensed attorneys, who work
            under their own professional judgment and remain solely responsible for the representation of
            their clients. All deliverables are <b>drafts</b> subject to the attorney's independent review
            and verification; every output must be verified before any filing or use. Nothing on this site
            creates an attorney-client relationship, and no result is guaranteed.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 14 }}>
            <div>© 2026 MAIP · Master AI Practitioner</div>
            <div>Personal AI consultant · California</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
