<template>
  <main class="home-page">
    <!-- 1. HERO SECTION -->
    <section id="hero" class="hero-section">
      <!-- Background Ambient Glow & Mesh Grid -->
      <div class="hero-mesh-grid" aria-hidden="true"></div>
      <div class="hero-ambient-glow" aria-hidden="true"></div>

      <div class="container hero-container">
        <!-- Left Hero Content -->
        <div class="hero-content">
          <div class="status-indicator-badge">
            <span class="pulsing-emerald-dot"></span>
            <span class="status-text">Available for Full-Time & Engineering Roles</span>
          </div>

          <h1 class="hero-main-title">
            Full-Stack Developer Building <br />
            <span class="emerald-gradient-text">Real-World Digital Solutions</span>
          </h1>

          <p class="hero-subheadline">
            Fresh Graduate in Informatics Engineering with hands-on experience in Full-Stack Web Development, Web-Based Augmented Reality, and production ready applications.
          </p>

          <!-- Primary CTA Buttons -->
          <div class="hero-cta-group">
            <a href="#projects" class="btn btn-primary" @click.prevent="scrollTo('projects')">
              <span>View My Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- <button class="btn btn-secondary" @click="openCvModal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span>Download CV</span>
            </button> -->
          </div>

          <!-- Secondary Links: GitHub, LinkedIn, Email -->
          <div class="hero-social-links">
            <span class="social-label">Connect:</span>
            <a :href="personalInfo.github" target="_blank" rel="noopener" class="social-pill" title="GitHub Profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a :href="personalInfo.linkedin" target="_blank" rel="noopener" class="social-pill" title="LinkedIn Profile">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a :href="'mailto:' + personalInfo.email" class="social-pill" title="Email Contact">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>

        <!-- Right Hero Visual: Tech Terminal & Profile Showcase -->
        <div class="hero-visual-col">
          <!-- Real Profile Photo Card with Floating Tech Badges -->
          <div class="profile-card-container">
            <div class="profile-card-backdrop"></div>
            <div class="profile-card-surface">
              <img
                src="/foto_Lazward.PNG"
                alt="Yuslif Lazward Irchami"
                class="hero-profile-image"
                width="340"
                height="400"
              />
              <div class="profile-info-overlay">
                <h2 class="profile-card-name">{{ personalInfo.name }}</h2>
                <p class="profile-card-sub">Informatics Engineer · S.Kom.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. ABOUT ME SECTION -->
    <section id="about" class="section about-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">About Me</span>
          <h2 class="section-title">Turning Ideas into <span>Scalable Software</span></h2>
          <p class="section-subtitle mx-auto">
            Fresh graduate Teknik Informatika dengan pola pikir rekayasa end-to-end: dari rancangan skema basis data, logika backend kokoh, hingga antarmuka pengguna interaktif.
          </p>
        </div>

        <!-- Storytelling Box -->
        <div class="about-story-wrapper">
          <div class="about-quote-box">
            <div class="quote-icon">“</div>
            <p class="quote-text">{{ personalInfo.aboutStory }}</p>
          </div>

          <div class="about-details-content">
            <p class="about-para">
              Lulusan <strong>Teknik Informatika Universitas 17 Agustus 1945 Surabaya</strong> dengan predikat <strong>Cum Laude (IPK 3.71/4.00)</strong>. Memiliki rekam jejak langsung dalam mengembangkan perangkat lunak siap produksi: mulai dari aplikasi manajemen arsip instansi pemerintah pada <strong>Dinas Pekerjaan Umum Bina Marga Provinsi Jawa Timur</strong> hingga sistem Web-Based Augmented Reality Virtual Try-On secara mandiri pada <strong>Susilawati Collection</strong>.
            </p>
            <p class="about-para">
              Mampu bekerja mandiri sebagai <em>sole contributor</em> maupun berkolaborasi erat dengan tim teknis. Terbiasa memadukan <strong>analytical thinking</strong> dan <strong>problem solving</strong> untuk menerjemahkan kebutuhan bisnis menjadi solusi rekayasa perangkat lunak yang andal.
            </p>
            <!-- <p class="about-para ai-note">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <span>
                <strong>Pendekatan AI-Assisted Modern:</strong> Memanfaatkan AI development assistants (Claude, ChatGPT, Gemini) untuk akselerasi alur kerja, dengan prinsip utama: setiap baris kode selalu ditinjau, diuji, dan divalidasi secara mandiri sesuai standar rekayasa perangkat lunak.
              </span>
            </p> -->
          </div>
        </div>
      </div>
    </section>

    <!-- 3. TECHNOLOGY STACK SECTION -->
    <section id="skills" class="section tech-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Technology Stack</span>
          <h2 class="section-title">Core Technical <span>Capabilities</span></h2>
          <p class="section-subtitle mx-auto">
            Daftar teknologi, tools, dan metodologi dalam membangun aplikasi nyata.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="tech-filter-tabs">
          <button
            class="tab-btn"
            :class="{ active: activeTechCategory === 'all' }"
            @click="activeTechCategory = 'all'"
          >
            All
          </button>
          <button
            v-for="cat in techStackCategories"
            :key="cat.id"
            class="tab-btn"
            :class="{ active: activeTechCategory === cat.id }"
            @click="activeTechCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Tech Cards Grid -->
        <div class="tech-cards-grid">
          <div
            v-for="cat in filteredTechCategories"
            :key="cat.id"
            class="tech-category-card"
          >
            <div class="cat-card-header">
              <span class="cat-badge-id">{{ cat.name }}</span>
            </div>

            <div class="tech-skills-wrap">
              <div v-for="skill in cat.skills" :key="skill" class="tech-tag-pill">
                <span class="pill-dot"></span>
                <span class="pill-title">{{ skill }}</span>
              </div>
            </div>

            <!-- Note for AI Assisted Development -->
            <p v-if="cat.note" class="cat-card-note">
              {{ cat.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. FEATURED PROJECTS SECTION (FLAGSHIP / HIGHLIGHT) -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Featured Work</span>
          <h2 class="section-title">Real-World <span>Production Projects</span></h2>
          <p class="section-subtitle mx-auto">
            Aplikasi nyata yang dibangun secara end-to-end, membuktikan kapasitas rekayasa sistem, arsitektur basis data, dan inovasi web interaktif.
          </p>
        </div>

        <div class="projects-display-list">
          <!-- PROJECT 1 — Web-Based AR Virtual Try-On (FLAGSHIP) -->
          <article class="project-featured-card flagship-card">
            <div class="project-card-grid">
              <!-- Left Visual: Interactive AR Viewport Mockup -->
              <div class="project-mockup-wrapper">
                <div class="ar-phone-frame">
                  <div class="phone-camera-notch"></div>
                  
                  <div class="ar-screen-content">
                   <div class="ar-viewport-center">
                      <img src="/tes_AR.jpg" class="w-100" style="border-radius: 23px" alt="foto_AR">
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Detail: Content & Highlights -->
              <div class="project-info-wrapper">
                <div class="project-header-meta">
                  <span class="flagship-badge">⭐ Flagship Innovation</span>
                  <span class="proj-category">{{ featuredProjects[0].category }}</span>
                </div>

                <h3 class="proj-main-title">{{ featuredProjects[0].title }}</h3>
                <p class="proj-client">
                  <strong>{{ featuredProjects[0].company }}</strong> · {{ featuredProjects[0].period }}
                </p>

                <p class="proj-description">{{ featuredProjects[0].description }}</p>

                <!-- Key Highlights -->
                <div class="proj-highlights-block">
                  <h4 class="highlights-title">Key Engineering Highlights:</h4>
                  <ul class="highlights-list">
                    <li v-for="(h, hIdx) in featuredProjects[0].highlights" :key="hIdx">
                      <span class="bullet-arrow">▹</span>
                      <span>{{ h }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Tech Badges -->
                <div class="proj-tech-strip">
                  <span v-for="t in featuredProjects[0].tech" :key="t" class="p-tech-badge">
                    {{ t }}
                  </span>
                </div>

                <!-- CTA View Case Study -->
                <div class="proj-cta-bar">
                  <button class="btn btn-primary" @click="openCaseStudy(featuredProjects[0])">
                    <span>View Case Study</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <span class="cta-helper">Detailed architecture & 8-step breakdown</span>
                </div>
              </div>
            </div>
          </article>

          <!-- PROJECT 2 — Sistem E-Arsip (Full-Stack Web App) -->
          <article class="project-featured-card">
            <div class="project-card-grid reversed">
              <!-- Left Visual: Admin Portal & DB Schema Mockup -->
              <div class="project-mockup-wrapper">
                <div class="earsip-portal-frame">
                  <div class="portal-window-bar">
                    <div class="win-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <div class="win-address">e-arsip</div>
                  </div>

                  <div class="portal-body-preview">
                    <!-- Metric Cards Row -->
                    <div class="portal-metrics-row">
                      <div class="portal-mini-stat">
                        <span class="m-val">1,000+</span>
                        <span class="m-lbl">Archived Documents</span>
                      </div>
                      <div class="portal-mini-stat">
                        <span class="m-val">Role Auth</span>
                        <span class="m-lbl">Middleware Protected</span>
                      </div>
                      <div class="portal-mini-stat">
                        <span class="m-val">&lt; 45ms</span>
                        <span class="m-lbl">Query Execution</span>
                      </div>
                    </div>

                    <!-- Mock Data Table -->
                    <div class="portal-table-mock">
                      <div class="t-row t-head">
                        <span>Doc No.</span>
                        <span>Title / Category</span>
                        <span>Access Level</span>
                        <span>Status</span>
                      </div>
                      <div class="t-row">
                        <span class="mono">#BM-2025-0142</span>
                        <span>Dokumen Perencanaan Jembatan</span>
                        <span class="tag-role">Super Admin Only</span>
                        <span class="tag-active">Verified</span>
                      </div>
                      <div class="t-row">
                        <span class="mono">#BM-2025-0143</span>
                        <span>Laporan Pemeliharaan Ruas Jalan</span>
                        <span class="tag-role-sub">Admin Read/Write</span>
                        <span class="tag-active">Verified</span>
                      </div>
                      <div class="t-row">
                        <span class="mono">#BM-2025-0144</span>
                        <span>Surat Keputusan Kepala Dinas</span>
                        <span class="tag-role">Super Admin Only</span>
                        <span class="tag-active">Archived</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mockup-caption">
                  <span>Abstract representation of digitized government archive data management interface</span>
                </div>
              </div>

              <!-- Right Detail: Content & Highlights -->
              <div class="project-info-wrapper">
                <div class="project-header-meta">
                  <span class="enterprise-badge">🏛️ Government Enterprise System</span>
                  <span class="proj-category">{{ featuredProjects[1].category }}</span>
                </div>

                <h3 class="proj-main-title">{{ featuredProjects[1].title }}</h3>
                <p class="proj-client">
                  <strong>{{ featuredProjects[1].company }}</strong> · {{ featuredProjects[1].period }}
                </p>

                <p class="proj-description">{{ featuredProjects[1].description }}</p>

                <!-- Key Highlights -->
                <div class="proj-highlights-block">
                  <h4 class="highlights-title">Key Engineering Highlights:</h4>
                  <ul class="highlights-list">
                    <li v-for="(h, hIdx) in featuredProjects[1].highlights" :key="hIdx">
                      <span class="bullet-arrow">▹</span>
                      <span>{{ h }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Tech Badges -->
                <div class="proj-tech-strip">
                  <span v-for="t in featuredProjects[1].tech" :key="t" class="p-tech-badge">
                    {{ t }}
                  </span>
                </div>

                <!-- CTA View Case Study -->
                <div class="proj-cta-bar">
                  <button class="btn btn-primary" @click="openCaseStudy(featuredProjects[1])">
                    <span>View Case Study</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                  <span class="cta-helper">Detailed architecture & 8-step breakdown</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 5. PROFESSIONAL EXPERIENCE SECTION -->
    <section id="experience" class="section exp-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Career History</span>
          <h2 class="section-title">Professional <span>Experience</span></h2>
          <p class="section-subtitle mx-auto">
            Jejak langkah profesional dalam membangun dan mengimplementasikan aplikasi perangkat lunak dunia nyata.
          </p>
        </div>

        <div class="timeline-container">
          <div
            v-for="(exp, expIdx) in professionalExperience"
            :key="expIdx"
            class="timeline-item-card"
          >
            <div class="timeline-node-pin">
              <span class="pin-inner"></span>
            </div>

            <div class="timeline-card-body">
              <div class="timeline-header-row">
                <div>
                  <span class="timeline-period-badge">{{ exp.period }}</span>
                  <h3 class="timeline-role">{{ exp.role }}</h3>
                  <h4 class="timeline-company">
                    {{ exp.company }}
                    <span class="loc-text">· {{ exp.location }}</span>
                  </h4>
                </div>
                <div class="timeline-org-type">{{ exp.type }}</div>
              </div>

              <div class="timeline-bullets-box">
                <ul class="timeline-bullets">
                  <li v-for="(bullet, bIdx) in exp.bullets" :key="bIdx">
                    <span class="b-arrow">▹</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <div class="timeline-tech-row">
                <span class="t-label">Technologies:</span>
                <div class="t-badges">
                  <span v-for="tech in exp.tech" :key="tech" class="t-badge">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. EDUCATION & ACHIEVEMENTS SECTION -->
    <section id="education" class="section edu-achieve-section">
      <div class="container">
        <!-- Education Card -->
        <div class="section-header text-center">
          <span class="section-tag">Academic Credentials</span>
          <h2 class="section-title">Education & <span>Achievements</span></h2>
        </div>

        <div class="education-card-main">
          <div class="edu-top-flex">
            <div class="edu-badge-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div>
              <span class="edu-period-lbl">{{ educationData.period }}</span>
              <h3 class="edu-degree-title">{{ educationData.degree }}</h3>
              <p class="edu-campus-name">{{ educationData.institution }} · {{ educationData.location }}</p>
            </div>
            <div class="edu-honor-pill">
              <span>🏆 {{ educationData.honor }}</span>
            </div>
          </div>

          <div class="gpa-score-bar">
            <span class="gpa-number">{{ educationData.gpa }}</span>
            <span class="gpa-desc">Grade Point Average (Skala 4.00) dengan kelulusan predikat <strong>Cum Laude</strong>.</span>
          </div>

          <!-- Coursework -->
          <div class="coursework-container">
            <h4 class="coursework-heading">Relevant Coursework:</h4>
            <div class="coursework-chips">
              <span v-for="course in educationData.coursework" :key="course" class="course-chip">
                {{ course }}
              </span>
            </div>
          </div>
        </div>

        <!-- Section Achievements & Certifications -->
        <div id="achievements" class="achieve-cert-anchor"></div>
        <div class="achieve-cert-wrapper">
          <div class="achieve-block">
            <h3 class="block-sub-title">Honors & Competitions</h3>
            <div class="achieve-grid-cards">
              <div
                v-for="(ach, aIdx) in achievementsData"
                :key="aIdx"
                class="achieve-box-card"
                :class="ach.type"
              >
                <div class="ach-icon-circle">{{ ach.medal }}</div>
                <div class="ach-meta">
                  <span class="ach-badge-tag">{{ ach.badge }}</span>
                  <span class="ach-year">{{ ach.year }}</span>
                </div>
                <h4 class="ach-title">{{ ach.title }}</h4>
                <p class="ach-desc">{{ ach.description }}</p>
              </div>
            </div>
          </div>

          <div class="cert-block">
            <h3 class="block-sub-title">Professional Certifications</h3>
            <div class="cert-grid-cards">
              <div
                v-for="(cert, cIdx) in certificationsData"
                :key="cIdx"
                class="cert-box-card"
              >
                <div class="cert-icon-top">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4 class="cert-name">{{ cert.title }}</h4>
                <p class="cert-org">{{ cert.issuer }} ({{ cert.year }})</p>
                <p class="cert-detail">{{ cert.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. ORGANIZATIONAL LEADERSHIP & SOFT SKILLS SECTION -->
    <section class="section leadership-section">
      <div class="container">
        <div class="leadership-grid">
          <!-- Leadership Card -->
          <div class="org-leadership-card">
            <div class="card-tag-pill">Leadership & Organization</div>
            <span class="org-timeline">{{ leadershipData.period }}</span>
            <h3 class="org-position">{{ leadershipData.position }}</h3>
            <h4 class="org-group-name">{{ leadershipData.organization }} · {{ leadershipData.location }}</h4>
            <p class="org-quote-intro">
              "{{ leadershipData.description }}"
            </p>

            <ul class="org-bullet-list">
              <li v-for="(b, bIdx) in leadershipData.bullets" :key="bIdx">
                <span class="bullet-green">▹</span>
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>

          <!-- Soft Skills Chips -->
          <div class="soft-skills-card">
            <div class="card-tag-pill">Work Ethic & Interpersonal</div>
            <h3 class="soft-card-title">Professional Soft Skills</h3>
            <p class="soft-card-desc">
              Nilai personal dan kapabilitas non-teknis yang menjadi fondasi dalam berkolaborasi dan menyelesaikan target rekayasa:
            </p>

            <div class="soft-chips-container">
              <span v-for="skill in softSkillsData" :key="skill" class="soft-skill-chip">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. DEVELOPMENT PHILOSOPHY ("HOW I BUILD") -->
    <section class="section philosophy-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Engineering Methodology</span>
          <h2 class="section-title">How I <span>Build Software</span></h2>
          <p class="section-subtitle mx-auto">
            Prinsip kerja 4 tahap yang saya terapkan dalam setiap inisiatif rekayasa perangkat lunak.
          </p>
        </div>

        <div class="philosophy-grid">
          <div
            v-for="stage in developmentPhilosophy"
            :key="stage.number"
            class="philosophy-card"
          >
            <div class="philo-num">{{ stage.number }}</div>
            <h3 class="philo-title">{{ stage.title }}</h3>
            <p class="philo-desc">{{ stage.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. GITHUB & OPEN SOURCE SECTION -->
    <section class="section github-section">
      <div class="container">
        <div class="github-banner-card">
          <div class="gh-content-left">
            <div class="gh-icon-badge">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <span class="gh-tag">Open Source & Codebase</span>
              <h3 class="gh-title">Explore My GitHub Repositories</h3>
              <p class="gh-desc">
                Lihat repositori publik, commit history, dan implementasi kode saya secara transparan di <strong>github.com/llazward</strong>.
              </p>
            </div>
          </div>

          <div class="gh-action-right">
            <a :href="personalInfo.github" target="_blank" rel="noopener" class="btn btn-primary">
              <span>Visit github.com/llazward</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. CONTACT SECTION -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag">Let's Connect</span>
          <h2 class="section-title">Have a project or <span>opportunity in mind?</span></h2>
          <p class="section-subtitle mx-auto">
            "Let's build something meaningful." Terbuka untuk kesempatan kerja full-time sebagai Full-Stack Developer, Frontend/Backend Engineer, maupun proyek teknologi lainnya.
          </p>
        </div>

        <div class="contact-main-grid">
          <!-- Direct Channels Card -->
          <div class="contact-channels-card">
            <h3 class="contact-box-title">Direct Communication</h3>
            <p class="contact-box-sub">Silakan hubungi saya melalui jalur komunikasi yang paling nyaman bagi Anda:</p>

            <div class="channel-rows">
              <!-- Email Item with Copy Trigger -->
              <div class="channel-item">
                <div class="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div class="channel-text">
                  <span class="c-lbl">Email Address</span>
                  <a :href="'mailto:' + personalInfo.email" class="c-val link">{{ personalInfo.email }}</a>
                </div>
                <button class="copy-pill-btn" @click="copyEmail" :title="copiedEmail ? 'Copied!' : 'Copy to Clipboard'">
                  {{ copiedEmail ? '✓ Copied' : 'Copy' }}
                </button>
              </div>

              <!-- Phone / WhatsApp Item -->
              <div class="channel-item">
                <div class="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="channel-text">
                  <span class="c-lbl">Phone / WhatsApp</span>
                  <a :href="personalInfo.whatsappUrl" target="_blank" rel="noopener" class="c-val link">{{ personalInfo.phoneFormatted }}</a>
                </div>
                <a :href="personalInfo.whatsappUrl" target="_blank" rel="noopener" class="chat-pill-btn">
                  Chat WA
                </a>
              </div>

              <!-- LinkedIn Item -->
              <div class="channel-item">
                <div class="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="channel-text">
                  <span class="c-lbl">LinkedIn Network</span>
                  <a :href="personalInfo.linkedin" target="_blank" rel="noopener" class="c-val link">yuslif-lazward-irchami</a>
                </div>
              </div>

              <!-- Location Item -->
              <div class="channel-item">
                <div class="channel-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="channel-text">
                  <span class="c-lbl">Current Location</span>
                  <span class="c-val">{{ personalInfo.location }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form Card -->
          <div class="contact-form-card">
            <h3 class="contact-box-title">Send a Direct Message</h3>
            <p class="contact-box-sub">Kirim pesan langsung ke inbox saya dengan mengisi formulir di bawah ini:</p>

            <form @submit.prevent="handleSendMessage" class="contact-form-body">
              <div class="form-field-group">
                <label for="contact-name">Name</label>
                <input
                  id="contact-name"
                  v-model="contactForm.name"
                  type="text"
                  placeholder="e.g. Your Name / Tech Recruiter"
                  required
                />
              </div>

              <div class="form-field-group">
                <label for="contact-email">Email</label>
                <input
                  id="contact-email"
                  v-model="contactForm.email"
                  type="email"
                  placeholder="your.email@company.com"
                  required
                />
              </div>

              <div class="form-field-group">
                <label for="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  v-model="contactForm.message"
                  rows="4"
                  placeholder="Write your project details or opportunity here..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- CASE STUDY INTERACTIVE MODAL (8 STEPS & ARCHITECTURE) -->
    <ProjectModal
      :is-open="isCaseStudyOpen"
      :project="selectedProject"
      @close="isCaseStudyOpen = false"
    />

    <!-- CV PREVIEW / DOWNLOAD MODAL -->
    <Teleport to="body">
      <div v-if="isCvModalOpen" class="cv-modal-backdrop" @click.self="isCvModalOpen = false">
        <div class="cv-modal-box">
          <div class="cv-modal-header">
            <div class="cv-meta">
              <span class="cv-tag">Curriculum Vitae</span>
              <h3 class="cv-name">{{ personalInfo.name }}</h3>
              <p class="cv-role">Full-Stack Developer · S.Kom. (Cum Laude)</p>
            </div>
            <button class="cv-close-btn" @click="isCvModalOpen = false" aria-label="Close CV preview">✕</button>
          </div>

          <div class="cv-modal-body">
            <div class="cv-quick-sheet">
              <div class="cv-section">
                <h4>Contact & Links</h4>
                <p>Email: {{ personalInfo.email }} | Tel: {{ personalInfo.phoneFormatted }}</p>
                <p>Location: {{ personalInfo.location }}</p>
                <p>LinkedIn: {{ personalInfo.linkedin }}</p>
                <p>GitHub: {{ personalInfo.github }}</p>
              </div>

              <div class="cv-section">
                <h4>Education</h4>
                <p><strong>{{ educationData.institution }}</strong> ({{ educationData.period }})</p>
                <p>{{ educationData.degree }} | IPK {{ educationData.gpa }} ({{ educationData.honor }})</p>
              </div>

              <div class="cv-section">
                <h4>Professional Projects & Experience</h4>
                <p><strong>Susilawati Collection</strong> (Dec 2025 – Jul 2026) — Web AR Virtual Try-On Engineer</p>
                <p><strong>Dinas PU Bina Marga Prov Jatim</strong> (Jan 2025 – Feb 2025) — Full-Stack Web Developer (Sistem E-Arsip)</p>
              </div>

              <div class="cv-section">
                <h4>Certifications & Awards</h4>
                <p>• LSP P1 Junior Web Programmer (2026)</p>
                <p>• TOEFL ITP — Score 550 (2026)</p>
                <p>• Juara 1 / Gold Medal — Jakarta Science Fair 2025</p>
                <p>• Juara 2 / Silver Medal — Thailand International Science, Invention & Innovation Fair 2026</p>
                <p>• 11 Gelar Juara Nasional — Pencak Silat (2022 – 2026)</p>
              </div>
            </div>
          </div>

          <div class="cv-modal-footer">
            <a :href="'mailto:' + personalInfo.email + '?subject=Requesting Official CV Document'" class="btn btn-primary btn-sm">
              Request Full PDF via Email
            </a>
            <button class="btn btn-secondary btn-sm" @click="printCv">
              Print / Save as PDF
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectModal from '../components/ProjectModal.vue'
import {
  personalInfo,
  quickStats,
  techStackCategories,
  featuredProjects,
  professionalExperience,
  educationData,
  achievementsData,
  certificationsData,
  leadershipData,
  softSkillsData,
  developmentPhilosophy
} from '../data/portfolioData.js'

// State
const activeTechCategory = ref('all')
const isCaseStudyOpen = ref(false)
const selectedProject = ref(null)
const isCvModalOpen = ref(false)
const copiedEmail = ref(false)

const contactForm = ref({
  name: '',
  email: '',
  message: ''
})

// Filtered Tech
const filteredTechCategories = computed(() => {
  if (activeTechCategory.value === 'all') {
    return techStackCategories
  }
  return techStackCategories.filter(c => c.id === activeTechCategory.value)
})

// Actions
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 75
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function openCaseStudy(project) {
  selectedProject.value = project
  isCaseStudyOpen.value = true
}

function openCvModal() {
  isCvModalOpen.value = true
}

function printCv() {
  window.print()
}

function copyEmail() {
  navigator.clipboard.writeText(personalInfo.email)
  copiedEmail.value = true
  setTimeout(() => {
    copiedEmail.value = false
  }, 2500)
}

function handleSendMessage() {
  const subject = encodeURIComponent(`Portfolio Inquiry from ${contactForm.value.name}`)
  const body = encodeURIComponent(
    `Name: ${contactForm.value.name}\nEmail: ${contactForm.value.email}\n\nMessage:\n${contactForm.value.message}`
  )
  window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
/* ===== HERO SECTION ===== */
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 5rem;
  background: var(--cream-50, #fdfcf8);
  overflow: hidden;
}

.hero-mesh-grid {
  position: absolute;
  inset: 0;
  background-size: 32px 32px;
  background-image:
    linear-gradient(to right, rgba(6, 95, 70, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(6, 95, 70, 0.04) 1px, transparent 1px);
  pointer-events: none;
}

.hero-ambient-glow {
  position: absolute;
  top: -15%;
  right: -5%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(253, 252, 248, 0) 70%);
  pointer-events: none;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
  position: relative;
  z-index: 10;
}

/* Status Pill */
.status-indicator-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.28);
  border-radius: 99px;
  margin-bottom: 1.5rem;
}

.pulsing-blue-dot {
  width: 9px;
  height: 9px;
  background-color: var(--blue-500, #3b82f6);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--blue-500, #3b82f6);
  animation: pulse-ring 2s infinite ease-out;
}

.status-text {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--blue-800, #1e40af);
  letter-spacing: 0.02em;
}

/* Headline */
.hero-main-title {
  font-size: clamp(2.3rem, 4.2vw, 3.4rem);
  font-weight: 800;
  color: var(--text-dark, #13271c);
  letter-spacing: -0.025em;
  line-height: 1.18;
  margin-bottom: 1.25rem;
}

.emerald-gradient-text {
  background: linear-gradient(135deg, var(--blue-800, #1e40af) 0%, var(--blue-600, #2563eb) 50%, var(--blue-500, #3b82f6) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subheadline {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-mid, #244c35);
  max-width: 580px;
  margin-bottom: 2rem;
}

/* Hero CTA */
.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

/* Social links */
.hero-social-links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted, #567862);
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-mid, #244c35);
  background: var(--cream-100, #f9f6ef);
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 0.35rem 0.85rem;
  border-radius: 99px;
  transition: all 0.2s ease;
}

.social-pill:hover {
  background: var(--blue-50, #eff6ff);
  color: var(--blue-800, #1e40af);
  border-color: var(--blue-500, #3b82f6);
  transform: translateY(-2px);
}

/* Right Photo Card */
.hero-visual-col {
  display: flex;
  justify-content: center;
  position: relative;
}

.profile-card-container {
  position: relative;
  width: 100%;
  max-width: 360px;
}

.profile-card-backdrop {
  position: absolute;
  inset: -12px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.25), rgba(30, 64, 175, 0.05));
  border-radius: 28px;
  filter: blur(14px);
  z-index: 1;
}

.profile-card-surface {
  position: relative;
  z-index: 2;
  background: #ffffff;
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(30, 64, 175, 0.12);
}

.hero-profile-image {
  width: 100%;
  height: 410px;
  object-fit: cover;
  object-position: top center;
  display: block;
}

.profile-info-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 31, 24, 0.85) 100%);
  color: #ffffff;
}

.profile-card-name {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 0.2rem;
  color: #ffffff;
}

.profile-card-sub {
  font-size: 0.82rem;
  color: var(--blue-300, #93c5fd);
  font-weight: 500;
}

/* Floating badges */
.floating-tech-badge {
  position: absolute;
  z-index: 3;
  background: rgba(253, 252, 248, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 0.65rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  box-shadow: 0 8px 24px rgba(6, 95, 70, 0.14);
  transition: transform 0.25s ease;
}

.floating-tech-badge:hover {
  transform: translateY(-3px);
}

.badge-icon {
  font-size: 1.25rem;
}

.badge-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--emerald-800, #065f46);
}

.badge-tech {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-dark, #13271c);
}

.badge-ar {
  top: -15px;
  right: -25px;
}

.badge-fullstack {
  bottom: 60px;
  left: -35px;
}

.badge-gpa {
  bottom: -15px;
  right: -10px;
}

/* ===== ABOUT SECTION ===== */
.about-section {
  background: var(--cream-100, #f9f6ef);
}

.about-story-wrapper {
  max-width: 860px;
  margin: 0 auto 3.5rem;
}

.about-quote-box {
  background: var(--cream-50, #fdfcf8);
  border-left: 4px solid var(--blue-600, #2563eb);
  padding: 1.5rem 2rem;
  border-radius: 0 16px 16px 0;
  margin-top: 20px;
  margin-bottom: 2rem;
  position: relative;
  box-shadow: 0 4px 16px rgba(6, 95, 70, 0.05);
}

.quote-icon {
  font-family: serif;
  font-size: 3.5rem;
  line-height: 1;
  color: var(--blue-500, #3b82f6);
  position: absolute;
  top: -10px;
  left: 10px;
  opacity: 0.25;
}

.quote-text {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-dark, #13271c);
  line-height: 1.6;
  font-style: italic;
  position: relative;
  z-index: 2;
}

.about-para {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-mid, #244c35);
  margin-bottom: 1.1rem;
}

.ai-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 0.9rem;
  color: var(--emerald-950, #042c22);
}

.ai-note svg {
  color: var(--emerald-600, #059669);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}

.stat-box {
  background: var(--cream-50, #fdfcf8);
  border: 1px solid var(--cream-300, #e8dcc9);
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(6, 95, 70, 0.04);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.stat-box:hover {
  transform: translateY(-4px);
  border-color: var(--blue-500, #3b82f6);
}

.stat-top-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-accent);
}

.stat-val {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--blue-800, #1e40af);
  margin-bottom: 0.35rem;
}

.stat-lbl {
  display: block;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.2rem;
}

.stat-sub {
  display: block;
  font-size: 0.76rem;
  color: var(--text-muted, #567862);
}

/* ===== TECH STACK SECTION ===== */
.tech-section {
  background: var(--cream-50, #fdfcf8);
}

.tech-filter-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
}

.tab-btn {
  background: var(--cream-100, #f9f6ef);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--text-mid, #244c35);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.1rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  background: var(--cream-200, #f3ede0);
}

.tab-btn.active {
  background: var(--blue-800, #1e40af);
  color: #ffffff;
  border-color: var(--blue-800, #1e40af);
}

.tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.75rem;
}

.tech-category-card {
  background: var(--cream-100, #f9f6ef);
  border: 1px solid rgba(59, 130, 246, 0.18);
  border-radius: 18px;
  padding: 1.6rem;
  box-shadow: 0 4px 16px rgba(6, 95, 70, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.tech-category-card:hover {
  transform: translateY(-3px);
  border-color: rgba(16, 185, 129, 0.4);
}

.cat-card-header {
  margin-bottom: 1.1rem;
}

.cat-badge-id {
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-dark, #13271c);
}

.tech-skills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.tech-tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #ffffff;
  border: 1px solid rgba(59, 130, 246, 0.25);
  border-radius: 8px;
  padding: 0.35rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-dark, #13271c);
}

.pill-dot {
  width: 6px;
  height: 6px;
  background: var(--blue-500, #3b82f6);
  border-radius: 50%;
}

.cat-card-note {
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--text-muted, #567862);
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px dashed rgba(59, 130, 246, 0.25);
  font-style: italic;
}

/* ===== FEATURED PROJECTS SECTION ===== */
.projects-section {
  background: var(--cream-100, #f9f6ef);
}

.projects-display-list {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.project-featured-card {
  background: #ffffff;
  margin-top: 1.5rem;
  border: 1px solid rgba(59, 130, 246, 0.22);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(30, 64, 175, 0.08);
}

.project-featured-card.flagship-card {
  border: 2px solid var(--blue-600, #2563eb);
  box-shadow: 0 16px 48px rgba(30, 64, 175, 0.12);
}

.project-card-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
}

.project-card-grid.reversed {
  grid-template-columns: 1.15fr 1fr;
}

.project-card-grid.reversed .project-mockup-wrapper {
  order: 2;
}

.project-card-grid.reversed .project-info-wrapper {
  order: 1;
}

/* Mockup Left/Right Area */
.project-mockup-wrapper {
  background: #082117;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Smartphone AR Frame */
.ar-phone-frame {
  width: 350px;
  height: 570px;
  background: #04140e;
  border: 4px solid #1a3e30;
  border-radius: 32px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.phone-camera-notch {
  width: 70px;
  height: 14px;
  background: #1a3e30;
  border-radius: 0 0 10px 10px;
  margin: 0 auto;
}

.ar-screen-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.05rem;
  justify-content: space-between;
  background: radial-gradient(circle at center, #0a2f22 0%, #03130d 100%);
  position: relative;
}

.ar-overlay-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.65rem;
  color: var(--emerald-400, #34d399);
}

.rec-badge {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 800;
  color: #ef4444;
}

.rec-dot {
  width: 6px;
  height: 6px;
  background: #ef4444;
  border-radius: 50%;
  animation: pulse-ring 1.5s infinite;
}

.ar-viewport-center {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pose-skeleton-lines {
  position: absolute;
  width: 120px;
  height: 180px;
  border: 1px dashed rgba(96, 165, 250, 0.4);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pose-joint {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--blue-400, #60a5fa);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--blue-400, #60a5fa);
}

.j-head { top: 15px; }
.j-shoulder-l { top: 45px; left: 20px; }
.j-shoulder-r { top: 45px; right: 20px; }
.j-torso { top: 90px; }
.j-hip-l { bottom: 35px; left: 30px; }
.j-hip-r { bottom: 35px; right: 30px; }

.virtual-garment-wireframe {
  position: relative;
  z-index: 2;
}

.garment-silhouette {
  border: 2px solid var(--blue-400, #60a5fa);
  background: rgba(59, 130, 246, 0.15);
  border-radius: 14px 14px 24px 24px;
  padding: 1.5rem 0.5rem;
  text-align: center;
  box-shadow: 0 0 20px rgba(52, 211, 153, 0.25);
}

.garment-label {
  font-size: 0.65rem;
  font-weight: 700;
  color: #ffffff;
  display: block;
}

.ar-overlay-footer {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 0.4rem;
}

.calib-indicator {
  display: flex;
  justify-content: space-between;
  font-size: 0.62rem;
  color: rgba(255, 255, 255, 0.8);
}

.mockup-caption {
  margin-top: 1rem;
  font-size: 0.72rem;
  color: var(--emerald-300, #6ee7b7);
  text-align: center;
  opacity: 0.8;
}

/* E-Arsip Portal Mockup */
.earsip-portal-frame {
  width: 100%;
  max-width: 380px;
  background: #1e40af;
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.portal-window-bar {
  background: #0a1f18;
  padding: 0.6rem 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(52, 211, 153, 0.2);
}

.win-dots {
  display: flex;
  gap: 5px;
}

.win-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}

.win-dots span:nth-child(1) { background: #ef4444; }
.win-dots span:nth-child(2) { background: #f59e0b; }
.win-dots span:nth-child(3) { background: #10b981; }

.win-address {
  font-family: monospace;
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.portal-body-preview {
  padding: 1rem;
}

.portal-metrics-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.85rem;
}

.portal-mini-stat {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 6px;
  padding: 0.5rem;
  text-align: center;
}

.m-val {
  display: block;
  font-family: 'Outfit', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--blue-300, #93c5fd);
}

.m-lbl {
  display: block;
  font-size: 0.62rem;
  color: rgba(255, 255, 255, 0.7);
}

.portal-table-mock {
  font-size: 0.68rem;
  border: 1px solid rgba(52, 211, 153, 0.15);
  border-radius: 6px;
  overflow: hidden;
}

.t-row {
  display: grid;
  grid-template-columns: 1.1fr 1.6fr 1.2fr 0.9fr;
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
}

.t-row.t-head {
  background: rgba(255, 255, 255, 0.08);
  font-weight: 700;
  color: var(--emerald-300, #6ee7b7);
}

.mono { font-family: monospace; font-size: 0.64rem; }
.tag-role { color: #f59e0b; font-weight: 600; font-size: 0.62rem; }
.tag-role-sub { color: #38bdf8; font-weight: 600; font-size: 0.62rem; }
.tag-active { color: #34d399; font-weight: 600; font-size: 0.62rem; }

/* Right Info Area */
.project-info-wrapper {
  padding: 2.75rem;
  display: flex;
  flex-direction: column;
}

.project-header-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
  flex-wrap: wrap;
}

.flagship-badge {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(16, 185, 129, 0.15);
  color: var(--blue-800, #1e40af);
  border: 1px solid rgba(16, 185, 129, 0.35);
  padding: 0.25rem 0.65rem;
  border-radius: 99px;
}

.enterprise-badge {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(30, 64, 175, 0.15);
  color: var(--blue-900, #1e3a8a);
  border: 1px solid rgba(4, 120, 87, 0.3);
  padding: 0.25rem 0.65rem;
  border-radius: 99px;
}

.proj-category {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted, #567862);
}

.proj-main-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.35rem;
}

.proj-client {
  font-size: 0.95rem;
  color: var(--blue-700, #1d4ed8);
  margin-bottom: 1.1rem;
}

.proj-description {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text-mid, #244c35);
  margin-bottom: 1.5rem;
}

.highlights-title {
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.65rem;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--text-mid, #244c35);
}

.bullet-arrow {
  color: var(--blue-600, #2563eb);
  font-weight: 800;
}

.proj-tech-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
}

.p-tech-badge {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--blue-900, #1e3a8a);
  background: var(--cream-100, #f9f6ef);
  border: 1px solid rgba(59, 130, 246, 0.25);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.proj-cta-bar {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: auto;
}

.cta-helper {
  font-size: 0.8rem;
  color: var(--text-muted, #567862);
  font-style: italic;
}

/* ===== PROFESSIONAL EXPERIENCE SECTION ===== */
.exp-section {
  background: var(--cream-50, #fdfcf8);
}

.timeline-container {
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
}

.timeline-container::before {
  content: '';
  position: absolute;
  top: 15px;
  bottom: 15px;
  left: 20px;
  width: 2px;
  background: rgba(59, 130, 246, 0.25);
}

.timeline-item-card {
  display: flex;
  gap: 1.75rem;
  position: relative;
}

.timeline-node-pin {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--cream-50, #fdfcf8);
  border: 2px solid var(--emerald-600, #059669);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 2;
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
}

.pin-inner {
  width: 12px;
  height: 12px;
  background: var(--emerald-600, #059669);
  border-radius: 50%;
}

.timeline-card-body {
  flex: 1;
  background: var(--cream-100, #f9f6ef);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 4px 18px rgba(6, 95, 70, 0.04);
}

.timeline-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.timeline-period-badge {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--blue-800, #1e40af);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
  margin-bottom: 0.45rem;
}

.timeline-role {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.2rem;
}

.timeline-company {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--blue-700, #1d4ed8);
}

.loc-text {
  font-weight: 400;
  color: var(--text-muted, #567862);
  font-size: 0.85rem;
}

.timeline-org-type {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted, #567862);
  background: var(--cream-200, #f3ede0);
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
}

.timeline-bullets {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.timeline-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-mid, #244c35);
}

.b-arrow {
  color: var(--blue-600, #2563eb);
  font-weight: 800;
}

.timeline-tech-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
  padding-top: 0.9rem;
  border-top: 1px solid rgba(16, 185, 129, 0.15);
}

.t-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted, #567862);
}

.t-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.t-badge {
  font-size: 0.75rem;
  font-weight: 600;
  background: #ffffff;
  color: var(--emerald-900, #064e3b);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
}

/* ===== EDUCATION & ACHIEVEMENTS SECTION ===== */
.edu-achieve-section {
  background: var(--cream-100, #f9f6ef);
}

.education-card-main {
  max-width: 900px;
  margin: 0 auto 3.5rem;
  background: #ffffff;
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 20px;
  padding: 2.25rem;
  box-shadow: 0 8px 30px rgba(6, 95, 70, 0.06);
}

.edu-top-flex {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.edu-badge-icon {
  width: 52px;
  height: 52px;
  background: var(--emerald-50, #ecfdf5);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--emerald-700, #047857);
  flex-shrink: 0;
}

.edu-period-lbl {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--emerald-800, #065f46);
}

.edu-degree-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin: 0.15rem 0 0.25rem;
}

.edu-campus-name {
  font-size: 0.95rem;
  color: var(--text-mid, #244c35);
}

.edu-honor-pill {
  margin-left: auto;
  background: rgba(16, 185, 129, 0.12);
  color: var(--emerald-800, #065f46);
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-weight: 700;
  font-size: 0.85rem;
  padding: 0.35rem 0.85rem;
  border-radius: 99px;
}

.gpa-score-bar {
  background: var(--cream-100, #f9f6ef);
  border-left: 4px solid var(--emerald-600, #059669);
  padding: 1rem 1.25rem;
  border-radius: 0 10px 10px 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: baseline;
  gap: 0.85rem;
}

.gpa-number {
  font-family: 'Outfit', sans-serif;
  font-size: 1.7rem;
  font-weight: 800;
  color: var(--emerald-800, #065f46);
}

.gpa-desc {
  font-size: 0.92rem;
  color: var(--text-dark, #13271c);
}

.coursework-heading {
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted, #567862);
  margin-bottom: 0.75rem;
}

.coursework-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.course-chip {
  background: var(--cream-100, #f9f6ef);
  border: 1px solid var(--cream-300, #e8dcc9);
  color: var(--text-dark, #13271c);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 99px;
}

/* Honors and Certifications */
.achieve-cert-wrapper {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.block-sub-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin-bottom: 1.25rem;
}

.achieve-grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.achieve-box-card {
  background: #ffffff;
  border: 1px solid var(--cream-300, #e8dcc9);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(6, 95, 70, 0.04);
}

.achieve-box-card.gold { border-top: 4px solid #f59e0b; }
.achieve-box-card.silver { border-top: 4px solid #94a3b8; }
.achieve-box-card.bronze { border-top: 4px solid var(--emerald-600, #059669); }

.ach-icon-circle {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.ach-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.ach-badge-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--emerald-800, #065f46);
  background: var(--cream-100, #f9f6ef);
  padding: 0.2rem 0.55rem;
  border-radius: 99px;
}

.ach-year {
  font-size: 0.78rem;
  color: var(--text-muted, #567862);
  font-weight: 600;
}

.ach-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.5rem;
}

.ach-desc {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--text-mid, #244c35);
}

/* Certifications */
.cert-grid-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 1.25rem;
}

.cert-box-card {
  background: #ffffff;
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(6, 95, 70, 0.04);
}

.cert-icon-top {
  color: var(--emerald-600, #059669);
  margin-bottom: 0.6rem;
}

.cert-badge-cat {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--emerald-800, #065f46);
  background: rgba(16, 185, 129, 0.1);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 0.4rem;
}

.cert-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.2rem;
}

.cert-org {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--emerald-700, #047857);
  margin-bottom: 0.5rem;
}

.cert-detail {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-mid, #244c35);
}

/* ===== LEADERSHIP & SOFT SKILLS SECTION ===== */
.leadership-section {
  background: var(--cream-50, #fdfcf8);
}

.leadership-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.25rem;
}

.org-leadership-card,
.soft-skills-card {
  background: var(--cream-100, #f9f6ef);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  padding: 2.25rem;
  box-shadow: 0 4px 16px rgba(6, 95, 70, 0.04);
}

.card-tag-pill {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--emerald-800, #065f46);
  background: rgba(16, 185, 129, 0.12);
  padding: 0.25rem 0.65rem;
  border-radius: 99px;
  margin-bottom: 0.75rem;
}

.org-timeline {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted, #567862);
  font-weight: 600;
}

.org-position {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin: 0.2rem 0;
}

.org-group-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--emerald-700, #047857);
  margin-bottom: 1.1rem;
}

.org-quote-intro {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-mid, #244c35);
  font-style: italic;
  margin-bottom: 1.25rem;
  padding-left: 0.75rem;
  border-left: 3px solid var(--emerald-500, #10b981);
}

.org-bullet-list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.org-bullet-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-dark, #13271c);
}

.bullet-green {
  color: var(--emerald-600, #059669);
  font-weight: 800;
}

.soft-card-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin: 0.35rem 0 0.5rem;
}

.soft-card-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-mid, #244c35);
  margin-bottom: 1.5rem;
}

.soft-chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.soft-skill-chip {
  background: #ffffff;
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--emerald-950, #042c22);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.35rem 0.8rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.soft-skill-chip:hover {
  background: var(--emerald-50, #ecfdf5);
  border-color: var(--emerald-500, #10b981);
  transform: translateY(-2px);
}

/* ===== DEVELOPMENT PHILOSOPHY ===== */
.philosophy-section {
  background: var(--cream-100, #f9f6ef);
}

.philosophy-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.philosophy-card {
  background: #ffffff;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 4px 16px rgba(6, 95, 70, 0.04);
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease;
}

.philosophy-card:hover {
  transform: translateY(-3px);
  border-color: var(--emerald-500, #10b981);
}

.philo-num {
  font-family: monospace;
  font-size: 1.8rem;
  font-weight: 800;
  color: rgba(16, 185, 129, 0.25);
  margin-bottom: 0.4rem;
}

.philo-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.6rem;
}

.philo-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-mid, #244c35);
}

/* ===== GITHUB SECTION ===== */
.github-section {
  background: var(--cream-50, #fdfcf8);
}

.github-banner-card {
  background: #082117;
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 20px;
  padding: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  color: #ffffff;
  box-shadow: 0 12px 40px rgba(6, 95, 70, 0.15);
}

.gh-content-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.gh-icon-badge {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--emerald-400, #34d399);
  flex-shrink: 0;
}

.gh-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--emerald-400, #34d399);
}

.gh-title {
  font-size: 1.45rem;
  font-weight: 800;
  margin: 0.2rem 0 0.35rem;
  color: #ffffff;
}

.gh-desc {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.75);
  max-width: 520px;
  line-height: 1.55;
}

/* ===== CONTACT SECTION ===== */
.contact-section {
  background: var(--cream-100, #f9f6ef);
}

.contact-main-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 1.5rem;
}

.contact-channels-card,
.contact-form-card {
  background: #ffffff;
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  padding: 2.25rem;
  box-shadow: 0 6px 24px rgba(6, 95, 70, 0.05);
}

.contact-box-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin-bottom: 0.35rem;
}

.contact-box-sub {
  font-size: 0.88rem;
  color: var(--text-muted, #567862);
  margin-bottom: 1.75rem;
}

.channel-rows {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--cream-50, #fdfcf8);
  border: 1px solid var(--cream-300, #e8dcc9);
  border-radius: 12px;
}

.channel-icon-circle {
  width: 40px;
  height: 40px;
  background: var(--emerald-50, #ecfdf5);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--emerald-700, #047857);
  flex-shrink: 0;
}

.channel-text {
  flex: 1;
}

.c-lbl {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-muted, #567862);
}

.c-val {
  display: block;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-dark, #13271c);
}

.c-val.link {
  color: var(--emerald-700, #047857);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.copy-pill-btn,
.chat-pill-btn {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--emerald-800, #065f46);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.35rem 0.75rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
}

.copy-pill-btn:hover,
.chat-pill-btn:hover {
  background: var(--emerald-600, #059669);
  color: #ffffff;
}

/* Contact Form */
.contact-form-body {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.form-field-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-field-group label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-dark, #13271c);
}

.form-field-group input,
.form-field-group textarea {
  font-family: inherit;
  font-size: 0.92rem;
  background: var(--cream-50, #fdfcf8);
  border: 1px solid var(--cream-300, #e8dcc9);
  border-radius: 10px;
  padding: 0.7rem 0.9rem;
  color: var(--text-dark, #13271c);
  transition: border-color 0.2s ease;
}

.form-field-group input:focus,
.form-field-group textarea:focus {
  border-color: var(--emerald-500, #10b981);
}

/* CV MODAL */
.cv-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2200;
  background: rgba(10, 31, 24, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.cv-modal-box {
  background: var(--cream-50, #fdfcf8);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 20px;
  width: 100%;
  max-width: 680px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 60px -15px rgba(6, 95, 70, 0.35);
}

.cv-modal-header {
  padding: 1.5rem 1.75rem;
  background: var(--cream-100, #f9f6ef);
  border-bottom: 1px solid rgba(16, 185, 129, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cv-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--emerald-800, #065f46);
  background: rgba(16, 185, 129, 0.12);
  padding: 0.15rem 0.55rem;
  border-radius: 99px;
}

.cv-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-dark, #13271c);
  margin: 0.2rem 0;
}

.cv-role {
  font-size: 0.85rem;
  color: var(--emerald-700, #047857);
  font-weight: 600;
}

.cv-close-btn {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--text-mid, #244c35);
}

.cv-modal-body {
  padding: 1.75rem;
  overflow-y: auto;
}

.cv-quick-sheet {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cv-section h4 {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--emerald-900, #064e3b);
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
  padding-bottom: 0.3rem;
  margin-bottom: 0.45rem;
}

.cv-section p {
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-dark, #13271c);
}

.cv-modal-footer {
  padding: 1rem 1.75rem;
  background: var(--cream-100, #f9f6ef);
  border-top: 1px solid rgba(16, 185, 129, 0.15);
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3.5rem;
  }
  .hero-visual-col {
    order: -1;
  }
  .project-card-grid,
  .project-card-grid.reversed {
    grid-template-columns: 1fr;
  }
  .project-card-grid.reversed .project-mockup-wrapper {
    order: 1;
  }
  .project-card-grid.reversed .project-info-wrapper {
    order: 2;
  }
  .leadership-grid,
  .contact-main-grid {
    grid-template-columns: 1fr;
  }
  .github-banner-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 6.5rem 0 3.5rem;
  }
  .hero-main-title {
    font-size: 2.1rem;
  }
  .floating-tech-badge {
    display: none;
  }
  .profile-card-container {
    max-width: 280px;
  }
  .hero-profile-image {
    height: 330px;
  }
  .project-info-wrapper {
    padding: 1.75rem 1.25rem;
  }
  .project-mockup-wrapper {
    padding: 1.75rem 1rem;
  }
  .ar-phone-frame {
    width: 220px;
    height: 330px;
  }
  .contact-channels-card,
  .contact-form-card {
    padding: 1.5rem 1.25rem;
  }
}
</style>
