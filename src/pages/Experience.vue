<template>
  <div class="experience-page q-mx-auto">
    <!-- Header Title -->
    <div class="page-header text-center q-mb-xl">
      <div class="modern-badge q-mb-sm">
        <q-icon
          name="fas fa-briefcase"
          size="13px"
          class="q-mr-xs text-indigo-4"
        />
        Career Timeline
      </div>
      <h2 class="text-h3 text-white text-weight-bold q-my-none">
        Work <span class="gradient-text">Experience</span>
      </h2>
      <p class="text-subtitle1 text-grey-5 q-mt-sm max-text-width q-mx-auto">
        Track record across enterprise DevOps infrastructure, IoT edge
        computing, and high-traffic web platforms.
      </p>
    </div>

    <!-- Timeline List -->
    <div class="timeline-container">
      <div
        v-for="(job, index) in experienceList"
        :key="index"
        class="timeline-item q-mb-xl"
      >
        <div class="glass-panel experience-card q-pa-lg">
          <!-- Card Header -->
          <div class="row items-start justify-between q-col-gutter-sm q-mb-md">
            <div>
              <div class="row items-center gap-sm">
                <span class="role-title">{{ job.role }}</span>
                <span
                  v-if="job.badge"
                  class="job-status-chip"
                  :class="'chip-' + job.badgeColor"
                >
                  {{ job.badge }}
                </span>
              </div>
              <div class="company-row q-mt-xs">
                <a
                  v-if="job.companyUrl"
                  :href="job.companyUrl"
                  target="_blank"
                  class="company-link"
                >
                  {{ job.company }}
                  <q-icon
                    name="fas fa-arrow-up-right-from-square"
                    size="12px"
                    class="q-ml-xs"
                  />
                </a>
                <span v-else class="company-text">{{ job.company }}</span>
              </div>
            </div>

            <!-- Date Period -->
            <div class="period-pill">
              <q-icon
                name="fas fa-calendar-days"
                size="13px"
                class="q-mr-xs text-indigo-4"
              />
              {{ job.period }}
            </div>
          </div>

          <!-- Description -->
          <p class="job-desc text-body2 text-grey-4 q-mb-md">
            {{ job.description }}
          </p>

          <!-- Key Responsibilities / Highlights -->
          <div class="highlights-list q-mb-lg">
            <div
              v-for="(item, hIdx) in job.highlights"
              :key="hIdx"
              class="highlight-item"
            >
              <q-icon
                name="fas fa-circle-check"
                size="14px"
                class="highlight-icon text-indigo-4"
              />
              <span>{{ item }}</span>
            </div>
          </div>

          <!-- Skills Pills -->
          <div
            v-if="job.skills && job.skills.length"
            class="skills-row q-mb-md"
          >
            <span
              v-for="(skill, sIdx) in job.skills"
              :key="sIdx"
              class="skill-pill"
            >
              {{ skill }}
            </span>
          </div>

          <!-- Project Links -->
          <div
            v-if="job.projects && job.projects.length"
            class="projects-row q-mt-md"
          >
            <div class="text-caption text-grey-5 q-mb-xs">
              Featured Live Projects:
            </div>
            <div class="row gap-xs">
              <a
                v-for="(proj, pIdx) in job.projects"
                :key="pIdx"
                :href="proj.url"
                target="_blank"
                class="project-chip-btn"
              >
                <span>{{ proj.title }}</span>
                <q-icon
                  name="fas fa-arrow-up-right-from-square"
                  size="11px"
                  class="q-ml-xs"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { experienceData as experienceList } from "src/data/experience";
</script>

<style lang="scss" scoped>
.experience-page {
  max-width: 1000px;
  padding: 20px 16px 60px;
}

.max-text-width {
  max-width: 650px;
}

.timeline-container {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    bottom: 20px;
    left: 20px;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(99, 102, 241, 0.6) 0%,
      rgba(6, 182, 212, 0.4) 50%,
      rgba(99, 102, 241, 0.1) 100%
    );

    @media (max-width: 768px) {
      display: none;
    }
  }
}

.timeline-item {
  position: relative;
  padding-left: 55px;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 32px;
    left: 13px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #090d16;
    border: 3px solid #6366f1;
    box-shadow: 0 0 12px #6366f1;
    z-index: 2;

    @media (max-width: 768px) {
      display: none;
    }
  }
}

.experience-card {
  .role-title {
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Outfit", sans-serif;
  }

  .job-status-chip {
    display: inline-flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 9999px;
    margin-left: 8px;

    &.chip-teal {
      background: rgba(20, 184, 166, 0.15);
      color: #2dd4bf;
      border: 1px solid rgba(20, 184, 166, 0.3);
    }
    &.chip-primary {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }
    &.chip-purple {
      background: rgba(168, 85, 247, 0.15);
      color: #c084fc;
      border: 1px solid rgba(168, 85, 247, 0.3);
    }
    &.chip-orange {
      background: rgba(249, 115, 22, 0.15);
      color: #fb923c;
      border: 1px solid rgba(249, 115, 22, 0.3);
    }
    &.chip-cyan {
      background: rgba(6, 182, 212, 0.15);
      color: #22d3ee;
      border: 1px solid rgba(6, 182, 212, 0.3);
    }
  }

  .company-link {
    color: #818cf8;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.2s ease;

    &:hover {
      color: #a5b4fc;
      text-decoration: underline;
    }
  }

  .company-text {
    color: #cbd5e1;
    font-weight: 600;
    font-size: 1rem;
  }

  .period-pill {
    display: inline-flex;
    align-items: center;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #cbd5e1;
  }

  .job-desc {
    line-height: 1.7;
  }

  .highlights-list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .highlight-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 0.92rem;
      line-height: 1.6;
      color: #cbd5e1;

      .highlight-icon {
        margin-top: 4px;
        flex-shrink: 0;
      }
    }
  }

  .skills-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .skill-pill {
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 0.78rem;
      font-weight: 500;
      color: #94a3b8;
      font-family: "JetBrains Mono", monospace;
    }
  }

  .project-chip-btn {
    display: inline-flex;
    align-items: center;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.25);
    color: #c7d2fe;
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(99, 102, 241, 0.2);
      border-color: #6366f1;
      color: #ffffff;
      transform: translateY(-1px);
    }
  }
}
</style>
