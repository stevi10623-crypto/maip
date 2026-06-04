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

function App() {
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
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="wrap nav-in">
          <div className="brand">
            <img
              src="/MAIP_logo.svg"
              alt="MAIP — Master AI Practitioner"
              style={{ height: 76, width: 'auto', display: 'block' }}
            />
          </div>
          <a href="#contact" className="nav-cta">
            Request a consultation
          </a>
        </div>
      </nav>

      {/* HERO — exact client copy */}
      <header>
        <div className="wrap">
          <div className="eyebrow reveal d1">
            <span className="dot" /> A personal AI consultant for trial attorneys
          </div>
          <h1 className="reveal d2">
            Don't be outsmarted
            <br />
            by <em>the opposition.</em>
          </h1>
          <p className="sub reveal d3">
            A <b>personal AI consultant</b> providing <b>full-service legal research and document
            production.</b> You hand me the matter — I deliver finished, verified work product, ready for
            your name. Nothing to learn, nothing to install, and nothing about how you practice has to
            change.
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
              <b>✓</b> Done for you — no software to learn
            </span>
            <span>
              <b>✓</b> Verified work product, never raw AI
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
            Built for criminal defense and litigation — and ready for the rest of your practice. You
            stay the attorney; I take the time-consuming work off your desk.
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
              <div className="svc-li">
                <span className="b">✓</span>{' '}
                <span>Everything stays private and confidential — never email, never a public chatbot.</span>
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
