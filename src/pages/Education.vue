<template>
  <div class="q-pa-md">
    <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="(education, index) in educations"
        :key="index"
        class="example-item"
      >
        <q-card class="educationCard q-ma-sm">
          <q-carousel
            arrows
            control-color="purple-4"
            color="orange"
            swipeable
            navigation
            animated
            v-model="education.model"
            infinite
            class="eduCarousel bg-amber-8 rounded-borders"
          >
            <q-carousel-slide
              v-for="(src, imgIndex) in education.imageSrcs"
              :key="imgIndex"
              :name="imgIndex"
            >
              <q-img
                class="bg-white rounded-borders"
                height="300px"
                fit="fill"
                loading="lazy"
                :src="src"
              />
            </q-carousel-slide>
          </q-carousel>

          <q-card-section>
            <div class="text-h5 educationInfo">
              <q-img
                height="40px"
                width="40px"
                fit="fill"
                :src="education.svg"
                :alt="education.name"
              />
              <a class="subjectLink" :href="education.url" target="_blank">
                {{ education.name }}
              </a>
            </div>
            <div class="text-h6">{{ education.degree }}</div>
            <div class="text-subtitle1 text-bold">GPA: {{ education.gpa }}</div>
            <div class="text-subtitle2">{{ education.period }}</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { educationData } from "src/data/education";

const educations = ref(
  educationData.map((edu) => ({
    ...edu,
    model: 0,
  }))
);
</script>

<style lang="scss" scoped>
.example-item {
  height: 290px;
  width: 500px;

  .educationCard {
    background-color: #ffd68c;

    :deep(.educationInfo) {
      display: flex;

      .subjectLink {
        padding-left: 4px;
      }
    }
  }
}
</style>
