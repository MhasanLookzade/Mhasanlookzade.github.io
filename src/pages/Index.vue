<template>
  <div class="row flex-center q-mx-auto">
    <div class="col-7">
      <div class="row about">
        <h2 class="fullName">
          {{ profile.fullName }}
          <span class="lastname">{{ profile.lastName }}</span>
        </h2>
        <h3 class="title">{{ profile.title }}</h3>
        <h6 class="summary">{{ profile.summary }}</h6>
        <div class="chips">
          <q-icon size="40px" name="person" />
          <q-chip
            v-for="(chip, index) in profile.chips"
            :key="index"
            :color="chip.color"
            :text-color="chip.textColor"
            :label="chip.label"
          />
        </div>
      </div>
    </div>
    <div class="col-2 image">
      <q-img
        loading="eager"
        spinner-color="midnightblue"
        alt="HasanLogo"
        src="~assets/hajHassan/hajhasan.png"
        class="profile-image"
      />
    </div>
  </div>
</template>

<script setup>
import { profileData as profile } from "src/data/profile";
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  .fullName {
    .lastname {
      color: purple;
      margin-left: 20px;
    }
    display: flex;
    align-items: center;
    align-content: center;
    color: midnightblue;
    font-family: cursive;
  }
  .title {
    color: midnightblue;
    font-family: cursive;
  }
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
</style>
