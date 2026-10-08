<template>
  <div class="skills-page q-mx-auto">
    <!-- Header -->
    <div class="page-header text-center q-mb-xl">
      <div class="modern-badge q-mb-sm">
        <q-icon
          name="fas fa-microchip"
          size="13px"
          class="q-mr-xs text-cyan-4"
        />
        Capabilities
      </div>
      <h2 class="text-h3 text-white text-weight-bold q-my-none">
        Technical <span class="gradient-text-cyan">Skills</span>
      </h2>
      <p class="text-subtitle1 text-grey-5 q-mt-sm max-text-width q-mx-auto">
        Specialized in automated CI/CD pipelines, container orchestration, Linux
        server administration, and full-stack software architectures.
      </p>
    </div>

    <!-- Category Filter Bar -->
    <div class="filter-bar-wrapper q-mb-xl flex flex-center">
      <div class="filter-tabs">
        <button
          v-for="(filter, fIdx) in filterOptions"
          :key="fIdx"
          class="filter-pill-btn"
          :class="{ active: selectedFilter === filter.value }"
          @click="selectedFilter = filter.value"
        >
          <q-icon
            v-if="filter.icon"
            :name="filter.icon"
            size="13px"
            class="q-mr-xs"
          />
          {{ filter.label }}
        </button>
      </div>
    </div>

    <!-- Skills Grid -->
    <div class="row q-col-gutter-lg skills-grid">
      <div
        v-for="(category, index) in filteredCategories"
        :key="index"
        class="col-12 col-md-6 col-lg-4"
      >
        <div class="glass-panel skill-category-card q-pa-lg">
          <!-- Card Header -->
          <div class="row items-center q-mb-md">
            <div class="icon-avatar" :class="'icon-glow-' + category.color">
              <q-icon
                :name="category.icon"
                size="22px"
                :class="'text-' + category.color + '-4'"
              />
            </div>
            <div class="q-ml-md">
              <h3 class="category-title q-my-none">{{ category.category }}</h3>
              <p class="category-desc q-my-none text-caption text-grey-5">
                {{ category.description }}
              </p>
            </div>
          </div>

          <!-- Skills Badges List -->
          <div class="skills-pill-wrap q-mt-md">
            <span
              v-for="(skill, sIdx) in category.skills"
              :key="sIdx"
              class="interactive-skill-badge"
            >
              <span
                class="skill-dot"
                :class="'bg-' + category.color + '-4'"
              ></span>
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { skillsData } from "src/data/skills";

const selectedFilter = ref("all");

const filterOptions = [
  { label: "All Skills", value: "all", icon: "fas fa-border-all" },
  { label: "DevOps & Cloud", value: "devops", icon: "fas fa-infinity" },
  { label: "Linux & Network", value: "linux", icon: "fab fa-linux" },
  { label: "Automation", value: "automation", icon: "fas fa-robot" },
  { label: "Front-End", value: "frontend", icon: "fab fa-vuejs" },
];

const filteredCategories = computed(() => {
  if (selectedFilter.value === "all") return skillsData;
  if (selectedFilter.value === "devops") {
    return skillsData.filter((c) =>
      [
        "DevOps & CI/CD",
        "Containers & Repositories",
        "Security & Code Quality",
      ].includes(c.category)
    );
  }
  if (selectedFilter.value === "linux") {
    return skillsData.filter((c) =>
      ["Linux & Server Administration", "Web & Networking"].includes(c.category)
    );
  }
  if (selectedFilter.value === "backend") {
    return skillsData.filter((c) =>
      ["Databases & Backend", "Version Control Systems"].includes(c.category)
    );
  }
  if (selectedFilter.value === "frontend") {
    return skillsData.filter((c) => c.category === "Front-End Development");
  }
  if (selectedFilter.value === "automation") {
    return skillsData.filter((c) => c.category === "Automation & Scripting");
  }
  return skillsData;
});
</script>

<style lang="scss" scoped>
.skills-page {
  max-width: 1250px;
  padding: 20px 16px 60px;
}

.max-text-width {
  max-width: 650px;
}

.filter-bar-wrapper {
  .filter-tabs {
    display: inline-flex;
    flex-wrap: wrap;
    background: rgba(15, 23, 42, 0.7);
    padding: 6px;
    border-radius: 9999px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    gap: 4px;

    .filter-pill-btn {
      background: transparent;
      border: none;
      color: #94a3b8;
      font-weight: 600;
      font-size: 0.84rem;
      padding: 8px 16px;
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.25s ease;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
      }

      &.active {
        background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
        color: #ffffff;
        box-shadow: 0 4px 15px rgba(6, 182, 212, 0.35);
      }
    }
  }
}

.skill-category-card {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .icon-avatar {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &.icon-glow-cyan {
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
    }
    &.icon-glow-blue {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
    }
    &.icon-glow-green {
      box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
    }
    &.icon-glow-teal {
      box-shadow: 0 0 20px rgba(20, 184, 166, 0.2);
    }
    &.icon-glow-red {
      box-shadow: 0 0 20px rgba(239, 68, 68, 0.2);
    }
    &.icon-glow-orange {
      box-shadow: 0 0 20px rgba(249, 115, 22, 0.2);
    }
    &.icon-glow-purple {
      box-shadow: 0 0 20px rgba(168, 85, 247, 0.2);
    }
    &.icon-glow-emerald {
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
    }
    &.icon-glow-amber {
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
    }
  }

  .category-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: #ffffff;
    font-family: "Outfit", sans-serif;
  }

  .category-desc {
    line-height: 1.4;
    margin-top: 2px;
  }

  .skills-pill-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    .interactive-skill-badge {
      display: inline-flex;
      align-items: center;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 0.82rem;
      font-weight: 500;
      color: #e2e8f0;
      transition: all 0.2s ease;

      .skill-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 8px;
      }

      &:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
    }
  }
}
</style>
