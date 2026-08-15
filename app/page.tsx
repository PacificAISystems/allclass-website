import { Nav } from '@/components/Nav'
import { HeroCanvas } from '@/components/HeroCanvas'
import { ClientEffects } from '@/components/ClientEffects'
import { FaqSection } from '@/components/FaqSection'
import { Ticker } from '@/components/Ticker'
import { SITE } from '@/lib/site'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Nav />

      {/* Mobile call bar */}
      <div className="callbar">
        <a href={SITE.phoneHref}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          {SITE.phone}
        </a>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero" id="home" aria-label="Hero">
        <HeroCanvas />
        <div className="hero-veil" />
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Edmonton, Alberta · Est. in Excellence</span>
          </div>
          <h1 className="hero-h">
            <span className="w">Edmonton's</span>{' '}
            <span className="w">Finest</span>
            <br />
            <span className="w"><em>Truck</em></span>{' '}
            <span className="w">Academy.</span>
          </h1>
          <p className="hero-sub">
            Class 1, Class 3, and Air Brake training delivered with precision,
            care, and an unbroken record of five-star results.
          </p>
          <div className="hero-actions">
            <a className="btn-gold" href={SITE.phoneHref}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call {SITE.phone}
            </a>
            <a className="btn-outline" href="#programs">Explore Programs →</a>
          </div>
          <div className="hero-trust">
            <div>
              <div className="hero-trust-stars">★★★★★</div>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-text">
              <strong>{SITE.rating}</strong> · {SITE.reviewCount} Google Reviews
            </div>
          </div>
        </div>
        <div className="hero-corner">
          <span className="hero-corner-label">Speak with us</span>
          <a className="hero-corner-num" href={SITE.phoneHref}>{SITE.phone}</a>
        </div>
      </section>

      {/* ── TICKER ──────────────────────────────────────────── */}
      <Ticker />

      {/* ── INCOME ──────────────────────────────────────────── */}
      <section id="income">
        <div className="income-inner">
          <div className="rl">
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">The Opportunity</span>
            </div>
            <h2 className="sec-h">
              A Licence That<br /><em>Changes Lives.</em>
            </h2>
            <p className="sec-lead">
              Canada faces a shortage of over 20,000 commercial drivers.
              A Class 1 licence is one of the most reliable paths to a
              six-figure income in the skilled trades — and it starts here.
            </p>
            <a className="income-cta-link" href="#programs">
              View our programs →
            </a>
          </div>
          <div className="rr">
            <div className="income-grid">
              <div className="income-stat">
                <div className="income-n">$<em>85K</em></div>
                <div className="income-label">Starting annual salary, Alberta</div>
              </div>
              <div className="income-stat">
                <div className="income-n">$<em>120K</em></div>
                <div className="income-label">Experienced driver, Alberta</div>
              </div>
              <div className="income-stat">
                <div className="income-n"><em>20,000</em>+</div>
                <div className="income-label">Driver shortage, Canada-wide</div>
              </div>
              <div className="income-stat">
                <div className="income-n"><em>125</em> hrs</div>
                <div className="income-label">Zero to full Class 1 licence</div>
              </div>
              <div className="income-source">
                Source: Alberta Labour Market Information · Transport Canada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────────────────── */}
      <section className="sec" id="programs">
        <div className="sec-inner">
          <div className="r">
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">Our Programs</span>
            </div>
          </div>
          <h2 className="sec-h r d1">
            Three Paths.<br /><em>One Career.</em>
          </h2>
          <p className="sec-lead r d2">
            Whether you are new to commercial driving, upgrading your licence,
            or adding a certification — we have a program built for you.
          </p>

          <div className="prog-grid r d3">
            <article className="prog-card prog-card-featured">
              <span className="prog-tag">
                Alberta Class 1 Pathway
                <span className="prog-popular-dot" />
              </span>
              <h3 className="prog-h">Class 1<br /><em>Learning</em><br />Pathway</h3>
              <p className="prog-desc">
                Alberta's three-stage mandatory training program. Entry Program,
                Core Learning, and Competence Building — everything from zero
                to a full, unrestricted Class 1 licence.
              </p>
              <div className="prog-sep" />
              <div className="prog-hours">125 – 145 hrs</div>
              <div className="prog-hours-label">Total across all three stages</div>
              <a className="prog-link" href="#pathway">View the full pathway →</a>
            </article>

            <article className="prog-card">
              <span className="prog-tag">Upgrade</span>
              <h3 className="prog-h">Class 3<br /><em>Training</em></h3>
              <p className="prog-desc">
                Pre-trip inspection, vehicle control, road driving, and road-test
                preparation — tailored to your current skill level with no wasted hours.
              </p>
              <div className="prog-sep" />
              <div className="prog-hours">Custom</div>
              <div className="prog-hours-label">Assessed to your experience</div>
              <a className="prog-link" href="#contact">Enquire now →</a>
            </article>

            <article className="prog-card">
              <span className="prog-tag">Certification</span>
              <h3 className="prog-h">Air Brake<br /><em>Course</em></h3>
              <p className="prog-desc">
                Earn your Q endorsement. Required for Class 1 drivers without air
                brake certification — 8 focused hours covering systems, inspection,
                theory, and practical operation.
              </p>
              <div className="prog-sep" />
              <div className="prog-hours">8 hrs</div>
              <div className="prog-hours-label">Theory and practical</div>
              <a className="prog-link" href="#contact">Book your spot →</a>
            </article>
          </div>
        </div>
      </section>

      {/* ── PATHWAY ─────────────────────────────────────────── */}
      <section className="sec" id="pathway">
        <div className="sec-inner">
          <div className="path-layout">
            <div className="path-sticky">
              <div className="rl">
                <div className="divider">
                  <span className="divider-line" />
                  <span className="divider-text">Alberta Class 1</span>
                </div>
              </div>
              <h2 className="sec-h rl d1">
                Three Stages.<br /><em>One Licence.</em>
              </h2>
              <p className="sec-lead rl d2">
                The Class 1 Learning Pathway is Alberta's government-mandated
                three-stage program. Here is exactly what each stage involves.
              </p>
              <a className="btn-gold rl d3" href={SITE.phoneHref} style={{ display: 'inline-flex', marginTop: '2.5rem' }}>
                Enrol today →
              </a>
            </div>

            <div className="path-steps">
              <div className="path-step r">
                <div className="path-num">01</div>
                <div>
                  <span className="path-stage">Stage One</span>
                  <h3 className="path-name">Entry Program</h3>
                  <p className="path-text">
                    Online training introducing you to a career in commercial
                    driving — industry knowledge, regulations, professional
                    responsibilities, and fundamentals of large-vehicle operation.
                    Required before the Class 1 knowledge test.
                  </p>
                  <span className="path-pill">40 hrs · Online · Government delivered</span>
                </div>
              </div>

              <div className="path-step r d1">
                <div className="path-num">02</div>
                <div>
                  <span className="path-stage">Stage Two</span>
                  <h3 className="path-name">Core Learning Program</h3>
                  <p className="path-text">
                    In-yard and in-cab skill development with our professional
                    instructors — one-on-one, every session. Covers vehicle
                    inspection, basic control, road driving, cargo handling,
                    and safety systems. Includes 8 hours of Air Brake training
                    if required. Completion earns a restricted Class 1 licence.
                  </p>
                  <span className="path-pill">60 hrs in-cab · 8 hrs air brake · In person</span>
                </div>
              </div>

              <div className="path-step r d2">
                <div className="path-num">03</div>
                <div>
                  <span className="path-stage">Stage Three</span>
                  <h3 className="path-name">Competence Building</h3>
                  <p className="path-text">
                    One-on-one instruction customised to your road assessment
                    results. Your instructor works with you until you demonstrate
                    full competency — then the restriction on your licence is
                    lifted, unlocking full interprovincial Class 1 driving.
                  </p>
                  <span className="path-pill">17 – 25 hrs · One-on-one · Road assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CRED BAR ────────────────────────────────────────── */}
      <section id="cred">
        <div className="cred-inner">
          <div className="cred-grid">
            <div className="cred-item r">
              <span className="cred-n" data-target="5.0" data-float="true" data-suffix=" ★">5.0 ★</span>
              <span className="cred-label">Google Rating</span>
            </div>
            <div className="cred-item r d1">
              <span className="cred-n" data-target="1075" data-suffix="+">1,075+</span>
              <span className="cred-label">Verified Reviews</span>
            </div>
            <div className="cred-item r d2">
              <span className="cred-n"><em>1</em>–<em>1</em></span>
              <span className="cred-label">Instructor to student ratio</span>
            </div>
            <div className="cred-item r d3">
              <span className="cred-n"><em>3</em></span>
              <span className="cred-label">Programs offered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────────────────── */}
      <section className="sec" id="reviews">
        <div className="sec-inner">
          <div className="rev-header r">
            <div>
              <div className="divider">
                <span className="divider-line" />
                <span className="divider-text">What Students Say</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                <span className="rev-score">{SITE.rating}</span>
                <div>
                  <div className="rev-stars">★★★★★</div>
                  <div className="rev-total">Based on {SITE.reviewCount} Google Reviews</div>
                </div>
              </div>
            </div>
            <a className="rev-read-link" href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Read all reviews →
            </a>
          </div>

          <div className="rev-grid">
            <div className="rev-card r">
              <span className="rev-quote-mark">"</span>
              <p className="rev-text">
                Passed my Class 1 road test on the first attempt. The instructors are
                patient, professional, and they train you on exactly what the examiners
                look for. Worth every dollar.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Gurpreet S.</div>
              <div className="rev-role">Class 1 Graduate</div>
            </div>

            <div className="rev-card r d1">
              <span className="rev-quote-mark">"</span>
              <p className="rev-text">
                Best driving school in Edmonton. They worked around my day-job schedule
                and the one-on-one competence building made all the difference.
                I would not go anywhere else.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Manpreet K.</div>
              <div className="rev-role">Class 1 Graduate</div>
            </div>

            <div className="rev-card r d2">
              <span className="rev-quote-mark">"</span>
              <p className="rev-text">
                Did my Air Brake course here and came back for Class 1. Clean trucks,
                experienced instructors, and they genuinely care that you become a
                safe driver — not just that you pass a test.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Jason T.</div>
              <div className="rev-role">Air Brake + Class 1 Graduate</div>
            </div>
          </div>

          <p className="rev-note">
            Representative of {SITE.reviewCount}+ reviews ·{' '}
            <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              Read them all on Google
            </a>
          </p>
        </div>
      </section>

      {/* ── WHY ALL CLASS ────────────────────────────────────── */}
      <section className="sec" id="why">
        <div className="sec-inner">
          <div className="r">
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">Why All Class</span>
            </div>
          </div>
          <h2 className="sec-h r d1">
            The Standard<br /><em>We Hold.</em>
          </h2>

          <div className="why-grid r d2">
            <div className="why-card">
              <div className="why-num">01</div>
              <h3 className="why-title">Five-Star Pass Rate Culture</h3>
              <p className="why-body">
                1,075+ five-star reviews don't happen by accident. We train to
                the precise standard Alberta examiners assess — not the curriculum minimum.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">02</div>
              <h3 className="why-title">One-on-One, Every Session</h3>
              <p className="why-body">
                Every in-cab session is one student, one instructor. You receive
                full attention behind the wheel — no waiting, no sharing time.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">03</div>
              <h3 className="why-title">Professional Fleet</h3>
              <p className="why-body">
                Train on maintained, commercial-grade equipment — the same class
                of truck you will operate professionally. No surprises on test day.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">04</div>
              <h3 className="why-title">Edmonton-Built</h3>
              <p className="why-body">
                We know Alberta's roads, examiners, and hiring landscape.
                Your training is built for where you are going to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENROLL ──────────────────────────────────────────── */}
      <section className="sec" id="enroll">
        <div className="sec-inner">
          <div className="r">
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">Getting Started</span>
            </div>
          </div>
          <h2 className="sec-h r d1">
            Enrol in<br /><em>Four Steps.</em>
          </h2>

          <div className="enroll-grid r d2">
            <div className="enroll-step">
              <h3 className="enroll-title">Call or Visit</h3>
              <p className="enroll-body">
                Phone {SITE.phone} or come by {SITE.address}. We answer every
                question — no pressure, no jargon.
              </p>
            </div>
            <div className="enroll-step">
              <h3 className="enroll-title">Choose Your Program</h3>
              <p className="enroll-body">
                Class 1 Pathway, Class 3, or Air Brake. We assess where you are
                starting from and map your exact hours.
              </p>
            </div>
            <div className="enroll-step">
              <h3 className="enroll-title">Schedule Training</h3>
              <p className="enroll-body">
                Flexible scheduling built around your existing commitments.
                Weekday sessions, Monday to Friday.
              </p>
            </div>
            <div className="enroll-step">
              <h3 className="enroll-title">Pass &amp; Get Hired</h3>
              <p className="enroll-body">
                Train to the examiner's standard, sit your road test with
                confidence, and begin your driving career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMAZON ──────────────────────────────────────────── */}
      <section id="amazon">
        <div className="az-inner r">
          <div className="az-card">
            <div>
              <span className="az-tag">Funding Available</span>
              <h3 className="az-h">Amazon Career Choice</h3>
              <p className="az-text">
                All Class Driving Academy is an approved Amazon Career Choice partner.
                Amazon employees may be eligible to have their Class 1 training funded
                through Career Choice benefits — one of the most direct paths into a
                well-paying skilled trade. Ask about eligibility when you call.
              </p>
            </div>
            <a className="az-cta" href={SITE.phoneHref}>
              Ask about funding →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="sec" id="faq">
        <div className="sec-inner">
          <div className="faq-layout">
            <div className="faq-sticky">
              <div className="rl">
                <div className="divider">
                  <span className="divider-line" />
                  <span className="divider-text">Questions</span>
                </div>
              </div>
              <h2 className="sec-h rl d1">
                Before You<br /><em>Call Us.</em>
              </h2>
              <p className="sec-lead rl d2">
                Everything you need to know about getting started. Still have a
                question? We are always happy to talk.
              </p>
              <a
                href={SITE.phoneHref}
                className="rl d3"
                style={{
                  display: 'inline-block', marginTop: '2rem',
                  fontFamily: 'var(--font-sans)', fontSize: '.65rem',
                  letterSpacing: '.18em', textTransform: 'uppercase',
                  color: 'var(--gold)', fontWeight: '600',
                }}
              >
                {SITE.phone} →
              </a>
            </div>
            <FaqSection />
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section id="contact">
        <div className="con-inner">
          <div className="rl">
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">Book Now</span>
            </div>
            <h2 className="con-h">
              Ready to<br /><em>Get Moving?</em>
            </h2>
            <p className="con-sub">
              Seats fill quickly. Call, email, or come visit the yard — and
              do not wait on a career that is already waiting for you.
            </p>
            <a className="con-btn" href={SITE.phoneHref}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call {SITE.phone}
            </a>
          </div>
          <div className="con-details rr">
            <div className="con-row">
              <span className="con-lbl">Main Line</span>
              <a className="con-val" href={SITE.phoneHref}>{SITE.phone}</a>
            </div>
            <div className="con-row">
              <span className="con-lbl">Also Reach Us</span>
              {SITE.altPhones.map(p => (
                <a key={p.href} className="con-val con-val-sm" href={p.href}>{p.label}</a>
              ))}
            </div>
            <div className="con-row">
              <span className="con-lbl">Email</span>
              <a className="con-val con-val-sm" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div className="con-row">
              <span className="con-lbl">Address</span>
              <span className="con-val con-val-sm">{SITE.address}</span>
            </div>
            <div className="con-row">
              <span className="con-lbl">Hours</span>
              <span className="con-val con-val-sm">{SITE.hours}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer>
        <a className="foot-brand" href="#home">
          <em>All Class</em> Driving Academy Ltd.
        </a>
        <p className="foot-note">
          {SITE.address} · {SITE.phone} · Mon–Fri 9am–4pm
        </p>
      </footer>
    </>
  )
}
