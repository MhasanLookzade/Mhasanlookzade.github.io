<template>
  <div class="index-page q-mx-auto">
    <!-- Hero Section -->
    <div class="row items-center justify-between hero-container">
      <!-- Left Content -->
      <div class="col-12 col-md-7 hero-content">
        <!-- Status Badge -->
        <div class="status-badge-wrapper q-mb-md">
          <span class="modern-badge">
            <span class="pulse-dot"></span>
            {{ profile.statusBadge }}
          </span>
        </div>

        <!-- Name & Headline -->
        <h1 class="hero-name q-my-none">
          {{ profile.fullName }}
          <span class="gradient-text">{{ profile.lastName }}</span>
        </h1>

        <div class="hero-headline q-mt-sm q-mb-md">
          {{ profile.title }}
        </div>

        <div class="academic-badge-row q-mb-lg">
          <span class="academic-chip">
            <q-icon name="fas fa-graduation-cap" class="q-mr-xs text-cyan-4" />
            M.Sc. Data Analysis @ SBU
          </span>
          <span class="academic-chip">
            <q-icon name="fas fa-university" class="q-mr-xs text-indigo-4" />
            B.Sc. Computer Science @ KHU
          </span>
          <span class="academic-chip">
            <q-icon name="fas fa-location-dot" class="q-mr-xs text-red-4" />
            Tehran, Iran
          </span>
        </div>

        <!-- Bio Paragraph -->
        <p class="hero-summary text-body1">
          {{ profile.summary }}
        </p>

        <!-- Tech Focus Chips -->
        <div class="chips-container q-my-lg">
          <div
            v-for="(chip, index) in profile.chips"
            :key="index"
            class="tech-tag"
          >
            <q-icon
              :name="chip.icon"
              size="14px"
              class="q-mr-xs"
              :class="'text-' + chip.color"
            />
            {{ chip.label }}
          </div>
        </div>

        <!-- Quick CTAs -->
        <div class="cta-row q-mt-xl">
          <q-btn
            unelevated
            class="primary-cta"
            to="/experience"
            icon="fas fa-briefcase"
            label="View Experience"
          />
          <q-btn
            outline
            class="secondary-cta"
            to="/skills"
            icon="fas fa-code"
            label="Technical Skills"
          />
          <q-btn
            flat
            class="ghost-cta"
            to="/contact_me"
            icon="fas fa-envelope"
            label="Contact Me"
          />
        </div>
      </div>

      <!-- Right Column: Avatar & Floating Cards -->
      <div class="col-12 col-md-5 hero-avatar-col flex flex-center">
        <div class="avatar-card-wrapper">
          <div class="avatar-glow-ring">
            <q-img
              loading="eager"
              spinner-color="primary"
              alt="Mohammad Hasan Lookzadeh"
              src="~assets/hajHassan/hajhasan.png"
              class="hero-avatar-img"
            />
          </div>

          <!-- Floating Badges -->
          <div class="floating-badge badge-top">
            <q-icon
              name="fab fa-docker"
              size="20px"
              class="text-blue-4 q-mr-sm"
            />
            <div>
              <div class="f-title">DevOps & CI/CD</div>
              <div class="f-sub">Docker, Jenkins, Nexus</div>
            </div>
          </div>

          <div class="floating-badge badge-bottom">
            <q-icon
              name="fab fa-linux"
              size="20px"
              class="text-green-4 q-mr-sm"
            />
            <div>
              <div class="f-title">Linux & Edge IoT</div>
              <div class="f-sub">Ubuntu, Raspberry Pi</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats Metric Cards -->
    <div class="row q-col-gutter-md q-mt-xl stats-grid">
      <div
        v-for="(stat, sIdx) in profile.quickStats"
        :key="sIdx"
        class="col-12 col-sm-6 col-md-3"
      >
        <div class="glass-panel stat-card q-pa-lg text-center">
          <div class="stat-value gradient-text">{{ stat.value }}</div>
          <div class="stat-label text-weight-medium">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { profileData as profile } from "src/data/profile";
</script>

<style lang="scss" scoped>
.index-page {
  max-width: 1250px;
  padding: 40px 16px 20px;
}

.hero-container {
  min-height: 520px;
}

.hero-name {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
}

.hero-headline {
  font-size: 1.35rem;
  font-weight: 600;
  color: #a5b4fc;
  letter-spacing: -0.01em;
}

.academic-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .academic-chip {
    display: inline-flex;
    align-items: center;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 4px 10px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #cbd5e1;
  }
}

.hero-summary {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #94a3b8;
  max-width: 680px;
}

.chips-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .tech-tag {
    display: inline-flex;
    align-items: center;
    background: rgba(17, 24, 39, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 8px;
    padding: 6px 12px;
    font-size: 0.84rem;
    font-weight: 500;
    color: #e2e8f0;
    transition: all 0.2s ease;

    &:hover {
      border-color: rgba(99, 102, 241, 0.4);
      background: rgba(99, 102, 241, 0.12);
      transform: translateY(-2px);
    }
  }
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  .primary-cta {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    color: #ffffff;
    font-weight: 600;
    font-size: 0.95rem;
    border-radius: 12px;
    padding: 10px 24px;
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
    transition: all 0.25s ease;

    &:hover {
      box-shadow: 0 6px 25px rgba(99, 102, 241, 0.6);
      transform: translateY(-2px);
    }
  }

  .secondary-cta {
    color: #a5b4fc;
    border: 1px solid rgba(99, 102, 241, 0.4);
    font-weight: 600;
    border-radius: 12px;
    padding: 10px 22px;
    transition: all 0.25s ease;

    &:hover {
      background: rgba(99, 102, 241, 0.12);
      border-color: #6366f1;
      transform: translateY(-2px);
    }
  }

  .ghost-cta {
    color: #94a3b8;
    font-weight: 500;
    border-radius: 12px;
    padding: 10px 18px;

    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

.avatar-card-wrapper {
  position: relative;
  width: 340px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    margin-top: 50px;
    width: 290px;
    height: 290px;
  }

  .avatar-glow-ring {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    padding: 8px;
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.6),
      rgba(6, 182, 212, 0.4)
    );
    box-shadow: 0 0 50px rgba(99, 102, 241, 0.35);

    @media (max-width: 960px) {
      width: 240px;
      height: 240px;
    }

    .hero-avatar-img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 4px solid #090d16;
    }
  }

  .floating-badge {
    position: absolute;
    display: flex;
    align-items: center;
    background: rgba(15, 23, 42, 0.88);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    padding: 10px 14px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);

    .f-title {
      font-size: 0.82rem;
      font-weight: 700;
      color: #ffffff;
    }

    .f-sub {
      font-size: 0.72rem;
      color: #94a3b8;
    }

    &.badge-top {
      top: 10px;
      left: -20px;
      animation: float-anim 4s ease-in-out infinite alternate;
    }

    &.badge-bottom {
      bottom: 10px;
      right: -20px;
      animation: float-anim 4s ease-in-out infinite alternate-reverse;
    }
  }
}

@keyframes float-anim {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-8px);
  }
}

.stat-card {
  .stat-value {
    font-size: 2.4rem;
    font-weight: 800;
    line-height: 1.1;
    font-family: "Outfit", sans-serif;
  }

  .stat-label {
    font-size: 0.88rem;
    color: #94a3b8;
    margin-top: 6px;
  }
}
</style>
