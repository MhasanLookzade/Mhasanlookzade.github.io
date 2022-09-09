<template>
  <div class="row flex-center q-mx-auto">
    <div class="col-7 ">
      <div class="row about">
        <h2 class="fullName">Mohammad Hasan <span class="lastname" >Lookzadeh</span></h2>
        <h3 class="title">Front End Developer</h3>
        <h6 class="summary">
          Talented and experienced front-end developer executing with a A wealth of diverse skills.
          Experience has taught me to take accessibility and
          responsiveness seriously, and I am excited to continue my career
          at Thrive Web Designs with a focus on making sites with Vue.js </h6>
        <div class="chips">
          <q-icon
            size="40px"
            name="person"
          />
          <q-chip
            color="orange"
            text-color="purple"
            label="#motivated"></q-chip>
          <q-chip
            color="orange"
            text-color="purple"
            label="#focusable"></q-chip>
          <q-chip
            color="orange"
            text-color="purple"
            label="#communicative"></q-chip>
          <q-chip
            color="orange"
            text-color="purple"
            label="#hard-working"></q-chip>
        </div>
      </div>
    </div>
    <div class="col-2">
      <img
        alt="HasanLogo"
        src="~assets/hajHasan.svg"
        style="width: 300px; height: 300px;border-radius: 50%"
      />

    </div>

  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "PageIndex",
  created() {
  },

})

</script>

<style lang="scss" scoped>
.about{
  display: flex;
  justify-content: center;
  .fullName{
    .lastname{
      color: purple;
      margin-left: 20px;
    }
    display: flex;
    align-items: center;
    align-content: center;
    color: midnightblue;
    font-family: cursive;
  }
  .title{
    color: midnightblue;
    font-family: cursive;
  }
  .summary{

  }
  .chips{}


}

</style>
