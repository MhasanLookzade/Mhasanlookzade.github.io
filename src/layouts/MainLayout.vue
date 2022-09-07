<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="homePage" elevated>

      <div class="row headerPhotoContainer">
        <div class="col-2 headerPhoto">
          <img
            alt="HasanLogo"
            src="~assets/hajHasan.svg"
            style="width: 100px; height: 100px;border-radius: 50%"
          />
          <q-btn icon="sun"></q-btn>


        </div>
      </div>

      <q-tabs
        align="center"
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
          icon="mail"
          to="/education"
          exact
        />
        <q-route-tab
          icon="alarm"
          to="/alarms"
          exact
        />
      </q-tabs>

    </q-header>


    <q-page-container>
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
.homePage{
  height: 150px;
  color: orange;
  background-color: #9c27b0;
  .headerPhotoContainer{
    justify-content: end;
    .headerPhoto{
      display: flex;
      justify-content: end;
    }

  }
  .options{
    position: absolute;
    bottom: 0;
    .q-tabs__content{
      justify-content: start;
    }
  }
}

</style>
