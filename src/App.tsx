import { useState, useEffect } from 'react'

// STEGAL Shield demo content (inline spans preserved as HTML — faithful to approved design)
const PROTECTED_DOC =
  'Draft a demand letter for our client <span class="tok">[CLIENT_1]</span> (SSN <span class="tok">[ID_1]</span>) regarding breach of contract by <span class="tok">[ORG_1]</span>, damages of <span class="pii">$1.2M</span>.'
const RAW_DOC =
  'Draft a demand letter for our client <span class="pii">Sarah Jenkins</span> (SSN <span class="pii">000-24-9876</span>) regarding breach of contract by <span class="pii">Apex Corp.</span>, damages of <span class="pii">$1.2M</span>.'

const CORE_SERVICES = [
  'Trial opening statements & full trial-prep packages',
  'Sentencing arguments & Guidelines rebuttals',
  'Suppression, seizure & forfeiture oppositions',
  'Deep-record sweeps — transcripts, forensic reports, declarations',
  'Jury-instruction analysis, cross-exam prep & demonstratives',
]

const EXTENDED_SERVICES = [
  'Contract review & redlining',
  'Case-law & precedent research',
  'E-discovery & document review',
  'RFP & pitch drafting',
  'Regulatory & compliance monitoring',
]

type Mark = 'x' | 'v'
const COMPARISON: { feat: string; them: [Mark, string]; us: [Mark, string] }[] = [
  {
    feat: 'Client identity sent to a third-party AI',
    them: ['x', 'Yes — uploaded as-is'],
    us: ['v', 'Never — pseudonymized first'],
  },
  {
    feat: 'Where your files live',
    them: ['x', "On the vendor's servers, under their policy"],
    us: ['v', 'Our private, encrypted, access-controlled systems'],
  },
  {
    feat: 'Best model & always current',
    them: ['x', "Locked to one vendor's model"],
    us: ['v', 'Best model per task — continuously upgraded as new ones ship'],
  },
  {
    feat: 'Verified citations',
    them: ['v', 'Bluebook'],
    us: ['v', 'Bluebook + source-checked'],
  },
  {
    feat: 'Confidentiality posture',
    them: ['x', '"Trust our privacy policy"'],
    us: ['v', 'Retained confidential team; identity shielded from AI'],
  },
]

function App() {
  const [shieldOn, setShieldOn] = useState(true)
  const [sent, setSent] = useState(false)

  // scroll reveal — set opacity in JS so content stays visible if JS is off
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll('section .kicker, section .h2, .shield, .cmp, .stats, .contact'),
    ) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            ;(en.target as HTMLElement).style.animation = 'rise .8s cubic-bezier(.2,.7,.2,1) forwards'
            io.unobserve(en.target)
          }
        }),
      { threshold: 0.15 },
    )
    els.forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(24px)'
      io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  const mark = (m: Mark) => <span className={m === 'x' ? 'x' : 'v'}>{m === 'x' ? '✕' : '✓'}</span>

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
            Request access
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header>
        <div className="wrap">
          <div className="eyebrow reveal d1">
            <span className="dot" /> Powered by the STEGAL engine · for premium law firms
          </div>
          <h1 className="reveal d2">
            Frontier legal AI
            <br />
            that never hands your
            <br />
            <span className="seal">client's name</span> <em>to a tech company.</em>
          </h1>
          <p className="sub reveal d3">
            Paste a matter into a consumer AI chatbot or "AI for law" tool and the whole file — names,
            SSNs — leaves on a third party's servers, under their privacy policy, not yours.{' '}
            <b>We work differently.</b> Your files come to us as your retained, confidential
            litigation-<em>support</em> team — working under your direction, for licensed attorneys
            only — and stay on our private, access-controlled systems. When we run frontier AI, the
            STEGAL Shield pseudonymizes every identifier <b>first</b> — so the AI provider only ever
            sees <b>[CLIENT_1]</b>, never your client.
          </p>
          <div className="cta-row reveal d4">
            <a href="#contact">
              <button className="btn btn-gold">Request access →</button>
            </a>
            <a href="#shield">
              <button className="btn btn-ghost">See the Shield live</button>
            </a>
          </div>
          <div className="trust reveal d5">
            <span>
              <b>✓</b> No AI provider ever sees your client's identity
            </span>
            <span>
              <b>✓</b> Encrypted, access-controlled storage
            </span>
            <span>
              <b>✓</b> Privilege &amp; conflicts intact
            </span>
          </div>
        </div>
      </header>

      {/* STEGAL SHIELD */}
      <section id="shield">
        <div className="wrap">
          <div className="kicker">The moat · STEGAL Shield</div>
          <h2 className="h2">
            Watch a privileged matter get <em>sanitized in real time.</em>
          </h2>
          <p className="lead">
            Flip the Shield off and you're every other tool. Flip it on — the way MAIP runs by
            default — and the model never sees a single identifying detail.
          </p>

          <div className="shield">
            <div className="shield-top">
              <div className="shield-title">
                <span className="ic">🛡</span> STEGAL Shield
              </div>
              <div className="toggle" onClick={() => setShieldOn((v) => !v)}>
                <span>{shieldOn ? 'Shield ON' : 'Shield OFF'}</span>
                <div className={shieldOn ? 'sw' : 'sw off'} />
              </div>
            </div>
            <div className="shield-grid">
              <div className="col">
                <h4>
                  ① What you type <span className="live">● your office</span>
                </h4>
                <div className="doc">
                  Draft a demand letter for our client <span className="pii">Sarah Jenkins</span> (SSN{' '}
                  <span className="pii">000-24-9876</span>) regarding breach of contract by{' '}
                  <span className="pii">Apex Corp.</span>, damages of <span className="pii">$1.2M</span>.
                </div>
              </div>
              <div className="col out">
                <h4>
                  ② What the model actually receives{' '}
                  <span className="live" style={{ color: shieldOn ? 'var(--jade)' : 'var(--rose)' }}>
                    {shieldOn ? '● protected' : '● exposed'}
                  </span>
                </h4>
                <div
                  className="doc"
                  dangerouslySetInnerHTML={{ __html: shieldOn ? PROTECTED_DOC : RAW_DOC }}
                />
              </div>
            </div>
          </div>
          <p className="note">
            <b>↳</b> When the model replies, the real names are restored on our secured systems. The AI
            provider only ever received <span className="tok">[CLIENT_1]</span> — never your client.
            That's the difference between "trust their privacy policy" and "they never received the
            identity at all."
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="wrap">
          <div className="kicker">What we do</div>
          <h2 className="h2">
            AI-accelerated litigation support —<br />
            <em>filing-ready</em> work product.
          </h2>
          <p className="lead">
            Attorneys retain us; we deliver trial- and filing-ready work, privately. Built for criminal
            defense — capable across the rest.
          </p>
          <div className="svc">
            <div className="svc-card core">
              <div className="tagline">● Core — criminal defense &amp; litigation</div>
              <h3>What we're built for</h3>
              {CORE_SERVICES.map((s) => (
                <div className="svc-li" key={s}>
                  <span className="b">›</span> {s}
                </div>
              ))}
            </div>
            <div className="svc-card alt">
              <div className="tagline">Also on the same private engine</div>
              <h3>Beyond litigation</h3>
              {EXTENDED_SERVICES.map((s) => (
                <div className="svc-li" key={s}>
                  <span className="b">›</span> {s}
                </div>
              ))}
            </div>
          </div>
          <p className="note" style={{ marginTop: 24 }}>
            <b>↳</b> Every matter runs through the STEGAL Shield — client identities pseudonymized before
            anything reaches a model. Frontier-quality output, zero exposure.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section>
        <div className="wrap">
          <div className="kicker">How MAIP compares</div>
          <h2 className="h2">
            They feed your client's data to a tech company.
            <br />
            We're built so the AI <em>never sees who it is.</em>
          </h2>
          <div className="cmp">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell feat" style={{ color: 'var(--parch)' }}>
                Capability
              </div>
              <div className="cmp-cell col-them">Generic AI tools</div>
              <div className="cmp-cell col-us head-us">MAIP + STEGAL</div>
            </div>
            {COMPARISON.map((row) => (
              <div className="cmp-row" key={row.feat}>
                <div className="cmp-cell feat">{row.feat}</div>
                <div className="cmp-cell col-them">
                  {mark(row.them[0])} {row.them[1]}
                </div>
                <div className="cmp-cell col-us">
                  {mark(row.us[0])} {row.us[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FIRMS RETAIN US */}
      <section>
        <div className="wrap">
          <div className="kicker">Why firms retain us</div>
          <h2 className="h2">
            The work that <em>buries an associate</em> — handed back filing-ready.
          </h2>
          <p className="lead">
            Not a chatbot you rent by the minute. We take the deep, time-sinking record work off your
            desk and return work product you can actually file.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="n">Deep</div>
              <div className="l">
                record sweeps — full transcripts, exhibits &amp; declarations, cross-referenced to your
                theory
              </div>
            </div>
            <div className="stat">
              <div className="n">Ready</div>
              <div className="l">filing-ready drafts built to the record — reviewed, not raw AI output</div>
            </div>
            <div className="stat">
              <div className="n">Zero</div>
              <div className="l">client identity exposed to any third-party AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURE INTAKE */}
      <section>
        <div className="wrap">
          <div className="kicker">Secure intake &amp; client access</div>
          <h2 className="h2">
            Files move over an <em>encrypted private network</em> — not email.
          </h2>
          <p className="lead">
            Email is the weakest link in legal confidentiality — every attachment leaves copies on mail
            servers you don't control. We onboard you to a private, encrypted pipeline (Tailscale) for
            document upload and case access: point-to-point, invite-only, with nothing exposed to the
            public internet.
          </p>
          <div className="stats">
            <div className="stat">
              <div className="n">🔒</div>
              <div className="l">Encrypted device-to-device transfer — no inbox, no public portal to breach</div>
            </div>
            <div className="stat">
              <div className="n">↑↓</div>
              <div className="l">Upload case materials and retrieve finished work in one secured space</div>
            </div>
            <div className="stat">
              <div className="n">👤</div>
              <div className="l">
                Firm-controlled access — add your own team and set who can view, upload, or download per
                matter; revoke anyone instantly
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
                  Tell us about your practice.
                  <br />
                  We'll <em>email you back.</em>
                </h2>
                <p className="lead">
                  No cold calls, no calendar gymnastics. Send a note and we reply in writing — with a
                  tailored walkthrough of how MAIP fits your matters. Prefer to talk later? We can, once
                  you've seen it.
                </p>
                <p className="form-note" style={{ marginTop: 24 }}>
                  ✓ Already trusted by practicing California criminal-defense attorneys —{' '}
                  <b style={{ color: 'var(--parch)' }}>references available on request</b>.
                </p>
                <p className="form-note" style={{ marginTop: 10 }}>
                  🔒 Your message stays between us. We practice what we sell.
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
                      <option>Contract review &amp; transactional</option>
                      <option>Litigation &amp; case law</option>
                      <option>E-discovery</option>
                      <option>Compliance / regulatory</option>
                      <option>Solo / small firm — general</option>
                    </select>
                    <label>What would you want it to handle?</label>
                    <textarea placeholder="e.g. A sentencing memo with a Guidelines rebuttal, due in two weeks…" />
                    <button className="btn btn-gold" type="submit">
                      Send message →
                    </button>
                    <p className="form-note">We reply by email, usually same day.</p>
                  </form>
                ) : (
                  <div className="ok show">
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--gold-bright)' }}>
                      Message sent ✓
                    </div>
                    <p style={{ marginTop: 10, color: 'var(--parch-dim)' }}>
                      Thanks — we'll reply by email shortly. Nothing you wrote left your control.
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
            <b>not a law firm</b> and does not provide legal advice or representation. We provide
            AI-assisted litigation-support and document-preparation services to licensed attorneys, who
            work under their own professional judgment and remain solely responsible for the
            representation of their clients. All deliverables are <b>drafts</b> subject to the attorney's
            independent review and verification. Our services use artificial intelligence, which can
            produce errors, omissions, or inaccurate citations — every output must be verified by a
            licensed attorney before any filing or use. Nothing on this site creates an attorney-client
            relationship, and no result or outcome is guaranteed. Services are governed by a written
            engagement agreement.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap', gap: 14 }}>
            <div>© 2026 MAIP · Master AI Practitioner — engine: STEGAL</div>
            <div>AI-assisted litigation support · California</div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
