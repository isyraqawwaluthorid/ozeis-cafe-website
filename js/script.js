/* =========================================================
   OZEIS CAFE — script.js
   Semua harga di data menu dalam satuan ribuan (contoh: 15 = Rp 15.000)
   ========================================================= */

(function () {
  "use strict";

  /* ---------------- MENU DATA ---------------- */
  const MENU = {
    coffee: {
      label: "Coffee",
      priceMode: "hotice",
      items: [
        { name: "Espresso", hot: 15, ice: null, star: false },
        { name: "Cappucino", hot: 23, ice: 23, star: false },
        { name: "Mochachino", hot: null, ice: 28, star: true },
        { name: "Kopi Susu", hot: 18, ice: 20, star: false },
        { name: "Kopi Aren", hot: 25, ice: 25, star: true },
        { name: "Butterscotch", hot: null, ice: 30, star: true },
        { name: "Salted Caramel", hot: null, ice: 28, star: false },
        { name: "Caramel Macchiato", hot: null, ice: 30, star: false },
        { name: "Kopi Pandan", hot: null, ice: 28, star: false },
        { name: "Kopi Pisang", hot: null, ice: 28, star: true },
        { name: "Kopi Vanilla", hot: null, ice: 28, star: false }
      ]
    },
    noncoffee: {
      label: "Non Coffee",
      priceMode: "hotice",
      items: [
        { name: "Matcha Latte", hot: 28, ice: 28, star: true },
        { name: "Strawberry Matcha", hot: null, ice: 30, star: false },
        { name: "Strawberry Creamy Matcha", hot: null, ice: 33, star: true },
        { name: "Matcha Berry", hot: null, ice: 30, star: false },
        { name: "Chocolate", hot: 23, ice: 23, star: false },
        { name: "Chocolate Vanilla", hot: null, ice: 25, star: false },
        { name: "Chocolate Banana", hot: null, ice: 25, star: true },
        { name: "Chocolate Caramel", hot: null, ice: 25, star: false },
        { name: "Markisa", hot: 18, ice: 20, star: true },
        { name: "Mineral Water", hot: null, ice: 5, star: false }
      ]
    },
    americano: {
      label: "Americano Series",
      priceMode: "hotice",
      items: [
        { name: "Americano", hot: 15, ice: 18, star: false },
        { name: "Americano Peach", hot: null, ice: 25, star: true },
        { name: "Americano Lychee", hot: null, ice: 25, star: false },
        { name: "Americano Berry", hot: null, ice: 28, star: true },
        { name: "Americano Markisa", hot: null, ice: 28, star: false }
      ]
    },
    tea: {
      label: "Tea",
      priceMode: "hotice",
      items: [
        { name: "Lemon Tea", hot: 20, ice: 20, star: false },
        { name: "Black Tea", hot: 18, ice: 18, star: false },
        { name: "Lychee Tea", hot: 20, ice: 20, star: true }
      ]
    },
    fresh: {
      label: "Fresh Drink",
      priceMode: "single",
      items: [
        { name: "Moonlight", price: 25, star: true },
        { name: "Pink Lady", price: 25, star: false },
        { name: "Lemonade Yakult", price: 25, star: true },
        { name: "Lemonade Lychee", price: 25, star: false },
        { name: "Lemonade Peach", price: 25, star: false },
        { name: "Sky Berry", price: 25, star: false },
        { name: "Apple Berry", price: 28, star: true },
        { name: "Markisa", price: 25, star: false },
        { name: "Markisa Pisang", price: 28, star: false },
        { name: "Markisa Strawberry", price: 28, star: true },
        { name: "Markisa Tea", price: 28, star: false }
      ]
    },
    main: {
      label: "Main Course",
      priceMode: "single",
      items: [
        { name: "Nasi Ayam Goreng", price: 30, star: true },
        { name: "Chicken Teriyaki", price: 28, star: false },
        { name: "Chicken Katsu", price: 30, star: true },
        { name: "Chicken Wings", price: 28, star: false },
        { name: "Nasi Goreng Telur", price: 28, star: false },
        { name: "Nasi Goreng Ayam", price: 30, star: true },
        { name: "Indomie Goreng/Soto", price: 15, star: false },
        { name: "Indomie Goreng / Soto Telur", price: 18, star: false },
        { name: "Indomie Goreng / Soto Double", price: 20, star: false },
        { name: "Indomie Goreng / Soto Double Telur", price: 23, star: false },
        { name: "Udang / Cumi Goreng Tepung", price: 35, star: false },
        { name: "Udang / Cumi Goreng Asam Manis", price: 35, star: false }
      ]
    },
    snacks: {
      label: "Snacks",
      priceMode: "single",
      items: [
        { name: "French Fries", price: 20, star: false },
        { name: "Mix Platter", price: 28, star: true },
        { name: "Roti Bakar Coklat Keju", price: 20, star: true },
        { name: "Roti Bakar Coklat / Keju", price: 18, star: false },
        { name: "Pisang Goreng Klasik", price: 15, star: false },
        { name: "Pisang Goreng Coklat Keju", price: 23, star: false },
        { name: "Pisang Goreng Coklat / Keju", price: 20, star: true },
        { name: "Roti Maryam Original", price: 18, star: true },
        { name: "Roti Maryam Coklat / Keju", price: 20, star: false },
        { name: "Roti Maryam Coklat Keju", price: 23, star: true },
        { name: "Pangsit Goreng", price: 15, star: false },
        { name: "Mini Wonton", price: 18, star: false },
        { name: "Tempe Mendoan", price: 15, star: false }
      ]
    }
  };

  const rupiah = (val) => "Rp " + (val * 1000).toLocaleString("id-ID");

  /* ---------------- PRELOADER ---------------- */
  const preloaderEl = document.getElementById("preloader");
  function hidePreloader() {
    if (preloaderEl) preloaderEl.classList.add("hidden");
  }
  window.addEventListener("load", () => setTimeout(hidePreloader, 250));
  // Safety net: never let the preloader block the page if "load" is delayed
  // (e.g. slow/blocked external font request).
  setTimeout(hidePreloader, 2000);

  /* ---------------- MOBILE NAV ---------------- */
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- ACTIVE NAV LINK ON SCROLL ---------------- */
  const sections = ["home", "about", "menu", "gallery", "location", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll("#main-nav a"));

  function updateActiveNav() {
    let current = sections[0];
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current.id);
    });
  }

  /* ---------------- HEADER SCROLL STATE ---------------- */
  const header = document.getElementById("site-header");
  const backToTop = document.getElementById("back-to-top");

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    backToTop.classList.toggle("show", y > 500);
    updateActiveNav();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  const animatedEls = document.querySelectorAll("[data-animate]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    // threshold 0 = reveal as soon as any part is visible. A percentage
    // threshold (e.g. 0.15) fails for tall elements (like the full menu
    // grid) that never fill 15% of the viewport, leaving them invisible.
    { threshold: 0, rootMargin: "0px 0px -5% 0px" }
  );
  animatedEls.forEach((el) => revealObserver.observe(el));

  // Safety net: guarantee nothing stays permanently invisible even if the
  // observer misses an element for any reason.
  setTimeout(() => {
    document.querySelectorAll("[data-animate]:not(.in-view)").forEach((el) => {
      el.classList.add("in-view");
    });
  }, 2500);

  /* ---------------- MENU RENDERING ---------------- */
  const menuGrid = document.getElementById("menu-grid");
  const menuEmpty = document.getElementById("menu-empty");
  const tabs = document.querySelectorAll(".tab");
  const searchInput = document.getElementById("menu-search-input");

  let activeCat = "coffee";
  let searchTerm = "";

  function buildCard(item, mode) {
    const card = document.createElement("div");
    card.className = "menu-card";

    const top = document.createElement("div");
    top.className = "menu-card-top";
    const name = document.createElement("div");
    name.className = "menu-card-name";
    name.innerHTML = (item.star ? '<span class="star">★</span>' : "") + item.name;
    top.appendChild(name);
    card.appendChild(top);

    const prices = document.createElement("div");
    prices.className = "menu-prices";

    if (mode === "hotice") {
      if (item.hot) {
        const p = document.createElement("span");
        p.className = "price-pill";
        p.textContent = "Hot " + rupiah(item.hot);
        prices.appendChild(p);
      }
      if (item.ice) {
        const p = document.createElement("span");
        p.className = "price-pill";
        p.textContent = "Ice " + rupiah(item.ice);
        prices.appendChild(p);
      }
    } else {
      const p = document.createElement("span");
      p.className = "price-pill single";
      p.textContent = rupiah(item.price);
      prices.appendChild(p);
    }

    card.appendChild(prices);
    return card;
  }

  function renderMenu() {
    const cat = MENU[activeCat];
    menuGrid.innerHTML = "";

    const filtered = cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
      menuEmpty.hidden = false;
    } else {
      menuEmpty.hidden = true;
      filtered.forEach((item, i) => {
        const card = buildCard(item, cat.priceMode);
        card.style.animationDelay = (i * 0.04) + "s";
        menuGrid.appendChild(card);
      });
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeCat = tab.dataset.cat;
      renderMenu();
    });
  });

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.trim();

    if (searchTerm) {
      // search across all categories at once
      const allMatches = [];
      Object.entries(MENU).forEach(([key, cat]) => {
        cat.items.forEach((item) => {
          if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            allMatches.push({ item, mode: cat.priceMode });
          }
        });
      });
      menuGrid.innerHTML = "";
      if (allMatches.length === 0) {
        menuEmpty.hidden = false;
      } else {
        menuEmpty.hidden = true;
        allMatches.forEach(({ item, mode }, i) => {
          const card = buildCard(item, mode);
          card.style.animationDelay = (i * 0.03) + "s";
          menuGrid.appendChild(card);
        });
      }
    } else {
      renderMenu();
    }
  });

  renderMenu();

  /* ---------------- FAVORITES STRIP ---------------- */
  const favTrack = document.getElementById("favorites-track");

  function buildFavCard(item, mode, catLabel) {
    const card = document.createElement("div");
    card.className = "fav-card";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "★ Favorit";
    card.appendChild(badge);

    const small = document.createElement("small");
    small.textContent = catLabel;
    card.appendChild(small);

    const h4 = document.createElement("h4");
    h4.textContent = item.name;
    card.appendChild(h4);

    const p = document.createElement("p");
    if (mode === "hotice") {
      const vals = [];
      if (item.hot) vals.push("Hot " + rupiah(item.hot));
      if (item.ice) vals.push("Ice " + rupiah(item.ice));
      p.textContent = vals.join(" / ");
    } else {
      p.textContent = rupiah(item.price);
    }
    card.appendChild(p);

    return card;
  }

  function renderFavorites() {
    favTrack.innerHTML = "";
    Object.values(MENU).forEach((cat) => {
      cat.items
        .filter((item) => item.star)
        .forEach((item) => {
          favTrack.appendChild(buildFavCard(item, cat.priceMode, cat.label));
        });
    });
  }
  renderFavorites();

  /* ---------------- NEWSLETTER (demo only, no backend) ---------------- */
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterMsg = document.getElementById("newsletter-msg");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      newsletterMsg.hidden = false;
      newsletterMsg.textContent = "Terima kasih! Email kamu sudah tercatat.";
      newsletterForm.reset();
    });
  }

  /* ---------------- FOOTER YEAR ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
