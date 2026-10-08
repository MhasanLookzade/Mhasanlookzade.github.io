<template>
  <div class="courses-page q-mx-auto">
    <!-- Header -->
    <div class="page-header text-center q-mb-xl">
      <div class="modern-badge q-mb-sm">
        <q-icon
          name="fas fa-certificate"
          size="13px"
          class="q-mr-xs text-amber-4"
        />
        Continuous Learning
      </div>
      <h2 class="text-h3 text-white text-weight-bold q-my-none">
        Certifications & <span class="gradient-text">Languages</span>
      </h2>
      <p class="text-subtitle1 text-grey-5 q-mt-sm max-text-width q-mx-auto">
        Specialized industry training in DevOps and cloud systems, alongside
        academic language credentials.
      </p>
    </div>

    <!-- Section 1: Online Certifications -->
    <div class="section-container q-mb-xl">
      <div class="section-title-row q-mb-lg flex items-center gap-sm">
        <q-icon name="fas fa-cloud" size="20px" class="text-blue-4" />
        <h3 class="text-h5 text-white text-weight-bold q-my-none">
          Professional Online Certifications
        </h3>
      </div>

      <div class="row q-col-gutter-lg">
        <div
          v-for="(cert, cIdx) in courses.certifications"
          :key="cIdx"
          class="col-12 col-md-6"
        >
          <div class="glass-panel cert-card q-pa-lg">
            <div class="row items-center justify-between q-mb-sm">
              <span class="platform-chip">
                <q-icon
                  :name="cert.icon"
                  size="14px"
                  class="q-mr-xs text-amber-4"
                />
                {{ cert.platform }}
              </span>
              <span class="category-chip" :class="'chip-' + cert.badgeColor">
                {{ cert.category }}
              </span>
            </div>

            <h4 class="cert-title q-my-none">{{ cert.title }}</h4>

            <div class="row justify-end q-mt-md">
              <a :href="cert.link" target="_blank" class="cert-link-btn">
                <span>View Course</span>
                <q-icon
                  name="fas fa-arrow-up-right-from-square"
                  size="12px"
                  class="q-ml-xs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Language Proficiency -->
    <div class="section-container q-mb-xl">
      <div class="section-title-row q-mb-lg flex items-center gap-sm">
        <q-icon name="fas fa-language" size="22px" class="text-cyan-4" />
        <h3 class="text-h5 text-white text-weight-bold q-my-none">
          Language Skills
        </h3>
      </div>

      <div class="row q-col-gutter-lg">
        <!-- English / IELTS Card -->
        <div class="col-12 col-md-7">
          <div class="glass-panel language-card q-pa-xl">
            <div class="row items-center justify-between q-mb-md">
              <div class="row items-center gap-sm">
                <q-avatar size="36px" class="lang-avatar">
                  <q-icon name="fas fa-globe" size="18px" class="text-cyan-4" />
                </q-avatar>
                <div>
                  <h4 class="lang-name q-my-none">English</h4>
                  <div class="text-caption text-grey-5">
                    Limited Working Proficiency
                  </div>
                </div>
              </div>

              <span class="ielts-badge">
                <span class="pulse-dot"></span>
                Academic IELTS In Progress
              </span>
            </div>

            <!-- Score Cards -->
            <div class="row q-col-gutter-sm q-mt-md">
              <div
                v-for="(s, sIdx) in courses.languages[0].scores"
                :key="sIdx"
                class="col-6 col-sm-3"
              >
                <div class="score-card text-center q-pa-md">
                  <div class="skill-name">{{ s.skill }}</div>
                  <div class="skill-score">{{ s.score }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Persian Native Card -->
        <div class="col-12 col-md-5">
          <div
            class="glass-panel language-card q-pa-xl h-100 flex column justify-between"
          >
            <div class="row items-center gap-sm">
              <q-avatar size="36px" class="lang-avatar">
                <q-icon
                  name="fas fa-comment-dots"
                  size="18px"
                  class="text-emerald-4"
                />
              </q-avatar>
              <div>
                <h4 class="lang-name q-my-none">Persian (Farsi)</h4>
                <div class="text-caption text-grey-5">Native Proficiency</div>
              </div>
            </div>

            <div class="native-badge-box q-mt-lg q-pa-md text-center">
              <div class="text-h6 text-weight-bold text-white">
                First Language (Native)
              </div>
              <div class="text-caption text-grey-5">
                Full professional and personal fluency
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { coursesData as courses } from "src/data/courses";
</script>

<style lang="scss" scoped>
.courses-page {
  max-width: 1150px;
  padding: 20px 16px 60px;
}

.max-text-width {
  max-width: 650px;
}

.cert-card {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 170px;

  .platform-chip {
    display: inline-flex;
    align-items: center;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 3px 8px;
    font-size: 0.75rem;
    color: #e2e8f0;
    font-weight: 600;
  }

  .category-chip {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 9999px;

    &.chip-blue {
      background: rgba(59, 130, 246, 0.15);
      color: #93c5fd;
      border: 1px solid rgba(59, 130, 246, 0.3);
    }
    &.chip-cyan {
      background: rgba(6, 182, 212, 0.15);
      color: #67e8f9;
      border: 1px solid rgba(6, 182, 212, 0.3);
    }
    &.chip-green {
      background: rgba(34, 197, 94, 0.15);
      color: #86efac;
      border: 1px solid rgba(34, 197, 94, 0.3);
    }
    &.chip-teal {
      background: rgba(20, 184, 166, 0.15);
      color: #5eead4;
      border: 1px solid rgba(20, 184, 166, 0.3);
    }
    &.chip-amber {
      background: rgba(245, 158, 11, 0.15);
      color: #fde68a;
      border: 1px solid rgba(245, 158, 11, 0.3);
    }
  }

  .cert-title {
    font-size: 1.05rem;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.45;
    font-family: "Outfit", sans-serif;
  }

  .cert-link-btn {
    display: inline-flex;
    align-items: center;
    color: #818cf8;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: #c7d2fe;
      text-decoration: underline;
    }
  }
}

.language-card {
  border-radius: 20px;

  .lang-avatar {
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .lang-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Outfit", sans-serif;
  }

  .ielts-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(6, 182, 212, 0.12);
    border: 1px solid rgba(6, 182, 212, 0.3);
    color: #67e8f9;
    border-radius: 9999px;
    padding: 4px 12px;
    font-size: 0.78rem;
    font-weight: 600;
  }

  .score-card {
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;

    .skill-name {
      font-size: 0.76rem;
      color: #94a3b8;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .skill-score {
      font-size: 1.2rem;
      font-weight: 800;
      color: #ffffff;
      margin-top: 4px;
      font-family: "JetBrains Mono", monospace;
    }
  }

  .native-badge-box {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
    border-radius: 14px;
  }
}
</style>
