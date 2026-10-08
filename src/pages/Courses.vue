<template>
  <div class="courseContainer row">
    <div v-for="(subject, index) in courses" :key="index" class="col-5 q-pl-xl">
      <q-card class="course bg-amber-8">
        <h3 class="justify-center flex q-my-none q-pb-lg">
          <q-avatar class="q-mr-sm">
            <img :src="subject.icon" :alt="subject.name" class="bg-amber-2" />
          </q-avatar>
          {{ subject.name }}
        </h3>
        <div class="row courseChipContainer">
          <div class="col-11 courseChip transparent">
            <q-chip
              v-for="(course, lessonIndex) in subject.lessons"
              :key="lessonIndex"
              class="Kharazmi flex-center"
              :color="course.color"
            >
              <a v-if="course.link" :href="course.link" target="_blank">{{
                course.name
              }}</a>
              <span v-else>{{ course.name }}</span>
            </q-chip>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { coursesData as courses } from "src/data/courses";
</script>

<style scoped lang="scss">
.courseContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  .course {
    border-radius: 40px;
    padding: 24px;
    .courseChipContainer {
      justify-content: center;
      align-items: center;
      display: flex;
    }
  }
}
</style>
