<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header elevated class="header-nav">
      <q-toolbar class="toolbar-container">
        <!-- Brand identity -->
        <router-link to="/about" class="brand-link">
          <q-avatar size="44px" class="brand-avatar">
            <img
              src="~assets/hajHassan/hajhasan.png"
              alt="Mohammad Hasan Lookzadeh"
            />
          </q-avatar>
          <div class="brand-text">
            <div class="brand-name">M. Hasan Lookzadeh</div>
            <div class="brand-subtitle">
              <span class="live-dot"></span>
              DevOps & Full-Stack
            </div>
          </div>
        </router-link>

        <q-space />

        <!-- Desktop Navigation Tabs -->
        <div class="desktop-nav gt-sm">
          <q-tabs
            v-model="tab"
            no-caps
            dense
            active-color="primary"
            indicator-color="transparent"
            class="nav-tabs"
          >
            <q-route-tab
              to="/about"
              exact
              name="about"
              label="About"
              icon="fas fa-user"
            />
            <q-route-tab
              to="/experience"
              exact
              name="experience"
              label="Experience"
              icon="fas fa-briefcase"
            />
            <q-route-tab
              to="/skills"
              exact
              name="skills"
              label="Skills"
              icon="fas fa-code"
            />
            <q-route-tab
              to="/education"
              exact
              name="education"
              label="Education"
              icon="fas fa-graduation-cap"
            />
            <q-route-tab
              to="/courses"
              exact
              name="courses"
              label="Courses"
              icon="fas fa-certificate"
            />
            <q-route-tab
              to="/contact_me"
              exact
              name="contact"
              label="Contact"
              icon="fas fa-paper-plane"
            />
          </q-tabs>
        </div>

        <q-space />

        <!-- Social & Quick Action Buttons -->
        <div class="action-buttons gt-xs">
          <q-btn
            round
            dense
            flat
            class="social-btn"
            icon="fab fa-github"
            type="a"
            :href="socialLinks.github.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-tooltip class="nav-tooltip">GitHub</q-tooltip>
          </q-btn>

          <q-btn
            round
            dense
            flat
            class="social-btn"
            icon="fab fa-linkedin-in"
            type="a"
            :href="socialLinks.linkedin.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-tooltip class="nav-tooltip">LinkedIn</q-tooltip>
          </q-btn>

          <q-btn
            round
            dense
            flat
            class="social-btn"
            icon="fab fa-telegram"
            type="a"
            :href="socialLinks.telegram.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <q-tooltip class="nav-tooltip">Telegram (@itsha3an)</q-tooltip>
          </q-btn>

          <q-btn
            unelevated
            class="resume-cta-btn"
            icon="fas fa-file-arrow-down"
            label="Resume"
            type="a"
            :href="socialLinks.resume.url"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        <!-- Mobile Menu Toggle Button -->
        <q-btn
          flat
          dense
          round
          icon="fas fa-bars"
          class="lt-md q-ml-sm mobile-menu-btn"
          @click="drawerOpen = !drawerOpen"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer Navigation -->
    <q-drawer
      v-model="drawerOpen"
      side="right"
      overlay
      behavior="mobile"
      class="mobile-drawer"
    >
      <div class="drawer-content q-pa-lg">
        <div class="row items-center justify-between q-mb-lg">
          <div class="text-h6 text-weight-bold text-white">Menu</div>
          <q-btn
            flat
            round
            dense
            icon="fas fa-xmark"
            @click="drawerOpen = false"
          />
        </div>

        <q-list class="mobile-nav-list">
          <q-item
            clickable
            v-ripple
            to="/about"
            exact
            @click="drawerOpen = false"
            active-class="mobile-active"
          >
            <q-item-section avatar
              ><q-icon name="fas fa-user"
            /></q-item-section>
            <q-item-section>About Me</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/experience"
            exact
            @click="drawerOpen = false"
            active-class="mobile-active"
          >
            <q-item-section avatar
              ><q-icon name="fas fa-briefcase"
            /></q-item-section>
            <q-item-section>Experience</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/skills"
            exact
            @click="drawerOpen = false"
            active-class="mobile-active"
          >
            <q-item-section avatar
              ><q-icon name="fas fa-code"
            /></q-item-section>
            <q-item-section>Skills</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/education"
            exact
            @click="drawerOpen = false"
            active-class="mobile-active"
          >
            <q-item-section avatar
              ><q-icon name="fas fa-graduation-cap"
            /></q-item-section>
            <q-item-section>Education</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/courses"
            exact
            @click="drawerOpen = false"
            active-class="mobile-active"
          >
            <q-item-section avatar
              ><q-icon name="fas fa-certificate"
            /></q-item-section>
            <q-item-section>Courses & Languages</q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/contact_me"
            exact
            @click="drawerOpen = false"
            active-class="mobile-active"
          >
            <q-item-section avatar
              ><q-icon name="fas fa-paper-plane"
            /></q-item-section>
            <q-item-section>Contact</q-item-section>
          </q-item>
        </q-list>

        <div class="row items-center justify-center gap-md q-mt-xl">
          <q-btn
            round
            dense
            flat
            class="social-btn"
            icon="fab fa-github"
            type="a"
            :href="socialLinks.github.url"
            target="_blank"
            rel="noopener noreferrer"
          />
          <q-btn
            round
            dense
            flat
            class="social-btn"
            icon="fab fa-linkedin-in"
            type="a"
            :href="socialLinks.linkedin.url"
            target="_blank"
            rel="noopener noreferrer"
          />
          <q-btn
            round
            dense
            flat
            class="social-btn"
            icon="fab fa-telegram"
            type="a"
            :href="socialLinks.telegram.url"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>

        <div class="q-mt-lg">
          <q-btn
            unelevated
            class="full-width resume-cta-btn"
            icon="fas fa-file-arrow-down"
            label="Download Resume (PDF)"
            type="a"
            :href="socialLinks.resume.url"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </q-drawer>

    <!-- Main Content Container with Ambient Glow -->
    <q-page-container class="page-container-glow">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { profileData } from "src/data/profile";

const tab = ref("about");
const drawerOpen = ref(false);
const socialLinks = profileData.socialLinks;

const goToUrl = (url) => {
  if (url) {
    window.open(url, "_blank");
  }
};
</script>

<style lang="scss">
.main-layout {
  background-color: #090d16;
}

.header-nav {
  background: rgba(9, 13, 22, 0.82) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  height: 72px;
  display: flex;
  justify-content: center;

  .toolbar-container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;
  }

  .brand-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    gap: 12px;

    .brand-avatar {
      border: 2px solid rgba(99, 102, 241, 0.4);
      box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
    }

    .brand-text {
      .brand-name {
        font-family: "Outfit", sans-serif;
        font-weight: 700;
        font-size: 1.05rem;
        color: #ffffff;
        letter-spacing: -0.01em;
      }
      .brand-subtitle {
        font-size: 0.76rem;
        color: #94a3b8;
        display: flex;
        align-items: center;
        gap: 6px;

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
      }
    }
  }

  .nav-tabs {
    .q-tab {
      margin: 0 3px;
      border-radius: 12px;
      min-height: 40px;
      padding: 0 14px;
      font-weight: 600;
      font-size: 0.88rem;
      color: #94a3b8;
      transition: all 0.25s ease;

      .q-icon {
        font-size: 0.95rem;
        margin-right: 6px;
      }

      &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.05);
      }

      &.q-router-link--exact-active {
        color: #ffffff;
        background: rgba(99, 102, 241, 0.16);
        border: 1px solid rgba(99, 102, 241, 0.35);
        box-shadow: 0 4px 16px rgba(99, 102, 241, 0.2);
      }
    }
  }

  .action-buttons {
    display: flex;
    align-items: center;
    gap: 8px;

    .social-btn {
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.06);
      width: 38px;
      height: 38px;
      transition: all 0.2s ease;

      &:hover {
        color: #ffffff;
        background: rgba(99, 102, 241, 0.18);
        border-color: rgba(99, 102, 241, 0.4);
        transform: translateY(-2px);
      }
    }

    .resume-cta-btn {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: #ffffff;
      font-weight: 600;
      font-size: 0.86rem;
      border-radius: 10px;
      padding: 0 16px;
      height: 38px;
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
      transition: all 0.25s ease;

      &:hover {
        box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
        transform: translateY(-2px);
      }
    }
  }

  .mobile-menu-btn {
    color: #ffffff;
  }
}

.mobile-drawer {
  background: #0d1322 !important;
  border-left: 1px solid rgba(255, 255, 255, 0.08);

  .mobile-nav-list {
    .q-item {
      border-radius: 12px;
      margin-bottom: 6px;
      color: #94a3b8;
      font-weight: 500;

      &.mobile-active {
        color: #ffffff;
        background: rgba(99, 102, 241, 0.16);
        border: 1px solid rgba(99, 102, 241, 0.3);
      }
    }
  }
}

.page-container-glow {
  min-height: 100vh;
  background: radial-gradient(
      circle at 10% 20%,
      rgba(99, 102, 241, 0.08) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 90% 30%,
      rgba(6, 182, 212, 0.08) 0%,
      transparent 45%
    ),
    radial-gradient(
      circle at 50% 80%,
      rgba(16, 185, 129, 0.05) 0%,
      transparent 50%
    ),
    #090d16;
  padding: 24px 16px 60px;
}

.nav-tooltip {
  background: #1e293b;
  color: #f8fafc;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
