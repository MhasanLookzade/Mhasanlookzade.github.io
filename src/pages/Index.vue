<template>
  <div class="flex flex-center">
    <h1 class="headerTitle"> Hasan <span style="color:orange;">Lookzadeh</span> </h1>
    <img
      alt="HasanLogo"
      src="~assets/hajHasan.svg"
      style="width: 200px; height: 200px;border-radius: 50%"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<style lang="scss">
.headerTitle{
  color: red;
  font-family: cursive;
}

</style>
