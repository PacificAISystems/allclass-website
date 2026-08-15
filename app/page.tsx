import { Nav }          from '@/components/Nav'
import { HeroVideo }    from '@/components/HeroVideo'
import { ClientEffects } from '@/components/ClientEffects'
import { FaqSection }   from '@/components/FaqSection'
import { ContactForm }  from '@/components/ContactForm'
import { SITE }         from '@/lib/site'

/* ── Pexels image helper ──────────────────────────────────────── */
const px = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

/* ── Gallery photos (truck / highway themed) ─────────────────── */
const GALLERY = [
  { id: 34902065, cls: 'tall', alt: 'Semi truck on scenic highway with mountains' },
  { id: 28264496, cls: '',     alt: 'Silver semi truck on open highway under blue sky' },
  { id: 12261472, cls: '',     alt: 'White semi truck under dramatic cloudy sky' },
  { id: 8994766,  cls: '',     alt: 'White semi truck on scenic road in BC with mountains' },
  { id: 27099095, cls: 'wide', alt: 'Red Kenworth T680 semi-trailer truck on open road' },
  { id: 31550630, cls: '',     alt: 'Trucks driving on highway with mountain backdrop' },
  { id: 37753989, cls: '',     alt: 'Blue semi truck on scenic mountain highway' },
  { id: 27508769, cls: '',     alt: 'Blue truck on highway with desert mesa backdrop' },
]

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Nav />

      {/* ── MOBILE CALL BAR ─────────────────────────────────── */}
      <div className="callbar">
        <a href={SITE.phoneHref}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          Call {SITE.phone} — Enrol Today
        </a>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero" id="home" aria-label="Hero">
        <HeroVideo />
        <div className="hero-veil" />

        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Edmonton, Alberta · Est. in Excellence</span>
          </div>

          <h1 className="hero-h">
            <span className="w">1,075 drivers</span>
            <br />
            <span className="w">started here.</span>
            <br />
            <span className="w"><em>Yours is next.</em></span>
          </h1>

          <p className="hero-sub">
            Edmonton's only 5.0-rated Class 1 school. Alberta Government
            certified, Amazon Career Choice approved, and one instructor
            for every student — every session.
          </p>

          <div className="hero-actions">
            <a className="btn-gold" href={SITE.phoneHref}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call {SITE.phone}
            </a>
            <a className="btn-outline" href="#programs">Explore Programs →</a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust-stars">★★★★★</div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-text">
              <strong>{SITE.rating}</strong> · {SITE.reviewCount} Google Reviews
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-text">
              <strong>Alberta</strong> Government Certified
            </div>
          </div>
        </div>

        <div className="hero-corner">
          <span className="hero-corner-label">Speak with us</span>
          <a className="hero-corner-num" href={SITE.phoneHref}>{SITE.phone}</a>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────── */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <span className="trust-item">
            <span className="trust-item-icon">★</span>
            <strong>{SITE.rating}</strong>&nbsp;Google Rating
          </span>
          <span className="trust-sep" />
          <span className="trust-item">
            <span className="trust-item-icon">✓</span>
            <strong>{SITE.reviewCount}+</strong>&nbsp;Verified Reviews
          </span>
          <span className="trust-sep" />
          <span className="trust-item">
            <span className="trust-item-icon">⊕</span>
            Alberta&nbsp;<strong>Government Certified</strong>
          </span>
          <span className="trust-sep" />
          <span className="trust-item">
            <span className="trust-item-icon">◈</span>
            Amazon&nbsp;<strong>Career Choice Partner</strong>
          </span>
          <span className="trust-sep" />
          <span className="trust-item">
            <span className="trust-item-icon">▲</span>
            <strong>1-on-1</strong>&nbsp;Instructor Ratio
          </span>
          <span className="trust-sep" />
          <span className="trust-item">
            <span className="trust-item-icon">◎</span>
            Mon–Fri&nbsp;<strong>9am – 4pm</strong>
          </span>
        </div>
      </div>

      {/* ── PROGRAMS ────────────────────────────────────────── */}
      <section className="sec" id="programs" style={{ padding: 0 }}>
        <div className="sec-inner" style={{ padding: '9rem 3.5rem 4rem' }}>
          <div className="divider r">
            <span className="divider-line" />
            <span className="divider-text">Our Programs</span>
          </div>
          <h2 className="sec-h r d1">
            Three Paths.<br /><em>One Career.</em>
          </h2>
          <p className="sec-lead r d2">
            Whether you're starting from zero, upgrading your licence, or adding a
            certification — we have a program built for you.
          </p>
        </div>

        <div className="prog-grid r d3">
          {/* Class 1 */}
          <article className="prog-card">
            <img className="prog-card-img" src={px(27099095)} alt="Red semi truck on Alberta highway" loading="lazy" />
            <div className="prog-card-overlay" />
            <div className="prog-content">
              <span className="prog-popular-badge">
                Most Popular <span className="prog-popular-dot" />
              </span>
              <h3 className="prog-h">Class 1<br /><em>Learning</em><br />Pathway</h3>
              <p className="prog-desc">
                Alberta's three-stage mandatory training program — Entry Program,
                Core Learning, and Competence Building. Everything from zero
                to a full, unrestricted Class 1 licence. One-on-one instruction at every stage.
              </p>
              <div className="prog-sep" />
              <div className="prog-hours">125 – 145 hrs</div>
              <div className="prog-hours-label">Total across all three stages</div>
              <a className="prog-link" href="#pathway">View the full pathway →</a>
            </div>
          </article>

          {/* Class 3 */}
          <article className="prog-card">
            <img className="prog-card-img" src={px(28264496)} alt="Silver semi truck on open highway" loading="lazy" />
            <div className="prog-card-overlay" />
            <div className="prog-content">
              <span className="prog-tag">Licence Upgrade</span>
              <h3 className="prog-h">Class 3<br /><em>Training</em></h3>
              <p className="prog-desc">
                Pre-trip inspection, vehicle control, road driving, and road-test
                preparation — tailored to your current skill level. No wasted hours.
                Assessed individually so you train exactly what you need.
              </p>
              <div className="prog-sep" />
              <div className="prog-hours">Custom</div>
              <div className="prog-hours-label">Assessed to your experience</div>
              <a className="prog-link" href="#contact">Enquire now →</a>
            </div>
          </article>

          {/* Air Brake */}
          <article className="prog-card">
            <img className="prog-card-img" src={px(8994766)} alt="Semi truck on mountain highway" loading="lazy" />
            <div className="prog-card-overlay" />
            <div className="prog-content">
              <span className="prog-tag">Q Endorsement</span>
              <h3 className="prog-h">Air Brake<br /><em>Course</em></h3>
              <p className="prog-desc">
                Earn your Q endorsement. Required for Class 1 drivers without air brake
                certification — 8 focused hours covering systems, inspection, theory,
                and practical operation. Available standalone or included in Class 1.
              </p>
              <div className="prog-sep" />
              <div className="prog-hours">8 hrs</div>
              <div className="prog-hours-label">Theory and practical included</div>
              <a className="prog-link" href="#contact">Book your spot →</a>
            </div>
          </article>
        </div>
      </section>

      {/* ── PATHWAY ─────────────────────────────────────────── */}
      <section className="sec" id="pathway">
        <div className="sec-inner">
          <div className="path-layout">
            <div className="path-sticky">
              <div className="divider rl">
                <span className="divider-line" />
                <span className="divider-text">Alberta Class 1</span>
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

      {/* ── INCOME / OPPORTUNITY ────────────────────────────── */}
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

      {/* ── GALLERY ─────────────────────────────────────────── */}
      <section id="gallery">
        <div className="gallery-header">
          <div className="divider r">
            <span className="divider-line" />
            <span className="divider-text">Training & Fleet</span>
          </div>
          <h2 className="sec-h r d1">
            Built for the<br /><em>Road Ahead.</em>
          </h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <div key={i} className={`gallery-item${g.cls ? ` ${g.cls}` : ''}`}>
              <img
                src={px(g.id, 1200)}
                alt={g.alt}
                loading="lazy"
              />
              <div className="gallery-item-overlay" />
            </div>
          ))}
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

      {/* ── INSTRUCTORS ─────────────────────────────────────── */}
      <section id="instructors">
        <div className="inst-inner">
          <div className="divider r">
            <span className="divider-line" />
            <span className="divider-text">Our Instructors</span>
          </div>
          <h2 className="sec-h r d1">
            Taught by<br /><em>Professionals.</em>
          </h2>

          <div className="inst-layout">
            <div className="inst-img-wrap rl">
              <img
                className="inst-img"
                src={px(37753989, 900)}
                alt="Professional truck driving instructor"
                loading="lazy"
              />
              <div className="inst-badge">
                <div className="inst-badge-n">15+</div>
                <div className="inst-badge-l">Years avg. experience</div>
              </div>
              <div className="inst-cert-strip">
                <span className="inst-cert-text">Alberta Certified</span>
              </div>
            </div>

            <div className="rr d1">
              <p className="sec-lead" style={{ maxWidth: '100%', marginBottom: '2.5rem' }}>
                Every All Class instructor is a career commercial driver first.
                They know Alberta's roads, Alberta's examiners, and exactly what
                it takes to pass — because they've done it at the highest level.
              </p>

              <div className="inst-creds">
                <div className="inst-cred-item">
                  <span className="inst-cred-icon">▲</span>
                  <div>
                    <div className="inst-cred-title">Alberta Government Certified</div>
                    <div className="inst-cred-body">
                      All instructors are certified by the Government of Alberta to
                      deliver the Class 1 Learning Pathway. No exceptions.
                    </div>
                  </div>
                </div>
                <div className="inst-cred-item">
                  <span className="inst-cred-icon">◎</span>
                  <div>
                    <div className="inst-cred-title">One-on-One, Every Session</div>
                    <div className="inst-cred-body">
                      You will never share in-cab time with another student. Every
                      session is dedicated to you — your pace, your gaps, your goals.
                    </div>
                  </div>
                </div>
                <div className="inst-cred-item">
                  <span className="inst-cred-icon">★</span>
                  <div>
                    <div className="inst-cred-title">Trained to Examiner Standards</div>
                    <div className="inst-cred-body">
                      We train to the precise standard Alberta road examiners assess —
                      not the curriculum minimum. That's why 1,075+ students left us a five-star review.
                    </div>
                  </div>
                </div>
                <div className="inst-cred-item">
                  <span className="inst-cred-icon">◈</span>
                  <div>
                    <div className="inst-cred-title">Professional Fleet</div>
                    <div className="inst-cred-body">
                      Train on maintained, commercial-grade equipment — the same class
                      of truck you will operate professionally. No surprises on test day.
                    </div>
                  </div>
                </div>
              </div>

              <div className="inst-govt-badge">
                <span>✓</span>
                Alberta-Certified Mandatory Entry-Level Training (MELT) Provider
              </div>
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
              <div className="rev-stars-sm">★★★★★</div>
              <p className="rev-text">
                Passed my Class 1 road test on the first attempt. The instructors know
                exactly what examiners look for and they train you to that standard —
                not just the minimum. Worth every dollar and more.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Gurpreet S.</div>
              <div className="rev-role">Class 1 — passed first attempt</div>
            </div>

            <div className="rev-card r d1">
              <div className="rev-stars-sm">★★★★★</div>
              <p className="rev-text">
                I was nervous starting from zero. My instructor was patient, never made
                me feel rushed, and genuinely celebrated with me when I passed. Best
                money I've ever spent on my career.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Manpreet K.</div>
              <div className="rev-role">Class 1 — zero to licence</div>
            </div>

            <div className="rev-card r d2">
              <div className="rev-stars-sm">★★★★★</div>
              <p className="rev-text">
                Did my Air Brake Q endorsement here then came back for the full Class 1
                pathway. Clean equipment, real instructors, and they genuinely care that
                you become a safe driver — not just that you pass a test.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Jason T.</div>
              <div className="rev-role">Air Brake + Class 1 Graduate</div>
            </div>

            <div className="rev-card r d1">
              <div className="rev-stars-sm">★★★★★</div>
              <p className="rev-text">
                Got my Class 1 in less time than I expected. The one-on-one setup means
                you're not waiting around — every hour in the truck is focused on you.
                Had a job offer before I even got my permanent card.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Hardeep B.</div>
              <div className="rev-role">Class 1 — hired before card arrived</div>
            </div>

            <div className="rev-card r d2">
              <div className="rev-stars-sm">★★★★★</div>
              <p className="rev-text">
                I tried another school first and failed twice. Switched to All Class,
                trained for two weeks, passed. The difference in instruction quality
                is night and day. Should have started here.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Sukhwinder M.</div>
              <div className="rev-role">Class 1 — passed after switching schools</div>
            </div>

            <div className="rev-card r d3">
              <div className="rev-stars-sm">★★★★★</div>
              <p className="rev-text">
                Amazon Career Choice covered my Class 1 training through All Class.
                The team walked me through every step of the application. Now I'm
                driving long-haul and earning more than I ever did in a warehouse.
              </p>
              <div className="rev-sep" />
              <div className="rev-name">Navdeep G.</div>
              <div className="rev-role">Class 1 — Amazon Career Choice funded</div>
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

      {/* ── FINANCING ───────────────────────────────────────── */}
      <section id="financing">
        <div className="fin-inner">
          <div className="r">
            <div className="divider">
              <span className="divider-line" />
              <span className="divider-text">Funding & Financing</span>
            </div>
          </div>
          <h2 className="sec-h r d1">
            Training Shouldn't<br /><em>Break the Bank.</em>
          </h2>
          <p className="sec-lead r d2">
            Multiple funding options are available to help you start your career
            without the full upfront cost. We'll help you find what you qualify for.
          </p>

          <div className="fin-grid">
            <div className="fin-card featured r">
              <span className="fin-feat-tag">Approved Partner</span>
              <div className="fin-icon">◈</div>
              <h3 className="fin-title">Amazon Career Choice</h3>
              <p className="fin-body">
                All Class Driving Academy is an approved Amazon Career Choice partner.
                Amazon employees may be eligible to have their Class 1 training fully
                funded through Career Choice benefits — one of the most direct paths
                into a well-paying skilled trade. Ask about eligibility when you call.
              </p>
              <a className="fin-link" href={SITE.phoneHref}>Ask about eligibility →</a>
            </div>

            <div className="fin-card r d1">
              <div className="fin-icon">▲</div>
              <h3 className="fin-title">Government of Alberta Funding</h3>
              <p className="fin-body">
                The Alberta government offers skills development funding and grants
                for eligible residents pursuing commercial driver training. Our team
                will walk you through the application process and what you may qualify for.
              </p>
              <a className="fin-link" href={SITE.phoneHref}>Enquire about funding →</a>
            </div>

            <div className="fin-card r d2">
              <div className="fin-icon">◎</div>
              <h3 className="fin-title">Third-Party Payment Plans</h3>
              <p className="fin-body">
                Flexible financing options available through third-party providers.
                Split your training cost into manageable payments so you can start
                training now rather than waiting to save the full amount.
              </p>
              <a className="fin-link" href={SITE.phoneHref}>Discuss options →</a>
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

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="sec" id="faq">
        <div className="sec-inner">
          <div className="faq-layout">
            <div className="faq-sticky">
              <div className="divider rl">
                <span className="divider-line" />
                <span className="divider-text">Questions</span>
              </div>
              <h2 className="sec-h rl d1">
                Before You<br /><em>Call Us.</em>
              </h2>
              <p className="sec-lead rl d2">
                Everything you need to know about getting started. Still have a
                question? We're always happy to talk.
              </p>
              <a
                href={SITE.phoneHref}
                className="rl d3"
                style={{
                  display: 'inline-block', marginTop: '2rem',
                  fontSize: '.65rem', letterSpacing: '.18em',
                  textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '600',
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
              Seats fill quickly. Call, email, or fill out the form — and
              don't wait on a career that's already waiting for you.
            </p>
            <a className="con-btn" href={SITE.phoneHref}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call {SITE.phone}
            </a>
          </div>

          <div className="con-details rr">
            <div>
              <span className="con-lbl">Main Line</span>
              <a className="con-val" href={SITE.phoneHref}>{SITE.phone}</a>
            </div>
            <div>
              <span className="con-lbl">Also Reach Us</span>
              {SITE.altPhones.map(p => (
                <a key={p.href} className="con-val con-val-sm" href={p.href}>{p.label}</a>
              ))}
            </div>
            <div>
              <span className="con-lbl">Email</span>
              <a className="con-val con-val-sm" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div>
              <span className="con-lbl">Address</span>
              <span className="con-val con-val-sm">{SITE.address}</span>
            </div>
            <div>
              <span className="con-lbl">Hours</span>
              <span className="con-val con-val-sm">{SITE.hours}</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="con-map-wrap">
          <iframe
            className="con-map"
            src="https://maps.google.com/maps?q=5307+72a+Ave+NW,+Edmonton,+AB+T6B+2J1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="All Class Driving Academy location"
          />
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrap sec-inner" style={{ maxWidth: '1160px', margin: '5rem auto 0', padding: '0 3.5rem' }}>
          <div className="divider r">
            <span className="divider-line" />
            <span className="divider-text">Send an Enquiry</span>
          </div>
          <h3 className="sec-h r d1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginBottom: '3rem' }}>
            Or fill out the<br /><em>form below.</em>
          </h3>
          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer>
        <div>
          <a className="foot-brand" href="#home">
            <em>All Class</em> Driving Academy Ltd.
          </a>
          <p className="foot-note">
            {SITE.address} · {SITE.phone} · Mon–Fri 9am–4pm
          </p>
        </div>
        <div className="foot-links">
          <a href="#programs">Programs</a>
          <a href="#pathway">Pathway</a>
          <a href="#financing">Financing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  )
}
