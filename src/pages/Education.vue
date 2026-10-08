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
        <div class="row items-start justify-between q-col-gutter-md q-mb-md">
          <div class="row items-center gap-md">
            <q-avatar size="50px" class="edu-avatar" rounded>
              <img v-if="edu.svg" :src="edu.svg" :alt="edu.institution" />
              <q-icon
                v-else
                name="fas fa-university"
                size="24px"
                class="text-indigo-4"
              />
            </q-avatar>
            <div>
              <div class="row items-center gap-sm">
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

          <div class="right-badges">
            <span v-if="edu.gpa" class="gpa-pill">
              <q-icon
                name="fas fa-award"
                size="13px"
                class="q-mr-xs text-amber-4"
              />
              GPA: {{ edu.gpa }}
            </span>
            <span class="period-badge q-ml-sm">
              <q-icon
                name="fas fa-calendar"
                size="12px"
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

        <!-- Carousel Photos if available -->
        <div
          v-if="edu.imageSrcs && edu.imageSrcs.length"
          class="campus-carousel-wrapper q-mt-md"
        >
          <q-carousel
            animated
            v-model="edu.carouselModel"
            arrows
            navigation
            infinite
            swipeable
            height="260px"
            class="campus-carousel rounded-borders"
          >
            <q-carousel-slide
              v-for="(src, imgIdx) in edu.imageSrcs"
              :key="imgIdx"
              :name="imgIdx"
              :img-src="src"
            />
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

  .edu-avatar {
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 6px;
  }

  .institution-name {
    font-size: 1.35rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Outfit", sans-serif;
  }

  .degree-title {
    font-size: 1rem;
    font-weight: 600;
  }

  .status-pill {
    font-size: 0.74rem;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 9999px;

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

  .gpa-pill {
    display: inline-flex;
    align-items: center;
    background: rgba(245, 158, 11, 0.15);
    color: #fde68a;
    border: 1px solid rgba(245, 158, 11, 0.3);
    font-size: 0.82rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 8px;
  }

  .period-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(30, 41, 59, 0.7);
    color: #cbd5e1;
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 0.8rem;
    padding: 4px 10px;
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

  .campus-carousel-wrapper {
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);

    .campus-carousel {
      background: #0d1322;
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
