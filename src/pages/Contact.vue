<template>
  <div class="contactME">
    <q-card class="contactCardContainer bg-orange-4">
      <q-card-section class="contactCard">
        <div class="details">
          <ul
            class="q-pl-md q-pr-sm text-bold"
            style="font-size: 18px; color: purple"
          >
            <li>
              <i class="fas fa-envelope-open mr-2 q-mr-sm"></i>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </li>
            <li>
              <i class="fas fa-mobile-alt mr-2 q-mr-sm"></i>
              <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
            </li>
            <li>
              <i class="fa-brands fa-telegram q-mr-sm"></i>
              <a :href="contact.telegram.url" target="_blank">{{
                contact.telegram.handle
              }}</a>
            </li>
            <li>
              <i class="fas fa-map-marker-alt mr-2 q-mr-sm"></i>
              <span class="text-blue-9">{{ contact.location }}</span>
            </li>
          </ul>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="googleMapContainer">
          <q-inner-loading
            style="border-radius: 45px"
            :showing="mapLoading"
            label="Please wait..."
            label-class="text-teal"
            label-style="font-size: 1.1em"
          />
          <iframe
            @load="onMapLoaded"
            class="google"
            :src="contact.mapUrl"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { contactData as contact } from "src/data/contact";

const mapLoading = ref(true);

const onMapLoaded = () => {
  mapLoading.value = false;
};
</script>

<style scoped lang="scss">
.contactME {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .contactCardContainer {
    width: 50%;
    border-radius: 45px;
    .contactCard {
      padding: 0;
      .details {
        display: grid;
        justify-content: center;
      }
    }
  }
  .googleMapContainer {
    display: flex;
    justify-content: center;

    .google {
      border-radius: 15px;
      height: 300px;
      width: 80%;
    }
  }
}
</style>
