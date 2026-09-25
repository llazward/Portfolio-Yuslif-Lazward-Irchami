<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }" role="navigation" aria-label="Main Navigation">
    <div class="nav-inner container">
      <!-- Brand Logo -->
      <a href="#hero" class="nav-logo" @click.prevent="scrollTo('hero')" aria-label="Beranda Yuslif Lazward Irchami">
        <img src="/public/foto_Lazward.PNG" alt="Yuslif Lazward Irchami" class="logo-badge" />
        <span class="logo-name">Yuslif Lazward Irchami</span>
      </a>

      <!-- Desktop Nav Items -->
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click.prevent="scrollTo(item.id); menuOpen = false"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- CTA Button Desktop -->
      <div class="nav-cta-wrapper">
        <a href="#contact" class="nav-cta-btn" @click.prevent="scrollTo('contact')">
          <span>Get in Touch</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <!-- Hamburger Button Mobile -->
        <button
          class="hamburger-btn"
          :class="{ open: menuOpen }"
          @click="menuOpen = !menuOpen"
          :aria-expanded="menuOpen"
          aria-label="Toggle Menu Navigasi"
        >
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div
      v-if="menuOpen"
      class="mobile-backdrop"
      @click="menuOpen = false"
      aria-hidden="true"
    ></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 75
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 25

  const sections = ['hero', ...navItems.map(n => n.id)]
  for (const sId of [...sections].reverse()) {
    const el = document.getElementById(sId)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 140) {
        activeSection.value = sId === 'hero' ? 'about' : sId
        break
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  padding: 1.1rem 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  background: rgba(253, 252, 248, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(16, 185, 129, 0.15);
  box-shadow: 0 4px 20px rgba(6, 95, 70, 0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Brand */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  color: var(--text-dark, #1a2e1e);
  letter-spacing: -0.01em;
  text-decoration: none;
}

.logo-badge {
  width: 34px;
  height: 34px;
  background: linear-gradient(135deg, var(--emerald-800, #065f46), var(--emerald-600, #059669));
  color: var(--cream-50, #fdfcf8);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 800;
  box-shadow: 0 3px 10px rgba(6, 95, 70, 0.2);
}

.logo-name {
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--text-dark, #1a2e1e);
  text-transform: uppercase;
}

/* Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-mid, #2d5a3d);
  text-decoration: none;
  padding: 0.4rem 0.2rem;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--emerald-700, #047857);
}

.nav-link.active {
  color: var(--emerald-700, #047857);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--emerald-500, #10b981);
  border-radius: 99px;
}

/* CTA */
.nav-cta-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, var(--emerald-800, #065f46), var(--emerald-600, #059669));
  padding: 0.55rem 1.15rem;
  border-radius: 99px;
  box-shadow: 0 3px 12px rgba(6, 95, 70, 0.18);
  transition: all 0.25s ease;
  text-decoration: none;
}

.nav-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(6, 95, 70, 0.28);
  background: linear-gradient(135deg, var(--emerald-700, #047857), var(--emerald-500, #10b981));
}

/* Mobile Hamburger */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1200;
}

.hamburger-btn .bar {
  display: block;
  width: 100%;
  height: 2.5px;
  background-color: var(--text-dark, #1a2e1e);
  border-radius: 99px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hamburger-btn.open .bar-1 {
  transform: translateY(9.5px) rotate(45deg);
}

.hamburger-btn.open .bar-2 {
  opacity: 0;
}

.hamburger-btn.open .bar-3 {
  transform: translateY(-9.5px) rotate(-45deg);
}

/* Mobile Backdrop */
.mobile-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(10, 31, 24, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1050;
}

@media (max-width: 992px) {
  .logo-name {
    font-size: 0.9rem;
  }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--cream-50, #fdfcf8);
    box-shadow: -10px 0 30px rgba(6, 95, 70, 0.15);
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 2rem 2rem;
    gap: 1.4rem;
    transition: right 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1150;
  }

  .nav-links.open {
    right: 0;
  }

  .nav-link {
    font-size: 1.05rem;
    font-weight: 700;
  }

  .hamburger-btn {
    display: flex;
  }

  .mobile-backdrop {
    display: block;
  }
}

@media (max-width: 480px) {
  .logo-name {
    display: none;
  }
}
</style>
