<template>
  <div
    class="fullscreen error-page text-white text-center q-pa-md flex flex-center"
  >
    <div class="glass-panel q-pa-xl text-center error-box">
      <div class="error-code gradient-text">404</div>
      <div class="text-h4 text-weight-bold q-mt-md">Page Not Found</div>
      <p class="text-subtitle1 text-grey-5 q-mt-sm">
        The requested resource or page does not exist or has been moved.
      </p>

      <q-btn
        unelevated
        class="q-mt-lg primary-cta-btn"
        to="/"
        icon="fas fa-house"
        label="Return to Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.error-page {
  background: #090d16;
}

.error-box {
  max-width: 500px;
  width: 90%;
  border-radius: 24px;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  font-family: "Outfit", sans-serif;
}

.primary-cta-btn {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: #ffffff;
  font-weight: 600;
  border-radius: 12px;
  padding: 10px 24px;
}
</style>
