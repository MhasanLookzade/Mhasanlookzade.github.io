<template>
  <div class="education-page q-mx-auto">
    <!-- Header -->
    <div class="page-header text-center q-mb-xl">
      <div class="modern-badge q-mb-sm">
        <q-icon
          name="fas fa-graduation-cap"
          size="13px"
          class="q-mr-xs text-indigo-4"
        />
        Academic Journey
      </div>
      <h2 class="text-h3 text-white text-weight-bold q-my-none">
        Education & <span class="gradient-text">Degrees</span>
      </h2>
      <p class="text-subtitle1 text-grey-5 q-mt-sm max-text-width q-mx-auto">
        Graduate studies in Data Analysis and foundational Bachelor's degree in
        Computer Science.
      </p>
    </div>

    <!-- Education Cards Grid -->
    <div class="education-cards-wrapper">
      <div
        v-for="(edu, index) in educations"
        :key="index"
        class="glass-panel education-card q-pa-xl q-mb-xl"
      >
        <!-- Modernized Card Header -->
        <div class="edu-card-header">
          <div class="edu-identity">
            <div class="edu-logo-box">
              <img
                v-if="edu.svg"
                :src="edu.svg"
                :alt="edu.institution"
                class="edu-logo-img"
              />
              <q-icon
                v-else
                name="fas fa-university"
                size="24px"
                class="text-indigo-4"
              />
            </div>
            <div class="edu-info">
              <div class="edu-title-line">
                <h3 class="institution-name q-my-none">
                  {{ edu.institution }}
                </h3>
                <span class="status-pill" :class="'pill-' + edu.statusColor">
                  {{ edu.status }}
                </span>
              </div>
              <div class="degree-title text-indigo-3 q-mt-xs">
                {{ edu.degree }}
              </div>
            </div>
          </div>

          <div class="edu-meta-badges">
            <span v-if="edu.gpa" class="gpa-pill">
              <q-icon
                name="fas fa-award"
                size="14px"
                class="q-mr-xs text-amber-4"
              />
              GPA: {{ edu.gpa }}
            </span>
            <span class="period-badge">
              <q-icon
                name="fas fa-calendar"
                size="13px"
                class="q-mr-xs text-grey-4"
              />
              {{ edu.period }}
            </span>
          </div>
        </div>

        <p class="edu-desc text-body2 text-grey-4 q-mt-md q-mb-lg">
          {{ edu.description }}
        </p>

        <!-- Top Courses Section if available -->
        <div
          v-if="edu.topCourses && edu.topCourses.length"
          class="top-courses-box q-pa-md q-mb-lg"
        >
          <div
            class="text-subtitle2 text-weight-bold text-white q-mb-sm flex items-center"
          >
            <q-icon
              name="fas fa-star"
              size="14px"
              class="text-amber-4 q-mr-xs"
            />
            Core Academic Highlights:
          </div>
          <div class="row q-col-gutter-sm">
            <div
              v-for="(course, cIdx) in edu.topCourses"
              :key="cIdx"
              class="col-12 col-sm-6 col-md-4"
            >
              <div class="course-mini-card">
                <span class="c-name">{{ course.name }}</span>
                <span class="c-grade">{{ course.grade }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Campus Photos Showcase with Aspect-Ratio Preserved Display -->
        <div
          v-if="edu.imageSrcs && edu.imageSrcs.length"
          class="campus-gallery-container q-mt-lg"
        >
          <div class="gallery-header flex items-center justify-between q-mb-sm">
            <span class="gallery-label">
              <q-icon
                name="fas fa-camera"
                size="13px"
                class="q-mr-xs text-cyan-4"
              />
              Campus & Academic Environment
            </span>
            <span class="gallery-counter">
              {{ edu.carouselModel + 1 }} / {{ edu.imageSrcs.length }}
            </span>
          </div>
          <q-carousel
            animated
            v-model="edu.carouselModel"
            arrows
            navigation
            infinite
            swipeable
            class="campus-carousel"
          >
            <q-carousel-slide
              v-for="(src, imgIdx) in edu.imageSrcs"
              :key="imgIdx"
              :name="imgIdx"
              class="campus-slide-box no-padding flex flex-center"
            >
              <!-- Ambient Blurred Backdrop -->
              <div
                class="slide-blur-bg"
                :style="{ backgroundImage: `url(${src})` }"
              ></div>
              <!-- Crisp Foreground Photo -->
              <img
                :src="src"
                class="slide-photo-img"
                :alt="edu.institution + ' Photo ' + (imgIdx + 1)"
                loading="lazy"
              />
            </q-carousel-slide>
          </q-carousel>
        </div>

        <!-- Official Website Button -->
        <div class="row justify-end q-mt-md">
          <a :href="edu.url" target="_blank" class="institution-link">
            Visit {{ edu.institution }} Official Portal
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
</template>

<script setup>
import { ref } from "vue";
import { educationData } from "src/data/education";

const educations = ref(
  educationData.map((e) => ({
    ...e,
    carouselModel: 0,
  }))
);
</script>

<style lang="scss" scoped>
.education-page {
  max-width: 1050px;
  padding: 20px 16px 60px;
}

.max-text-width {
  max-width: 650px;
}

.education-card {
  border-radius: 24px;

  .edu-card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 20px;
  }

  .edu-identity {
    display: flex;
    align-items: center;
    gap: 16px;
    min-width: 0;
  }

  .edu-logo-box {
    width: 58px;
    height: 58px;
    border-radius: 14px;
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(20, 186, 237, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4), 0 0 12px rgba(20, 186, 237, 0.1);

    .edu-logo-img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  .edu-title-line {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .institution-name {
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Outfit", sans-serif;
    line-height: 1.3;
  }

  .degree-title {
    font-size: 1rem;
    font-weight: 600;
  }

  .status-pill {
    font-size: 0.74rem;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 9999px;
    white-space: nowrap;

    &.pill-teal {
      background: rgba(20, 184, 166, 0.15);
      color: #2dd4bf;
      border: 1px solid rgba(20, 184, 166, 0.3);
    }
    &.pill-primary {
      background: rgba(99, 102, 241, 0.15);
      color: #a5b4fc;
      border: 1px solid rgba(99, 102, 241, 0.3);
    }
    &.pill-purple {
      background: rgba(168, 85, 247, 0.15);
      color: #c084fc;
      border: 1px solid rgba(168, 85, 247, 0.3);
    }
  }

  .edu-meta-badges {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  .gpa-pill {
    display: inline-flex;
    align-items: center;
    background: rgba(245, 158, 11, 0.15);
    color: #fde68a;
    border: 1px solid rgba(245, 158, 11, 0.3);
    font-size: 0.82rem;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 8px;
  }

  .period-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(30, 41, 59, 0.7);
    color: #cbd5e1;
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.8rem;
    padding: 5px 12px;
    border-radius: 8px;
  }

  .edu-desc {
    line-height: 1.7;
  }

  .top-courses-box {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;

    .course-mini-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(30, 41, 59, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 0.82rem;

      .c-name {
        color: #e2e8f0;
        font-weight: 500;
      }
      .c-grade {
        color: #a5b4fc;
        font-weight: 700;
        font-family: "JetBrains Mono", monospace;
      }
    }
  }

  .campus-gallery-container {
    background: rgba(10, 15, 29, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 12px;

    .gallery-header {
      padding: 0 4px 8px;

      .gallery-label {
        font-size: 0.8rem;
        font-weight: 600;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }

      .gallery-counter {
        font-family: "JetBrains Mono", monospace;
        font-size: 0.75rem;
        color: #818cf8;
        background: rgba(99, 102, 241, 0.12);
        border: 1px solid rgba(99, 102, 241, 0.25);
        padding: 2px 10px;
        border-radius: 6px;
      }
    }

    .campus-carousel {
      height: 440px;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      background: #060913;

      @media (max-width: 768px) {
        height: 320px;
      }
      @media (max-width: 480px) {
        height: 240px;
      }

      .campus-slide-box {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        .slide-blur-bg {
          position: absolute;
          inset: -25px;
          background-size: cover;
          background-position: center;
          filter: blur(28px) brightness(0.28) saturate(1.4);
          transform: scale(1.15);
          pointer-events: none;
        }

        .slide-photo-img {
          position: relative;
          z-index: 2;
          max-width: 96%;
          max-height: 94%;
          width: auto;
          height: auto;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6);
        }
      }

      :deep(.q-carousel__arrow .q-btn) {
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #ffffff;
        transition: all 0.2s ease;
        z-index: 10;

        &:hover {
          background: rgba(99, 102, 241, 0.9);
          border-color: rgba(99, 102, 241, 0.6);
        }
      }

      :deep(.q-carousel__navigation-inner .q-btn) {
        opacity: 0.5;
        transition: opacity 0.2s ease;
        z-index: 10;

        &.q-btn--active {
          opacity: 1;
          color: #818cf8 !important;
        }
      }
    }
  }

  .institution-link {
    color: #818cf8;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: #a5b4fc;
      text-decoration: underline;
    }
  }
}
</style>
