"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/447387940626?text=" +
  encodeURIComponent("Hello Doves, I'd like to know more about the Global Funeral Plan.");

const APPLY = "https://apply.doveslife.co.uk/apply/lead";

const slides = [
  { image: "/assets/family-together.jpg", position: "center 22%" },
  { image: "/assets/family-home.jpg", position: "center" },
  { image: "/assets/diaspora-member.jpg", position: "center 12%" },
];

const covers = [
  ["Attendance fees", "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z M4 20a8 8 0 0 1 16 0"],
  ["Mortuary fees", "M3 21V8l9-5 9 5v13 M9 21v-6h6v6"],
  ["Removal", "M3 17h13l3-5H8Z"],
  ["Undertakers", "M4 20h16 M7 20V9l5-4 5 4v11"],
  ["Washing and dressing", "M12 3c2 3 6 4 6 9a6 6 0 0 1-12 0c0-5 4-6 6-9Z"],
  ["Embalming", "M8 3h8v6a4 4 0 0 1-8 0Z M8 21h8 M12 13v8"],
  ["Casket", "M3 8h18v8H3Z M3 12h18"],
  ["Zinc lining", "M4 8h16v10H4Z M4 12h16 M8 8V5h8v3"],
  ["Hearse", "M2 16h15l4-6H7Z"],
  ["Airport clearance", "M2 16h20 M6 16V9l8-5 4 3v9"],
  ["Documentation", "M6 3h9l3 3v15H6Z M9 12h6 M9 16h6"],
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

function Tick() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
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
  const [slide, setSlide] = useState(0);
  const [sent, setSent] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

      <div className="topbar">
        <div className="wrap">
          <span>Open 24/7 for funeral services</span>
          <div className="topbar-links">
            <a href="tel:+263242774013">+44 20 3885 1002</a>
            <a href="mailto:contactcenter@doves.co.zw">contactcenter@doves.co.zw</a>
          </div>
        </div>
      </div>

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
              ["#diaspora", "Doves Global Plan"],
              ["#remittances", "Remittances"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>{label}</a>
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
            <h1 className="reveal delay-1">Bringing peace of mind across borders</h1>
            <p className="reveal delay-2">We assist bereaved families to repatriate or expatriate their loved ones, and we look after the documentation from start to finish.</p>
            <div className="hero-actions reveal delay-3">
              <a className="btn" href={APPLY}>Apply Now</a>
              <a className="btn ghost" href="#repatriation">View repatriation cover</a>
              <a className="btn ghost" href="#diaspora">See Doves Global Plan benefits</a>
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
            <figure className="portrait observe">
              <img src="/assets/support-meeting.jpg" alt="A family member receiving advice and support" />
              <figcaption>Advice and support throughout the process</figcaption>
            </figure>
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
              {covers.map(([title, path]) => (
                <article className="cover observe" key={title}>
                  <div className="icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d={path} />
                    </svg>
                  </div>
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section band" id="diaspora">
          <div className="wrap split">
            <div className="observe">
              <p className="eyebrow">Doves Global Plan</p>
              <h2>Bringing peace of mind across borders</h2>
              <p>Coverage is arranged for Zimbabweans living away from home, with the principal member in the diaspora paying the premium. Beneficiaries in Zimbabwe can be added on local deluxe plan rates.</p>
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
                <p>The principal member in the diaspora pays via Paynow.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section cream" id="remittances">
          <div className="wrap remit">
            <img className="observe" src="/assets/remittance-cash.jpg" alt="Cash being handed over, as with a cross-border remittance" />
            <div className="observe">
              <p className="eyebrow">Financial services</p>
              <h2>International remittances</h2>
              <p>This service connects Zimbabweans and the diaspora community through a financial services platform that allows sending and receiving of money across borders.</p>
              <p>Our strategic partnership with Western Union allows one to send money outside Zimbabwe from Harare branches as well as receive money from loved ones at any Doves branch. Customers can also receive funds from abroad through WorldRemit and collect at Doves branches. We guarantee cash availability for convenience and peace of mind.</p>
              <div className="partners" aria-label="Remittance partners">
                <span>Western Union</span>
                <span>WorldRemit</span>
                <span>Paynow</span>
                <span>Doves branches</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="wrap contact-grid">
            <div className="card observe">
              <p className="eyebrow">Contact</p>
              <h2>Speak with us</h2>
              <p>Unit 17f, The Lansbury Estates 102 Lower Guildford Road, Knaphill, Woking, Surrey, England, GU21 2EP</p>
              <ul className="contact-list">
                <li><a href="tel:+263242774013">+44 20 3885 1002</a></li>
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
            <p>Funeral assurance and repatriation services for Zimbabwe and families abroad.</p>
          </div>
          <div>
            <h3>On this site</h3>
            <ul>
              <li><a href="#repatriation">Repatriation &amp; expatriation</a></li>
              <li><a href="#diaspora">Doves Global Plan</a></li>
              <li><a href="#eligibility">Eligibility</a></li>
              <li><a href="#remittances">International remittances</a></li>
              <li><a href={APPLY}>Apply for cover</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact details</h3>
            <ul>
              <p>Unit 17f, The Lansbury Estates 102 Lower Guildford Road, Knaphill, Woking, Surrey, England, GU21 2EP</p>
              <li><a href="tel:+263242774013">+44 20 3885 1002</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener">WhatsApp +44 7387 940626</a></li>
              <li><a href="mailto:contactcenter@doves.co.zw">contactcenter@doves.co.zw</a></li>
              <li>Open 24/7 for funeral services</li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <span>© 2026 Doves Holdings. All rights reserved.</span>
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
