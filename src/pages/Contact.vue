<template>
  <div class="contact-page q-mx-auto">
    <!-- Header -->
    <div class="page-header text-center q-mb-xl">
      <div class="modern-badge q-mb-sm">
        <q-icon
          name="fas fa-paper-plane"
          size="13px"
          class="q-mr-xs text-indigo-4"
        />
        Let's Connect
      </div>
      <h2 class="text-h3 text-white text-weight-bold q-my-none">
        Get in <span class="gradient-text">Touch</span>
      </h2>
      <p class="text-subtitle1 text-grey-5 q-mt-sm max-text-width q-mx-auto">
        Feel free to reach out for DevOps opportunities, infrastructure
        consulting, or technical collaborations.
      </p>
    </div>

    <!-- Contact Hub Grid -->
    <div class="row q-col-gutter-xl">
      <!-- Contact Cards -->
      <div class="col-12 col-md-5">
        <div class="contact-info-list flex column gap-md">
          <!-- Email Card -->
          <a
            :href="`mailto:${contact.email}`"
            class="glass-panel contact-card q-pa-lg text-decoration-none"
          >
            <div class="row items-center gap-md">
              <div class="contact-icon-box box-indigo">
                <q-icon
                  name="fas fa-envelope"
                  size="20px"
                  class="text-indigo-4"
                />
              </div>
              <div>
                <div class="c-label text-grey-5">Email Address</div>
                <div class="c-value text-white text-weight-bold">
                  {{ contact.email }}
                </div>
              </div>
            </div>
          </a>

          <!-- Phone Card -->
          <a
            :href="`tel:${contact.phone}`"
            class="glass-panel contact-card q-pa-lg text-decoration-none"
          >
            <div class="row items-center gap-md">
              <div class="contact-icon-box box-emerald">
                <q-icon
                  name="fas fa-phone"
                  size="20px"
                  class="text-emerald-4"
                />
              </div>
              <div>
                <div class="c-label text-grey-5">Phone Number</div>
                <div class="c-value text-white text-weight-bold">
                  {{ contact.phone }}
                </div>
              </div>
            </div>
          </a>

          <!-- Telegram Card -->
          <a
            :href="contact.telegram.url"
            target="_blank"
            class="glass-panel contact-card q-pa-lg text-decoration-none"
          >
            <div class="row items-center gap-md">
              <div class="contact-icon-box box-cyan">
                <q-icon
                  name="fab fa-telegram"
                  size="22px"
                  class="text-cyan-4"
                />
              </div>
              <div>
                <div class="c-label text-grey-5">Telegram Direct</div>
                <div class="c-value text-white text-weight-bold">
                  @{{ contact.telegram.handle }}
                </div>
              </div>
            </div>
          </a>

          <!-- Location Card -->
          <div class="glass-panel contact-card q-pa-lg">
            <div class="row items-center gap-md">
              <div class="contact-icon-box box-red">
                <q-icon
                  name="fas fa-location-dot"
                  size="20px"
                  class="text-red-4"
                />
              </div>
              <div>
                <div class="c-label text-grey-5">Location</div>
                <div class="c-value text-white text-weight-bold">
                  {{ contact.location }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="col-12 col-md-7">
        <div class="glass-panel map-container-box q-pa-sm">
          <q-inner-loading
            :showing="mapLoading"
            label="Loading map..."
            label-class="text-indigo-4"
            style="border-radius: 16px"
          />
          <iframe
            @load="mapLoading = false"
            class="embedded-map"
            :src="contact.mapUrl"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { contactData as contact } from "src/data/contact";

const mapLoading = ref(true);
</script>

<style lang="scss" scoped>
.contact-page {
  max-width: 1150px;
  padding: 20px 16px 60px;
}

.max-text-width {
  max-width: 650px;
}

.gap-md {
  gap: 16px;
}

.contact-card {
  border-radius: 18px;
  transition: all 0.25s ease;
  display: block;

  &:hover {
    border-color: rgba(99, 102, 241, 0.4);
    transform: translateY(-2px);
  }

  .contact-icon-box {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &.box-indigo {
      box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
    }
    &.box-emerald {
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
    }
    &.box-cyan {
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
    }
    &.box-red {
      box-shadow: 0 0 15px rgba(239, 68, 68, 0.2);
    }
  }

  .c-label {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    font-weight: 600;
  }

  .c-value {
    font-size: 1.05rem;
    margin-top: 2px;
    font-family: "Outfit", sans-serif;
  }
}

.map-container-box {
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  min-height: 380px;
  position: relative;

  .embedded-map {
    width: 100%;
    height: 100%;
    min-height: 360px;
    border-radius: 16px;
    border: none;
    filter: invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%);
  }
}
</style>
