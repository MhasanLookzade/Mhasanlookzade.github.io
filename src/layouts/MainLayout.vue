<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="headerLayout" elevated>

    <div >
      <q-tabs
        class="options"
        :breakpoint="0"
        v-model="tab"
        inline-label
      >
        <q-route-tab
          label="About"
          name="about"
          icon="person"
          to="/about"
          exact
        >
          <q-tooltip class="bg-orange text-body3" :offset="[0, 5]">
            About
          </q-tooltip>
        </q-route-tab>

        <q-route-tab
          name="mail"
          label="Education"
          icon="school"
          to="/education"
          exact
        />
        <q-route-tab
          icon="thumb_up"
          to="/Experience"
          label="Experience"
          exact
        />
      </q-tabs>
    </div>

    </q-header>


    <q-page-container class="homePage">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>


import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const tab = ref('about');

    return {
      tab,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
.headerLayout{
  color: orange;
  background-color: #9c27b0;
}
.homePage{
  height: 100vh;
  background-image: url("https://www.stockvault.net/data/2020/09/28/279232/preview16.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
  -webkit-background-size: cover;
  background-size: cover;
}
</style>
