<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen && project"
        class="modal-backdrop"
        @click.self="close"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="'modal-title-' + project.id"
      >
        <div class="modal-card">
          <!-- Header Bar -->
          <div class="modal-header">
            <div class="modal-meta-top">
              <span class="modal-badge-cat">{{ project.category }}</span>
              <span class="modal-period">{{ project.period }}</span>
            </div>

            <div class="modal-title-row">
              <div>
                <h3 :id="'modal-title-' + project.id" class="modal-title">{{ project.title }}</h3>
                <p class="modal-company">
                  <span class="company-name">{{ project.company }}</span>
                  <span class="role-pill">{{ project.role }}</span>
                </p>
              </div>

              <button
                class="modal-close-btn"
                @click="close"
                aria-label="Tutup Case Study"
                title="Tutup (Esc)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <!-- Tech Badges -->
            <div class="modal-tech-strip">
              <span v-for="t in project.tech" :key="t" class="tech-chip">
                {{ t }}
              </span>
            </div>
          </div>

          <!-- Modal Scrollable Content -->
          <div class="modal-body">
            <!-- 01 & 02: Overview & Problem -->
            <div class="case-grid-two">
              <div class="case-card">
                <div class="case-section-tag">
                  <span class="step-num">01</span>
                  <span>Overview</span>
                </div>
                <h4 class="case-sub-title">Ringkasan Sistem</h4>
                <p class="case-desc">{{ project.caseStudy.overview }}</p>
              </div>

              <div class="case-card">
                <div class="case-section-tag">
                  <span class="step-num">02</span>
                  <span>Problem</span>
                </div>
                <h4 class="case-sub-title">Latar Belakang & Kebutuhan</h4>
                <p class="case-desc">{{ project.caseStudy.problem }}</p>
              </div>
            </div>

            <!-- 03: My Role -->
            <div class="case-card full-width">
              <div class="case-section-tag">
                <span class="step-num">03</span>
                <span>My Role & Responsibilities</span>
              </div>
              <h4 class="case-sub-title">Peran Teknis End-to-End</h4>
              <p class="case-desc">{{ project.caseStudy.myRole }}</p>

              <div class="highlights-box">
                <h5 class="highlights-heading">Kontribusi Kunci:</h5>
                <ul class="highlights-list">
                  <li v-for="(h, i) in project.highlights" :key="i">
                    <span class="check-bullet">✓</span>
                    <span>{{ h }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 04: Technical Architecture Flow Diagram -->
            <div class="case-card full-width">
              <div class="case-section-tag">
                <span class="step-num">04</span>
                <span>Technical Approach & Architecture</span>
              </div>
              <h4 class="case-sub-title">Alur Data & Diagram Arsitektur</h4>
              <p class="case-desc">{{ project.caseStudy.technicalApproach }}</p>

              <!-- Interactive Architecture Diagram -->
              <div class="arch-diagram">
                <div class="diagram-heading">
                  <span class="diagram-pulse"></span>
                  <span>Data Flow & System Architecture Pipeline</span>
                </div>

                <div class="diagram-steps">
                  <template v-for="(step, idx) in project.caseStudy.architecture" :key="idx">
                    <div class="diag-node">
                      <div class="node-badge">{{ step.step }}</div>
                      <div class="node-title">{{ step.title }}</div>
                      <div class="node-desc">{{ step.desc }}</div>
                    </div>
                    <div v-if="idx < project.caseStudy.architecture.length - 1" class="diag-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </template>
                </div>
              </div>
            </div>

            <!-- 05 & 06: Challenges & Solution -->
            <div class="case-grid-two">
              <div class="case-card challenge">
                <div class="case-section-tag challenge-tag">
                  <span class="step-num">05</span>
                  <span>Technical Challenges</span>
                </div>
                <h4 class="case-sub-title">Tantangan Implementasi</h4>
                <p class="case-desc">{{ project.caseStudy.challenges }}</p>
              </div>

              <div class="case-card solution">
                <div class="case-section-tag solution-tag">
                  <span class="step-num">06</span>
                  <span>Engineered Solution</span>
                </div>
                <h4 class="case-sub-title">Solusi Rekayasa</h4>
                <p class="case-desc">{{ project.caseStudy.solution }}</p>
              </div>
            </div>

            <!-- 07 & 08: Technologies & Outcome -->
            <div class="case-grid-two">
              <div class="case-card">
                <div class="case-section-tag">
                  <span class="step-num">07</span>
                  <span>Technologies Used</span>
                </div>
                <h4 class="case-sub-title">Stack & Alat Kerja</h4>
                <div class="tech-pills-wrap">
                  <span v-for="item in project.caseStudy.technologies" :key="item" class="pill-emerald">
                    {{ item }}
                  </span>
                </div>
              </div>

              <div class="case-card outcome">
                <div class="case-section-tag outcome-tag">
                  <span class="step-num">08</span>
                  <span>Outcome & Impact</span>
                </div>
                <h4 class="case-sub-title">Hasil Nyata</h4>
                <p class="case-desc outcome-text">{{ project.caseStudy.outcome }}</p>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            <span class="footer-note">End-to-End Production Case Study</span>
            <button class="btn btn-secondary btn-sm" @click="close">
              Tutup Case Study
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

function handleKeydown(e) {
  if (e.key === 'Escape' && props.isOpen) {
    close()
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(10, 31, 24, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.modal-card {
  background: var(--cream-50, #fdfcf8);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 20px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 60px -15px rgba(6, 95, 70, 0.35);
  overflow: hidden;
  animation: modalScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalScaleUp {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Modal Header */
.modal-header {
  padding: 1.75rem 2rem 1.25rem;
  background: linear-gradient(180deg, var(--cream-100, #f9f6ef) 0%, var(--cream-50, #fdfcf8) 100%);
  border-bottom: 1px solid rgba(16, 185, 129, 0.15);
}

.modal-meta-top {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}

.modal-badge-cat {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--emerald-800, #065f46);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.2rem 0.65rem;
  border-radius: 99px;
}

.modal-period {
  font-size: 0.8rem;
  color: var(--text-muted, #5a7a63);
  font-weight: 500;
}

.modal-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.modal-title {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--text-dark, #1a2e1e);
  margin-bottom: 0.35rem;
  font-family: 'Outfit', sans-serif;
}

.modal-company {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  font-size: 0.92rem;
}

.company-name {
  font-weight: 600;
  color: var(--emerald-700, #047857);
}

.role-pill {
  font-size: 0.78rem;
  background: var(--cream-200, #f3ede0);
  color: var(--text-dark, #1a2e1e);
  padding: 0.15rem 0.6rem;
  border-radius: 6px;
  font-weight: 500;
}

.modal-close-btn {
  background: var(--cream-200, #f3ede0);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--text-mid, #2d5a3d);
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.modal-close-btn:hover {
  background: var(--emerald-600, #059669);
  color: #ffffff;
  border-color: var(--emerald-600, #059669);
}

.modal-tech-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1rem;
}

.tech-chip {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--emerald-900, #064e3b);
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
}

/* Modal Body */
.modal-body {
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.case-grid-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.case-card {
  background: #ffffff;
  border: 1px solid var(--cream-300, #e8dcc9);
  border-radius: 14px;
  padding: 1.35rem 1.5rem;
  box-shadow: 0 4px 14px rgba(6, 95, 70, 0.04);
  transition: border-color 0.2s ease;
}

.case-card:hover {
  border-color: rgba(16, 185, 129, 0.35);
}

.case-card.full-width {
  width: 100%;
}

.case-section-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--emerald-700, #047857);
  background: rgba(16, 185, 129, 0.1);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
}

.step-num {
  font-family: monospace;
  font-weight: 800;
}

.case-sub-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark, #1a2e1e);
  margin-bottom: 0.65rem;
  font-family: 'Outfit', sans-serif;
}

.case-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-mid, #2d5a3d);
}

/* Highlights Box */
.highlights-box {
  margin-top: 1.25rem;
  padding: 1.1rem 1.25rem;
  background: var(--cream-100, #f9f6ef);
  border-left: 3px solid var(--emerald-500, #10b981);
  border-radius: 0 10px 10px 0;
}

.highlights-heading {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--emerald-900, #064e3b);
  margin-bottom: 0.65rem;
}

.highlights-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlights-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text-dark, #1a2e1e);
}

.check-bullet {
  color: var(--emerald-600, #059669);
  font-weight: 800;
  font-size: 0.95rem;
  line-height: 1.3;
}

/* Architecture Diagram */
.arch-diagram {
  margin-top: 1.25rem;
  background: #082117;
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  color: #ffffff;
}

.diagram-heading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--emerald-400, #34d399);
  margin-bottom: 1.25rem;
}

.diagram-pulse {
  width: 8px;
  height: 8px;
  background: var(--emerald-400, #34d399);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--emerald-400, #34d399);
}

.diagram-steps {
  display: flex;
  align-items: stretch;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  scrollbar-width: auto;
  scrollbar-color: #0a9f73 #f5f3ec;
}

.diagram-steps::-webkit-scrollbar {
  height: 14px;
}

.diagram-steps::-webkit-scrollbar-track {
  background: #f5f3ec;
  border-radius: 999px;
  margin: 0 0.35rem;
}

.diagram-steps::-webkit-scrollbar-thumb {
  background: #0a9f73;
  border-radius: 999px;
  min-width: 40px;
}

.diagram-steps::-webkit-scrollbar-thumb:hover {
  background: #078a64;
}

.diag-node {
  flex: 1;
  min-width: 140px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 10px;
  padding: 1rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  transition: all 0.2s ease;
}

.diag-node:hover {
  background: rgba(16, 185, 129, 0.12);
  border-color: var(--emerald-400, #34d399);
  transform: translateY(1px);
}

.node-badge {
  font-family: monospace;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--emerald-400, #34d399);
}

.node-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fdfcf8;
}

.node-desc {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.4;
}

.diag-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--emerald-400, #34d399);
  opacity: 0.8;
  flex-shrink: 0;
}

/* Specific styling for challenges / solution / outcome */
.case-card.challenge {
  background: #fffcf9;
  border-left: 3px solid #d97706;
}

.challenge-tag {
  color: #b45309;
  background: rgba(217, 119, 6, 0.12);
}

.case-card.solution {
  background: #f7fdf9;
  border-left: 3px solid var(--emerald-600, #059669);
}

.solution-tag {
  color: var(--emerald-700, #047857);
  background: rgba(16, 185, 129, 0.12);
}

.case-card.outcome {
  background: #f0fdf4;
  border-left: 3px solid var(--emerald-600, #059669);
}

.outcome-tag {
  color: var(--emerald-800, #065f46);
  background: rgba(5, 150, 105, 0.15);
}

.outcome-text {
  font-weight: 500;
  color: var(--emerald-900, #064e3b);
}

.tech-pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.pill-emerald {
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(16, 185, 129, 0.12);
  color: var(--emerald-800, #065f46);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.25rem 0.65rem;
  border-radius: 99px;
}

/* Modal Footer */
.modal-footer {
  padding: 1.1rem 2rem;
  background: var(--cream-100, #f9f6ef);
  border-top: 1px solid rgba(16, 185, 129, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-note {
  font-size: 0.8rem;
  color: var(--text-muted, #5a7a63);
  font-weight: 500;
}

/* Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 0.75rem;
  }
  .modal-card {
    max-height: 95vh;
  }
  .modal-header {
    padding: 1.25rem 1.25rem 1rem;
  }
  .modal-body {
    padding: 1.25rem;
    gap: 1.2rem;
  }
  .modal-title {
    font-size: 1.35rem;
  }
  .case-grid-two {
    grid-template-columns: 1fr;
  }
  .diagram-steps {
    flex-direction: column;
  }
  .diag-arrow {
    transform: rotate(90deg);
    padding: 0.35rem 0;
  }
  .diag-node {
    min-width: 100%;
  }
  .modal-footer {
    padding: 1rem 1.25rem;
  }
}
</style>
