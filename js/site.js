const SITE = {
  name: "Smart Start Academy & Daycare",
  phoneDisplay: "010 102 0574",
  phoneHref: "tel:+27101020574",
  whatsappDisplay: "082 842 5845",
  whatsappHref: "https://wa.me/27828425845",
  facebook: "https://www.facebook.com/people/Smart-Start-Academy-and-Daycare/61565348087602/",
  tiktok: "https://www.tiktok.com/@smartstartacademy?_r=1&_t=ZS-9AWm5gvJY72",
  tiktokHandle: "@SmartStartAcademy",
  hoursWeekday: "Monday–Friday · 06:00–17:30",
  hoursSaturday: "Saturday · 07:30–14:30",
  branches: [
    {
      name: "Orange Grove",
      address: "80 13th Street, Orange Grove"
    },
    {
      name: "Kew",
      address: "119 9th Road, Kew"
    }
  ]
};

const NAV_ITEMS = [
  { href: "index.html", id: "home", label: "Home" },
  { href: "about.html", id: "about", label: "About" },
  { href: "programs.html", id: "programs", label: "Programs" },
  { href: "approach.html", id: "approach", label: "Approach" },
  { href: "teachers.html", id: "teachers", label: "Teachers" },
  { href: "gallery.html", id: "gallery", label: "Gallery" },
  { href: "admissions.html", id: "admissions", label: "Admissions" },
  { href: "contact.html", id: "contact", label: "Contact" }
];

function currentPageId() {
  return document.body.getAttribute("data-page") || "home";
}

function renderHeader() {
  const header = document.getElementById("site-header");
  if (!header) {
    return;
  }

  const pageId = currentPageId();
  const links = NAV_ITEMS.map((item) => {
    const current = item.id === pageId ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${current}>${item.label}</a>`;
  }).join("");

  header.innerHTML = `
    <div class="container header-inner">
      <a class="brand" href="index.html">
        <img src="images/logo.jpg" alt="Smart Start Academy emblem">
        <span class="brand-text">
          <strong>Smart Start Academy</strong>
          <small>&amp; Daycare</small>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
        <span></span>
      </button>
      <nav class="site-nav" id="site-nav">${links}
        <a class="btn btn-gold header-cta" href="admissions.html">Enrol Your Child</a>
      </nav>
    </div>
  `;
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="images/logo.jpg" alt="">
            <h3>Smart Start Academy &amp; Daycare</h3>
          </div>
          <p>Building a foundation for a better society through quality education.</p>
        </div>
        <div>
          <h3>Visit</h3>
          ${SITE.branches.map((branch) => `<p><strong>${branch.name}</strong><br>${branch.address}</p>`).join("")}
          <p>${SITE.hoursWeekday}<br>${SITE.hoursSaturday}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-links">
            <a href="${SITE.phoneHref}">${SITE.phoneDisplay}</a>
            <a href="${SITE.whatsappHref}">WhatsApp ${SITE.whatsappDisplay}</a>
            <a href="${SITE.facebook}" target="_blank" rel="noreferrer">Facebook</a>
            <a href="${SITE.tiktok}" target="_blank" rel="noreferrer">TikTok ${SITE.tiktokHandle}</a>
          </div>
        </div>
        <div>
          <h3>Explore</h3>
          <div class="footer-links">
            <a href="about.html">About Us</a>
            <a href="programs.html">Our Programs</a>
            <a href="gallery.html">Gallery</a>
            <a href="admissions.html">Admissions</a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <span>© ${new Date().getFullYear()} Smart Start Academy &amp; Daycare. All rights reserved.</span>
        <span>Foundation of a Better Society</span>
      </div>
    </div>
  `;
}

function renderWhatsAppButton() {
  const button = document.createElement("a");
  button.className = "whatsapp-float";
  button.href = `${SITE.whatsappHref}?text=${encodeURIComponent("Hello Smart Start Academy, I would like to learn more about enrolment.")}`;
  button.target = "_blank";
  button.rel = "noreferrer";
  button.setAttribute("aria-label", "Chat on WhatsApp");
  button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 2.1 17.8L1 23l5.3-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.2-.3a1.5 1.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.6 11.5 11.5 0 0 0 4.4 3.9 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3z"/></svg>';
  document.body.appendChild(button);
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function initHeroSlideshow() {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dots = Array.from(document.querySelectorAll(".hero-dots button"));
  if (slides.length < 2) {
    return;
  }

  let index = 0;
  const show = (nextIndex) => {
    slides[index].classList.remove("is-active");
    dots[index]?.classList.remove("is-active");
    index = nextIndex;
    slides[index].classList.add("is-active");
    dots[index]?.classList.add("is-active");
  };

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", () => show(dotIndex));
  });

  window.setInterval(() => {
    show((index + 1) % slides.length);
  }, 6500);
}

function initLightbox() {
  const links = Array.from(document.querySelectorAll("[data-lightbox]"));
  if (!links.length) {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(overlay);
  const image = overlay.querySelector("img");

  const close = () => overlay.classList.remove("is-open");
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      close();
    }
  });
  overlay.querySelector(".lightbox-close").addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      image.src = link.getAttribute("href");
      image.alt = link.querySelector("img")?.alt || "";
      overlay.classList.add("is-open");
    });
  });
}

function initEnquiryForm() {
  const form = document.getElementById("enquiry-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const parentName = String(data.get("parentName") || "").trim();
    const childName = String(data.get("childName") || "").trim();
    const enquiryType = String(data.get("enquiryType") || "an enquiry");
    const message = String(data.get("message") || "").trim();
    const text = [
      `Hello Smart Start Academy, my name is ${parentName}.`,
      childName ? `I am enquiring for ${childName}.` : "",
      `I would like to ${enquiryType}.`,
      message
    ].filter(Boolean).join(" ");
    window.open(`${SITE.whatsappHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderWhatsAppButton();
  initMobileNav();
  initHeroSlideshow();
  initLightbox();
  initEnquiryForm();
});
