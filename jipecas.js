document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("js");

  var translations = {
    es: {
      "lang.es": "ES",
      "lang.en": "EN",
      "nav.home": "Inicio",
      "nav.archeological": "Arqueologicas",
      "nav.cenotes": "Cenotes",
      "nav.lagoons": "Lagunas",
      "nav.cities": "Ciudades",
      "nav.transportation": "Transportacion",
      "nav.contact": "Contacto",
      "index.hero.subtitle": "Tours privados y transportacion",
      "index.hero.title": "La mejor experiencia de transportacion",
      "index.hero.description": "Llega a tu destino como lo mereces",
      "index.hero.cta": "Contactar",
      "index.hero.book": "Reserva ahora",
      "index.collage.title": "Collage Riviera Maya",
      "index.collage.subtitle": "Mar, pesca, ruinas, lagunas y aventuras acuaticas en un solo vistazo.",
      "index.destinations.title": "Destinos",
      "index.destinations.subtitle": "Explora nuestras categorias mas solicitadas en Riviera Maya y Yucatan.",
      "index.destinations.explore": "Explorar detalles",
      "index.about.title": "Acerca de All4Sure",
      "index.transfers.title": "Traslados",
      "index.transfers.cta": "Ver servicio completo de transportacion",
      "index.contact.title": "Contactanos",
      "index.contact.subtitle": "Hablemos directamente. Sin formularios, sin esperas.",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "Correo",
      "contact.phone": "Telefono",
      "contact.telegram": "Telegram",
      "contact.snapchat": "Snapchat",
      "contact.chat": "Abrir chat",
      "contact.email.cta": "Enviar correo",
      "contact.call": "Llamar",
      "contact.onlynumber": "Solo numero",
      "archeological.hero.title": "Visita las ruinas mayas",
      "archeological.hero.desc": "Zonas arqueologicas",
      "archeological.top": "Sitios destacados",
      "cenotes.hero.title": "Explora los cenotes de la Riviera Maya",
      "cenotes.hero.desc": "Cenotes",
      "cenotes.top": "Cenotes recomendados",
      "lagoons.hero.title": "Lagunas",
      "lagoons.hero.desc": "Experiencias naturales de agua dulce",
      "lagoons.top": "Lagunas recomendadas",
      "cities.hero.title": "Ciudades",
      "cities.hero.desc": "Cultura, vida local y zona hotelera",
      "cities.top": "Ciudades recomendadas",
      "transport.hero.title": "Transportacion",
      "transport.hero.desc": "Traslados privados y seguros en Riviera Maya",
      "transport.services": "Servicios",
      "transport.book": "Reserva tu traslado",
      "contact.hero.title": "Contactanos",
      "contact.hero.desc": "Comunicacion directa por WhatsApp o formulario",
      "contact.hero.cta": "Contactanos",
      "contact.subtitle": "Comunicacion directa por WhatsApp o dejanos tu mensaje aqui.",
      "contact.form.title": "Envia tu mensaje",
      "contact.form.subtitle": "Respondemos en menos de 24 horas.",
      "contact.form.name": "Nombre completo",
      "contact.form.email": "Correo electronico",
      "contact.form.phone": "Telefono (opcional)",
      "contact.form.service": "Servicio de interes",
      "contact.form.service.none": "Selecciona una opcion",
      "contact.form.service.transport": "Transporte privado",
      "contact.form.service.tours": "Tours",
      "contact.form.service.cenotes": "Cenotes",
      "contact.form.service.other": "Otro",
      "contact.form.message": "Mensaje",
      "contact.form.submit": "Enviar mensaje"
    },
    en: {
      "lang.es": "ES",
      "lang.en": "EN",
      "nav.home": "Home",
      "nav.archeological": "Archeological",
      "nav.cenotes": "Cenotes",
      "nav.lagoons": "Lagoons",
      "nav.cities": "Cities",
      "nav.transportation": "Transportation",
      "nav.contact": "Contact",
      "index.hero.subtitle": "Private tours and transportation",
      "index.hero.title": "The best transportation experience",
      "index.hero.description": "Reach your destination as you deserve",
      "index.hero.cta": "Contact us",
      "index.hero.book": "Book now",
      "index.collage.title": "Riviera Maya collage",
      "index.collage.subtitle": "Sea, fishing, ruins, lagoons and aquatic adventures at a glance.",
      "index.destinations.title": "Destinations",
      "index.destinations.subtitle": "Explore our most requested categories across Riviera Maya and Yucatan.",
      "index.destinations.explore": "Explore details",
      "index.about.title": "About All4Sure",
      "index.transfers.title": "Transfers",
      "index.transfers.cta": "See full transportation service",
      "index.contact.title": "Contact us",
      "index.contact.subtitle": "Let's talk directly. No forms, no waiting.",
      "contact.whatsapp": "WhatsApp",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.telegram": "Telegram",
      "contact.snapchat": "Snapchat",
      "contact.chat": "Open chat",
      "contact.email.cta": "Send email",
      "contact.call": "Call now",
      "contact.onlynumber": "Number only",
      "archeological.hero.title": "Visit the Mayan ruins",
      "archeological.hero.desc": "Archeological sites",
      "archeological.top": "Top sites",
      "cenotes.hero.title": "Explore Riviera Maya cenotes",
      "cenotes.hero.desc": "Cenotes",
      "cenotes.top": "Recommended cenotes",
      "lagoons.hero.title": "Lagoons",
      "lagoons.hero.desc": "Natural freshwater experiences",
      "lagoons.top": "Recommended lagoons",
      "cities.hero.title": "Cities",
      "cities.hero.desc": "Culture, local life and hotel zone",
      "cities.top": "Recommended cities",
      "transport.hero.title": "Transportation",
      "transport.hero.desc": "Private and safe rides across Riviera Maya",
      "transport.services": "Services",
      "transport.book": "Book your transfer",
      "contact.hero.title": "Contact us",
      "contact.hero.desc": "Direct communication through WhatsApp or contact form",
      "contact.hero.cta": "Contact us",
      "contact.subtitle": "Direct communication through WhatsApp or leave us your message here.",
      "contact.form.title": "Send your message",
      "contact.form.subtitle": "We reply within 24 hours.",
      "contact.form.name": "Full name",
      "contact.form.email": "Email address",
      "contact.form.phone": "Phone (optional)",
      "contact.form.service": "Service of interest",
      "contact.form.service.none": "Select an option",
      "contact.form.service.transport": "Private transportation",
      "contact.form.service.tours": "Tours",
      "contact.form.service.cenotes": "Cenotes",
      "contact.form.service.other": "Other",
      "contact.form.message": "Message",
      "contact.form.submit": "Send message"
    }
  };

  function applyTranslations(lang) {
    var langDict = translations[lang] || translations.es;
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "es-MX");
    document.body.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      if (langDict[key]) {
        element.textContent = langDict[key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-lang") === lang);
    });
  }

  var currentLang = localStorage.getItem("jipecas_language") || "es";
  applyTranslations(currentLang);

  document.querySelectorAll(".lang-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var selectedLang = button.getAttribute("data-lang");
      localStorage.setItem("jipecas_language", selectedLang);
      applyTranslations(selectedLang);
    });
  });

  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-menu]");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var revealTargets = new Set();
  [
    ".section .container",
    ".destination-card",
    ".detail-card",
    ".service-card",
    ".contact-card",
    ".contact-form-wrap",
    ".about-block",
    ".transfers-image"
  ].forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (element) {
      revealTargets.add(element);
    });
  });

  revealTargets.forEach(function (element) {
    element.classList.add("reveal");
  });

  [".destinations-grid", ".detail-grid", ".service-list", ".contact-grid"].forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (group) {
      var children = group.querySelectorAll(":scope > article, :scope > a, :scope > img");
      children.forEach(function (child, index) {
        child.style.setProperty("--reveal-delay", String(index * 0.08) + "s");
      });
    });
  });

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealTargets.forEach(function (element) {
    observer.observe(element);
  });

  // Lightbox functionality
  var detailCards = document.querySelectorAll(".detail-card");
  if (detailCards.length > 0) {
    // Create lightbox HTML
    var lightboxHTML = '<div class="lightbox" id="lightbox">' +
      '<div class="lightbox-content">' +
      '<button class="lightbox-close" aria-label="Cerrar">&times;</button>' +
      '<img class="lightbox-image" src="" alt="" />' +
      '<div class="lightbox-info">' +
      '<h3 class="lightbox-title"></h3>' +
      '<p class="lightbox-desc"></p>' +
      '</div>' +
      '<button class="lightbox-nav lightbox-prev" aria-label="Anterior">&#10094;</button>' +
      '<button class="lightbox-nav lightbox-next" aria-label="Siguiente">&#10095;</button>' +
      '</div>' +
      '</div>';

    document.body.insertAdjacentHTML('beforeend', lightboxHTML);

    var lightbox = document.getElementById('lightbox');
    var lightboxImg = lightbox.querySelector('.lightbox-image');
    var lightboxTitle = lightbox.querySelector('.lightbox-title');
    var lightboxDesc = lightbox.querySelector('.lightbox-desc');
    var lightboxClose = lightbox.querySelector('.lightbox-close');
    var lightboxPrev = lightbox.querySelector('.lightbox-prev');
    var lightboxNext = lightbox.querySelector('.lightbox-next');

    var currentIndex = 0;
    var cardItems = Array.from(detailCards);

    function openLightbox(index) {
      currentIndex = index;
      var card = cardItems[index];
      var img = card.querySelector('.detail-image');
      var title = card.querySelector('.detail-title');
      var desc = card.querySelector('.detail-content p');

      if (img) lightboxImg.src = img.src;
      if (img) lightboxImg.alt = img.alt;
      if (title) lightboxTitle.textContent = title.textContent;
      if (desc) lightboxDesc.textContent = desc.textContent;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + cardItems.length) % cardItems.length;
      openLightbox(currentIndex);
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % cardItems.length;
      openLightbox(currentIndex);
    }

    detailCards.forEach(function(card, index) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(index);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    var submitButton = contactForm.querySelector("button[type='submit']");
    var statusMessage = document.getElementById("contact-form-status");

    var statusText = {
      es: {
        sending: "Enviando mensaje...",
        success: "Gracias. Tu mensaje fue enviado correctamente.",
        invalid: "Revisa los campos obligatorios antes de enviar.",
        error: "No se pudo enviar. Intenta de nuevo en unos minutos."
      },
      en: {
        sending: "Sending message...",
        success: "Thanks. Your message was sent successfully.",
        invalid: "Please review required fields before sending.",
        error: "Could not send the message. Please try again in a few minutes."
      }
    };

    function setStatus(type, key) {
      var lang = document.body.getAttribute("data-lang") || "es";
      var dict = statusText[lang] || statusText.es;

      if (!statusMessage) {
        return;
      }

      statusMessage.textContent = dict[key] || "";
      statusMessage.classList.remove("is-error", "is-success");

      if (type === "error") {
        statusMessage.classList.add("is-error");
      }

      if (type === "success") {
        statusMessage.classList.add("is-success");
      }
    }

    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        setStatus("error", "invalid");
        return;
      }

      var formData = new FormData(contactForm);
      var payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        service: String(formData.get("service") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        company: String(formData.get("company") || "").trim()
      };

      if (submitButton) {
        submitButton.disabled = true;
      }
      setStatus("neutral", "sending");

      try {
        var response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        contactForm.reset();
        setStatus("success", "success");
      } catch (error) {
        setStatus("error", "error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }
});
