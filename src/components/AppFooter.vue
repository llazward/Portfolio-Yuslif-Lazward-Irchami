<template>
  <footer class="footer">
    <div class="footer-inner container">
      <!-- Top Grid -->
      <div class="footer-top">
        <div class="footer-brand">
          <div class="brand-header"> 
            <div>
              <p class="footer-name">Yuslif Lazward Irchami</p>
              <p class="footer-tagline">Full-Stack Developer</p>
            </div>
          </div>
          <p class="footer-bio">
            Fresh graduate Teknik Informatika dengan pengalaman membangun aplikasi web end-to-end, Web AR real-time, dan sistem database instansi pemerintah.
          </p>
        </div>

        <div class="footer-nav-col">
          <h4 class="col-title">Navigation</h4>
          <ul class="col-links">
            <li><a href="#about" @click.prevent="scrollTo('about')">About Me</a></li>
            <li><a href="#skills" @click.prevent="scrollTo('skills')">Technology Stack</a></li>
            <li><a href="#projects" @click.prevent="scrollTo('projects')">Featured Projects</a></li>
            <li><a href="#experience" @click.prevent="scrollTo('experience')">Experience</a></li>
            <li><a href="#education" @click.prevent="scrollTo('education')">Education & Achievements</a></li>
          </ul>
        </div>

        <div class="footer-contact-col">
          <h4 class="col-title">Connect</h4>
          <ul class="col-links">
            <li>
              <a href="mailto:mrlazward@gmail.com" class="link-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>mrlazward@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yuslif-lazward-irchami/" target="_blank" rel="noopener" class="link-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn Profile</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/llazward" target="_blank" rel="noopener" class="link-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub: llazward</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/6287849689255" target="_blank" rel="noopener" class="link-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>+62 878 4968 9255</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="footer-copy">
          © {{ currentYear }} <strong>Yuslif Lazward Irchami</strong>
        </p>
        <p class="footer-loc">
          Surabaya, Jawa Timur, Indonesia
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 75
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  background: #01012d;
  color: #fdfcf8;
  padding: 4rem 1.5rem 2rem;
  border-top: 1px solid rgba(16, 185, 129, 0.2);
  margin-top: auto;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr;
  gap: 3rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon-sm {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, var(--emerald-600, #059669), var(--emerald-400, #34d399));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #062319;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1rem;
}

.footer-name {
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  line-height: 1.2;
}

.footer-tagline {
  font-size: 0.82rem;
  color: var(--emerald-400, #34d399);
  font-weight: 500;
}

.footer-bio {
  font-size: 0.88rem;
  line-height: 1.6;
  color: rgba(253, 252, 248, 0.7);
  max-width: 400px;
}

.col-title {
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--emerald-400, #34d399);
  margin-bottom: 1rem;
}

.col-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.col-links a {
  color: rgba(253, 252, 248, 0.75);
  font-size: 0.88rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.col-links a:hover {
  color: #ffffff;
  transform: translateX(3px);
}

.link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid rgba(253, 252, 248, 0.1);
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copy {
  font-size: 0.82rem;
  color: rgba(253, 252, 248, 0.6);
}

.footer-copy strong {
  color: rgba(253, 252, 248, 0.9);
}

.footer-loc {
  font-size: 0.8rem;
  color: var(--emerald-400, #34d399);
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
