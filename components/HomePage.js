"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/447387940626?text=" +
  encodeURIComponent("Hello Doves, I'd like to know more about the Global Funeral Plan.");

const APPLY = "https://apply.doveslife.co.uk/apply/lead";

const slides = [
  { image: "/assets/family-together.jpg", position: "center 22%" },
  { image: "/assets/family-home.jpg", position: "center" },
  { image: "/assets/fleet/hearse-nissan.jpg", position: "center" },
];

const covers = [
  ["Attendance fees", "/assets/covers/attendance.jpg", "An officiant attending a coffin at a service"],
  ["Mortuary fees", "/assets/covers/chapel.jpg", "A coffin resting in a chapel"],
  ["Removal", "/assets/covers/hospital-bed.jpg", "A hospital ward, where collection often begins"],
  ["Undertakers", "/assets/covers/undertakers.jpg", "Funeral staff gathered at a coffin"],
  ["Washing and dressing", "/assets/covers/shirt.jpg", "Clothing prepared for dressing"],
  ["Embalming", "/assets/covers/clinical.jpg", "A practitioner preparing sterile gloves"],
  ["Casket", "/assets/covers/casket.jpg", "A closed wooden casket"],
  ["Zinc lining", "/assets/covers/zinc-lining.jpg", "A closed sealed casket prepared for travel"],
  ["Hearse", "/assets/covers/hearse-nissan.jpg", "A white Doves Nissan hearse"],
  ["Airport clearance", "/assets/covers/airport.jpg", "A cargo aircraft being loaded at an airport"],
  ["Documentation", "/assets/covers/papers.jpg", "Official papers being completed"],
];

const fleet = [
  ["/assets/fleet/hearse-nissan.jpg", "All terrain"],
  ["/assets/fleet/hearse-prestige.jpg", "G-Wagon hearse"],
  ["/assets/fleet/hearse-pair.jpg", "Executive hearses"],
  ["/assets/fleet/vintage-hearse.jpg", "Vintage hearses"],
  ["/assets/fleet/removal-vehicle.jpg", "All terrain hearses"],
  ["/assets/fleet/removal-fleet.jpg", "Hearses"],
  ["/assets/fleet/courtesy-bus.jpg", "Executive buses"],
  ["/assets/fleet/executive-buses.jpg", "Mourners transport"],
  ["/assets/fleet/courtesy-suv.jpg", "Courtesy vehicles"],
  ["/assets/fleet/executive-tentage.jpg", "Executive tentage"],
  ["/assets/fleet/executive-events.jpg", "Executive events set up"],
];

const benefits = [
  "Bringing the deceased into care from hospital or mortuary",
  "Full embalming",
  "Washing & dressing",
  "Provision of zinc lined burial casket",
  "Grocery allowance",
  "Advice and support throughout the process",
  "Provision of all the necessary administration and documentation",
];

const optionalBenefits = [
  "Life insurance component",
  "International travel cover",
  "Bus, courtesy vehicles, accommodation",
  "Funeral catering and décor",
  "2 return air tickets",
];

const careSlides = [
  { src: "/assets/support-meeting.jpg", alt: "A family member receiving advice and support", caption: "Advice and support throughout the process" },
  { src: "/assets/covers/attendance-service.jpg", alt: "People seated together at a service", caption: "Attendance from the first call" },
  { src: "/assets/covers/casket-wicker.jpg", alt: "A woven casket dressed with flowers", caption: "The casket, included in the cover" },
  { src: "/assets/covers/airport-cargo.jpg", alt: "A cargo aircraft waiting at an airport", caption: "Airport clearance for the journey home" },
  { src: "/assets/fleet/collection-lineup.jpg", alt: "A line of white Doves collection vehicles", caption: "Collection vehicles for the journey" },
];

const remitSlides = [
  { src: "/assets/remittance-cash.jpg", alt: "Cash being handed over across a border", caption: "Money sent across borders" },
  { src: "/assets/covers/remit-family.jpg", alt: "A parent with two children", caption: "Support that reaches family at home" },
  { src: "/assets/covers/remit-papers.jpg", alt: "A person turning through clipped transfer documents", caption: "Simple paperwork for the transfer" },
  { src: "/assets/covers/remit-collect.jpg", alt: "Cash held after a collection", caption: "Collected at a Doves branch" },
];

function FrameCarousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <figure className="frame-carousel">
      <div className="frame-stage">
        {slides.map((item, itemIndex) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            className={itemIndex === index ? "active" : ""}
          />
        ))}
        <figcaption key={slides[index].caption}>{slides[index].caption}</figcaption>
      </div>
      <div className="frame-dots" role="tablist" aria-label="Photos">
        {slides.map((item, itemIndex) => (
          <button
            key={item.src}
            type="button"
            className={itemIndex === index ? "active" : ""}
            aria-label={item.caption}
            aria-selected={itemIndex === index}
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </figure>
  );
}

const howSteps = [
  ["Verify your number", "A one-time WhatsApp code confirms it's really you."],
  ["Choose your plan", "Pick your region, currency and cover amount."],
  ["Tell us about you", "Personal details, family members and payment method."],
  ["Sign and pay", "Sign on screen. Your policy document follows by email and WhatsApp."],
];

function HowItWorks() {
  const [active, setActive] = useState(0);
  const [snap, setSnap] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => {
        if (current === howSteps.length - 1) {
          setSnap(true);
          return 0;
        }
        return current + 1;
      });
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!snap) return undefined;
    const frame = requestAnimationFrame(() => setSnap(false));
    return () => cancelAnimationFrame(frame);
  }, [snap]);

  return (
    <ol className={snap ? "steps is-reset" : "steps"} style={{ "--step": active }}>
      {howSteps.map(([title, text], index) => (
        <li
          key={title}
          className={index === active ? "is-on" : index < active ? "is-done" : ""}
        >
          <span className="step-no">{index + 1}</span>
          <div className="step-copy">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function FootIcon({ name }) {
  const props = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (name === "pin") {
    return (
      <svg {...props}>
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg {...props}>
        <path d="M6.5 3.5h3l1.5 3.5-2 1.2a12 12 0 0 0 5.8 5.8l1.2-2 3.5 1.5v3A2 2 0 0 1 17.5 18 14.5 14.5 0 0 1 4 4.5a2 2 0 0 1 2.5-1Z" />
      </svg>
    );
  }
  if (name === "mobile") {
    return (
      <svg {...props}>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M11 18.5h2" />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.5l3 1.5" />
    </svg>
  );
}

function WhatsAppIcon({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [slide, setSlide] = useState(0);
  const [sent, setSent] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#diaspora") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#doves-global-plan`);
      document.getElementById("doves-global-plan")?.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "repatriation", "doves-global-plan", "remittances", "contact"];

    const update = () => {
      setScrolled(window.scrollY > 8);

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;
      if (nearBottom) {
        setActive("#contact");
        return;
      }

      const line = 120;
      let current = "#home";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= line) current = `#${id}`;
      });
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setSlide((current) => (current + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, [slide]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".observe:not(.show)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sent, slide, scrolled, menuOpen, chatOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function submitEnquiry(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    form.reset();
    setSent(true);
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className={scrolled ? "site scrolled" : "site"}>
        <div className="wrap nav">
          <a className="logo" href="#home" aria-label="Doves home" onClick={closeMenu}>
            <img src="/assets/logo.png" alt="Doves" />
          </a>
          <button
            className="burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
          <ul className={menuOpen ? "menu open" : "menu"}>
            {[
              ["#home", "Home"],
              ["#repatriation", "Repatriation"],
              ["#doves-global-plan", "Doves Global Plan"],
              ["#remittances", "Remittances"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className={active === href ? "active" : undefined}
                  aria-current={active === href ? "true" : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
           <li>
  <a className="btn outline" href="#contact" onClick={closeMenu}>
    Enquire
  </a>
</li>

<li>
  <a
    className="btn"
    href="https://apply.doveslife.co.uk/portal/login"
    onClick={closeMenu}
  >
    Login
  </a>
</li>

<li>
  <a className="btn" href={APPLY} onClick={closeMenu}>
    Apply
  </a>
</li>
          </ul>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="slides" aria-hidden="true">
            {slides.map((item, index) => (
              <div
                key={item.image}
                className={index === slide ? "slide active" : "slide"}
                style={{ backgroundImage: `url('${item.image}')`, backgroundPosition: item.position }}
              />
            ))}
          </div>
          <div className="hero-shade" />
          <div className="wrap hero-content">
            <p className="eyebrow reveal">Doves Global Plan</p>
            <p className="since reveal">Trusted since 1902</p>
            <h1 className="reveal delay-1">Bringing peace of mind across borders</h1>
            <p className="reveal delay-2">We assist bereaved families to repatriate or expatriate their loved ones, and we look after the documentation from start to finish.</p>
            <div className="hero-actions reveal delay-3">
              <a className="btn" href={APPLY}>Apply Now</a>
              <a className="btn ghost" href="#how-it-works">How it works</a>
            </div>
          </div>
          <div className="dots" role="tablist" aria-label="Hero slides">
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                className={index === slide ? "active" : undefined}
                aria-label={`Slide ${index + 1}`}
                aria-selected={index === slide}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
          <div className="curve" />
        </section>

        <section className="section" id="repatriation">
          <div className="wrap intro-grid">
            <div className="observe">
              <p className="eyebrow">Funeral services</p>
              <h2>Repatriation &amp; Expatriation</h2>
              <p className="lead">We assist bereaved families to repatriate or expatriate their loved ones. We assist in all documentation processing from start to finish. Our wealth of experience in repatriations and expatriations has made our service second to none.</p>
              <ul className="checks">
                {[
                  "Documentation handled from the first paper to airport clearance.",
                  "Care, embalming, casket and hearse included in the cover.",
                  "A service shaped by long experience with families at home and abroad.",
                ].map((item) => (
                  <li key={item}><Tick /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <FrameCarousel slides={careSlides} />
          </div>
        </section>

        <section className="section cream">
          <div className="wrap">
            <div className="center observe">
              <p className="eyebrow">Product details</p>
              <h2>Doves repatriation covers</h2>
              <p className="lead">Everything listed here is part of the repatriation cover, so families know what is taken care of before the journey begins.</p>
            </div>
            <div className="covers">
              {covers.map(([title, image, alt]) => (
                <article className="cover observe" key={title}>
                  <img src={image} alt={alt} />
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="doves-global-plan">
          <div className="wrap split">
            <div className="observe">
              <p className="eyebrow">Doves Global Plan</p>
              <h2>Bringing peace of mind across borders</h2>
              <p>This is one plan: funeral and repatriation cover for Zimbabweans living in the UK and abroad. Single or family plans, with dependants included, and a benefits schedule you can read before you apply. The principal member pays the premium from overseas. Family in Zimbabwe can be included on the local deluxe plan rates.</p>
              <a className="btn light" href={APPLY}>Apply Now</a>
            </div>
            <div className="benefit-grid">
              <article className="panel observe">
                <h3>Benefits</h3>
                <ul>{benefits.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="panel optional observe">
                <h3>Optional benefits</h3>
                <ul>{optionalBenefits.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section cream" id="how-it-works">
          <div className="wrap">
            <div className="center observe">
              <p className="eyebrow">How it works</p>
              <h2>Four steps to being covered</h2>
              <p className="lead">Apply online in about ten minutes. Your progress is saved as you go, so you can finish later.</p>
            </div>
            <HowItWorks />
          </div>
        </section>

        <section className="section" id="fleet">
          <div className="wrap">
            <div className="center observe">
              <p className="eyebrow">Equipment</p>
              <h2>Fleet, tentage and events</h2>
              <p className="lead">The plan includes the vehicles for the journey, executive tentage for the gathering, and the event set up for family and guests.</p>
            </div>
            <div className="fleet">
              {fleet.map(([image, label]) => (
                <figure className="observe" key={image}>
                  <img src={image} alt={label} />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section currency" id="regions">
          <div className="wrap">
            <div className="center observe">
              <p className="eyebrow">Pay in your currency</p>
              <h2>Wherever you are</h2>
              <p className="lead">Choose your region at the start of the application and we show cover and premiums in a currency that makes sense to you.</p>
            </div>
            <div className="regions">
              {[
                ["ZAR", "South Africa", "Cover in ZAR"],
                ["8", "SADC region", "8 local currencies"],
                ["GBP", "Worldwide", "USD, GBP, EUR and more"],
              ].map(([code, title, text]) => (
                <article className="region observe" key={title}>
                  <span className="region-code">{code}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="eligibility">
          <div className="wrap">
            <div className="observe">
              <p className="eyebrow">Before you join</p>
              <h2>Who the plan is for</h2>
              <p className="lead">A few clear answers for families arranging cover from abroad.</p>
            </div>
            <div className="faq">
              <details className="observe" open>
                <summary>Who is eligible?</summary>
                <p>Zimbabweans residing abroad. Coverage is available for both members residing abroad and in Zimbabwe.</p>
              </details>
              <details className="observe">
                <summary>What if I want to add my beneficiaries in Zimbabwe?</summary>
                <p>Members are covered using the local deluxe plan rates.</p>
              </details>
              <details className="observe">
                <summary>Who pays for premiums?</summary>
                <p>The principal member living abroad pays the premium, in the currency they earn in. South Africa is shown in ZAR, the SADC region in 8 local currencies, and worldwide cover in USD, GBP, EUR and more.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section cream" id="remittances">
          <div className="wrap remit">
            <FrameCarousel slides={remitSlides} />
            <div className="observe">
              <p className="eyebrow">Financial services</p>
              <h2>International remittances</h2>
              <p>Families can send and receive money across borders, including support for relatives in Zimbabwe.</p>
              <p>Western Union and WorldRemit collections can be made at Doves branches, with cash available for convenience and peace of mind.</p>
              <div className="partners" aria-label="Remittance partners">
                <span>Western Union</span>
                <span>WorldRemit</span>
                <span>Doves branches</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section band apply-close">
          <div className="wrap center">
            <h2>Start your application today</h2>
            <p>It takes about ten minutes. Your progress is saved as you go, so you can finish later.</p>
            <a className="btn light" href={APPLY}>Apply Now</a>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap contact-grid">
            <div className="card observe">
              <p className="eyebrow">Contact</p>
              <h2>Speak with us</h2>
              <p>Unit 17f, The Lansbury Estates, 102 Lower Guildford Road, Knaphill, Woking, Surrey, England, GU21 2EP</p>
              <ul className="contact-list">
                <li><a href="tel:+442038851002">Landline +44 20 3885 1002</a></li>
                <li><a href="tel:+447387940626">Mobile +44 7387 940626</a></li>
                <li><a href={WHATSAPP} target="_blank" rel="noopener">WhatsApp +44 7387 940626</a></li>
                <li><a href="mailto:contactcenter@doves.co.zw">contactcenter@doves.co.zw</a></li>
              </ul>
            </div>
            <form className={sent ? "card form sent" : "card form observe"} onSubmit={submitEnquiry} noValidate>
              <h3>Send an enquiry</h3>
              <div className="fields">
                <label>Full name
                  <input name="name" required autoComplete="name" placeholder="Your name" />
                </label>
                <label>Phone
                  <input name="phone" required autoComplete="tel" placeholder="Include country code" />
                </label>
              </div>
              <label>Email
                <input type="email" name="email" required autoComplete="email" placeholder="you@email.com" />
              </label>
              <label>I am asking about
                <select name="topic" required defaultValue="">
                  <option value="">Choose a service</option>
                  <option>Repatriation &amp; expatriation</option>
                  <option>Doves Global Plan</option>
                  <option>Beneficiaries in Zimbabwe</option>
                  <option>International remittances</option>
                </select>
              </label>
              <label>Message
                <textarea name="message" rows="4" required placeholder="Tell us how we can help" />
              </label>
              <button className="btn" type="submit">Submit enquiry</button>
              <div className={sent ? "note show" : "note"} tabIndex={-1} role="status">
                <div className="note-mark" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3>Thank you for reaching out</h3>
                <p>Your message is ready. A member of the Doves team can continue with you on WhatsApp, day or night.</p>
                <a className="btn" href={WHATSAPP} target="_blank" rel="noopener">Continue on WhatsApp</a>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-grid">
          <div>
            <img src="/assets/logo-white.png" alt="Doves" style={{ height: 72, width: "auto", marginBottom: 12 }} />
            <p>Funeral and repatriation cover for Zimbabweans living in the UK and abroad.</p>
          </div>
          <div>
            <h3>On this site</h3>
            <ul>
              <li><a href="#repatriation">Repatriation &amp; expatriation</a></li>
              <li><a href="#doves-global-plan">Doves Global Plan</a></li>
              <li><a href="#eligibility">Eligibility</a></li>
              <li><a href="#remittances">International remittances</a></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href={APPLY}>Apply for cover</a></li>
              <li><a href="https://apply.doveslife.co.uk/report-a-death">Report a death</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact details</h3>
            <ul className="foot-contact">
              <li><FootIcon name="pin" /><span>Unit 17f, The Lansbury Estates, 102 Lower Guildford Road, Knaphill, Woking, Surrey, England, GU21 2EP</span></li>
              <li><FootIcon name="phone" /><a href="tel:+442038851002">Landline +44 20 3885 1002</a></li>
              <li><FootIcon name="mobile" /><a href="tel:+447387940626">Mobile +44 7387 940626</a></li>
              <li><WhatsAppIcon size={18} /><a href={WHATSAPP} target="_blank" rel="noopener">WhatsApp +44 7387 940626</a></li>
              <li><FootIcon name="mail" /><a href="mailto:contactcenter@doves.co.zw">contactcenter@doves.co.zw</a></li>
              <li><FootIcon name="clock" /><span>Open 24/7 for funeral services</span></li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <span>© 2026 Doves Holdings. Trusted since 1902.</span>
          <a href="https://doves.co.zw/" target="_blank" rel="noopener">doves.co.zw</a>
        </div>
      </footer>

      <div className="wa-dock">
        <div className="wa-panel" id="wa-panel" hidden={!chatOpen}>
          <div className="wa-panel-head">
            <div>
              <strong>Doves Support</strong>
              <span>Typically replies within minutes</span>
            </div>
            <button className="wa-close" type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}>&times;</button>
          </div>
          <p className="wa-bubble">Hi there. Need help choosing cover or finishing your application? Chat with us on WhatsApp.</p>
          <a className="wa-start" href={WHATSAPP} target="_blank" rel="noopener">
            <WhatsAppIcon size={18} />
            Start chat
          </a>
        </div>
        <button
          className="whatsapp"
          type="button"
          aria-label="Open WhatsApp chat"
          aria-expanded={chatOpen}
          aria-controls="wa-panel"
          onClick={() => setChatOpen((open) => !open)}
        >
          <WhatsAppIcon />
        </button>
      </div>
    </>
  );
}
