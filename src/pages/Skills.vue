<template>
  <div class="skillPageContainer">
    <div
      v-for="(skill, index) in skills"
      :key="index"
      class="flex q-mt-sm q-ml-lg"
    >
      <q-btn
        class="q-ma-md"
        color="purple"
        label="click to show"
        text-color="amber-3"
        @click="skill.show = !skill.show"
      >
        <span class="q-pl-xs text-amber-8">
          {{ skill.name }}
        </span>
      </q-btn>

      <transition-group
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated bounceOut"
        :duration="1000"
      >
        <q-card
          v-for="(part, partIndex) in skill.included"
          :key="partIndex"
          v-show="skill.show"
          class="bg-amber-8 text-orange-1 skill-bubble"
        >
          {{ part }}
        </q-card>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { skillsData } from "src/data/skills";

const skills = ref(
  skillsData.map((s) => ({
    ...s,
    show: false,
  }))
);
</script>

<style scoped lang="scss">
.skillPageContainer {
  margin-top: 50px;
}

.skill-bubble {
  margin-left: 10px;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
